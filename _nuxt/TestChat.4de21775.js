import{_ as h,u as w}from"./useKick.d0be698d.js";import{d as x,r as m,X as b,b as n,c as o,M as e,f as s,g as C,Z as S,$ as V,a0 as $,e as B,Y as M,F as N}from"./entry.f6bb230b.js";import"./ContentRendererMarkdown.vue.1866aedb.js";import"./path-meta.ff865201.js";import"./node.f7b4ab96.js";import"./asyncData.14eddca3.js";const F={key:0,style:{width:"40px",height:"2px","background-color":"rebeccapurple","margin-top":"1em"}},R=["disabled"],T={key:0},A={key:1},D={key:2,style:{scale:"0.7",margin:"-20% -10% -10% -10%","border-top":"1px solid"}},q=x({__name:"TestChat",props:{task:{type:String,default:"continue the chat"}},async setup(_){let r,c;const g=_,a=m(""),l=m(""),{markdown:u,pending:t,ask:E,messages:d,generate:k}=([r,c]=b(()=>w(g)),r=await r,c(),r);async function f(){async function p(){d.push({role:"user",content:a.value}),l.value=await k(d),u.value+=`

---

/${a.value}/
---

${l.value}`,d.push({role:"asistant",content:l.value})}t.value=!0,await p(),t.value=!1}return(p,i)=>{const v=h;return n(),o(N,null,[e(u)?(n(),o("div",F)):s("",!0),C(v,{markdownString:e(u)},null,8,["markdownString"]),e(t)?s("",!0):S((n(),o("input",{key:1,"onUpdate:modelValue":i[0]||(i[0]=y=>$(a)?a.value=y:null),style:{color:"#222222",width:"70%"}},null,512)),[[V,e(a)]]),B("button",{style:{border:"1px solid","text-align":"left","margin-top":"1em",padding:"0.5em 1em 0.2em 0.5em"},onClick:i[1]||(i[1]=()=>{f()}),disabled:e(t)},[e(t)?s("",!0):(n(),o("div",T,"✨")),e(t)?(n(),o("div",A,"please wait...")):s("",!0),e(t)?s("",!0):(n(),o("div",D,[M(p.$slots,"default")]))],8,R)],64)}}});export{q as default};
