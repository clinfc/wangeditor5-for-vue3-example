import{A as k}from"./article.2153302c.js";import{_ as D,d as E,U as O,h as $,s as A,u as N,i as S,r as v,j as U,w as g,c as h,k as u,a as l,b as n,F as w,e as a,o as _,f as R,l as J,v as L,m as H,n as r,g as I}from"./index.4d3aae9f.js";const M=E({components:{UPrism:O},setup(){const e=$(),o=A(k),{editable:i,toolbar:F,clearContent:j,reloadEditor:y}=N({defaultContent:o.value[0].content,config:{placeholder:"\u8BF7\u5F00\u59CB\u4F60\u7684\u8868\u6F14",readOnly:!1}},null),s=S({json:[],jstr:"",html:""}),m=v("json"),p=U(()=>{switch(m.value){case"json":return JSON.stringify(s.json,null,2);case"jstr":return s.jstr;default:return s.html}}),f=v(0);return g(f,d=>{var b;const c=(b=o.value[d])==null?void 0:b.content;c&&(i.defaultContent=c,y())}),g(()=>e.path,d=>{i.extendCache=/true$/.test(d)},{immediate:!0}),{articles:o,editable:i,toolbar:F,clearContent:j,formData:s,select:f,modelType:m,preview:p}}}),P={class:"default-content"},W=r("true"),q=r("false"),z={key:0},G=r(" \u5207\u6362\u524D\u5148 "),K={style:{color:"#cccccc",padding:"0 5px"}},Q=u("br",null,null,-1),X=r("\u9884\u89C8 JSON Array"),Y=r("\u9884\u89C8 JSON String"),Z=r("\u9884\u89C8 HTML String"),x=u("br",null,null,-1);function ee(e,o,i,F,j,y){const s=a("el-radio"),m=a("el-radio-group"),p=a("el-form-item"),f=a("el-option"),d=a("el-select"),c=a("el-form"),b=a("we-editor"),C=a("el-button"),V=a("el-card"),B=a("u-prism");return _(),h(w,null,[u("div",P,[l(c,{inline:!0},{default:n(()=>[l(p,{label:"readOnly\uFF1A"},{default:n(()=>[l(m,{modelValue:e.editable.config.readOnly,"onUpdate:modelValue":o[0]||(o[0]=t=>e.editable.config.readOnly=t)},{default:n(()=>[l(s,{label:!0},{default:n(()=>[W]),_:1}),l(s,{label:!1},{default:n(()=>[q]),_:1})]),_:1},8,["modelValue"])]),_:1}),l(p,{label:"defaultContent\uFF1A"},{default:n(()=>[l(d,{modelValue:e.select,"onUpdate:modelValue":o[1]||(o[1]=t=>e.select=t)},{default:n(()=>[(_(!0),h(w,null,R(e.articles,(t,T)=>(_(),I(f,{key:t.title,label:t.title,value:T},null,8,["label","value"]))),128))]),_:1},8,["modelValue"]),e.editable.extendCache?(_(),h("span",z,[G,u("span",{style:{cursor:"pointer",color:"red"},onClick:o[2]||(o[2]=(...t)=>e.clearContent&&e.clearContent(...t))},"\u6E05\u9664\u7F13\u5B58"),J(u("span",K," \uFF08\u53EA\u8BFB\u6A21\u5F0F\u4E0B\uFF0C\u65E0\u6CD5\u6E05\u9664\u7F13\u5B58\uFF09 ",512),[[L,e.editable.config.readOnly]])])):H("",!0)]),_:1})]),_:1})]),l(b,{"toolbar-class":"toolbar","editable-class":"editable","toolbar-option":e.toolbar,"editable-option":e.editable,modelValue:e.formData.json,"onUpdate:modelValue":o[3]||(o[3]=t=>e.formData.json=t),json:e.formData.jstr,"onUpdate:json":o[4]||(o[4]=t=>e.formData.jstr=t),html:e.formData.html,"onUpdate:html":o[5]||(o[5]=t=>e.formData.html=t)},null,8,["toolbar-option","editable-option","modelValue","json","html"]),Q,l(V,{shadow:"never"},{default:n(()=>[l(C,{disabled:e.modelType==="json",onClick:o[6]||(o[6]=t=>e.modelType="json")},{default:n(()=>[X]),_:1},8,["disabled"]),l(C,{disabled:e.modelType==="jstr",onClick:o[7]||(o[7]=t=>e.modelType="jstr")},{default:n(()=>[Y]),_:1},8,["disabled"]),l(C,{disabled:e.modelType==="html",onClick:o[8]||(o[8]=t=>e.modelType="html")},{default:n(()=>[Z]),_:1},8,["disabled"])]),_:1}),x,l(B,{style:{"--u-scroll-height":"300px"},lang:e.modelType==="html"?"html":"json",content:e.preview},null,8,["lang","content"])],64)}var le=D(M,[["render",ee]]);export{le as default};
//# sourceMappingURL=extend-cache.090fa939.js.map