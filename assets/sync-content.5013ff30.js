var E=Object.defineProperty;var d=Object.getOwnPropertySymbols;var F=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable;var c=(o,e,t)=>e in o?E(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t,f=(o,e)=>{for(var t in e||(e={}))F.call(e,t)&&c(o,t,e[t]);if(d)for(var t of d(e))C.call(e,t)&&c(o,t,e[t]);return o};import{_ as g,d as h,U as j,r as A,p as B,u as y,c as k,a as n,b as a,F as v,k as U,e as u,o as $,n as w}from"./index.4d3aae9f.js";const N=h({components:{UPrism:j},setup(){const o=A(null),e=B({json:"",html:""}),t={json:[{required:!0,message:"\u5185\u5BB9\u4E0D\u80FD\u4E3A\u7A7A",trigger:"change"}]},{editable:m,toolbar:i,syncContent:p}=y({delay:5e3,config:{placeholder:"\u65E0\u64CD\u4F5C 5s \u540E\u624D\u4F1A\u540C\u6B65\u8868\u5355\u6570\u636E\uFF0C\u8868\u5355\u63D0\u4EA4\u524D\u4F7F\u7528 syncContent API \u5F3A\u5236\u540C\u6B65\u6570\u636E\uFF0C\u786E\u4FDD\u6570\u636E\u4E0D\u88AB\u4E22\u5931"}});function s(){p(),o.value.validate(l=>{!l||console.log(f({},e))})}return{ruleForm:o,formData:e,formRule:t,editable:m,toolbar:i,submit:s}}}),V=w("\u63D0\u4EA4\u8868\u5355"),P=U("br",null,null,-1);function R(o,e,t,m,i,p){const s=u("we-editor"),l=u("el-form-item"),b=u("el-button"),_=u("el-form"),D=u("u-prism");return $(),k(v,null,[n(_,{ref:"ruleForm","label-position":"top",model:o.formData,rules:o.formRule},{default:a(()=>[n(l,{label:"\u6587\u7AE0",prop:"json"},{default:a(()=>[n(s,{"toolbar-class":"toolbar","editable-class":"editable","toolbar-option":o.toolbar,"editable-option":o.editable,json:o.formData.json,"onUpdate:json":e[0]||(e[0]=r=>o.formData.json=r),html:o.formData.html,"onUpdate:html":e[1]||(e[1]=r=>o.formData.html=r)},null,8,["toolbar-option","editable-option","json","html"])]),_:1}),n(l,null,{default:a(()=>[n(b,{type:"primary",onClick:o.submit},{default:a(()=>[V]),_:1},8,["onClick"])]),_:1})]),_:1},8,["model","rules"]),P,n(D,{style:{"--u-scroll-height":"300px"},lang:"json",content:o.formData.json},null,8,["content"])],64)}var T=g(N,[["render",R]]);export{T as default};
//# sourceMappingURL=sync-content.5013ff30.js.map