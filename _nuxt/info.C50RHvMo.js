import{s as r,J as u}from"./entry.CFDACm1-.js";import{u as a}from"./asyncData.CrDsr4hO.js";function s(t){const n=[];return t.type==="text"&&n.push(t.value??"ERROR"),t.tag==="li"&&n.push("- "),t.children&&t.children.forEach(o=>n.push(s(o))),n.join(`
`).replaceAll(`- 
`,"- ")}function i(t){return(t?r(t):r()).where({layout:{$eq:"info"}})}async function d(t=i()){const{data:n}=await a("infos",async o=>(await t.find()).map(e=>({title:e.title??"<untitled>",text:e.body?s(e.body):"<undefined>",_content:e})));return u(n)??[]}export{s as g,i as q,d as u};
