import{_ as $,u as C}from"./useKick.1b8a6c35.js";import{d as S,r as k,X as T,b as a,c as i,M as e,f as u,g as V,Z as q,$ as B,a0 as M,e as g,Y as N,q as R}from"./entry.2fa60c9b.js";import"./ContentRendererMarkdown.vue.20c9700a.js";import"./path-meta.3c76d7cb.js";import"./defu.528efe6d.js";import"./node.f7b4ab96.js";import"./asyncData.7a9c8e33.js";const A={style:{display:"flex","flex-direction":"column"}},D={key:0,style:{width:"40px",height:"2px","background-color":"rebeccapurple","margin-top":"1em"}},E=["disabled"],K=g("div",null,"🏴‍☠️",-1),P=[K],U=["disabled"],X={key:0,xstyle:"scale: 0.9; margin: -10% -5% -5% -5%; border-top: 1px solid;"},Y=g("div",null,"✨",-1),Z={key:1},O=S({__name:"TestChat",props:{task:{type:String,default:"continue the chat"}},async setup(w){let m,h;const x=w,s=k(""),r=k(""),{markdown:c,pending:t,ask:j,messages:p,generate:b}=([m,h]=T(()=>C(x)),m=await m,h(),m);async function y(_){const o=R({type:"page"});(l=>{console.log(l);let d="";for(const n of l)n.type==="heading"?n.depth===1?d+=`# ${n.title}
`:n.depth===2?d+=`## ${n.title}
`:d+=`### ${n.title}
`:d+=`${n._path}
`;return d})(await o.find());async function f(l){r.value&&l&&p.push({role:"assistant",content:r.value}),p.push({role:"user",content:s.value}),r.value=await b([...p,{role:"system",content:"Provide the best answer in case of a question. Remember, you are extending a document, generating yet another part, while using this template."}]),l?c.value+=`

---

*${s.value}*
---

${r.value}`:c.value=`

---

*${s.value}*
---

${r.value}`}t.value=!0,await f(_),t.value=!1}return(_,o)=>{const v=$;return a(),i("div",A,[e(c)?(a(),i("div",D)):u("",!0),V(v,{markdownString:e(c)},null,8,["markdownString"]),e(t)?u("",!0):q((a(),i("input",{key:1,"onUpdate:modelValue":o[0]||(o[0]=f=>M(s)?s.value=f:null),style:{color:"#222222",width:"100%"}},null,512)),[[B,e(s)]]),e(t)?u("",!0):(a(),i("button",{key:2,style:{border:"1px solid","text-align":"left","margin-top":"1em",padding:"0.5em 1em 0.2em 0.5em","min-height":"2em"},onClick:o[1]||(o[1]=()=>{y(!1)}),disabled:e(t)},P,8,E)),g("button",{style:{border:"1px solid","text-align":"left","margin-top":"1em",padding:"0.5em 1em 0.2em 0.5em","min-height":"7em"},onClick:o[2]||(o[2]=()=>{y(!0)}),disabled:e(t)},[e(t)?u("",!0):(a(),i("div",X,[Y,N(_.$slots,"default")])),e(t)?(a(),i("div",Z,"please wait...")):u("",!0)],8,U)])}}});export{O as default};
