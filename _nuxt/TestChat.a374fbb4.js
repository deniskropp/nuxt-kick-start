import{_ as y,u as w}from"./useKick.4c6c5d08.js";import{d as x,r as m,X as b,b as n,c as a,M as e,f as s,g as C,Z as S,$ as V,a0 as $,e as B,Y as M,F as N}from"./entry.df2ce986.js";import"./ContentRendererMarkdown.vue.07db851e.js";import"./path-meta.498b1cae.js";import"./node.f7b4ab96.js";import"./asyncData.aaba9c4d.js";const F={key:0,style:{width:"40px",height:"2px","background-color":"rebeccapurple","margin-top":"1em"}},R=["disabled"],T={key:0},A={key:1},D={key:2,style:{scale:"0.7",margin:"-20% -10% -10% -10%","border-top":"1px solid"}},q=x({__name:"TestChat",props:{name:{task:String,default:"continue the chat"}},async setup(_){let r,p;const g=_,o=m(""),l=m(""),{markdown:u,pending:t,ask:E,messages:d,generate:k}=([r,p]=b(()=>w(g)),r=await r,p(),r);async function f(){async function c(){d.push({role:"user",content:o.value}),l.value=await k(d),u.value+=`

---

/${o.value}/
---

${l.value}`,d.push({role:"asistant",content:l.value})}t.value=!0,await c(),t.value=!1}return(c,i)=>{const v=y;return n(),a(N,null,[e(u)?(n(),a("div",F)):s("",!0),C(v,{markdownString:e(u)},null,8,["markdownString"]),e(t)?s("",!0):S((n(),a("input",{key:1,"onUpdate:modelValue":i[0]||(i[0]=h=>$(o)?o.value=h:null),style:{color:"#222222",width:"70%"}},null,512)),[[V,e(o)]]),B("button",{style:{border:"1px solid","text-align":"left","margin-top":"1em",padding:"0.5em 1em 0.2em 0.5em"},onClick:i[1]||(i[1]=()=>{f()}),disabled:e(t)},[e(t)?s("",!0):(n(),a("div",T,"✨")),e(t)?(n(),a("div",A,"please wait...")):s("",!0),e(t)?s("",!0):(n(),a("div",D,[M(c.$slots,"default")]))],8,R)],64)}}});export{q as default};
