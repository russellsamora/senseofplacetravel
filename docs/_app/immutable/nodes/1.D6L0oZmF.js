import{a as p,t as n}from"../chunks/disclose-version.DcARRGMY.js";import{t as c,p as i,e as u,f as b,r as g}from"../chunks/runtime.OOyCqBUm.js";import{s as m,a as f,b as $}from"../chunks/store.B4rNWjIi.js";import{s as d}from"../chunks/entry.Bgs7Uc7i.js";const h=()=>{const s=d;return{page:{subscribe:s.page.subscribe},navigating:{subscribe:s.navigating.subscribe},updated:s.updated}},v={subscribe(s){return h().page.subscribe(s)}};var _=n("<h1> </h1>");function k(s,t){u(t,!0);const a=m(),r=()=>$(v,"$page",a);var e=_(),o=b(e);g(e),c(()=>f(o,`${r().status??""}: ${r().error.message??""}`)),p(s,e),i()}export{k as component};