var fn=Array.isArray,_n=Array.from,cn=Object.defineProperty,nt=Object.getOwnPropertyDescriptor,vn=Object.getOwnPropertyDescriptors,pn=Object.prototype,hn=Array.prototype,dn=Object.getPrototypeOf;function En(t){return typeof t=="function"}const wn=()=>{};function yn(t){return typeof(t==null?void 0:t.then)=="function"}function Ft(t){for(var n=0;n<t.length;n++)t[n]()}const g=2,at=4,b=8,ot=16,w=32,K=64,C=128,U=256,h=512,q=1024,$=2048,D=4096,H=8192,Lt=16384,ut=32768,Mt=1<<18,lt=1<<19,Tn=Symbol("$state"),mn=Symbol("");function Pt(t){return t===this.v}function bt(t,n){return t!=t?n==n:t!==n||t!==null&&typeof t=="object"||typeof t=="function"}function An(t){return!bt(t,this.v)}function qt(t){throw new Error("effect_in_teardown")}function Ht(){throw new Error("effect_in_unowned_derived")}function Yt(t){throw new Error("effect_orphan")}function Bt(){throw new Error("effect_update_depth_exceeded")}function xn(){throw new Error("hydration_failed")}function In(t){throw new Error("props_invalid_value")}function On(){throw new Error("state_descriptors_fixed")}function Sn(){throw new Error("state_prototype_fixed")}function Ut(){throw new Error("state_unsafe_local_read")}function Nn(){throw new Error("state_unsafe_mutation")}let jt=!1;const Rn=1,gn=2,Dn=4,Cn=8,kn=16,Fn=1,Ln=4,Mn=8,Pn=16,bn=4,qn=1,Hn=2,Vt="[",Gt="[!",Kt="]",it={},Yn=Symbol(),Bn="http://www.w3.org/2000/svg";function ft(t){console.warn("hydration_mismatch")}let A=!1;function Un(t){A=t}let d;function L(t){if(t===null)throw ft(),it;return d=t}function jn(){return L(x(d))}function Vn(t){if(A){if(x(d)!==null)throw ft(),it;d=t}}function Gn(t=1){if(A){for(var n=t,r=d;n--;)r=x(r);d=r}}function Kn(){for(var t=0,n=d;;){if(n.nodeType===8){var r=n.data;if(r===Kt){if(t===0)return n;t-=1}else(r===Vt||r===Gt)&&(t+=1)}var e=x(n);n.remove(),n=e}}var rt,_t,ct;function $n(){if(rt===void 0){rt=window;var t=Element.prototype,n=Node.prototype;_t=nt(n,"firstChild").get,ct=nt(n,"nextSibling").get,t.__click=void 0,t.__className="",t.__attributes=null,t.__styles=null,t.__e=void 0,Text.prototype.__t=void 0}}function z(t=""){return document.createTextNode(t)}function J(t){return _t.call(t)}function x(t){return ct.call(t)}function Zn(t,n){if(!A)return J(t);var r=J(d);if(r===null)r=d.appendChild(z());else if(n&&r.nodeType!==3){var e=z();return r==null||r.before(e),L(e),e}return L(r),r}function zn(t,n){if(!A){var r=J(t);return r instanceof Comment&&r.data===""?x(r):r}return d}function Jn(t,n=1,r=!1){let e=A?d:t;for(;n--;)e=x(e);if(!A)return e;var s=e.nodeType;if(r&&s!==3){var a=z();return e==null||e.before(a),L(a),a}return L(e),e}function Qn(t){t.textContent=""}function Wn(t){var n=g|q;l===null?n|=C:l.f|=lt;const r={children:null,ctx:f,deps:null,equals:Pt,f:n,fn:t,reactions:null,v:null,version:0,parent:l};if(u!==null&&u.f&g){var e=u;(e.children??(e.children=[])).push(r)}return r}function vt(t){var n=t.children;if(n!==null){t.children=null;for(var r=0;r<n.length;r+=1){var e=n[r];e.f&g?W(e):F(e)}}}function pt(t){var n,r=l;G(t.parent);try{vt(t),n=Nt(t)}finally{G(r)}return n}function ht(t){var n=pt(t),r=(I||t.f&C)&&t.deps!==null?$:h;T(t,r),t.equals(n)||(t.v=n,t.version=nn())}function W(t){vt(t),P(t,0),T(t,H),t.v=t.children=t.deps=t.ctx=t.reactions=null}function dt(t){l===null&&u===null&&Yt(),u!==null&&u.f&C&&Ht(),X&&qt()}function $t(t,n){var r=n.last;r===null?n.last=n.first=t:(r.next=t,t.prev=r,n.last=t)}function k(t,n,r,e=!0){var s=(t&K)!==0,a=l,o={ctx:f,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:t|q,first:null,fn:n,last:null,next:null,parent:s?null:a,prev:null,teardown:null,transitions:null,version:0};if(r){var i=O;try{et(!0),Z(o),o.f|=Lt}catch(_){throw F(o),_}finally{et(i)}}else n!==null&&Dt(o);var E=r&&o.deps===null&&o.first===null&&o.nodes_start===null&&o.teardown===null&&(o.f&lt)===0;if(!E&&!s&&e&&(a!==null&&$t(o,a),u!==null&&u.f&g)){var y=u;(y.children??(y.children=[])).push(o)}return o}function Xn(t){const n=k(b,null,!1);return T(n,h),n.teardown=t,n}function tr(t){dt();var n=l!==null&&(l.f&w)!==0&&f!==null&&!f.m;if(n){var r=f;(r.e??(r.e=[])).push({fn:t,effect:l,reaction:u})}else{var e=Et(t);return e}}function nr(t){return dt(),Zt(t)}function rr(t){const n=k(K,t,!0);return()=>{F(n)}}function Et(t){return k(at,t,!1)}function Zt(t){return k(b,t,!0)}function er(t){return zt(t)}function zt(t,n=0){return k(b|ot|n,t,!0)}function sr(t,n=!0){return k(b|w,t,!0,n)}function wt(t){var n=t.teardown;if(n!==null){const r=X,e=u;st(!0),V(null);try{n.call(null)}finally{st(r),V(e)}}}function yt(t){var n=t.deriveds;if(n!==null){t.deriveds=null;for(var r=0;r<n.length;r+=1)W(n[r])}}function Tt(t,n=!1){var r=t.first;for(t.first=t.last=null;r!==null;){var e=r.next;F(r,n),r=e}}function Jt(t){for(var n=t.first;n!==null;){var r=n.next;n.f&w||F(n),n=r}}function F(t,n=!0){var r=!1;if((n||t.f&Mt)&&t.nodes_start!==null){for(var e=t.nodes_start,s=t.nodes_end;e!==null;){var a=e===s?null:x(e);e.remove(),e=a}r=!0}Tt(t,n&&!r),yt(t),P(t,0),T(t,H);var o=t.transitions;if(o!==null)for(const E of o)E.stop();wt(t);var i=t.parent;i!==null&&i.first!==null&&mt(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.parent=t.fn=t.nodes_start=t.nodes_end=null}function mt(t){var n=t.parent,r=t.prev,e=t.next;r!==null&&(r.next=e),e!==null&&(e.prev=r),n!==null&&(n.first===t&&(n.first=e),n.last===t&&(n.last=r))}function ar(t,n){var r=[];At(t,r,!0),Qt(r,()=>{F(t),n&&n()})}function Qt(t,n){var r=t.length;if(r>0){var e=()=>--r||n();for(var s of t)s.out(e)}else n()}function At(t,n,r){if(!(t.f&D)){if(t.f^=D,t.transitions!==null)for(const o of t.transitions)(o.is_global||r)&&n.push(o);for(var e=t.first;e!==null;){var s=e.next,a=(e.f&ut)!==0||(e.f&w)!==0;At(e,n,a?r:!1),e=s}}}function or(t){xt(t,!0)}function xt(t,n){if(t.f&D){Y(t)&&Z(t),t.f^=D;for(var r=t.first;r!==null;){var e=r.next,s=(r.f&ut)!==0||(r.f&w)!==0;xt(r,s?n:!1),r=e}if(t.transitions!==null)for(const a of t.transitions)(a.is_global||n)&&a.in()}}let j=!1,Q=[];function It(){j=!1;const t=Q.slice();Q=[],Ft(t)}function ur(t){j||(j=!0,queueMicrotask(It)),Q.push(t)}function Wt(){j&&It()}function Xt(t){throw new Error("lifecycle_outside_component")}const Ot=0,tn=1;let B=Ot,M=!1,O=!1,X=!1;function et(t){O=t}function st(t){X=t}let m=[],S=0;let u=null;function V(t){u=t}let l=null;function G(t){l=t}let N=null;function lr(t){N=t}let v=null,p=0,R=null;function ir(t){R=t}let St=0,I=!1,f=null;function fr(t){f=t}function nn(){return++St}function _r(){return!jt}function Y(t){var o,i;var n=t.f;if(n&q)return!0;if(n&$){var r=t.deps,e=(n&C)!==0;if(r!==null){var s;if(n&U){for(s=0;s<r.length;s++)((o=r[s]).reactions??(o.reactions=[])).push(t);t.f^=U}for(s=0;s<r.length;s++){var a=r[s];if(Y(a)&&ht(a),e&&l!==null&&!I&&!((i=a==null?void 0:a.reactions)!=null&&i.includes(t))&&(a.reactions??(a.reactions=[])).push(t),a.version>t.version)return!0}}e||T(t,h)}return!1}function rn(t,n,r){throw t}function Nt(t){var tt;var n=v,r=p,e=R,s=u,a=I,o=N,i=f,E=t.f;v=null,p=0,R=null,u=E&(w|K)?null:t,I=!O&&(E&C)!==0,N=null,f=t.ctx;try{var y=(0,t.fn)(),_=t.deps;if(v!==null){var c;if(P(t,p),_!==null&&p>0)for(_.length=p+v.length,c=0;c<v.length;c++)_[p+c]=v[c];else t.deps=_=v;if(!I)for(c=p;c<_.length;c++)((tt=_[c]).reactions??(tt.reactions=[])).push(t)}else _!==null&&p<_.length&&(P(t,p),_.length=p);return y}finally{v=n,p=r,R=e,u=s,I=a,N=o,f=i}}function en(t,n){let r=n.reactions;if(r!==null){var e=r.indexOf(t);if(e!==-1){var s=r.length-1;s===0?r=n.reactions=null:(r[e]=r[s],r.pop())}}r===null&&n.f&g&&(v===null||!v.includes(n))&&(T(n,$),n.f&(C|U)||(n.f^=U),P(n,0))}function P(t,n){var r=t.deps;if(r!==null)for(var e=n;e<r.length;e++)en(t,r[e])}function Z(t){var n=t.f;if(!(n&H)){T(t,h);var r=l;l=t;try{n&ot?Jt(t):Tt(t),yt(t),wt(t);var e=Nt(t);t.teardown=typeof e=="function"?e:null,t.version=St}catch(s){rn(s)}finally{l=r}}}function Rt(){S>1e3&&(S=0,Bt()),S++}function gt(t){var n=t.length;if(n!==0){Rt();var r=O;O=!0;try{for(var e=0;e<n;e++){var s=t[e];s.f&h||(s.f^=h);var a=[];Ct(s,a),sn(a)}}finally{O=r}}}function sn(t){var n=t.length;if(n!==0)for(var r=0;r<n;r++){var e=t[r];!(e.f&(H|D))&&Y(e)&&(Z(e),e.deps===null&&e.first===null&&e.nodes_start===null&&(e.teardown===null?mt(e):e.fn=null))}}function an(){if(M=!1,S>1001)return;const t=m;m=[],gt(t),M||(S=0)}function Dt(t){B===Ot&&(M||(M=!0,queueMicrotask(an)));for(var n=t;n.parent!==null;){n=n.parent;var r=n.f;if(r&(K|w)){if(!(r&h))return;n.f^=h}}m.push(n)}function Ct(t,n){var r=t.first,e=[];t:for(;r!==null;){var s=r.f,a=(s&w)!==0,o=a&&(s&h)!==0;if(!o&&!(s&D))if(s&b){a?r.f^=h:Y(r)&&Z(r);var i=r.first;if(i!==null){r=i;continue}}else s&at&&e.push(r);var E=r.next;if(E===null){let c=r.parent;for(;c!==null;){if(t===c)break t;var y=c.next;if(y!==null){r=y;continue t}c=c.parent}}r=E}for(var _=0;_<e.length;_++)i=e[_],n.push(i),Ct(i,n)}function kt(t){var n=B,r=m;try{Rt();const s=[];B=tn,m=s,M=!1,gt(r);var e=t==null?void 0:t();return Wt(),(m.length>0||s.length>0)&&kt(),S=0,e}finally{B=n,m=r}}async function cr(){await Promise.resolve(),kt()}function vr(t){var i;var n=t.f,r=(n&g)!==0;if(r&&n&H){var e=pt(t);return W(t),e}if(u!==null){N!==null&&N.includes(t)&&Ut();var s=u.deps;v===null&&s!==null&&s[p]===t?p++:v===null?v=[t]:v.push(t),R!==null&&l!==null&&l.f&h&&!(l.f&w)&&R.includes(t)&&(T(l,q),Dt(l))}else if(r&&t.deps===null){var a=t,o=a.parent;o!==null&&!((i=o.deriveds)!=null&&i.includes(a))&&(o.deriveds??(o.deriveds=[])).push(a)}return r&&(a=t,Y(a)&&ht(a)),t.v}function pr(t){const n=u;try{return u=null,t()}finally{u=n}}const on=~(q|$|h);function T(t,n){t.f=t.f&on|n}function hr(t,n){return un().set(t,n),n}function un(t){return f===null&&Xt(),f.c??(f.c=new Map(ln(f)||void 0))}function ln(t){let n=t.p;for(;n!==null;){const r=n.c;if(r!==null)return r;n=n.p}return null}function dr(t,n=!1,r){f={p:f,c:null,e:null,m:!1,s:t,x:null,l:null}}function Er(t){const n=f;if(n!==null){const o=n.e;if(o!==null){var r=l,e=u;n.e=null;try{for(var s=0;s<o.length;s++){var a=o[s];G(a.effect),V(a.reaction),Et(a.fn)}}finally{G(r),V(e)}}f=n.p,n.m=!0}return{}}export{Xt as $,Un as A,or as B,ar as C,Et as D,ut as E,Zt as F,pr as G,Gt as H,ur as I,In as J,An as K,w as L,G as M,Fn as N,jt as O,Ln as P,Mn as Q,K as R,Tn as S,qn as T,Yn as U,Wn as V,Pn as W,En as X,kt as Y,cn as Z,f as _,sr as a,tr as a0,nr as a1,zn as a2,Jn as a3,cr as a4,u as a5,_r as a6,g as a7,ot as a8,N as a9,fr as aA,D as aB,At as aC,Qt as aD,gn as aE,Dn as aF,Rn as aG,kn as aH,Cn as aI,Bn as aJ,mn as aK,vn as aL,Lt as aM,bn as aN,Gn as aO,hr as aP,bt as aQ,Nn as aa,nn as ab,h as ac,q as ad,T as ae,C as af,Dt as ag,v as ah,R as ai,ir as aj,$ as ak,Pt as al,lr as am,V as an,Xn as ao,$n as ap,Vt as aq,x as ar,it as as,Kt as at,ft as au,xn as av,Qn as aw,_n as ax,rr as ay,yn as az,zt as b,d as c,F as d,dr as e,Zn as f,z as g,A as h,J as i,l as j,Hn as k,jn as l,hn as m,wn as n,pn as o,Er as p,On as q,Vn as r,L as s,er as t,nt as u,vr as v,Sn as w,dn as x,fn as y,Kn as z};