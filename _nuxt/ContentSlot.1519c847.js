import{f}from"./node.f7b4ab96.js";import{d as u,a4 as i,H as c,L as a,af as d}from"./entry.75e7d0d7.js";const p=u({name:"MDCSlot",functional:!0,props:{name:{type:String,default:"default"},unwrap:{type:[Boolean,String],default:!1},use:{type:Function,default:void 0}},setup(t){const{parent:s}=d(),{default:o}=i(),r=c(()=>typeof t.unwrap=="string"?t.unwrap.split(" "):["*"]);return{fallbackSlot:o,tags:r,parent:s}},render({use:t,unwrap:s,fallbackSlot:o,tags:r,parent:e}){var l;try{let n=t;return typeof t=="string"&&(n=(e==null?void 0:e.slots[t])||((l=e==null?void 0:e.parent)==null?void 0:l.slots[t]),console.warn(`Please set :use="$slots.${t}" in <MDCSlot> component to enable reactivity`)),n?s?f(n(),r):[n()]:o?o():a("div")}catch{return a("div")}}}),g=u({props:{use:{type:Function,default:void 0},unwrap:{type:[Boolean,String],default:!1}},render(t){return a(p,t)}});export{g as default};
