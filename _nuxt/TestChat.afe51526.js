import{_ as w,u as $}from"./kick.97ca59ae.js";import{d as C,r as v,X as S,b as s,c as a,M as e,f as l,g as V,Z as B,$ as M,a0 as N,e as c,Y as R}from"./entry.0a023430.js";import"./ContentRendererMarkdown.vue.6e0cf6ae.js";import"./index.1bc6aa09.js";import"./path-meta.b26be28d.js";import"./node.f7b4ab96.js";import"./asyncData.a1b4c5d8.js";import"./info.59b33d98.js";const T={style:{display:"flex","flex-direction":"column"}},A={key:0,style:{width:"40px",height:"2px","background-color":"rebeccapurple","margin-top":"1em"}},D=["disabled"],E=c("div",null,"🏴‍☠️",-1),K=[E],U=["disabled"],X={key:0,xstyle:"scale: 0.9; margin: -10% -5% -5% -5%; border-top: 1px solid;"},Y=c("div",null,"✨",-1),Z={key:1},O=C({__name:"TestChat",props:{task:{type:String,default:"continue the chat"}},async setup(f){let r,_;const h=f,o=v(""),i=v(""),{markdown:d,pending:t,ask:j,messages:m,generate:k}=([r,_]=S(()=>$(h)),r=await r,_(),r);async function g(u){t.value=!0,i.value&&u&&m.push({role:"assistant",content:i.value}),m.push({role:"user",content:o.value}),i.value=await k(m),u?d.value+=`

---

*${o.value}*
---

${i.value}`:d.value=`

---

*${o.value}*
---

${i.value}`,t.value=!1}function y(){g(!1)}function x(){g(!0)}return(u,n)=>{const b=w;return s(),a("div",T,[e(d)?(s(),a("div",A)):l("",!0),V(b,{markdownString:e(d)},null,8,["markdownString"]),e(t)?l("",!0):B((s(),a("input",{key:1,"onUpdate:modelValue":n[0]||(n[0]=p=>N(o)?o.value=p:null),style:{color:"#222222",width:"100%"}},null,512)),[[M,e(o)]]),e(t)?l("",!0):(s(),a("button",{key:2,style:{border:"1px solid","text-align":"left","margin-top":"1em",padding:"0.5em 1em 0.2em 0.5em","min-height":"2em"},onClick:n[1]||(n[1]=p=>y()),disabled:e(t)},K,8,D)),c("button",{style:{border:"1px solid","text-align":"left","margin-top":"1em",padding:"0.5em 1em 0.2em 0.5em","min-height":"7em"},onClick:n[2]||(n[2]=p=>x()),disabled:e(t)},[e(t)?l("",!0):(s(),a("div",X,[Y,R(u.$slots,"default")])),e(t)?(s(),a("div",Z,"please wait...")):l("",!0)],8,U)])}}});export{O as default};
