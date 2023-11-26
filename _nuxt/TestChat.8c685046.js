import{_ as $,u as C}from"./useKick.af5b392e.js";import{d as S,r as k,X as T,b as a,c as i,M as e,f as u,g as V,Z as q,$ as B,a0 as M,e as g,Y as N,q as R}from"./entry.319b016c.js";import"./ContentRendererMarkdown.vue.67f1a16b.js";import"./path-meta.ae792abd.js";import"./node.f7b4ab96.js";import"./asyncData.b00ba456.js";const A={style:{display:"flex","flex-direction":"column"}},D={key:0,style:{width:"40px",height:"2px","background-color":"rebeccapurple","margin-top":"1em"}},E=["disabled"],K=g("div",null,"🏴‍☠️",-1),P=[K],U=["disabled"],X={key:0,xstyle:"scale: 0.9; margin: -10% -5% -5% -5%; border-top: 1px solid;"},Y=g("div",null,"✨",-1),Z={key:1},L=S({__name:"TestChat",props:{task:{type:String,default:"continue the chat"}},async setup(w){let m,h;const b=w,s=k(""),l=k(""),{markdown:c,pending:t,ask:j,messages:p,generate:x}=([m,h]=T(()=>C(b)),m=await m,h(),m);async function y(_){const n=await R({type:"page"});(r=>{console.log(r);let d="";for(const o of r)o.type==="heading"?o.depth===1?d+=`# ${o.title}
`:o.depth===2?d+=`## ${o.title}
`:d+=`### ${o.title}
`:d+=`${o._path}
`;return d})(await n.find());async function f(r){l.value&&r&&p.push({role:"assistant",content:l.value}),p.push({role:"user",content:s.value}),l.value=await x([...p,{role:"system",content:"Provide the best answer in case of a question. Remember, you are extending a document by generating a part using this template."}]),r?c.value+=`

---

*${s.value}*
---

${l.value}`:c.value=`

---

*${s.value}*
---

${l.value}`}t.value=!0,await f(_),t.value=!1}return(_,n)=>{const v=$;return a(),i("div",A,[e(c)?(a(),i("div",D)):u("",!0),V(v,{markdownString:e(c)},null,8,["markdownString"]),e(t)?u("",!0):q((a(),i("input",{key:1,"onUpdate:modelValue":n[0]||(n[0]=f=>M(s)?s.value=f:null),style:{color:"#222222",width:"100%"}},null,512)),[[B,e(s)]]),e(t)?u("",!0):(a(),i("button",{key:2,style:{border:"1px solid","text-align":"left","margin-top":"1em",padding:"0.5em 1em 0.2em 0.5em","min-height":"2em"},onClick:n[1]||(n[1]=()=>{y(!1)}),disabled:e(t)},P,8,E)),g("button",{style:{border:"1px solid","text-align":"left","margin-top":"1em",padding:"0.5em 1em 0.2em 0.5em","min-height":"7em"},onClick:n[2]||(n[2]=()=>{y(!0)}),disabled:e(t)},[e(t)?u("",!0):(a(),i("div",X,[Y,N(_.$slots,"default")])),e(t)?(a(),i("div",Z,"please wait...")):u("",!0)],8,U)])}}});export{L as default};
