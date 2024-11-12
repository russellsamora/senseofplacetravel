import{a5 as b,a6 as z,a7 as q,a8 as G,a9 as T,aa as J,ab as Q,k as c,ac as W,N as X,ad as R,ae as j,af as Z,ag as F,ah as V,ai as B,aj as ee,ak as te,al as re,M as ae,am as ne,an as k,O as N,$ as se,A as ie,K as ue,ao as L,j as oe,ap as le,aq as fe,ar as D,C as w,m as Y,o as ce,c as y,as as de,at as _e,au as pe,av as he,aw as ve,ax as be,i as ye,a as ge,e as Ee,h as S,p as we,a0 as me,n as I,J as Te,ay as ke,x as Ne}from"./runtime.CrKjlpz6.js";import{d as Ae}from"./disclose-version.CFzc6ToK.js";function H(e){return{f:0,v:e,reactions:null,equals:re,version:0}}function je(e){return Re(H(e))}function De(e,t=!1){const a=H(e);return t||(a.equals=ae),a}function Re(e){return b!==null&&b.f&q&&(T===null?ne([e]):T.push(e)),e}function Le(e,t){return b!==null&&z()&&b.f&(q|G)&&(T===null||!T.includes(e))&&J(),Se(e,t)}function Se(e,t){return e.equals(t)||(e.v=t,e.version=Q(),$(e,R),c!==null&&c.f&W&&!(c.f&X)&&(V!==null&&V.includes(e)?(j(c,R),F(c)):B===null?ee([e]):B.push(e))),t}function $(e,t){var a=e.reactions;if(a!==null)for(var n=a.length,s=0;s<n;s++){var r=a[s],o=r.f;o&R||(j(r,t),o&(W|Z)&&(o&q?$(r,te):F(r)))}}function Ie(e){var t=b,a=c;k(null),N(null);try{return e()}finally{k(t),N(a)}}const x=new Set,O=new Set;function Fe(e,t,a,n){function s(r){if(n.capture||g.call(t,r),!r.cancelBubble)return Ie(()=>a.call(this,r))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?ue(()=>{t.addEventListener(e,s,n)}):t.addEventListener(e,s,n),s}function He(e){for(var t=0;t<e.length;t++)x.add(e[t]);for(var a of O)a(e)}function g(e){var M;var t=this,a=t.ownerDocument,n=e.type,s=((M=e.composedPath)==null?void 0:M.call(e))||[],r=s[0]||e.target,o=0,h=e.__root;if(h){var d=s.indexOf(h);if(d!==-1&&(t===document||t===window)){e.__root=t;return}var _=s.indexOf(t);if(_===-1)return;d<=_&&(o=d)}if(r=s[o]||e.target,r!==t){se(e,"currentTarget",{configurable:!0,get(){return r||a}});var A=b,l=c;k(null),N(null);try{for(var i,u=[];r!==null;){var f=r.assignedSlot||r.parentNode||r.host||null;try{var p=r["__"+n];if(p!==void 0&&!r.disabled)if(ie(p)){var[P,...U]=p;P.apply(r,[e,...U])}else p.call(r,e)}catch(E){i?u.push(E):i=E}if(e.cancelBubble||f===t||f===null)break;r=f}if(i){for(let E of u)queueMicrotask(()=>{throw E});throw i}}finally{e.__root=t,delete e.currentTarget,k(A),N(l)}}}function $e(e){return e.endsWith("capture")&&e!=="gotpointercapture"&&e!=="lostpointercapture"}const Oe=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function xe(e){return Oe.includes(e)}const Ce={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly"};function Ke(e){return e=e.toLowerCase(),Ce[e]??e}const qe=["touchstart","touchmove"];function Me(e){return qe.includes(e)}function Pe(e,t){var a=t==null?"":typeof t=="object"?t+"":t;a!==(e.__t??(e.__t=e.nodeValue))&&(e.__t=a,e.nodeValue=a==null?"":a+"")}function Ve(e,t){return K(e,t)}function Ue(e,t){L(),t.intro=t.intro??!1;const a=t.target,n=S,s=y;try{for(var r=oe(a);r&&(r.nodeType!==8||r.data!==le);)r=fe(r);if(!r)throw D;w(!0),Y(r),ce();const o=K(e,{...t,anchor:r});if(y===null||y.nodeType!==8||y.data!==de)throw _e(),D;return w(!1),o}catch(o){if(o===D)return t.recover===!1&&pe(),L(),he(a),w(!1),Ve(e,t);throw o}finally{w(n),Y(s)}}const v=new Map;function K(e,{target:t,anchor:a,props:n={},events:s,context:r,intro:o=!0}){L();var h=new Set,d=l=>{for(var i=0;i<l.length;i++){var u=l[i];if(!h.has(u)){h.add(u);var f=Me(u);t.addEventListener(u,g,{passive:f});var p=v.get(u);p===void 0?(document.addEventListener(u,g,{passive:f}),v.set(u,1)):v.set(u,p+1)}}};d(ve(x)),O.add(d);var _=void 0,A=be(()=>{var l=a??t.appendChild(ye());return ge(()=>{if(r){Ee({});var i=me;i.c=r}s&&(n.$$events=s),S&&Ae(l,null),_=e(l,n)||{},S&&(c.nodes_end=y),r&&we()}),()=>{var f;for(var i of h){t.removeEventListener(i,g);var u=v.get(i);--u===0?(document.removeEventListener(i,g),v.delete(i)):v.set(i,u)}O.delete(d),C.delete(_),l!==a&&((f=l.parentNode)==null||f.removeChild(l))}});return C.set(_,A),_}let C=new WeakMap;function ze(e){const t=C.get(e);t&&t()}function Be(e,t,a){if(e==null)return t(void 0),I;const n=Te(()=>e.subscribe(t,a));return n.unsubscribe?()=>n.unsubscribe():n}let m=!1;function Ge(e,t,a){const n=a[t]??(a[t]={store:null,source:De(void 0),unsubscribe:I});if(n.store!==e)if(n.unsubscribe(),n.store=e??null,e==null)n.source.v=void 0,n.unsubscribe=I;else{var s=!0;n.unsubscribe=Be(e,r=>{s?n.source.v=r:Le(n.source,r)}),s=!1}return Ne(n.source)}function Je(){const e={};return ke(()=>{for(var t in e)e[t].unsubscribe()}),e}function Qe(e){var t=m;try{return m=!1,[e(),m]}finally{m=t}}export{Pe as a,Ge as b,H as c,Le as d,Qe as e,Ve as f,je as g,Ue as h,Se as i,$e as j,Fe as k,He as l,De as m,Ke as n,xe as o,Je as s,ze as u};
