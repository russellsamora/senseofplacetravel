var fn=Array.isArray,_n=Array.from,cn=Object.defineProperty,nt=Object.getOwnPropertyDescriptor,vn=Object.getOwnPropertyDescriptors,pn=Object.prototype,hn=Array.prototype,dn=Object.getPrototypeOf;function En(t){return typeof t=="function"}const wn=()=>{};function Ft(t){for(var n=0;n<t.length;n++)t[n]()}const O=2,st=4,q=8,ut=16,w=32,K=64,C=128,U=256,h=512,L=1024,$=2048,N=4096,H=8192,Mt=16384,lt=32768,Pt=1<<18,ot=1<<19,yn=Symbol("$state"),Tn=Symbol("");function bt(t){return t===this.v}function qt(t,n){return t!=t?n==n:t!==n||t!==null&&typeof t=="object"||typeof t=="function"}function mn(t){return!qt(t,this.v)}function Lt(t){throw new Error("effect_in_teardown")}function Ht(){throw new Error("effect_in_unowned_derived")}function Yt(t){throw new Error("effect_orphan")}function Bt(){throw new Error("effect_update_depth_exceeded")}function An(){throw new Error("hydration_failed")}function xn(t){throw new Error("props_invalid_value")}function gn(){throw new Error("state_descriptors_fixed")}function In(){throw new Error("state_prototype_fixed")}function Ut(){throw new Error("state_unsafe_local_read")}function Rn(){throw new Error("state_unsafe_mutation")}let jt=!1;const Sn=1,Dn=2,On=16,Nn=1,Cn=4,kn=8,Fn=16,Mn=1,Pn=2,Vt="[",Gt="[!",Kt="]",it={},bn=Symbol(),qn="http://www.w3.org/2000/svg";function ft(t){console.warn("hydration_mismatch")}let A=!1;function Ln(t){A=t}let d;function M(t){if(t===null)throw ft(),it;return d=t}function Hn(){return M(x(d))}function Yn(t){if(A){if(x(d)!==null)throw ft(),it;d=t}}function Bn(t=1){if(A){for(var n=t,r=d;n--;)r=x(r);d=r}}function Un(){for(var t=0,n=d;;){if(n.nodeType===8){var r=n.data;if(r===Kt){if(t===0)return n;t-=1}else(r===Vt||r===Gt)&&(t+=1)}var e=x(n);n.remove(),n=e}}var rt,_t,ct;function jn(){if(rt===void 0){rt=window;var t=Element.prototype,n=Node.prototype;_t=nt(n,"firstChild").get,ct=nt(n,"nextSibling").get,t.__click=void 0,t.__className="",t.__attributes=null,t.__styles=null,t.__e=void 0,Text.prototype.__t=void 0}}function z(t=""){return document.createTextNode(t)}function J(t){return _t.call(t)}function x(t){return ct.call(t)}function Vn(t,n){if(!A)return J(t);var r=J(d);if(r===null)r=d.appendChild(z());else if(n&&r.nodeType!==3){var e=z();return r==null||r.before(e),M(e),e}return M(r),r}function Gn(t,n){if(!A){var r=J(t);return r instanceof Comment&&r.data===""?x(r):r}return d}function Kn(t,n=1,r=!1){let e=A?d:t;for(;n--;)e=x(e);if(!A)return e;var a=e.nodeType;if(r&&a!==3){var s=z();return e==null||e.before(s),M(s),s}return M(e),e}function $n(t){t.textContent=""}function Zn(t){var n=O|L;o===null?n|=C:o.f|=ot;const r={children:null,ctx:f,deps:null,equals:bt,f:n,fn:t,reactions:null,v:null,version:0,parent:o};if(l!==null&&l.f&O){var e=l;(e.children??(e.children=[])).push(r)}return r}function vt(t){var n=t.children;if(n!==null){t.children=null;for(var r=0;r<n.length;r+=1){var e=n[r];e.f&O?X(e):F(e)}}}function pt(t){var n,r=o;G(t.parent);try{vt(t),n=St(t)}finally{G(r)}return n}function ht(t){var n=pt(t),r=(g||t.f&C)&&t.deps!==null?$:h;T(t,r),t.equals(n)||(t.v=n,t.version=nn())}function X(t){vt(t),b(t,0),T(t,H),t.v=t.children=t.deps=t.ctx=t.reactions=null}function dt(t){o===null&&l===null&&Yt(),l!==null&&l.f&C&&Ht(),Q&&Lt()}function $t(t,n){var r=n.last;r===null?n.last=n.first=t:(r.next=t,t.prev=r,n.last=t)}function k(t,n,r,e=!0){var a=(t&K)!==0,s=o,u={ctx:f,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:t|L,first:null,fn:n,last:null,next:null,parent:a?null:s,prev:null,teardown:null,transitions:null,version:0};if(r){var i=I;try{et(!0),Z(u),u.f|=Mt}catch(_){throw F(u),_}finally{et(i)}}else n!==null&&Nt(u);var E=r&&u.deps===null&&u.first===null&&u.nodes_start===null&&u.teardown===null&&(u.f&ot)===0;if(!E&&!a&&e&&(s!==null&&$t(u,s),l!==null&&l.f&O)){var y=l;(y.children??(y.children=[])).push(u)}return u}function zn(t){const n=k(q,null,!1);return T(n,h),n.teardown=t,n}function Jn(t){dt();var n=o!==null&&(o.f&w)!==0&&f!==null&&!f.m;if(n){var r=f;(r.e??(r.e=[])).push({fn:t,effect:o,reaction:l})}else{var e=Et(t);return e}}function Wn(t){return dt(),Zt(t)}function Xn(t){const n=k(K,t,!0);return()=>{F(n)}}function Et(t){return k(st,t,!1)}function Zt(t){return k(q,t,!0)}function Qn(t){return zt(t)}function zt(t,n=0){return k(q|ut|n,t,!0)}function tr(t,n=!0){return k(q|w,t,!0,n)}function wt(t){var n=t.teardown;if(n!==null){const r=Q,e=l;at(!0),V(null);try{n.call(null)}finally{at(r),V(e)}}}function yt(t){var n=t.deriveds;if(n!==null){t.deriveds=null;for(var r=0;r<n.length;r+=1)X(n[r])}}function Tt(t,n=!1){var r=t.first;for(t.first=t.last=null;r!==null;){var e=r.next;F(r,n),r=e}}function Jt(t){for(var n=t.first;n!==null;){var r=n.next;n.f&w||F(n),n=r}}function F(t,n=!0){var r=!1;if((n||t.f&Pt)&&t.nodes_start!==null){for(var e=t.nodes_start,a=t.nodes_end;e!==null;){var s=e===a?null:x(e);e.remove(),e=s}r=!0}Tt(t,n&&!r),yt(t),b(t,0),T(t,H);var u=t.transitions;if(u!==null)for(const E of u)E.stop();wt(t);var i=t.parent;i!==null&&i.first!==null&&mt(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.parent=t.fn=t.nodes_start=t.nodes_end=null}function mt(t){var n=t.parent,r=t.prev,e=t.next;r!==null&&(r.next=e),e!==null&&(e.prev=r),n!==null&&(n.first===t&&(n.first=e),n.last===t&&(n.last=r))}function nr(t,n){var r=[];At(t,r,!0),Wt(r,()=>{F(t),n&&n()})}function Wt(t,n){var r=t.length;if(r>0){var e=()=>--r||n();for(var a of t)a.out(e)}else n()}function At(t,n,r){if(!(t.f&N)){if(t.f^=N,t.transitions!==null)for(const u of t.transitions)(u.is_global||r)&&n.push(u);for(var e=t.first;e!==null;){var a=e.next,s=(e.f&lt)!==0||(e.f&w)!==0;At(e,n,s?r:!1),e=a}}}function rr(t){xt(t,!0)}function xt(t,n){if(t.f&N){Y(t)&&Z(t),t.f^=N;for(var r=t.first;r!==null;){var e=r.next,a=(r.f&lt)!==0||(r.f&w)!==0;xt(r,a?n:!1),r=e}if(t.transitions!==null)for(const s of t.transitions)(s.is_global||n)&&s.in()}}let j=!1,W=[];function gt(){j=!1;const t=W.slice();W=[],Ft(t)}function er(t){j||(j=!0,queueMicrotask(gt)),W.push(t)}function Xt(){j&&gt()}function Qt(t){throw new Error("lifecycle_outside_component")}const It=0,tn=1;let B=It,P=!1,I=!1,Q=!1;function et(t){I=t}function at(t){Q=t}let m=[],R=0;let l=null;function V(t){l=t}let o=null;function G(t){o=t}let S=null;function ar(t){S=t}let v=null,p=0,D=null;function sr(t){D=t}let Rt=0,g=!1,f=null;function nn(){return++Rt}function ur(){return!jt}function Y(t){var u,i;var n=t.f;if(n&L)return!0;if(n&$){var r=t.deps,e=(n&C)!==0;if(r!==null){var a;if(n&U){for(a=0;a<r.length;a++)((u=r[a]).reactions??(u.reactions=[])).push(t);t.f^=U}for(a=0;a<r.length;a++){var s=r[a];if(Y(s)&&ht(s),e&&o!==null&&!g&&!((i=s==null?void 0:s.reactions)!=null&&i.includes(t))&&(s.reactions??(s.reactions=[])).push(t),s.version>t.version)return!0}}e||T(t,h)}return!1}function rn(t,n,r){throw t}function St(t){var tt;var n=v,r=p,e=D,a=l,s=g,u=S,i=f,E=t.f;v=null,p=0,D=null,l=E&(w|K)?null:t,g=!I&&(E&C)!==0,S=null,f=t.ctx;try{var y=(0,t.fn)(),_=t.deps;if(v!==null){var c;if(b(t,p),_!==null&&p>0)for(_.length=p+v.length,c=0;c<v.length;c++)_[p+c]=v[c];else t.deps=_=v;if(!g)for(c=p;c<_.length;c++)((tt=_[c]).reactions??(tt.reactions=[])).push(t)}else _!==null&&p<_.length&&(b(t,p),_.length=p);return y}finally{v=n,p=r,D=e,l=a,g=s,S=u,f=i}}function en(t,n){let r=n.reactions;if(r!==null){var e=r.indexOf(t);if(e!==-1){var a=r.length-1;a===0?r=n.reactions=null:(r[e]=r[a],r.pop())}}r===null&&n.f&O&&(v===null||!v.includes(n))&&(T(n,$),n.f&(C|U)||(n.f^=U),b(n,0))}function b(t,n){var r=t.deps;if(r!==null)for(var e=n;e<r.length;e++)en(t,r[e])}function Z(t){var n=t.f;if(!(n&H)){T(t,h);var r=o;o=t;try{n&ut?Jt(t):Tt(t),yt(t),wt(t);var e=St(t);t.teardown=typeof e=="function"?e:null,t.version=Rt}catch(a){rn(a)}finally{o=r}}}function Dt(){R>1e3&&(R=0,Bt()),R++}function Ot(t){var n=t.length;if(n!==0){Dt();var r=I;I=!0;try{for(var e=0;e<n;e++){var a=t[e];a.f&h||(a.f^=h);var s=[];Ct(a,s),an(s)}}finally{I=r}}}function an(t){var n=t.length;if(n!==0)for(var r=0;r<n;r++){var e=t[r];!(e.f&(H|N))&&Y(e)&&(Z(e),e.deps===null&&e.first===null&&e.nodes_start===null&&(e.teardown===null?mt(e):e.fn=null))}}function sn(){if(P=!1,R>1001)return;const t=m;m=[],Ot(t),P||(R=0)}function Nt(t){B===It&&(P||(P=!0,queueMicrotask(sn)));for(var n=t;n.parent!==null;){n=n.parent;var r=n.f;if(r&(K|w)){if(!(r&h))return;n.f^=h}}m.push(n)}function Ct(t,n){var r=t.first,e=[];t:for(;r!==null;){var a=r.f,s=(a&w)!==0,u=s&&(a&h)!==0;if(!u&&!(a&N))if(a&q){s?r.f^=h:Y(r)&&Z(r);var i=r.first;if(i!==null){r=i;continue}}else a&st&&e.push(r);var E=r.next;if(E===null){let c=r.parent;for(;c!==null;){if(t===c)break t;var y=c.next;if(y!==null){r=y;continue t}c=c.parent}}r=E}for(var _=0;_<e.length;_++)i=e[_],n.push(i),Ct(i,n)}function kt(t){var n=B,r=m;try{Dt();const a=[];B=tn,m=a,P=!1,Ot(r);var e=t==null?void 0:t();return Xt(),(m.length>0||a.length>0)&&kt(),R=0,e}finally{B=n,m=r}}async function lr(){await Promise.resolve(),kt()}function or(t){var i;var n=t.f,r=(n&O)!==0;if(r&&n&H){var e=pt(t);return X(t),e}if(l!==null){S!==null&&S.includes(t)&&Ut();var a=l.deps;v===null&&a!==null&&a[p]===t?p++:v===null?v=[t]:v.push(t),D!==null&&o!==null&&o.f&h&&!(o.f&w)&&D.includes(t)&&(T(o,L),Nt(o))}else if(r&&t.deps===null){var s=t,u=s.parent;u!==null&&!((i=u.deriveds)!=null&&i.includes(s))&&(u.deriveds??(u.deriveds=[])).push(s)}return r&&(s=t,Y(s)&&ht(s)),t.v}function ir(t){const n=l;try{return l=null,t()}finally{l=n}}const un=~(L|$|h);function T(t,n){t.f=t.f&un|n}function fr(t,n){return ln().set(t,n),n}function ln(t){return f===null&&Qt(),f.c??(f.c=new Map(on(f)||void 0))}function on(t){let n=t.p;for(;n!==null;){const r=n.c;if(r!==null)return r;n=n.p}return null}function _r(t,n=!1,r){f={p:f,c:null,e:null,m:!1,s:t,x:null,l:null}}function cr(t){const n=f;if(n!==null){const u=n.e;if(u!==null){var r=o,e=l;n.e=null;try{for(var a=0;a<u.length;a++){var s=u[a];G(s.effect),V(s.reaction),Et(s.fn)}}finally{G(r),V(e)}}f=n.p,n.m=!0}return{}}export{cn as $,fn as A,Un as B,Ln as C,rr as D,lt as E,nr as F,Et as G,Gt as H,Zt as I,ir as J,er as K,xn as L,mn as M,w as N,G as O,Cn as P,Nn as Q,K as R,yn as S,Mn as T,bn as U,jt as V,kn as W,Zn as X,Fn as Y,En as Z,kt as _,tr as a,f as a0,Qt as a1,Jn as a2,Wn as a3,lr as a4,l as a5,ur as a6,O as a7,ut as a8,S as a9,At as aA,Wt as aB,Dn as aC,Sn as aD,On as aE,qn as aF,Tn as aG,vn as aH,Bn as aI,fr as aJ,qt as aK,Rn as aa,nn as ab,h as ac,L as ad,T as ae,C as af,Nt as ag,v as ah,D as ai,sr as aj,$ as ak,bt as al,ar as am,V as an,jn as ao,Vt as ap,x as aq,it as ar,Kt as as,ft as at,An as au,$n as av,_n as aw,Xn as ax,zn as ay,N as az,zt as b,d as c,F as d,_r as e,Vn as f,Gn as g,A as h,z as i,J as j,o as k,Pn as l,M as m,wn as n,Hn as o,cr as p,pn as q,Yn as r,Kn as s,Qn as t,hn as u,gn as v,nt as w,or as x,In as y,dn as z};
