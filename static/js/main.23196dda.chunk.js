(this["webpackJsonpreact_goods-selector"]=this["webpackJsonpreact_goods-selector"]||[]).push([[0],{13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var s=n(3),c=n.n(s),o=n(6),l=n(4),a=n(5),r=n(8),i=n(7),u=n(1),d=n.n(u),p=(n(13),n(0)),b=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],j=function(e){Object(r.a)(n,e);var t=Object(i.a)(n);function n(){var e;Object(l.a)(this,n);for(var s=arguments.length,c=new Array(s),a=0;a<s;a++)c[a]=arguments[a];return(e=t.call.apply(t,[this].concat(c))).state={selectedGoods:["Jam"]},e.onSelect=function(t){e.setState((function(e){return{selectedGoods:[].concat(Object(o.a)(e.selectedGoods),[t])}}))},e.onDelete=function(t){e.setState((function(e){return{selectedGoods:e.selectedGoods.filter((function(e){return e!==t}))}}))},e.deleteAll=function(){e.setState({selectedGoods:[]})},e.listToShow=function(){return 1===e.state.selectedGoods.length?"".concat(e.state.selectedGoods.join(", ")," is selected"):"".concat(e.state.selectedGoods.join(", ")," are selected")},e}return Object(a.a)(n,[{key:"render",value:function(){var e=this;return Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)("h1",{className:"App__title",children:this.state.selectedGoods.length>0?this.listToShow():"No goods selected"}),Object(p.jsx)("ul",{className:"list",children:b.map((function(t){return Object(p.jsxs)("li",{className:"list__item",children:[Object(p.jsx)("p",{className:"list__name",children:t}),e.state.selectedGoods.includes(t)?Object(p.jsx)("button",{type:"button",onClick:function(){return e.onDelete(t)},className:"App__button App__button--remove",children:"Remove"}):Object(p.jsx)("button",{type:"button",onClick:function(){return e.onSelect(t)},className:"App__button App__button--select",children:"Select"})]},t)}))}),Object(p.jsx)("button",{type:"button",onClick:function(){return e.deleteAll()},className:"App__button App__button--close",children:"Clear"})]})}}]),n}(d.a.Component);c.a.render(Object(p.jsx)(j,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.23196dda.chunk.js.map