import{S as x,q as $,u as G,v as J,U as o,w as O,x as P,k as L,y as Q,z as V,A as W,h as N,o as k,b as H,H as X,B as ee,m as re,C as M,D as j,a as F,F as q,c as Z,E as z,G as te,I as ne,J as B,K as fe,L as ie,P as ae,M as se,N as ue,R as le,O as K,Q as ce,V as ve,W as de,X as _e,Y as oe,Z as A}from"./runtime.CrKjlpz6.js";import{c as w,d as b,e as he,m as ye}from"./store.Bm4XNwno.js";function T(e,f=null,a){if(typeof e!="object"||e===null||x in e)return e;const i=V(e);if(i!==$&&i!==G)return e;var t=new Map,u=W(e),_=w(0);u&&t.set("length",w(e.length));var d;return new Proxy(e,{defineProperty(l,r,n){(!("value"in n)||n.configurable===!1||n.enumerable===!1||n.writable===!1)&&J();var s=t.get(r);return s===void 0?(s=w(n.value),t.set(r,s)):b(s,T(n.value,d)),!0},deleteProperty(l,r){var n=t.get(r);if(n===void 0)r in l&&t.set(r,w(o));else{if(u&&typeof r=="string"){var s=t.get("length"),c=Number(r);Number.isInteger(c)&&c<s.v&&b(s,c)}b(n,o),U(_)}return!0},get(l,r,n){var h;if(r===x)return e;var s=t.get(r),c=r in l;if(s===void 0&&(!c||(h=O(l,r))!=null&&h.writable)&&(s=w(T(c?l[r]:o,d)),t.set(r,s)),s!==void 0){var v=P(s);return v===o?void 0:v}return Reflect.get(l,r,n)},getOwnPropertyDescriptor(l,r){var n=Reflect.getOwnPropertyDescriptor(l,r);if(n&&"value"in n){var s=t.get(r);s&&(n.value=P(s))}else if(n===void 0){var c=t.get(r),v=c==null?void 0:c.v;if(c!==void 0&&v!==o)return{enumerable:!0,configurable:!0,value:v,writable:!0}}return n},has(l,r){var v;if(r===x)return!0;var n=t.get(r),s=n!==void 0&&n.v!==o||Reflect.has(l,r);if(n!==void 0||L!==null&&(!s||(v=O(l,r))!=null&&v.writable)){n===void 0&&(n=w(s?T(l[r],d):o),t.set(r,n));var c=P(n);if(c===o)return!1}return s},set(l,r,n,s){var p;var c=t.get(r),v=r in l;if(u&&r==="length")for(var h=n;h<c.v;h+=1){var g=t.get(h+"");g!==void 0?b(g,o):h in l&&(g=w(o),t.set(h+"",g))}c===void 0?(!v||(p=O(l,r))!=null&&p.writable)&&(c=w(void 0),b(c,T(n,d)),t.set(r,c)):(v=c.v!==o,b(c,T(n,d)));var m=Reflect.getOwnPropertyDescriptor(l,r);if(m!=null&&m.set&&m.set.call(s,n),!v){if(u&&typeof r=="string"){var I=t.get("length"),R=Number(r);Number.isInteger(R)&&R>=I.v&&b(I,R+1)}U(_)}return!0},ownKeys(l){P(_);var r=Reflect.ownKeys(l).filter(c=>{var v=t.get(c);return v===void 0||v.v!==o});for(var[n,s]of t)s.v!==o&&!(n in l)&&r.push(n);return r},setPrototypeOf(){Q()}})}function U(e,f=1){b(e,e.v+f)}function me(e,f,a,i=null,t=!1){N&&k();var u=e,_=null,d=null,l=null,r=t?z:0;H(()=>{if(l===(l=!!f()))return;let n=!1;if(N){const s=u.data===X;l===s&&(u=ee(),re(u),M(!1),n=!0)}l?(_?j(_):_=F(()=>a(u)),d&&q(d,()=>{d=null})):(d?j(d):i&&(d=F(()=>i(u))),_&&q(_,()=>{_=null})),n&&M(!0)},r),N&&(u=Z)}function Ie(e,f,a){N&&k();var i=e,t,u;H(()=>{t!==(t=f())&&(u&&(q(u),u=null),t&&(u=F(()=>a(i,t))))},z),N&&(i=Z)}function Y(e,f){return e===f||(e==null?void 0:e[x])===f}function Re(e={},f,a,i){return te(()=>{var t,u;return ne(()=>{t=u,u=[],B(()=>{e!==a(...u)&&(f(e,...u),t&&Y(a(...t),e)&&f(null,...t))})}),()=>{fe(()=>{u&&Y(a(...u),e)&&f(null,...u)})}}),e}const ge={get(e,f){let a=e.props.length;for(;a--;){let i=e.props[a];if(A(i)&&(i=i()),typeof i=="object"&&i!==null&&f in i)return i[f]}},set(e,f,a){let i=e.props.length;for(;i--;){let t=e.props[i];A(t)&&(t=t());const u=O(t,f);if(u&&u.set)return u.set(a),!0}return!1},getOwnPropertyDescriptor(e,f){let a=e.props.length;for(;a--;){let i=e.props[a];if(A(i)&&(i=i()),typeof i=="object"&&i!==null&&f in i){const t=O(i,f);return t&&!t.configurable&&(t.configurable=!0),t}}},has(e,f){for(let a of e.props)if(A(a)&&(a=a()),a!=null&&f in a)return!0;return!1},ownKeys(e){const f=[];for(let a of e.props){A(a)&&(a=a());for(const i in a)f.includes(i)||f.push(i)}return f}};function pe(...e){return new Proxy({props:e},ge)}function be(e){for(var f=L,a=L;f!==null&&!(f.f&(ue|le));)f=f.parent;try{return K(f),e()}finally{K(a)}}function Ee(e,f,a,i){var C;var t=(a&ce)!==0,u=!ve,_=(a&de)!==0,d=(a&oe)!==0,l=!1,r;_?[r,l]=he(()=>e[f]):r=e[f];var n=(C=O(e,f))==null?void 0:C.set,s=i,c=!0,v=!1,h=()=>(v=!0,c&&(c=!1,d?s=B(i):s=i),s);r===void 0&&i!==void 0&&(n&&u&&ie(),r=h(),n&&n(r));var g;if(g=()=>{var y=e[f];return y===void 0?h():(c=!0,v=!1,y)},!(a&ae))return g;if(n){var m=e.$$legacy;return function(y,E){return arguments.length>0?((!E||m||l)&&n(E?g():y),y):g()}}var I=!1,R=!1,p=ye(r),S=be(()=>_e(()=>{var y=g(),E=P(p);return I?(I=!1,R=!0,E):(R=!1,p.v=y)}));return t||(S.equals=se),function(y,E){if(arguments.length>0){const D=E?P(S):_?T(y):y;return S.equals(D)||(I=!0,b(p,D),v&&s!==void 0&&(s=D),B(()=>P(S))),y}return P(S)}}export{T as a,Re as b,Ie as c,me as i,Ee as p,pe as s};
