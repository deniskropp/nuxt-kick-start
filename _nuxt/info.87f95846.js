import{q as u,M as a}from"./entry.a61baf60.js";import{u as s}from"./asyncData.c2d8132a.js";function o(t){var n=[];return t.type==="text"&&n.push(t.value??"ERROR"),t.tag==="li"&&n.push("- "),t.children&&t.children.forEach(r=>n.push(o(r))),n.join(`
`).replaceAll(`- 
`,"- ")}function f(t){return(t?u(t):u()).where({layout:{$eq:"info"}})}function d(t=f()){const{data:n}=s("infos",async r=>(await t.find()).map(e=>({title:e.title??"<untitled>",text:e.body?o(e.body):"<undefined>",_content:e})));return a(n)??[]}export{o as g,f as q,d as u};
