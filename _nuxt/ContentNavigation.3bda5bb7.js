import{d,a8 as l,H as f,m as v,U as p,a9 as m,a5 as g,aa as h,L as r,D as y}from"./entry.af3eb6b1.js";import{u as _}from"./asyncData.799a9a76.js";const C=d({name:"ContentNavigation",props:{query:{type:Object,required:!1,default:void 0}},async setup(u){const{query:a}=l(u),n=f(()=>{var t;return typeof((t=a.value)==null?void 0:t.params)=="function"?a.value.params():a.value});if(!n.value&&v("dd-navigation").value){const{navigation:t}=p();return{navigation:t}}const{data:o}=await _(`content-navigation-${m(n.value)}`,()=>h(n.value));return{navigation:o}},render(u){const a=g(),{navigation:n}=u,o=e=>r(y,{to:e._path},()=>e.title),t=(e,i)=>r("ul",i?{"data-level":i}:null,e.map(s=>s.children?r("li",null,[o(s),t(s.children,i+1)]):r("li",null,o(s)))),c=e=>t(e,0);return a!=null&&a.default?a.default({navigation:n,...this.$attrs}):c(n)}}),L=C;export{L as default};
