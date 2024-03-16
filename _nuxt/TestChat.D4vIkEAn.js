import{_ as w,u as $}from"./kick.BjUf-DRd.js";import{d as C,r as v,Y as S,b as s,c as a,J as e,f as l,g as V,$ as B,a0 as N,a1 as M,e as c,Z as R}from"./entry.DOFr1SUv.js";import"./ContentRendererMarkdown.vue.BtRa0hZ0.js";import"./MDCRenderer.Bv2ddcue.js";import"./_commonjsHelpers.BosuxZz1.js";import"./node.BneCoJRQ.js";import"./path-meta.Bzq4gZYW.js";import"./asyncData.DSVaEFTC.js";import"./info.BlBKdafz.js";const T={style:{display:"flex","flex-direction":"column"}},A={key:0,style:{width:"40px",height:"2px","background-color":"rebeccapurple","margin-top":"1em"}},D=["disabled"],E=c("div",null,"🏴‍☠️",-1),J=[E],K=["disabled"],U={key:0,xstyle:"scale: 0.9; margin: -10% -5% -5% -5%; border-top: 1px solid;"},Y=c("div",null,"✨",-1),Z={key:1},Q=C({__name:"TestChat",props:{task:{type:String,default:"continue the chat"}},async setup(f){let r,_;const h=f,o=v(""),i=v(""),{markdown:d,pending:t,ask:j,messages:m,generate:k}=([r,_]=S(()=>$(h)),r=await r,_(),r);async function g(u){t.value=!0,i.value&&u&&m.push({role:"assistant",content:i.value}),m.push({role:"user",content:o.value}),i.value=await k(m),u?d.value+=`

---

*${o.value}*
---

${i.value}`:d.value=`

---

*${o.value}*
---

${i.value}`,t.value=!1}function y(){g(!1)}function x(){g(!0)}return(u,n)=>{const b=w;return s(),a("div",T,[e(d)?(s(),a("div",A)):l("",!0),V(b,{markdownString:e(d)},null,8,["markdownString"]),e(t)?l("",!0):B((s(),a("input",{key:1,"onUpdate:modelValue":n[0]||(n[0]=p=>M(o)?o.value=p:null),style:{color:"#222222",width:"100%"}},null,512)),[[N,e(o)]]),e(t)?l("",!0):(s(),a("button",{key:2,style:{border:"1px solid","text-align":"left","margin-top":"1em",padding:"0.5em 1em 0.2em 0.5em","min-height":"2em"},onClick:n[1]||(n[1]=p=>y()),disabled:e(t)},J,8,D)),c("button",{style:{border:"1px solid","text-align":"left","margin-top":"1em",padding:"0.5em 1em 0.2em 0.5em","min-height":"7em"},onClick:n[2]||(n[2]=p=>x()),disabled:e(t)},[e(t)?l("",!0):(s(),a("div",U,[Y,R(u.$slots,"default")])),e(t)?(s(),a("div",Z,"please wait...")):l("",!0)],8,K)])}}});export{Q as default};
