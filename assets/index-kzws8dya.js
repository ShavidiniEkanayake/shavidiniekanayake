import{_ as e}from"./index-CVWM_Zk0.js";async function d(r,t=!0){await r.addParticleUpdater("color",async o=>{const{ColorUpdater:a}=await e(()=>import("./ColorUpdater-C46MYtGz.js"),__vite__mapDeps([0,1,2]),import.meta.url);return new a(o)},t)}export{d as loadColorUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./ColorUpdater-C46MYtGz.js","./index-CVWM_Zk0.js","./index-Cy9eyonZ.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
