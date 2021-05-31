import { Manifest } from "../../../types/Manifest";
import { cleanPath, getFolder, joinPaths } from "../../../utils/paths";
import { TreeFile, TreeFolder, TreeNode } from "../FileTree";
import * as zip from "@zip.js/zip.js";
import { extractScripts } from "../../../utils/html";

export async function getBackgroundScripts(
    root: TreeFolder,
    manifest: Manifest,
    tagFiles: boolean = false
): Promise<TreeFile[]> {
    if (!manifest.background) {
        return [];
    }

    let scripts: TreeFile[] = [];
    let moduleScripts: TreeFile[] = [];

    if (manifest.background.scripts) {
        scripts = manifest.background.scripts
            .map((path) => root.get(cleanPath(path)))
            .filter(isFile);
    } else if (manifest.background.page) {
        const pagePath = cleanPath(manifest.background.page);
        const basePath = getFolder(pagePath);
        const htmlNode = root.get(pagePath);
        if (!isFile(htmlNode)) {
            return [];
        }
        htmlNode.addTag("background");

        const htmlString = await htmlNode.entry.getData!(new zip.TextWriter());

        scripts = extractScripts(htmlString)
            .filter((script) => script.type !== "module")
            .map((script) => root.get(joinPaths(basePath, script.src)))
            .filter(isFile);

        moduleScripts = extractScripts(htmlString)
            .filter((script) => script.type === "module")
            .map((script) => root.get(joinPaths(basePath, script.src)))
            .filter(isFile);
    } else {
        throw new Error("Unsupported background scripts.");
    }

    const allScripts = scripts.concat(moduleScripts);

    if (tagFiles) {
        allScripts.forEach((file) => file.addTag("background"));
        moduleScripts.forEach((file) => file.addTag("module"));
    }

    return allScripts;
}

export function getContentScripts(
    root: TreeFolder,
    manifest: Manifest
): TreeFile[] {
    if (!manifest.content_scripts) {
        return [];
    }

    return manifest.content_scripts
        .flatMap((cs) => cs.js ?? [])
        .map((path) => root.get(cleanPath(path)))
        .filter(isFile);
}

export function getUserScriptAPI(
    root: TreeFolder,
    manifest: Manifest
): TreeFile | undefined {
    if (manifest.user_scripts && manifest.user_scripts.api_script) {
        const node = root.get(cleanPath(manifest.user_scripts.api_script));
        if (isFile(node)) {
            return node;
        }
    }
}

const isFile = function (node: TreeNode | undefined): node is TreeFile {
    return node !== undefined && node instanceof TreeFile;
};