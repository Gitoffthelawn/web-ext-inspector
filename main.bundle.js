(()=>{var e={562:(e,t,n)=>{"use strict";n.d(t,{Z:()=>m});var r=n(645),i=n.n(r),o=n(667),l=n.n(o),s=n(157),a=n.n(s),c=n(260),u=n.n(c),_=n(345),d=n.n(_),p=i()((function(e){return e[1]})),f=l()(a()),h=l()(u()),v=l()(d());p.push([e.id,'.ui-box {\n  padding: 10px;\n  background-color: #303030;\n  box-shadow: inset 0px 0px 0px 1px #404040;\n}\nbody {\n  font-family: sans-serif;\n  background-color: #202020;\n  color: white;\n}\n.file-explorer {\n  padding: 10px;\n  background-color: #303030;\n  box-shadow: inset 0px 0px 0px 1px #404040;\n}\n.file-explorer ul {\n  list-style: none;\n  margin: 0px;\n}\n.file-explorer ul li {\n  margin-bottom: 5px;\n  margin-top: 5px;\n}\n.file-explorer ul li::before {\n  content: " ";\n  display: inline-block;\n  width: 16px;\n  height: 16px;\n  background-image: url('+f+");\n  margin-right: 10px;\n}\n.file-explorer ul li.folder::before {\n  background-image: url("+h+");\n}\n.file-explorer ul li.code::before {\n  background-image: url("+v+");\n}\n.file-explorer > ul {\n  padding: 0;\n  padding-left: 5px;\n}\n",""]);const m=p},645:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var i={};if(r)for(var o=0;o<this.length;o++){var l=this[o][0];null!=l&&(i[l]=!0)}for(var s=0;s<e.length;s++){var a=[].concat(e[s]);r&&i[a[0]]||(n&&(a[2]?a[2]="".concat(n," and ").concat(a[2]):a[2]=n),t.push(a))}},t}},667:e=>{"use strict";e.exports=function(e,t){return t||(t={}),"string"!=typeof(e=e&&e.__esModule?e.default:e)?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e)}},600:e=>{"use strict";const t=["B","kB","MB","GB","TB","PB","EB","ZB","YB"],n=["B","kiB","MiB","GiB","TiB","PiB","EiB","ZiB","YiB"],r=["b","kbit","Mbit","Gbit","Tbit","Pbit","Ebit","Zbit","Ybit"],i=["b","kibit","Mibit","Gibit","Tibit","Pibit","Eibit","Zibit","Yibit"],o=(e,t,n)=>{let r=e;return"string"==typeof t||Array.isArray(t)?r=e.toLocaleString(t,n):!0!==t&&void 0===n||(r=e.toLocaleString(void 0,n)),r};e.exports=(e,l)=>{if(!Number.isFinite(e))throw new TypeError(`Expected a finite number, got ${typeof e}: ${e}`);const s=(l=Object.assign({bits:!1,binary:!1},l)).bits?l.binary?i:r:l.binary?n:t;if(l.signed&&0===e)return` 0 ${s[0]}`;const a=e<0,c=a?"-":l.signed?"+":"";let u;if(a&&(e=-e),void 0!==l.minimumFractionDigits&&(u={minimumFractionDigits:l.minimumFractionDigits}),void 0!==l.maximumFractionDigits&&(u=Object.assign({maximumFractionDigits:l.maximumFractionDigits},u)),e<1)return c+o(e,l.locale,u)+" "+s[0];const _=Math.min(Math.floor(l.binary?Math.log(e)/Math.log(1024):Math.log10(e)/3),s.length-1);return e/=Math.pow(l.binary?1024:1e3,_),u||(e=e.toPrecision(3)),c+o(Number(e),l.locale,u)+" "+s[_]}},379:(e,t,n)=>{"use strict";var r,i=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),o=[];function l(e){for(var t=-1,n=0;n<o.length;n++)if(o[n].identifier===e){t=n;break}return t}function s(e,t){for(var n={},r=[],i=0;i<e.length;i++){var s=e[i],a=t.base?s[0]+t.base:s[0],c=n[a]||0,u="".concat(a," ").concat(c);n[a]=c+1;var _=l(u),d={css:s[1],media:s[2],sourceMap:s[3]};-1!==_?(o[_].references++,o[_].updater(d)):o.push({identifier:u,updater:h(d,t),references:1}),r.push(u)}return r}function a(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var o=n.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var l=i(e.insert||"head");if(!l)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");l.appendChild(t)}return t}var c,u=(c=[],function(e,t){return c[e]=t,c.filter(Boolean).join("\n")});function _(e,t,n,r){var i=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=u(t,i);else{var o=document.createTextNode(i),l=e.childNodes;l[t]&&e.removeChild(l[t]),l.length?e.insertBefore(o,l[t]):e.appendChild(o)}}function d(e,t,n){var r=n.css,i=n.media,o=n.sourceMap;if(i?e.setAttribute("media",i):e.removeAttribute("media"),o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var p=null,f=0;function h(e,t){var n,r,i;if(t.singleton){var o=f++;n=p||(p=a(t)),r=_.bind(null,n,o,!1),i=_.bind(null,n,o,!0)}else n=a(t),r=d.bind(null,n,t),i=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else i()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var n=s(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var i=l(n[r]);o[i].references--}for(var a=s(e,t),c=0;c<n.length;c++){var u=l(n[c]);0===o[u].references&&(o[u].updater(),o.splice(u,1))}n=a}}}},345:e=>{e.exports="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='white' class='bi bi-file-code' viewBox='0 0 16 16'%3e %3cpath d='M6.646 5.646a.5.5 0 1 1 .708.708L5.707 8l1.647 1.646a.5.5 0 0 1-.708.708l-2-2a.5.5 0 0 1 0-.708l2-2zm2.708 0a.5.5 0 1 0-.708.708L10.293 8 8.646 9.646a.5.5 0 0 0 .708.708l2-2a.5.5 0 0 0 0-.708l-2-2z'/%3e %3cpath d='M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm10-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z'/%3e %3c/svg%3e"},157:e=>{e.exports="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='white' class='bi bi-file' viewBox='0 0 16 16'%3e %3cpath d='M4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4zm0 1h8a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1z'/%3e %3c/svg%3e"},260:e=>{e.exports="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='white' class='bi bi-folder2' viewBox='0 0 16 16'%3e %3cpath d='M1 3.5A1.5 1.5 0 0 1 2.5 2h2.764c.958 0 1.76.56 2.311 1.184C7.985 3.648 8.48 4 9 4h4.5A1.5 1.5 0 0 1 15 5.5v7a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 1 12.5v-9zM2.5 3a.5.5 0 0 0-.5.5V6h12v-.5a.5.5 0 0 0-.5-.5H9c-.964 0-1.71-.629-2.174-1.154C6.374 3.334 5.82 3 5.264 3H2.5zM14 7H2v5.5a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 .5-.5V7z'/%3e %3c/svg%3e"}},t={};function n(r){var i=t[r];if(void 0!==i)return i.exports;var o=t[r]={id:r,exports:{}};return e[r](o,o.exports,n),o.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";var e,t,r,i,o={},l=[],s=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function a(e,t){for(var n in t)e[n]=t[n];return e}function c(e){var t=e.parentNode;t&&t.removeChild(e)}function u(t,n,r,i,o){var l={type:t,props:n,key:r,ref:i,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==o?++e.__v:o};return null!=e.vnode&&e.vnode(l),l}function _(e){return e.children}function d(e,t){this.props=e,this.context=t}function p(e,t){if(null==t)return e.__?p(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e)return n.__e;return"function"==typeof e.type?p(e):null}function f(e){var t,n;if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e){e.__e=e.__c.base=n.__e;break}return f(e)}}function h(n){(!n.__d&&(n.__d=!0)&&t.push(n)&&!v.__r++||i!==e.debounceRendering)&&((i=e.debounceRendering)||r)(v)}function v(){for(var e;v.__r=t.length;)e=t.sort((function(e,t){return e.__v.__b-t.__v.__b})),t=[],e.some((function(e){var t,n,r,i,o,l;e.__d&&(o=(i=(t=e).__v).__e,(l=t.__P)&&(n=[],(r=a({},i)).__v=i.__v+1,S(l,i,r,t.__n,void 0!==l.ownerSVGElement,null!=i.__h?[o]:null,n,null==o?p(i):o,i.__h),E(n,i),i.__e!=o&&f(i)))}))}function m(e,t,n,r,i,s,a,c,d,f){var h,v,m,b,x,k,w,E=r&&r.__k||l,M=E.length;for(n.__k=[],h=0;h<t.length;h++)if(null!=(b=n.__k[h]=null==(b=t[h])||"boolean"==typeof b?null:"string"==typeof b||"number"==typeof b||"bigint"==typeof b?u(null,b,null,null,b):Array.isArray(b)?u(_,{children:b},null,null,null):b.__b>0?u(b.type,b.props,b.key,null,b.__v):b)){if(b.__=n,b.__b=n.__b+1,null===(m=E[h])||m&&b.key==m.key&&b.type===m.type)E[h]=void 0;else for(v=0;v<M;v++){if((m=E[v])&&b.key==m.key&&b.type===m.type){E[v]=void 0;break}m=null}S(e,b,m=m||o,i,s,a,c,d,f),x=b.__e,(v=b.ref)&&m.ref!=v&&(w||(w=[]),m.ref&&w.push(m.ref,null,b),w.push(v,b.__c||x,b)),null!=x?(null==k&&(k=x),"function"==typeof b.type&&null!=b.__k&&b.__k===m.__k?b.__d=d=g(b,d,e):d=y(e,b,m,E,x,d),f||"option"!==n.type?"function"==typeof n.type&&(n.__d=d):e.value=""):d&&m.__e==d&&d.parentNode!=e&&(d=p(m))}for(n.__e=k,h=M;h--;)null!=E[h]&&("function"==typeof n.type&&null!=E[h].__e&&E[h].__e==n.__d&&(n.__d=p(r,h+1)),P(E[h],E[h]));if(w)for(h=0;h<w.length;h++)C(w[h],w[++h],w[++h])}function g(e,t,n){var r,i;for(r=0;r<e.__k.length;r++)(i=e.__k[r])&&(i.__=e,t="function"==typeof i.type?g(i,t,n):y(n,i,i,e.__k,i.__e,t));return t}function y(e,t,n,r,i,o){var l,s,a;if(void 0!==t.__d)l=t.__d,t.__d=void 0;else if(null==n||i!=o||null==i.parentNode)e:if(null==o||o.parentNode!==e)e.appendChild(i),l=null;else{for(s=o,a=0;(s=s.nextSibling)&&a<r.length;a+=2)if(s==i)break e;e.insertBefore(i,o),l=o}return void 0!==l?l:i.nextSibling}function b(e,t,n){"-"===t[0]?e.setProperty(t,n):e[t]=null==n?"":"number"!=typeof n||s.test(t)?n:n+"px"}function x(e,t,n,r,i){var o;e:if("style"===t)if("string"==typeof n)e.style.cssText=n;else{if("string"==typeof r&&(e.style.cssText=r=""),r)for(t in r)n&&t in n||b(e.style,t,"");if(n)for(t in n)r&&n[t]===r[t]||b(e.style,t,n[t])}else if("o"===t[0]&&"n"===t[1])o=t!==(t=t.replace(/Capture$/,"")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+o]=n,n?r||e.addEventListener(t,o?w:k,o):e.removeEventListener(t,o?w:k,o);else if("dangerouslySetInnerHTML"!==t){if(i)t=t.replace(/xlink[H:h]/,"h").replace(/sName$/,"s");else if("href"!==t&&"list"!==t&&"form"!==t&&"tabIndex"!==t&&"download"!==t&&t in e)try{e[t]=null==n?"":n;break e}catch(e){}"function"==typeof n||(null!=n&&(!1!==n||"a"===t[0]&&"r"===t[1])?e.setAttribute(t,n):e.removeAttribute(t))}}function k(t){this.l[t.type+!1](e.event?e.event(t):t)}function w(t){this.l[t.type+!0](e.event?e.event(t):t)}function S(t,n,r,i,o,l,s,c,u){var p,f,h,v,g,y,b,x,k,w,S,E=n.type;if(void 0!==n.constructor)return null;null!=r.__h&&(u=r.__h,c=n.__e=r.__e,n.__h=null,l=[c]),(p=e.__b)&&p(n);try{e:if("function"==typeof E){if(x=n.props,k=(p=E.contextType)&&i[p.__c],w=p?k?k.props.value:p.__:i,r.__c?b=(f=n.__c=r.__c).__=f.__E:("prototype"in E&&E.prototype.render?n.__c=f=new E(x,w):(n.__c=f=new d(x,w),f.constructor=E,f.render=T),k&&k.sub(f),f.props=x,f.state||(f.state={}),f.context=w,f.__n=i,h=f.__d=!0,f.__h=[]),null==f.__s&&(f.__s=f.state),null!=E.getDerivedStateFromProps&&(f.__s==f.state&&(f.__s=a({},f.__s)),a(f.__s,E.getDerivedStateFromProps(x,f.__s))),v=f.props,g=f.state,h)null==E.getDerivedStateFromProps&&null!=f.componentWillMount&&f.componentWillMount(),null!=f.componentDidMount&&f.__h.push(f.componentDidMount);else{if(null==E.getDerivedStateFromProps&&x!==v&&null!=f.componentWillReceiveProps&&f.componentWillReceiveProps(x,w),!f.__e&&null!=f.shouldComponentUpdate&&!1===f.shouldComponentUpdate(x,f.__s,w)||n.__v===r.__v){f.props=x,f.state=f.__s,n.__v!==r.__v&&(f.__d=!1),f.__v=n,n.__e=r.__e,n.__k=r.__k,n.__k.forEach((function(e){e&&(e.__=n)})),f.__h.length&&s.push(f);break e}null!=f.componentWillUpdate&&f.componentWillUpdate(x,f.__s,w),null!=f.componentDidUpdate&&f.__h.push((function(){f.componentDidUpdate(v,g,y)}))}f.context=w,f.props=x,f.state=f.__s,(p=e.__r)&&p(n),f.__d=!1,f.__v=n,f.__P=t,p=f.render(f.props,f.state,f.context),f.state=f.__s,null!=f.getChildContext&&(i=a(a({},i),f.getChildContext())),h||null==f.getSnapshotBeforeUpdate||(y=f.getSnapshotBeforeUpdate(v,g)),S=null!=p&&p.type===_&&null==p.key?p.props.children:p,m(t,Array.isArray(S)?S:[S],n,r,i,o,l,s,c,u),f.base=n.__e,n.__h=null,f.__h.length&&s.push(f),b&&(f.__E=f.__=null),f.__e=!1}else null==l&&n.__v===r.__v?(n.__k=r.__k,n.__e=r.__e):n.__e=M(r.__e,n,r,i,o,l,s,u);(p=e.diffed)&&p(n)}catch(t){n.__v=null,(u||null!=l)&&(n.__e=c,n.__h=!!u,l[l.indexOf(c)]=null),e.__e(t,n,r)}}function E(t,n){e.__c&&e.__c(n,t),t.some((function(n){try{t=n.__h,n.__h=[],t.some((function(e){e.call(n)}))}catch(t){e.__e(t,n.__v)}}))}function M(e,t,n,r,i,s,a,u){var _,d,p,f,h=n.props,v=t.props,g=t.type,y=0;if("svg"===g&&(i=!0),null!=s)for(;y<s.length;y++)if((_=s[y])&&(_===e||(g?_.localName==g:3==_.nodeType))){e=_,s[y]=null;break}if(null==e){if(null===g)return document.createTextNode(v);e=i?document.createElementNS("http://www.w3.org/2000/svg",g):document.createElement(g,v.is&&v),s=null,u=!1}if(null===g)h===v||u&&e.data===v||(e.data=v);else{if(s=s&&l.slice.call(e.childNodes),d=(h=n.props||o).dangerouslySetInnerHTML,p=v.dangerouslySetInnerHTML,!u){if(null!=s)for(h={},f=0;f<e.attributes.length;f++)h[e.attributes[f].name]=e.attributes[f].value;(p||d)&&(p&&(d&&p.__html==d.__html||p.__html===e.innerHTML)||(e.innerHTML=p&&p.__html||""))}if(function(e,t,n,r,i){var o;for(o in n)"children"===o||"key"===o||o in t||x(e,o,null,n[o],r);for(o in t)i&&"function"!=typeof t[o]||"children"===o||"key"===o||"value"===o||"checked"===o||n[o]===t[o]||x(e,o,t[o],n[o],r)}(e,v,h,i,u),p)t.__k=[];else if(y=t.props.children,m(e,Array.isArray(y)?y:[y],t,n,r,i&&"foreignObject"!==g,s,a,e.firstChild,u),null!=s)for(y=s.length;y--;)null!=s[y]&&c(s[y]);u||("value"in v&&void 0!==(y=v.value)&&(y!==e.value||"progress"===g&&!y)&&x(e,"value",y,h.value,!1),"checked"in v&&void 0!==(y=v.checked)&&y!==e.checked&&x(e,"checked",y,h.checked,!1))}return e}function C(t,n,r){try{"function"==typeof t?t(n):t.current=n}catch(t){e.__e(t,r)}}function P(t,n,r){var i,o,l;if(e.unmount&&e.unmount(t),(i=t.ref)&&(i.current&&i.current!==t.__e||C(i,null,n)),r||"function"==typeof t.type||(r=null!=(o=t.__e)),t.__e=t.__d=void 0,null!=(i=t.__c)){if(i.componentWillUnmount)try{i.componentWillUnmount()}catch(t){e.__e(t,n)}i.base=i.__P=null}if(i=t.__k)for(l=0;l<i.length;l++)i[l]&&P(i[l],n,r);null!=o&&c(o)}function T(e,t,n){return this.constructor(e,n)}function A(t,n,r,i,o){var l={};for(var s in n)"ref"!=s&&(l[s]=n[s]);var a,c,u={type:t,props:l,key:r,ref:n&&n.ref,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:++e.__v,__source:i,__self:o};if("function"==typeof t&&(a=t.defaultProps))for(c in a)void 0===l[c]&&(l[c]=a[c]);return e.vnode&&e.vnode(u),u}e={__e:function(e,t){for(var n,r,i;t=t.__;)if((n=t.__c)&&!n.__)try{if((r=n.constructor)&&null!=r.getDerivedStateFromError&&(n.setState(r.getDerivedStateFromError(e)),i=n.__d),null!=n.componentDidCatch&&(n.componentDidCatch(e),i=n.__d),i)return n.__E=n}catch(t){e=t}throw e},__v:0},d.prototype.setState=function(e,t){var n;n=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=a({},this.state),"function"==typeof e&&(e=e(a({},n),this.props)),e&&a(n,e),null!=e&&this.__v&&(t&&this.__h.push(t),h(this))},d.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),h(this))},d.prototype.render=_,t=[],r="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,v.__r=0;class j extends d{constructor(e){super(e),this.data=new Map;const t=e.path??"";e.inspector.listDirectoryContents(t).then((e=>{this.data.set(t,e),this.forceUpdate()}))}render(){return A("div",Object.assign({class:"file-explorer"},{children:A(L,{path:this.props.path??"",data:this.data},void 0)}),void 0)}}class L extends d{render(){const e=this.props.data.get(this.props.path);return e?A("ul",{children:e.map((e=>{return"file"===e.type?A("li",Object.assign({class:(t=e.name,/\.(js|jsx|json)$/i.test(t)?"file code":"file")},{children:e.name}),void 0):A("li",Object.assign({class:"folder"},{children:[e.name,A(L,{path:this.props.path+"/"+e.name,data:this.props.data},void 0)]}),void 0);var t}))},void 0):null}}var N=n(600),O=n.n(N);class B extends d{constructor(e){super(e),e.inspector.getDetails().then((e=>this.setState({details:e})))}render(){const e=this.state.details;if(void 0===e)return A("div",{children:"loading details..."},void 0);const t=e.current_version.files.filter((e=>e.is_webextension))[0];return A("div",{children:A("table",{children:A("tbody",{children:[A("tr",{children:[A("td",{children:"Name"},void 0),A("td",{children:e.name["en-US"]},void 0)]},void 0),A("tr",{children:[A("td",{children:"Icon"},void 0),A("td",{children:A("img",{src:e.icon_url,alt:"extension icon"},void 0)},void 0)]},void 0),A("tr",{children:[A("td",{children:"Slug"},void 0),A("td",{children:e.slug},void 0)]},void 0),A("tr",{children:[A("td",{children:"Version"},void 0),A("td",{children:e.current_version.version},void 0)]},void 0),A("tr",{children:[A("td",{children:"Size"},void 0),A("td",{children:O()(t.size)},void 0)]},void 0)]},void 0)},void 0)},void 0)}}const D=Symbol("Comlink.proxy"),H=Symbol("Comlink.endpoint"),z=Symbol("Comlink.releaseProxy"),I=Symbol("Comlink.thrown"),R=e=>"object"==typeof e&&null!==e||"function"==typeof e,U=new Map([["proxy",{canHandle:e=>R(e)&&e[D],serialize(e){const{port1:t,port2:n}=new MessageChannel;return F(e,t),[n,[n]]},deserialize:e=>(e.start(),G(e))}],["throw",{canHandle:e=>R(e)&&I in e,serialize({value:e}){let t;return t=e instanceof Error?{isError:!0,value:{message:e.message,name:e.name,stack:e.stack}}:{isError:!1,value:e},[t,[]]},deserialize(e){if(e.isError)throw Object.assign(new Error(e.value.message),e.value);throw e.value}}]]);function F(e,t=self){t.addEventListener("message",(function n(r){if(!r||!r.data)return;const{id:i,type:o,path:l}=Object.assign({path:[]},r.data),s=(r.data.argumentList||[]).map(Q);let a;try{const t=l.slice(0,-1).reduce(((e,t)=>e[t]),e),n=l.reduce(((e,t)=>e[t]),e);switch(o){case"GET":a=n;break;case"SET":t[l.slice(-1)[0]]=Q(r.data.value),a=!0;break;case"APPLY":a=n.apply(t,s);break;case"CONSTRUCT":a=q(new n(...s));break;case"ENDPOINT":{const{port1:t,port2:n}=new MessageChannel;F(e,n),a=function(e,t){return Y.set(e,t),e}(t,[t])}break;case"RELEASE":a=void 0;break;default:return}}catch(e){a={value:e,[I]:0}}Promise.resolve(a).catch((e=>({value:e,[I]:0}))).then((e=>{const[r,l]=J(e);t.postMessage(Object.assign(Object.assign({},r),{id:i}),l),"RELEASE"===o&&(t.removeEventListener("message",n),W(t))}))})),t.start&&t.start()}function W(e){(function(e){return"MessagePort"===e.constructor.name})(e)&&e.close()}function G(e,t){return $(e,[],t)}function V(e){if(e)throw new Error("Proxy has been released and is not useable")}function $(e,t=[],n=function(){}){let r=!1;const i=new Proxy(n,{get(n,o){if(V(r),o===z)return()=>X(e,{type:"RELEASE",path:t.map((e=>e.toString()))}).then((()=>{W(e),r=!0}));if("then"===o){if(0===t.length)return{then:()=>i};const n=X(e,{type:"GET",path:t.map((e=>e.toString()))}).then(Q);return n.then.bind(n)}return $(e,[...t,o])},set(n,i,o){V(r);const[l,s]=J(o);return X(e,{type:"SET",path:[...t,i].map((e=>e.toString())),value:l},s).then(Q)},apply(n,i,o){V(r);const l=t[t.length-1];if(l===H)return X(e,{type:"ENDPOINT"}).then(Q);if("bind"===l)return $(e,t.slice(0,-1));const[s,a]=Z(o);return X(e,{type:"APPLY",path:t.map((e=>e.toString())),argumentList:s},a).then(Q)},construct(n,i){V(r);const[o,l]=Z(i);return X(e,{type:"CONSTRUCT",path:t.map((e=>e.toString())),argumentList:o},l).then(Q)}});return i}function Z(e){const t=e.map(J);return[t.map((e=>e[0])),(n=t.map((e=>e[1])),Array.prototype.concat.apply([],n))];var n}const Y=new WeakMap;function q(e){return Object.assign(e,{[D]:!0})}function J(e){for(const[t,n]of U)if(n.canHandle(e)){const[r,i]=n.serialize(e);return[{type:"HANDLER",name:t,value:r},i]}return[{type:"RAW",value:e},Y.get(e)||[]]}function Q(e){switch(e.type){case"HANDLER":return U.get(e.name).deserialize(e.value);case"RAW":return e.value}}function X(e,t,n){return new Promise((r=>{const i=new Array(4).fill(0).map((()=>Math.floor(Math.random()*Number.MAX_SAFE_INTEGER).toString(16))).join("-");e.addEventListener("message",(function t(n){n.data&&n.data.id&&n.data.id===i&&(e.removeEventListener("message",t),r(n.data))})),e.start&&e.start(),e.postMessage(Object.assign({id:i},t),n)}))}class K extends d{constructor(e){super(e);const t=function(e){const t=G(new Worker("worker.bundle.js",{name:"ExtensionWorker"}));return t.load(e),t}(e.extId);this.state={inspector:t,readyState:"downloading"},t.onReadyStateChange(q((e=>{this.setState({readyState:e})})))}render(){const e=this.state;return A("div",{children:[A("h2",{children:"Extension Inspector"},void 0),"loading-details"!==e.readyState?A(B,{inspector:e.inspector},void 0):null,"ready"===e.readyState?A(j,{path:"",inspector:e.inspector},void 0):A("div",Object.assign({class:"readyState"},{children:e.readyState}),void 0)]},void 0)}}class ee extends d{constructor(){super(...arguments),this.state={extension:""}}render(){const e=this.state.extension;return A("form",Object.assign({onSubmit:this.onSubmit.bind(this)},{children:[A("label",Object.assign({for:"extension-slug"},{children:"Extension slug"}),void 0),A("input",{id:"extension-slug",type:"text",value:e,placeholder:"tabs-aside",onInput:this.onInput.bind(this)},void 0),e.trim().length>0?A("button",Object.assign({type:"submit"},{children:"Analyze"}),void 0):null]}),void 0)}onInput(e){const t=e.target;this.setState({extension:t.value})}onSubmit(e){e.preventDefault();const t=this.state.extension.trim();t&&this.props.onSelect(t)}}var te=n(379),ne=n.n(te),re=n(562);ne()(re.Z,{insert:"head",singleton:!1}),re.Z.locals,function(t,n,r){var i,s,a;e.__&&e.__(t,n),s=(i="function"==typeof r)?null:r&&r.__k||n.__k,a=[],S(n,t=(!i&&r||n).__k=function(e,t,n){var r,i,o,l=arguments,s={};for(o in t)"key"==o?r=t[o]:"ref"==o?i=t[o]:s[o]=t[o];if(arguments.length>3)for(n=[n],o=3;o<arguments.length;o++)n.push(l[o]);if(null!=n&&(s.children=n),"function"==typeof e&&null!=e.defaultProps)for(o in e.defaultProps)void 0===s[o]&&(s[o]=e.defaultProps[o]);return u(e,s,r,i,null)}(_,null,[t]),s||o,o,void 0!==n.ownerSVGElement,!i&&r?[r]:s?null:n.firstChild?l.slice.call(n.childNodes):null,a,!i&&r?r:s?s.__e:n.firstChild,i),E(a,t)}(A(class extends d{render(){const e=this.state.extension;return e?A(K,{extId:e},void 0):A(ee,{onSelect:e=>this.setState({extension:e})},void 0)}},{},void 0),document.body)})()})();