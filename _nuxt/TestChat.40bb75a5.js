import{_ as y,u as v}from"./useKick.0a2d50b7.js";import{d as h,r as w,X as x,b as n,c as o,M as e,f as s,g as b,Z as C,$ as S,a0 as V,e as B,Y as M,F as N}from"./entry.af3eb6b1.js";import"./ContentRendererMarkdown.vue.9c1b8cc7.js";import"./path-meta.76cf6d34.js";import"./node.f7b4ab96.js";import"./asyncData.799a9a76.js";const $={key:0,style:{width:"40px",height:"2px","background-color":"rebeccapurple","margin-top":"1em"}},F=["disabled"],R={key:0},T={key:1},A={style:{scale:"0.7",margin:"-20% -10% -10% -10%","border-top":"1px solid"}},j=h({__name:"TestChat",props:{name:{task:String,default:"continue the chat"}},async setup(p){let a,u;const c=p,r=w(""),{markdown:i,pending:t,ask:D,messages:_,generate:g}=([a,u]=x(()=>v(c)),a=await a,u(),a);function k(){async function d(){i.value=await g([..._,{role:"user",content:r.value}])}t.value=!0,d()}return(d,l)=>{const f=y;return n(),o(N,null,[e(i)?(n(),o("div",$)):s("",!0),b(f,{markdownString:e(i)},null,8,["markdownString"]),e(t)?s("",!0):C((n(),o("input",{key:1,"onUpdate:modelValue":l[0]||(l[0]=m=>V(r)?r.value=m:null),style:{color:"#222222"}},null,512)),[[S,e(r)]]),e(i)?s("",!0):(n(),o("button",{key:2,style:{border:"1px solid","text-align":"left","margin-top":"1em",padding:"0.5em 1em 0.2em 0.5em"},onClick:l[1]||(l[1]=m=>k()),disabled:e(t)},[e(t)?s("",!0):(n(),o("div",R,"✨")),e(t)?(n(),o("div",T,"please wait...")):s("",!0),B("div",A,[e(t)?s("",!0):M(d.$slots,"default",{key:0})])],8,F))],64)}}});export{j as default};
