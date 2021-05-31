import { Component } from "preact";
import FileExplorer from "./FileExplorer";
import ExtensionDetails from "./ExtensionDetails";
import { createInspector, Inspector } from "../inspector/Inspector";

type Props = {
    extId: string;
};

type State = {
    inspector?: Inspector;
    status?: string;
};

export default class Analyzer extends Component<Props, State> {
    public constructor(props: Props) {
        super(props);
        this.state = {
            status: "loading",
        };

        createInspector(props.extId, (status) => {
            this.setState({ status });
        }).then((inspector) => {
            this.setState({ inspector });
        });
    }

    public render() {
        const state = this.state;
        return (
            <div>
                <h2>Extension Inspector</h2>
                {state.inspector ? (
                    <>
                        <ExtensionDetails inspector={state.inspector} />
                        <FileExplorer path="" inspector={state.inspector} />
                    </>
                ) : null}
                {state.status ? <div class="status">{state.status}</div> : null}
            </div>
        );
    }
}