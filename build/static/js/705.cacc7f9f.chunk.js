"use strict";(self.webpackChunkgame_phone=self.webpackChunkgame_phone||[]).push([[705],{50705:function(e,n,i){i.r(n),i.d(n,{default:function(){return j}});var r=i(74165),a=i(15861),o=i(29439),l=i(54816),t=i(41061),s=i(69896),c=i(30708),u=i(10549),d=i(97994),m=i(90277),v=i(52810),f=i(42374),h=function(e){var n=e.value,i=void 0===n?"":n,l=e.onChange,t=e.form,s=(0,m.iQ)(120,{key:"verifikasi-phone",cache:!0}),u=(0,o.Z)(s,3),d=u[0],h=u[1],x=u[2],p=(0,c.Z)((0,a.Z)((0,r.Z)().mark((function e(){var n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!x){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,t.validateFields(["mobile"]);case 4:return n=t.getFieldValue("mobile"),e.next=7,(0,v.b1)(n);case 7:h();case 8:case"end":return e.stop()}}),e)}))),{manual:!0}).run;return(0,f.jsx)("div",{className:"item",children:(0,f.jsxs)("div",{className:"code-box",children:[(0,f.jsx)("input",{type:"text",value:i,onChange:function(e){null===l||void 0===l||l(e.target.value)},placeholder:"Masukkan kode verifikasi!"}),(0,f.jsx)("div",{className:"code",onClick:p,children:x?d:"Kirim Kode"})]})})},x=i(22454),p=i(54062),b=i(12621),k=function(e,n){return n.mobile?Promise.resolve():Promise.reject(new Error("Nomor ponsel minimal 12 digit!"))},g=function(){var e,n=(0,b.Z)().isResize,i=(0,u.CG)((function(e){return e.user.areaCodes})),m=s.l0.useForm(),v=(0,o.Z)(m,1)[0],g=(0,u.TL)(),j=(0,c.Z)((0,a.Z)((0,r.Z)().mark((function e(){var n,i;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.validateFields();case 2:n=v.getFieldsValue(),console.log(n,"data"),i=(0,p.FX)(n),console.log(i,"result"),g((0,d.qr)(i));case 7:case"end":return e.stop()}}),e)}))),{manual:!0}).run;return(0,l.useEffect)((function(){g((0,d.PQ)())}),[]),(0,f.jsxs)(t.Ck,{children:[(0,f.jsxs)(s.l0,{form:v,initialValues:{mobile:{area_id:null===(e=i[0])||void 0===e?void 0:e.area_id,mobile:""}},children:[(0,f.jsx)(s.l0.Item,{name:"mobile",rules:[{required:!0,message:"Nomor ponsel minimal 12 digit!"},{validator:k}],children:(0,f.jsx)(x.Z,{})}),(0,f.jsx)(s.l0.Item,{name:"verify",rules:[{required:!0,message:"mungkin ada di Email sampah!"}],children:(0,f.jsx)(h,{form:v})})]}),n&&(0,f.jsx)("div",{className:"btn-wrapper",children:(0,f.jsx)(s.zx,{block:!0,color:"primary",size:"middle",onClick:j,children:"Okay"})})]})},j=(0,l.memo)(g)},22454:function(e,n,i){var r=i(1413),a=(i(54816),i(69896)),o=i(10549),l=i(42374);n.Z=function(e){var n=e.value,i=void 0===n?{area_id:"86",mobile:""}:n,t=e.onChange,s=(0,o.CG)((function(e){return e.user.areaCodes})),c=function(e){null===t||void 0===t||t((0,r.Z)((0,r.Z)({},i),e))};return(0,l.jsxs)("div",{className:"item",children:[(0,l.jsx)("div",{className:"title",children:"Phone"}),(0,l.jsxs)("div",{className:"mobile-field",children:[(0,l.jsx)(a.cW,{cancelText:"batalkan",confirmText:"konfirmasi",style:{"--title-font-size":"16px","--header-button-font-size":"16px","--item-font-size":"16px","--item-height":"50px"},columns:function(){return[s.map((function(e){return{label:e.code,value:e.area_id}}))]},onConfirm:function(e){var n=e[0];null!==n&&c({area_id:n})},value:[i.area_id],children:function(e,n){var i,r=n.open;return(0,l.jsx)("div",{onClick:r,className:"code",children:e.every((function(e){return null===e}))?"+".concat(null===(i=s[0])||void 0===i?void 0:i.code):e.map((function(e){var n;return null!==(n="+".concat(null===e||void 0===e?void 0:e.label))&&void 0!==n?n:"+".concat(s[0].code)}))})}}),(0,l.jsx)("input",{type:"text",placeholder:"Nomor ponsel minimal 12 digit!",value:i.mobile,onChange:function(e){c({mobile:e.target.value})}})]})]})}}}]);