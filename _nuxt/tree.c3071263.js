import i from"./ContentList.3d17ea69.js";import{q as l,g as m}from"./info.59b33d98.js";import{d as u,b as s,V as g,w as h,e,c as o,ao as y,F as f,M as p,t,l as b,Y as x,g as k}from"./entry.0a023430.js";import"./ContentQuery.e8e07855.js";import"./asyncData.a1b4c5d8.js";const v={class:"m-8"},w={class:"px-4"},$={class:"px-4"},q=u({__name:"InfoList",setup(a){const n=l().params();return(d,F)=>{const c=i;return s(),g(c,{query:p(n)},{default:h(({list:_})=>[e("table",v,[(s(!0),o(f,null,y(_,r=>(s(),o("tr",{key:r._path},[e("td",null,t(r._id),1),e("td",w,t(r.title),1),e("td",$,[e("pre",null,t(r.body?p(m)(r.body):""),1)])]))),128))])]),_:1},8,["query"])}}}),B={},I={class:"max-w-2xl px-4 py-10 m-auto bg-white sm:px-8 sm:shadow dark:bg-gray-800 ring-1 ring-gray-200 dark:ring-gray-700 sm:rounded-lg"},L={class:"max-w-none prose dark:prose-invert prose-pre:bg-gray-100 dark:prose-pre:bg-gray-900 hover:prose-a:text-primary-400 prose-a:font-normal prose-a:no-underline prose-a:border-dashed prose-a:border-b hover:prose-a:border-solid hover:prose-a:border-primary-400"},C=e("div",{class:"py-10"},null,-1);function V(a,n){const d=q;return s(),o("div",null,[e("div",I,[e("main",L,[x(a.$slots,"default")])]),C,k(d)])}const T=b(B,[["render",V]]);export{T as default};