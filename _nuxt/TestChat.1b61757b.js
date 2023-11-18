import{_ as C,u as S}from"./useKick.b17fb639.js";import{d as T,r as k,X as V,b as a,c as i,M as e,f as u,g as B,Z as M,$ as N,a0 as q,e as g,Y as R,q as A}from"./entry.14968038.js";import"./ContentRendererMarkdown.vue.e667981c.js";import"./path-meta.aededd08.js";import"./node.f7b4ab96.js";import"./asyncData.03dfb854.js";const D={style:{display:"flex","flex-direction":"column"}},E={key:0,style:{width:"40px",height:"2px","background-color":"rebeccapurple","margin-top":"1em"}},K=["disabled"],U=g("div",null,"🏴‍☠️",-1),X=[U],Y=["disabled"],Z={key:0,xstyle:"scale: 0.9; margin: -10% -5% -5% -5%; border-top: 1px solid;"},j=g("div",null,"✨",-1),z={key:1},P=T({__name:"TestChat",props:{task:{type:String,default:"continue the chat"}},async setup(w){let c,h;const x=w,s=k(""),l=k(""),{markdown:p,pending:t,ask:F,messages:m,generate:b}=([c,h]=V(()=>S(x)),c=await c,h(),c);async function v(_){const o=await A({type:"page"}),f=(r=>{console.log(r);let d="";for(const n of r)n.type==="heading"?n.depth===1?d+=`# ${n.title}
`:n.depth===2?d+=`## ${n.title}
`:d+=`### ${n.title}
`:d+=`${n._path}
`;return d})(await o.find());async function $(r){l.value&&r&&m.push({role:"assistant",content:l.value}),m.push({role:"user",content:s.value}),l.value=await b([...m,{role:"user:paths",content:f}]),r?p.value+=`

---

*${s.value}*
---

${l.value}`:p.value=`

---

*${s.value}*
---

${l.value}`}t.value=!0,await $(_),t.value=!1}return(_,o)=>{const y=C;return a(),i("div",D,[e(p)?(a(),i("div",E)):u("",!0),B(y,{markdownString:e(p)},null,8,["markdownString"]),e(t)?u("",!0):M((a(),i("input",{key:1,"onUpdate:modelValue":o[0]||(o[0]=f=>q(s)?s.value=f:null),style:{color:"#222222",width:"100%"}},null,512)),[[N,e(s)]]),e(t)?u("",!0):(a(),i("button",{key:2,style:{border:"1px solid","text-align":"left","margin-top":"1em",padding:"0.5em 1em 0.2em 0.5em","min-height":"2em"},onClick:o[1]||(o[1]=()=>{v(!1)}),disabled:e(t)},X,8,K)),g("button",{style:{border:"1px solid","text-align":"left","margin-top":"1em",padding:"0.5em 1em 0.2em 0.5em","min-height":"7em"},onClick:o[2]||(o[2]=()=>{v(!0)}),disabled:e(t)},[e(t)?u("",!0):(a(),i("div",Z,[j,R(_.$slots,"default")])),e(t)?(a(),i("div",z,"please wait...")):u("",!0)],8,Y)])}}});export{P as default};
