function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./mdc-highlighter.F_RTC_47.js","./entry.CFDACm1-.js","./entry.C2mty4wi.css","./mdc-configs.bNaE6FFb.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as f}from"./entry.CFDACm1-.js";import{v as y,t as d}from"./kick.DNU2I-0S.js";import"./ContentRendererMarkdown.vue.DXDCHzFn.js";import"./MDCRenderer.DSUzJGwe.js";import"./path-meta.DoAANw1_.js";import"./node.BneCoJRQ.js";import"./asyncData.CrDsr4hO.js";import"./info.C50RHvMo.js";function N(e){const i=e;return async r=>{const h=[],o=[];y(r,s=>{var t,l;return["pre","code"].includes(s.tagName)&&!!((t=s.properties)!=null&&t.language||(l=s.properties)!=null&&l.highlights)},s=>{const t=s,l=typeof t.properties.highlights=="string"?t.properties.highlights.split(/[,\s]+/).map(Number):Array.isArray(t.properties.highlights)?t.properties.highlights.map(Number):[],m=i.highlighter(d(s),t.properties.language,i.theme,{highlights:l.filter(Boolean),meta:t.properties.meta}).then(({tree:n,className:c,style:p,inlineStyle:u})=>{var g;t.properties.className=((t.properties.className||"")+" "+c).trim(),t.properties.style=((t.properties.style||"")+" "+u).trim(),((g=t.children[0])==null?void 0:g.tagName)==="code"?t.children[0].children=n:t.children=n[0].children||n,p&&o.push(p)});h.push(m)}),h.length&&(await Promise.all(h),r.children.push({type:"element",tagName:"style",children:[{type:"text",value:_(o.join(""))}],properties:{}}))}}const _=e=>{const i=e.split("}").filter(r=>!!r.trim()).map(r=>r.trim()+"}");return Array.from(new Set(i)).join("")},a={theme:{},async highlighter(e,i,r,h){var o,s;try{return window.sessionStorage.getItem("mdc-shiki-highlighter")==="browser"?f(()=>import("./mdc-highlighter.F_RTC_47.js"),__vite__mapDeps([0,1,2,3]),import.meta.url).then(t=>t.default(e,i,r,h)).catch(()=>({})):await $fetch("/api/_mdc/highlight",{params:{code:e,lang:i,theme:JSON.stringify(r),options:JSON.stringify(h)}})}catch(t){if(((o=t==null?void 0:t.response)==null?void 0:o.status)===404)return window.sessionStorage.setItem("mdc-shiki-highlighter","browser"),(s=this.highlighter)==null?void 0:s.call(this,e,i,r,h)}return Promise.resolve({tree:[{type:"text",value:e}],className:"",style:""})}};function w(e={}){const i={...a,...e};return typeof i.highlighter!="function"&&(i.highlighter=a.highlighter),N(i)}const O={},j={highlight:{instance:w,options:{}}},B={theme:{dark:"github-dark",default:"github-light"}};export{B as highlight,j as rehypePlugins,O as remarkPlugins};
