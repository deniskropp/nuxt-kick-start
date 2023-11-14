import{d as ee,u as Z,r as L,o as te,_ as ne,a as oe,b as q,c as $,n as ie,F as se,e as _,f as N,g as B,w as D,T as z,t as ae,h as H,p as re,i as ce,j,k as de,l as le,m as V,q as ue,s as K,v as E,x as G,y as pe,z as fe,A as U}from"./entry.4171314c.js";function J(e,n,r=".",d){if(!F(n))return J(e,{},r,d);const u=Object.assign({},n);for(const i in e){if(i==="__proto__"||i==="constructor")continue;const f=e[i];f!=null&&(d&&d(u,i,f,r)||(Array.isArray(f)&&Array.isArray(u[i])?u[i]=[...f,...u[i]]:F(f)&&F(u[i])?u[i]=J(f,u[i],(r?`${r}.`:"")+i.toString(),d):u[i]=f))}return u}function F(e){if(e===null||typeof e!="object")return!1;const n=Object.getPrototypeOf(e);return(n===null||n===Object.prototype||Object.getPrototypeOf(n)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)}function ve(e){return(...n)=>n.reduce((r,d)=>J(r,d,"",e),{})}const b=e=>(re("data-v-8ccd4628"),e=e(),ce(),e),we=b(()=>_("svg",{viewBox:"0 0 90 90",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[_("path",{d:"M50.0016 71.0999h29.2561c.9293.0001 1.8422-.241 2.6469-.6992.8047-.4582 1.4729-1.1173 1.9373-1.9109.4645-.7936.7088-1.6939.7083-2.6102-.0004-.9162-.2455-1.8163-.7106-2.6095L64.192 29.713c-.4644-.7934-1.1325-1.4523-1.937-1.9105-.8046-.4581-1.7173-.6993-2.6463-.6993-.9291 0-1.8418.2412-2.6463.6993-.8046.4582-1.4726 1.1171-1.937 1.9105l-5.0238 8.5861-9.8224-16.7898c-.4648-.7934-1.1332-1.4522-1.938-1.9102-.8047-.4581-1.7176-.6992-2.6468-.6992-.9292 0-1.842.2411-2.6468.6992-.8048.458-1.4731 1.1168-1.9379 1.9102L6.56062 63.2701c-.46512.7932-.71021 1.6933-.71061 2.6095-.00041.9163.24389 1.8166.70831 2.6102.46443.7936 1.1326 1.4527 1.93732 1.9109.80473.4582 1.71766.6993 2.64686.6992h18.3646c7.2763 0 12.6422-3.1516 16.3345-9.3002l8.9642-15.3081 4.8015-8.1925 14.4099 24.6083H54.8058l-4.8042 8.1925ZM29.2077 62.899l-12.8161-.0028L35.603 30.0869l9.5857 16.4047-6.418 10.9645c-2.4521 3.9894-5.2377 5.4429-9.563 5.4429Z",fill:"currentColor"})],-1)),ye=b(()=>_("span",null,"Preview mode enabled",-1)),_e={key:0},he=b(()=>_("div",{id:"__preview_background"},null,-1)),me=b(()=>_("svg",{id:"__preview_loading_icon",width:"32",height:"32",viewBox:"0 0 24 24"},[_("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 4v5h.582m15.356 2A8.001 8.001 0 0 0 4.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 0 1-15.357-2m15.357 2H15"})],-1)),ge=b(()=>_("p",null,"Initializing the preview...",-1)),ke={key:0},Ce=b(()=>_("div",{id:"__preview_background"},null,-1)),Pe={id:"__preview_loader"},Se=ee({__name:"ContentPreviewMode",props:{previewToken:{type:String,required:!0},apiURL:{type:String,required:!0},syncPreview:{type:Function,required:!0},requestPreviewSyncAPI:{type:Function,required:!0}},setup(e){const n=e,r=["__nuxt_preview","__preview_enabled"],d=j(),u=Z(),i=L(!0),f=L(!1),a=L(!1),p=L("");let c;const m=async()=>{H("previewToken").value="",window.sessionStorage.removeItem("previewToken"),await u.replace({query:{preview:void 0}}),window.location.reload()},R=async T=>{const h=await n.syncPreview(T);if(a.value!==!0){if(!h){setTimeout(()=>R(T),1e3);return}H("previewToken").value&&(a.value=!0,await u.replace({query:{}}),d.callHook("nuxt-studio:preview:ready"),window.parent&&window.self!==window.parent&&c.disconnect())}};return te(async()=>{c=(await ne(()=>import("./index.17e44084.js"),[],import.meta.url)).connect(`${n.apiURL}/preview`,{transports:["websocket","polling"],auth:{token:n.previewToken}});let h;c.on("connect",()=>{h=setTimeout(()=>{a.value||(h=setTimeout(()=>{p.value="Preview sync timed out",a.value=!1},3e4),c.emit("draft:requestSync"))},3e4)});const P=()=>{h&&(clearTimeout(h),h=null)};c.on("draft:sync",async S=>{if(P(),!S){try{c.once("draft:ready",()=>{c.emit("draft:requestSync")}),await n.requestPreviewSyncAPI()}catch(A){switch(P(),A.response.status){case 404:p.value="Preview draft not found",a.value=!1;break;default:p.value="An error occurred while syncing preview",a.value=!1}}return}R(S)}),c.on("draft:unauthorized",()=>{P(),p.value="Unauthorized preview token",a.value=!1}),c.on("disconnect",()=>{P()}),document.body.classList.add(...r),c.on("draft:update",S=>{f.value=!0,n.syncPreview(S),f.value=!1})}),oe(()=>{document.body.classList.remove(...r)}),(T,h)=>(q(),$("div",null,[i.value?(q(),$("div",{key:0,id:"__nuxt_preview",class:ie({__preview_ready:a.value,__preview_refreshing:f.value})},[a.value?(q(),$(se,{key:0},[we,ye,_("button",{onClick:m}," Close ")],64)):N("",!0)],2)):N("",!0),B(z,{name:"preview-loading"},{default:D(()=>[i.value&&!a.value&&!p.value?(q(),$("div",_e,[he,_("div",{id:"__preview_loader"},[me,ge,_("button",{onClick:m}," Cancel ")])])):N("",!0)]),_:1}),B(z,{name:"preview-loading"},{default:D(()=>[p.value?(q(),$("div",ke,[Ce,_("div",Pe,[_("p",null,ae(p.value),1),_("button",{onClick:m}," Exit preview ")])])):N("",!0)]),_:1})]))}});const Ie=de(Se,[["__scopeId","data-v-8ccd4628"]]),Te=(e=[],n,r)=>{const d=[...n||[]],u=[...r||[]],i=JSON.parse(JSON.stringify(e));for(const a of d)if(a.oldPath)if(u.splice(u.findIndex(c=>c.path===a.oldPath),1),d.find(c=>c.path===a.oldPath))i.push({path:a.path,parsed:a.parsed});else{const c=i.find(m=>m.path===a.oldPath);c&&(c.path=a.path,a.parsed?c.parsed=a.parsed:a.pathMeta&&["_file","_path","_id","_locale"].forEach(m=>{c.parsed[m]=a.pathMeta[m]}))}else if(a.new)i.push({path:a.path,parsed:a.parsed});else{const p=i.find(c=>c.path===a.path);p&&Object.assign(p,{path:a.path,parsed:a.parsed})}for(const a of u)i.splice(i.findIndex(p=>p.path===a.path),1);const f=new Intl.Collator(void 0,{numeric:!0});return i.sort((a,p)=>f.compare(a.path,p.path)),i},C={appConfig:"app.config.ts",tokensConfig:"tokens.config.ts"},Ae=e=>{let n;return(...r)=>(n||(n=e()),n)};function Q(e,n){for(const r in e){const d=n[r];r in n||delete e[r],d!==null&&typeof d=="object"&&Q(e[r],n[r])}}function X(e,n){for(const r in n){const d=n[r];d!==null&&typeof d=="object"?Array.isArray(d)&&Array.isArray(e[r])?e[r]=d:(e[r]=e[r]||{},X(e[r],d)):e[r]=d}}const xe=Ae(()=>JSON.parse(JSON.stringify(G()))),W=ve((e,n,r)=>{if(Array.isArray(e[n])&&Array.isArray(r))return e[n]=r,!0}),$e=()=>{const e=j(),{studio:n,content:r}=le().public,d=xe();let u;const i=V("studio-client-db",()=>null),f=V("studio-preview-db-files",()=>[]);i.value||(e.hook("content:storage",t=>{i.value=t}),ue("/non-existing-path").findOne());const a=async(t,s,l=!0)=>{const w=window.sessionStorage.getItem("previewToken"),y=await t.getKeys(`${w}:`);await Promise.all(y.map(v=>t.removeItem(v)));const o=new Set(s.map(v=>v.parsed._id.split(":").shift()));await t.setItem(`${w}$`,JSON.stringify({ignoreSources:Array.from(o)})),await Promise.all(s.map(v=>t.setItem(`${w}:${v.parsed._id}`,JSON.stringify(v.parsed))))},p=t=>{const s=E(e,G);X(s,W(t,d)),t||Q(s,d)},c=t=>{var l,w,y,o;const s=(o=(y=(w=(l=e==null?void 0:e.vueApp)==null?void 0:l._context)==null?void 0:w.config)==null?void 0:y.globalProperties)==null?void 0:o.$pinceauTheme;!s||!(s!=null&&s.updateTheme)||(u||(u=JSON.parse(JSON.stringify((s==null?void 0:s.theme.value)||{}))),E(e,s.updateTheme,[W(t,u)]))},m=async t=>{if(f.value=t.files=t.files||f.value||[],!i.value)return!1;const s=Te(t.files,t.additions,t.deletions),l=s.filter(o=>![C.appConfig,C.tokensConfig].includes(o.path));await a(i.value,l,(t.files||[]).length!==0);const w=s.find(o=>o.path===C.appConfig);p(w==null?void 0:w.parsed);const y=s.find(o=>o.path===C.tokensConfig);return c(y==null?void 0:y.parsed),A(),!0},R=async()=>{const t=window.sessionStorage.getItem("previewToken");await $fetch("api/projects/preview/sync",{baseURL:n==null?void 0:n.apiURL,method:"POST",params:{token:t}})},T=()=>{const t=window.sessionStorage.getItem("previewToken"),s=document.createElement("div");s.id="__nuxt_preview_wrapper",document.body.appendChild(s),pe(Ie,{previewToken:t,apiURL:n==null?void 0:n.apiURL,syncPreview:m,requestPreviewSyncAPI:R}).mount(s)},h=async t=>{var w,y,o;const s=window.sessionStorage.getItem("previewToken");if(!t)return null;t=t.replace(/\/$/,"");let l=await((w=i.value)==null?void 0:w.getItem(`${s}:${t}`));return l||(l=await((y=i.value)==null?void 0:y.getItem(`cached:${t}`))),l||(l=l=await((o=i.value)==null?void 0:o.getItem(t))),l},P=t=>{var l;const s=window.sessionStorage.getItem("previewToken");i.value&&i.value.setItem(`${s}:${(l=t.parsed)==null?void 0:l._id}`,JSON.stringify(t.parsed))},S=async t=>{var l;const s=window.sessionStorage.getItem("previewToken");await((l=i.value)==null?void 0:l.removeItem(`${s}:${t}`))},A=async()=>{if(r!=null&&r.documentDriven){const{pages:t}=E(e,fe);for(const s in t.value)t.value[s]&&(t.value[s]=await h(t.value[s]._id))}await e.hooks.callHookParallel("app:data:refresh")};return{apiURL:n==null?void 0:n.apiURL,contentStorage:i,syncPreviewFiles:a,syncPreviewAppConfig:p,syncPreviewTokensConfig:c,requestPreviewSynchronization:R,findContentWithId:h,updateContent:P,removeContentWithId:S,requestRerender:A,mountPreviewUI:T,initiateIframeCommunication:Y};function Y(){if(!window.parent||window.self===window.parent)return;const t=Z(),s=K(),l=L(""),w=o=>({path:o.path,query:U(o.query),params:U(o.params),fullPath:o.fullPath,meta:U(o.meta)});window.addEventListener("keydown",o=>{(o.metaKey||o.ctrlKey||o.altKey||o.shiftKey)&&window.parent.postMessage({type:"nuxt-studio:preview:keydown",payload:{key:o.key,metaKey:o.metaKey,ctrlKey:o.ctrlKey,shiftKey:o.shiftKey,altKey:o.altKey}},"*")}),window.addEventListener("message",async o=>{if(!["https://nuxt.studio","https://dev.nuxt.studio","http://localhost:3000"].includes(o.origin))return;const{type:v,payload:x={}}=o.data||{};switch(v){case"nuxt-studio:editor:file-selected":{const g=await h(x.path);g&&(g._partial||g._path!==K().path&&(l.value=g._path,t.push(g._path)));break}case"nuxt-studio:editor:file-changed":{const{additions:g=[],deletions:O=[]}=x;for(const k of g)await P(k);for(const k of O)await S(k.path);A();break}case"nuxt-studio:preview:sync":{m(x);break}case"nuxt-studio:config:file-changed":{const{additions:g=[],deletions:O=[]}=x,k=g.find(I=>I.path===C.appConfig);k&&p(k==null?void 0:k.parsed),O.find(I=>I.path===C.appConfig)&&p(void 0);const M=g.find(I=>I.path===C.tokensConfig);M&&c(M==null?void 0:M.parsed),O.find(I=>I.path===C.tokensConfig)&&c(void 0);break}}}),e.hook("page:finish",()=>{y(),e.payload.prerenderedAt&&A()}),e.hook("content:document-driven:finish",({route:o,page:v})=>{o.meta.studio_page_contentId=v==null?void 0:v._id}),e.hook("nuxt-studio:preview:ready",()=>{window.parent.postMessage({type:"nuxt-studio:preview:ready",payload:w(K())},"*"),setTimeout(()=>{y()},100)});function y(){const o=Array.from(window.document.querySelectorAll("[data-content-id]")).map(x=>x.getAttribute("data-content-id")),v=Array.from(new Set([s.meta.studio_page_contentId,...o])).filter(Boolean);if(l.value===v[0]){l.value="";return}window.openContentInStudioEditor(v,{navigate:!0,pageContentId:s.meta.studio_page_contentId})}window.openContentInStudioEditor=(o,v={})=>{window.parent.postMessage({type:"nuxt-studio:preview:navigate",payload:{...w(s),contentIds:o,...v}},"*")}}};export{$e as useStudio};
