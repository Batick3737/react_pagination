(this.webpackJsonpreact_pagination=this.webpackJsonpreact_pagination||[]).push([[0],{10:function(e,t,c){},12:function(e,t,c){"use strict";c.r(t);var a=c(5),n=c.n(a),i=c(2),r=c(1),l=(c(10),c(3)),s=c.n(l);function o(e,t){for(var c=[],a=e;a<=t;a+=1)c.push(a);return c}var j=c(0),u=function(e){var t=e.total,c=e.perPage,a=e.currentPage,n=e.onPageChange,l=o(1,42),u=Object(r.useState)(l),d=Object(i.a)(u,2),b=d[0],h=d[1],p=o(1,Math.ceil(t/c));return Object(r.useEffect)((function(){h(l.filter((function(e){return e<=c})))}),[c]),Object(r.useEffect)((function(){h(l.filter((function(e){return e<=c*a&&e>c*(a-1)})))}),[a]),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("ul",{className:"pagination",children:[Object(j.jsx)("li",{className:s()("page-item",{disabled:1===a}),children:Object(j.jsx)("a",{"data-cy":"prevLink",className:"page-link",href:"#prev","aria-disabled":"true",onClick:function(){n(a-1)},children:"\xab"})}),p.map((function(e){return Object(j.jsx)("li",{className:s()("page-item",{active:e===a}),children:Object(j.jsx)("a",{"data-cy":"pageLink",className:"page-link",href:"#".concat(e),onClick:function(){return n(e)},children:e})})})),Object(j.jsx)("li",{className:s()("page-item",{disabled:a===Math.ceil(t/c)}),children:Object(j.jsx)("a",{"data-cy":"nextLink",className:"page-link",href:"#next","aria-disabled":"false",onClick:function(){n(a+1)},children:"\xbb"})})]}),Object(j.jsx)("ul",{children:b.map((function(e){return Object(j.jsx)("li",{"data-cy":"item",children:"Item ".concat(e)})}))})]})},d=function(){var e=Object(r.useState)(5),t=Object(i.a)(e,2),c=t[0],a=t[1],n=Object(r.useState)(1),l=Object(i.a)(n,2),s=l[0],o=l[1];return Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("h1",{children:"Items with Pagination"}),Object(j.jsxs)("p",{className:"lead","data-cy":"info",children:["Page"," ",s," ","items"," ",c*(s-1)+1," ","-"," ",c*s>42?42:c*s," ","of 42"]}),Object(j.jsxs)("div",{className:"form-group row",children:[Object(j.jsx)("div",{className:"col-3 col-sm-2 col-xl-1",children:Object(j.jsxs)("select",{"data-cy":"perPageSelector",id:"perPageSelector",className:"form-control",value:c,onChange:function(e){a(+e.target.value),o(1)},children:[Object(j.jsx)("option",{value:"3",children:"3"}),Object(j.jsx)("option",{value:"5",children:"5"}),Object(j.jsx)("option",{value:"10",children:"10"}),Object(j.jsx)("option",{value:"20",children:"20"})]})}),Object(j.jsx)("label",{htmlFor:"perPageSelector",className:"col-form-label col",children:"items per page"})]}),Object(j.jsx)(u,{total:42,perPage:c,currentPage:s,onPageChange:o})]})};n.a.render(Object(j.jsx)(d,{}),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.a015bfa4.chunk.js.map