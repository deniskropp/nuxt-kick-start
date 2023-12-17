import{u as x,_ as b}from"./kick.6c9e1955.js";import{d as w,r as _,b as s,c as i,M as e,f as l,g as $,Y as C,Z as S,$ as V,e as p,X as B}from"./entry.d6e3be80.js";import"./ContentRendererMarkdown.vue.89482927.js";import"./index.1bc6aa09.js";import"./path-meta.0b8e7786.js";import"./defu.528efe6d.js";import"./node.f7b4ab96.js";import"./asyncData.999ee357.js";import"./info.7deded03.js";const M={style:{display:"flex","flex-direction":"column"}},N={key:0,style:{width:"40px",height:"2px","background-color":"rebeccapurple","margin-top":"1em"}},R=["disabled"],T=p("div",null,"🏴‍☠️",-1),D=[T],E=["disabled"],K={key:0,xstyle:"scale: 0.9; margin: -10% -5% -5% -5%; border-top: 1px solid;"},U=p("div",null,"✨",-1),X={key:1},J=w({__name:"TestChat",props:{task:{type:String,default:"continue the chat"}},setup(g){const v=g,o=_(""),a=_(""),{markdown:r,pending:t,ask:Y,messages:u,generate:f}=x(v);async function c(d){t.value=!0,a.value&&d&&u.push({role:"assistant",content:a.value}),u.push({role:"user",content:o.value}),a.value=await f(u),d?r.value+=`

---

*${o.value}*
---

${a.value}`:r.value=`

---

*${o.value}*
---

${a.value}`,t.value=!1}function h(){c(!1)}function k(){c(!0)}return(d,n)=>{const y=b;return s(),i("div",M,[e(r)?(s(),i("div",N)):l("",!0),$(y,{markdownString:e(r)},null,8,["markdownString"]),e(t)?l("",!0):C((s(),i("input",{key:1,"onUpdate:modelValue":n[0]||(n[0]=m=>V(o)?o.value=m:null),style:{color:"#222222",width:"100%"}},null,512)),[[S,e(o)]]),e(t)?l("",!0):(s(),i("button",{key:2,style:{border:"1px solid","text-align":"left","margin-top":"1em",padding:"0.5em 1em 0.2em 0.5em","min-height":"2em"},onClick:n[1]||(n[1]=m=>h()),disabled:e(t)},D,8,R)),p("button",{style:{border:"1px solid","text-align":"left","margin-top":"1em",padding:"0.5em 1em 0.2em 0.5em","min-height":"7em"},onClick:n[2]||(n[2]=m=>k()),disabled:e(t)},[e(t)?l("",!0):(s(),i("div",K,[U,B(d.$slots,"default")])),e(t)?(s(),i("div",X,"please wait...")):l("",!0)],8,E)])}}});export{J as default};
