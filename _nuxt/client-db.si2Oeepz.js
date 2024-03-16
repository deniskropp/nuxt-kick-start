import{aj as P,aC as F,aD as C,aE as $,aF as z,aG as J,aH as R,aI as M,aJ as x,ar as q,m as O,aK as H,ac as W,aL as Q,k as U}from"./entry.CFDACm1-.js";import{d as V}from"./path-meta.DoAANw1_.js";const G="memory",X=()=>{const n=new Map;return{name:G,options:{},hasItem(e){return n.has(e)},getItem(e){return n.get(e)??null},getItemRaw(e){return n.get(e)??null},setItem(e,r){n.set(e,r)},setItemRaw(e,r){n.set(e,r)},removeItem(e){n.delete(e)},getKeys(){return Array.from(n.keys())},clear(){n.clear()},dispose(){n.clear()}}};function Y(n){return!n||typeof n.then!="function"?Promise.resolve(n):n}function h(n,...e){try{return Y(n(...e))}catch(r){return Promise.reject(r)}}function Z(n){const e=typeof n;return n===null||e!=="object"&&e!=="function"}function b(n){const e=Object.getPrototypeOf(n);return!e||e.isPrototypeOf(Object)}function A(n){if(Z(n))return String(n);if(b(n)||Array.isArray(n))return JSON.stringify(n);if(typeof n.toJSON=="function")return A(n.toJSON());throw new Error("[unstorage] Cannot stringify value!")}function N(){if(typeof Buffer===void 0)throw new TypeError("[unstorage] Buffer is not supported!")}const E="base64:";function k(n){if(typeof n=="string")return n;N();const e=Buffer.from(n).toString("base64");return E+e}function tt(n){return typeof n!="string"||!n.startsWith(E)?n:(N(),Buffer.from(n.slice(E.length),"base64"))}const et=["hasItem","getItem","getItemRaw","setItem","setItemRaw","removeItem","getMeta","setMeta","removeMeta","getKeys","clear","mount","unmount"];function rt(n,e){if(e=_(e),!e)return n;const r={...n};for(const s of et)r[s]=(l="",...u)=>n[s](e+l,...u);return r.getKeys=(s="",...l)=>n.getKeys(e+s,...l).then(u=>u.map(c=>c.slice(e.length))),r}function d(n){return n?n.split("?")[0].replace(/[/\\]/g,":").replace(/:+/g,":").replace(/^:|:$/g,""):""}function nt(...n){return d(n.join(":"))}function _(n){return n=d(n),n?n+":":""}const it="memory",st=()=>{const n=new Map;return{name:it,options:{},hasItem(e){return n.has(e)},getItem(e){return n.get(e)??null},getItemRaw(e){return n.get(e)??null},setItem(e,r){n.set(e,r)},setItemRaw(e,r){n.set(e,r)},removeItem(e){n.delete(e)},getKeys(){return Array.from(n.keys())},clear(){n.clear()},dispose(){n.clear()}}};function at(n={}){const e={mounts:{"":n.driver||st()},mountpoints:[""],watching:!1,watchListeners:[],unwatch:{}},r=t=>{for(const i of e.mountpoints)if(t.startsWith(i))return{base:i,relativeKey:t.slice(i.length),driver:e.mounts[i]};return{base:"",relativeKey:t,driver:e.mounts[""]}},s=(t,i)=>e.mountpoints.filter(a=>a.startsWith(t)||i&&t.startsWith(a)).map(a=>({relativeBase:t.length>a.length?t.slice(a.length):void 0,mountpoint:a,driver:e.mounts[a]})),l=(t,i)=>{if(e.watching){i=d(i);for(const a of e.watchListeners)a(t,i)}},u=async()=>{if(!e.watching){e.watching=!0;for(const t in e.mounts)e.unwatch[t]=await D(e.mounts[t],l,t)}},c=async()=>{if(e.watching){for(const t in e.unwatch)await e.unwatch[t]();e.unwatch={},e.watching=!1}},g=(t,i,a)=>{const o=new Map,f=m=>{let w=o.get(m.base);return w||(w={driver:m.driver,base:m.base,items:[]},o.set(m.base,w)),w};for(const m of t){const w=typeof m=="string",v=d(w?m:m.key),y=w?void 0:m.value,I=w||!m.options?i:{...i,...m.options},K=r(v);f(K).items.push({key:v,value:y,relativeKey:K.relativeKey,options:I})}return Promise.all([...o.values()].map(m=>a(m))).then(m=>m.flat())},p={hasItem(t,i={}){t=d(t);const{relativeKey:a,driver:o}=r(t);return h(o.hasItem,a,i)},getItem(t,i={}){t=d(t);const{relativeKey:a,driver:o}=r(t);return h(o.getItem,a,i).then(f=>P(f))},getItems(t,i){return g(t,i,a=>a.driver.getItems?h(a.driver.getItems,a.items.map(o=>({key:o.relativeKey,options:o.options})),i).then(o=>o.map(f=>({key:nt(a.base,f.key),value:P(f.value)}))):Promise.all(a.items.map(o=>h(a.driver.getItem,o.relativeKey,o.options).then(f=>({key:o.key,value:P(f)})))))},getItemRaw(t,i={}){t=d(t);const{relativeKey:a,driver:o}=r(t);return o.getItemRaw?h(o.getItemRaw,a,i):h(o.getItem,a,i).then(f=>tt(f))},async setItem(t,i,a={}){if(i===void 0)return p.removeItem(t);t=d(t);const{relativeKey:o,driver:f}=r(t);f.setItem&&(await h(f.setItem,o,A(i),a),f.watch||l("update",t))},async setItems(t,i){await g(t,i,async a=>{if(a.driver.setItems)return h(a.driver.setItems,a.items.map(o=>({key:o.relativeKey,value:A(o.value),options:o.options})),i);a.driver.setItem&&await Promise.all(a.items.map(o=>h(a.driver.setItem,o.relativeKey,A(o.value),o.options)))})},async setItemRaw(t,i,a={}){if(i===void 0)return p.removeItem(t,a);t=d(t);const{relativeKey:o,driver:f}=r(t);if(f.setItemRaw)await h(f.setItemRaw,o,i,a);else if(f.setItem)await h(f.setItem,o,k(i),a);else return;f.watch||l("update",t)},async removeItem(t,i={}){typeof i=="boolean"&&(i={removeMeta:i}),t=d(t);const{relativeKey:a,driver:o}=r(t);o.removeItem&&(await h(o.removeItem,a,i),(i.removeMeta||i.removeMata)&&await h(o.removeItem,a+"$",i),o.watch||l("remove",t))},async getMeta(t,i={}){typeof i=="boolean"&&(i={nativeOnly:i}),t=d(t);const{relativeKey:a,driver:o}=r(t),f=Object.create(null);if(o.getMeta&&Object.assign(f,await h(o.getMeta,a,i)),!i.nativeOnly){const m=await h(o.getItem,a+"$",i).then(w=>P(w));m&&typeof m=="object"&&(typeof m.atime=="string"&&(m.atime=new Date(m.atime)),typeof m.mtime=="string"&&(m.mtime=new Date(m.mtime)),Object.assign(f,m))}return f},setMeta(t,i,a={}){return this.setItem(t+"$",i,a)},removeMeta(t,i={}){return this.removeItem(t+"$",i)},async getKeys(t,i={}){t=_(t);const a=s(t,!0);let o=[];const f=[];for(const m of a){const v=(await h(m.driver.getKeys,m.relativeBase,i)).map(y=>m.mountpoint+d(y)).filter(y=>!o.some(I=>y.startsWith(I)));f.push(...v),o=[m.mountpoint,...o.filter(y=>!y.startsWith(m.mountpoint))]}return t?f.filter(m=>m.startsWith(t)&&!m.endsWith("$")):f.filter(m=>!m.endsWith("$"))},async clear(t,i={}){t=_(t),await Promise.all(s(t,!1).map(async a=>{if(a.driver.clear)return h(a.driver.clear,a.relativeBase,i);if(a.driver.removeItem){const o=await a.driver.getKeys(a.relativeBase||"",i);return Promise.all(o.map(f=>a.driver.removeItem(f,i)))}}))},async dispose(){await Promise.all(Object.values(e.mounts).map(t=>L(t)))},async watch(t){return await u(),e.watchListeners.push(t),async()=>{e.watchListeners=e.watchListeners.filter(i=>i!==t),e.watchListeners.length===0&&await c()}},async unwatch(){e.watchListeners=[],await c()},mount(t,i){if(t=_(t),t&&e.mounts[t])throw new Error(`already mounted at ${t}`);return t&&(e.mountpoints.push(t),e.mountpoints.sort((a,o)=>o.length-a.length)),e.mounts[t]=i,e.watching&&Promise.resolve(D(i,l,t)).then(a=>{e.unwatch[t]=a}).catch(console.error),p},async unmount(t,i=!0){t=_(t),!(!t||!e.mounts[t])&&(e.watching&&t in e.unwatch&&(e.unwatch[t](),delete e.unwatch[t]),i&&await L(e.mounts[t]),e.mountpoints=e.mountpoints.filter(a=>a!==t),delete e.mounts[t])},getMount(t=""){t=d(t)+":";const i=r(t);return{driver:i.driver,base:i.base}},getMounts(t="",i={}){return t=d(t),s(t,i.parents).map(o=>({driver:o.driver,base:o.mountpoint}))}};return p}function D(n,e,r){return n.watch?n.watch((s,l)=>e(s,r+l)):()=>{}}async function L(n){typeof n.dispose=="function"&&await h(n.dispose)}function ot(n={}){const e=ut(r,n.operators);function r(s,l){return typeof l!="object"||l instanceof RegExp?e.$eq(s,l):Object.keys(l||{}).every(u=>{const c=l[u];if(u.startsWith("$")&&e[u]){const g=e[u];return typeof g=="function"?g(s,c):!1}return r(F(s,u),c)})}return r}function ut(n,e={}){return{$match:(r,s)=>n(r,s),$eq:(r,s)=>s instanceof RegExp?s.test(r):r===s,$ne:(r,s)=>s instanceof RegExp?!s.test(r):r!==s,$not:(r,s)=>!n(r,s),$and:(r,s)=>(C(s,"$and requires an array as condition"),s.every(l=>n(r,l))),$or:(r,s)=>(C(s,"$or requires an array as condition"),s.some(l=>n(r,l))),$in:(r,s)=>$(s).some(l=>Array.isArray(r)?n(r,{$contains:l}):n(r,l)),$contains:(r,s)=>(r=Array.isArray(r)?r:String(r),$(s).every(l=>r.includes(l))),$icontains:(r,s)=>{if(typeof s!="string")throw new TypeError("$icontains requires a string, use $contains instead");return r=String(r).toLocaleLowerCase(),$(s).every(l=>r.includes(l.toLocaleLowerCase()))},$containsAny:(r,s)=>(C(s,"$containsAny requires an array as condition"),r=Array.isArray(r)?r:String(r),s.some(l=>r.includes(l))),$exists:(r,s)=>s?typeof r<"u":typeof r>"u",$type:(r,s)=>typeof r===String(s),$regex:(r,s)=>{if(!(s instanceof RegExp)){const l=String(s).match(/\/(.*)\/([dgimsuy]*)$/);s=l?new RegExp(l[1],l[2]||""):new RegExp(s)}return s.test(String(r||""))},$lt:(r,s)=>r<s,$lte:(r,s)=>r<=s,$gt:(r,s)=>r>s,$gte:(r,s)=>r>=s,...e||{}}}function ct(n){const e=ot(),r=(u,{query:c,before:g,after:p})=>{const t=typeof c=="string"?{_path:c}:c,i=u.findIndex(o=>e(o,t));g=g??1,p=p??1;const a=new Array(g+p).fill(null,0);return i===-1?a:a.map((o,f)=>u[i-g+f+ +(f>=g)]||null)},s=[(u,c)=>{const g=u.result.filter(p=>$(c.where).every(t=>e(p,t)));return{...u,result:g,total:g.length}},(u,c)=>$(c.sort).forEach(g=>J(u.result,g)),function(c,g,p){var t;if(g.surround){let i=r(((t=c.result)==null?void 0:t.length)===1?p:c.result,g.surround);i=R(M(g.without))(i),i=R(x(g.only))(i),c.surround=i}return c}],l=[(u,c)=>{if(c.skip)return{...u,result:u.result.slice(c.skip),skip:c.skip}},(u,c)=>{if(c.limit)return{...u,result:u.result.slice(0,c.limit),limit:c.limit}},function(c,g,p){var t,i,a;if(g.dirConfig){const o=((t=c.result[0])==null?void 0:t._path)||((a=(i=g.where)==null?void 0:i.find(f=>f._path))==null?void 0:a._path);if(typeof o=="string"){const f=p.find(m=>m._path===q(o,"_dir"));f&&(c.dirConfig={_path:f._path,...M(["_"])(f)})}}return c},(u,c)=>({...u,result:R(M(c.without))(u.result)}),(u,c)=>({...u,result:R(x(c.only))(u.result)})];return async u=>{const c=await n(),g=u.params(),p={result:c,limit:0,skip:0,total:c.length},t=s.reduce((a,o)=>o(a,g,c)||a,p);if(g.count)return{result:t.result.length};const i=l.reduce((a,o)=>o(a,g,c)||a,t);return g.first?{...z(["skip","limit","total"])(i),result:i.result[0]}:i}}function B(n){const e=ct(n);return async r=>{var u;r.params().first&&r.withDirConfig();const s=r.params(),l=await e(r);return s.surround?l==null?void 0:l.surround:(l!=null&&l.dirConfig&&(l.result={_path:(u=l.dirConfig)==null?void 0:u._path,...l.result,_dir:l.dirConfig}),l==null?void 0:l.result)}}function lt(n,e){const{navigation:r}=O().public.content;if(r===!1)return[];const s=u=>({...mt(["title",...r.fields])(u),...gt(u==null?void 0:u.navigation)?u.navigation:{}}),l=n.sort((u,c)=>u._path.localeCompare(c._path)).reduce((u,c)=>{const g=c._path.substring(1).split("/"),p=c._id.split(":").slice(1),t=!!p[p.length-1].match(/([1-9][0-9]*\.)?index.md/g),i=f=>({title:f.title,_path:f._path,_file:f._file,children:[],...s(f),...f._draft?{_draft:!0}:{}}),a=i(c);if(t){const f=e[a._path];if(typeof(f==null?void 0:f.navigation)<"u"&&!(f!=null&&f.navigation))return u;if(c._path!=="/"){const m=i(c);a.children.push(m)}Object.assign(a,s(f))}return g.length===1?(u.push(a),u):(g.slice(0,-1).reduce((f,m,w)=>{const v="/"+g.slice(0,w+1).join("/"),y=e[v];if(typeof(y==null?void 0:y.navigation)<"u"&&!y.navigation)return[];let I=f.find(K=>K._path===v);return I||(I={title:V(m),_path:v,_file:c._file,children:[],...s(y)},f.push(I)),I.children},u).push(a),u)},[]);return T(l)}const ft=new Intl.Collator(void 0,{numeric:!0,sensitivity:"base"});function T(n){var r;n.forEach(s=>{s._file=s._file.split(".").slice(0,-1).join(".")});const e=n.sort((s,l)=>ft.compare(s._file,l._file));for(const s of e)(r=s.children)!=null&&r.length?T(s.children):delete s.children,delete s._file;return n}function mt(n){return e=>(e=e||{},n&&n.length?n.filter(r=>typeof e[r]<"u").reduce((r,s)=>Object.assign(r,{[s]:e[s]}),{}):e)}function gt(n){return Object.prototype.toString.call(n)==="[object Object]"}const pt=n=>Q(n,O().public.content.api.baseURL),ht=rt(at({driver:X()}),"@content");function dt(n){async function e(){const r=new Set(await n.getKeys("cache:")),s=W().getPreviewToken();if(s){const u=await n.getItem(`${s}$`).then(p=>p||{});if(Array.isArray(u.ignoreSources)){const p=u.ignoreSources.map(t=>`cache:${t.trim()}:`);for(const t of r)p.some(i=>t.startsWith(i))&&r.delete(t)}const c=await n.getKeys(`${s}:`),g=await Promise.all(c.map(p=>n.getItem(p)));for(const p of g)r.delete(`cache:${p._id}`),p.__deleted||r.add(`${s}:${p._id}`)}return await Promise.all(Array.from(r).map(u=>n.getItem(u)))}return{storage:n,fetch:B(e),query:r=>H(B(e),{initialParams:r,legacy:!0})}}let S=null,j=null;async function wt(){return j?await j:S||(j=yt(),S=await j),S}async function yt(){const n=U(),{content:e}=O().public,r=dt(ht),s=await r.storage.getItem("integrity");if(e.integrity!==+(s||0)){const{contents:l,navigation:u}=await $fetch(pt(e.integrity?`cache.${e.integrity}.json`:"cache.json"));await Promise.all(l.map(c=>r.storage.setItem(`cache:${c._id}`,c))),await r.storage.setItem("navigation",u),await r.storage.setItem("integrity",e.integrity)}return await n.callHook("content:storage",r.storage),r}async function _t(n){const e=await wt();if(!W().getPreviewToken()&&Object.keys(n||{}).length===0)return e.storage.getItem("navigation");const r=await e.query(n).where({_partial:!1,navigation:{$ne:!1}}).find(),l=(await e.query().where({_path:/\/_dir$/i,_partial:!0}).find()).reduce((u,c)=>{var p;((p=c.title)==null?void 0:p.toLowerCase())==="dir"&&(c.title=void 0);const g=c._path.split("/").slice(0,-1).join("/")||"/";return u[g]={...c,...c.body},u},{});return lt(r,l)}export{ht as contentStorage,dt as createDB,_t as generateNavigation,wt as useContentDatabase};
