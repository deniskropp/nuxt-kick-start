import{s as a,M as o}from"./entry.de9aac25.js";import{u as s}from"./asyncData.1491255b.js";function u(t){var n=[];return t.type==="text"&&n.push(t.value??"ERROR"),t.tag==="li"&&n.push("- "),t.children&&t.children.forEach(r=>n.push(u(r))),n.join(`
`).replaceAll(`- 
`,"- ")}function i(t){return(t?a(t):a()).where({layout:{$eq:"info"}})}async function d(t=i()){const{data:n}=await s("infos",async r=>(await t.find()).map(e=>({title:e.title??"<untitled>",text:e.body?u(e.body):"<undefined>",_content:e})));return o(n)??[]}export{u as g,i as q,d as u};
