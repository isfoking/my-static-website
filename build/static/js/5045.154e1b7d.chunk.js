"use strict";(self.webpackChunkgame_phone=self.webpackChunkgame_phone||[]).push([[5045],{55045:function(n,e,i){i.r(e),i.d(e,{default:function(){return u}});var s,a=i(54816),t=i(30168),l=i(83742),o=i(4279).ZP.div(s||(s=(0,t.Z)(["\n  .header-box {\n    margin: 10px 0;\n    padding: 10px 0;\n    height: 130px;\n    background-color: #4762ff;\n    ","\n    justify-content: space-around;\n    .vip-box {\n      position: relative;\n      .vip-img {\n        width: 125px;\n        height: 98px;\n      }\n      .vip-level {\n        position: absolute;\n        color: #fff;\n        font-size: 30px;\n        bottom: 15px;\n        left: 50%;\n        transform: translateX(-50%);\n      }\n    }\n    .header-center {\n      text-align: center;\n      width: 392px;\n      .content {\n        color: #fff;\n        font-size: 24px;\n        margin-bottom: 18px;\n      }\n    }\n  }\n  .list-container {\n    font-size: 20px;\n    color: #fff;\n    .list-container-header {\n      text-align: center;\n      ","\n      border-top-left-radius: 20px;\n      border-top-right-radius: 20px;\n      height: 65px;\n      background-color: #0f1527;\n    }\n    .vip {\n      width: 185px;\n    }\n    .harian {\n      width: 180px;\n    }\n    .level-up {\n      width: 225px;\n    }\n    .mingguan {\n      width: 180px;\n    }\n    .content {\n      text-align: center;\n\n      .item {\n        position: relative;\n        ","\n        padding: 30px 0;\n        background-color: #0a0e1a;\n        margin-bottom: 1px;\n        .vip {\n          position: relative;\n          .vip-img {\n            width: 104px;\n            height: 82px;\n          }\n          .vip-level {\n            position: absolute;\n            color: #fff;\n            font-size: 24px;\n            bottom: 10px;\n            left: 49%;\n            transform: translateX(-50%);\n          }\n        }\n      }\n      .item::before {\n        content: '';\n        display: block;\n        width: calc(100% - 90px);\n        height: 1px;\n        background-color: #1d2641;\n        position: absolute;\n        bottom: 0;\n        left: 50%;\n        transform: translateX(-50%);\n      }\n      .item:last-of-type::before {\n        height: 0;\n      }\n    }\n  }\n"])),l.RV,l.RV,l.RV),r=i(69896),c=i(99274),p=i(10549),d=i(96899),v=i(63667),x=i(42374),h=function(){var n=(0,p.CG)((function(n){return n.user.userInfo})),e=null===n||void 0===n?void 0:n.vip_list,s=(0,a.useMemo)((function(){return n.vip_level+1}),[n]),t=(0,a.useMemo)((function(){return e.find((function(n){return s===n.vip_level})).vip_exp}),[s,n]),l=(0,a.useMemo)((function(){return Math.floor(n.vip_exp/n.vip_up_exp*100)}),[n]);return(0,x.jsxs)(o,{children:[(0,x.jsx)(d.rU,{to:"/top-up",children:(0,x.jsxs)("div",{className:"header-box",children:[(0,x.jsxs)("div",{className:"vip-box",children:[(0,x.jsx)("img",{className:"vip-img",src:i(44615),alt:""}),(0,x.jsx)("div",{className:"vip-level",children:n.vip_level})]}),(0,x.jsxs)("div",{className:"header-center",children:[(0,x.jsxs)("div",{className:"content",children:["Top up ",t," lagi untuk menjadi ",s]}),(0,x.jsx)(r.ko,{percent:l,style:{"--fill-color":"#e79709"}})]}),(0,x.jsx)(c.Z,{fontSize:24,color:"#fff"})]})}),(0,x.jsxs)("div",{className:"list-container",children:[(0,x.jsxs)("div",{className:"list-container-header",children:[(0,x.jsx)("div",{className:"vip",children:"vip"}),(0,x.jsx)("div",{className:"harian",children:"Jumlah Deposit"}),(0,x.jsx)("div",{className:"level-up",children:"Bonus Naik Level"}),(0,x.jsx)("div",{className:"mingguan",children:"Bonus Mingguan"}),(0,x.jsx)("div",{className:"mingguan",children:"Bonus Harian"})]}),(0,x.jsx)("div",{className:"content",children:null===e||void 0===e?void 0:e.map((function(n){return(0,x.jsxs)("div",{className:"item",children:[(0,x.jsxs)("div",{className:"vip",children:[(0,x.jsx)("img",{className:"vip-img",src:i(44615),alt:""}),(0,x.jsx)("div",{className:"vip-level",children:n.vip_level})]}),(0,x.jsxs)("div",{className:"harian",children:[" ",(0,v.lb)(n.vip_exp)||"-"]}),(0,x.jsxs)("div",{className:"level-up",children:[" ",(0,v.lb)(n.up_cash_back)||"-"]}),(0,x.jsxs)("div",{className:"mingguan",children:[" ",(0,v.lb)(n.week_cash_back)||"-"]}),(0,x.jsxs)("div",{className:"mingguan",children:[" ",(0,v.lb)(n.daily_cash_back)||"-"]})]},n.vip_level)}))})]})]})},u=(0,a.memo)(h)},44615:function(n,e,i){n.exports=i.p+"static/media/vip.a59befb3e0370ae485fd.png"}}]);