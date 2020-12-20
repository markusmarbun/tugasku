/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
"use strict";exports.injectNodeModuleLookupPath=function(e){if(!e)throw new Error("Missing injectPath");const r=require("module"),o=require("path").join(__dirname,"../node_modules"),n=r._resolveLookupPaths;r._resolveLookupPaths=function(r,t){const s=n(r,t);if(Array.isArray(s))for(let r=0,n=s.length;r<n;r++)if(s[r]===o){s.splice(r,0,e);break}return s}},exports.removeGlobalNodeModuleLookupPaths=function(){const e=require("module"),r=e.globalPaths,o=e._resolveLookupPaths;e._resolveLookupPaths=function(e,n){const t=o(e,n);let s=0;for(;s<t.length&&t[t.length-1-s]===r[r.length-1-s];)s++;return t.slice(0,t.length-s)}},exports.configurePortable=function(e){const r=require("fs"),o=require("path"),n=o.dirname(__dirname);function t(e){return process.env.VSCODE_DEV?n:"darwin"===process.platform?e.dirname(e.dirname(e.dirname(n))):e.dirname(e.dirname(n))}const s=function(r){if(process.env.VSCODE_PORTABLE)return process.env.VSCODE_PORTABLE;if("win32"===process.platform||"linux"===process.platform)return r.join(t(r),"data")
;const o=e.portable||`${e.applicationName}-portable-data`;return r.join(r.dirname(t(r)),o)}(o),i=!("target"in e)&&r.existsSync(s),a=o.join(s,"tmp"),c=i&&r.existsSync(a);return i?process.env.VSCODE_PORTABLE=s:delete process.env.VSCODE_PORTABLE,c&&("win32"===process.platform?(process.env.TMP=a,process.env.TEMP=a):process.env.TMPDIR=a),{portableDataPath:s,isPortable:i}};
//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/ea3859d4ba2f3e577a159bc91e3074c5d85c0523/core/bootstrap-node.js.map