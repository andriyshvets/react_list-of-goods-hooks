(this["webpackJsonpreact_list-of-goods-hooks"]=this["webpackJsonpreact_list-of-goods-hooks"]||[]).push([[0],{12:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var c=n(6),o=n.n(c),r=n(7),s=n(2),u=n(1),b=(n(12),n(0)),i=function(t){var e=t.goods;return Object(b.jsx)("ul",{children:e.map((function(t){return Object(b.jsx)("li",{children:t},t)}))})},a=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],j=function(){var t=Object(u.useState)([].concat(a)),e=Object(s.a)(t,2),n=e[0],c=e[1],o=Object(u.useState)(!1),j=Object(s.a)(o,2),l=j[0],O=j[1],h=Object(u.useState)(!1),d=Object(s.a)(h,2),p=d[0],f=d[1],g=Object(u.useState)(!1),x=Object(s.a)(g,2),k=x[0],y=x[1],m=Object(u.useState)(!1),S=Object(s.a)(m,2),C=S[0],v=S[1];p&&(n.reverse(),f(!1)),k&&(n.sort((function(t,e){return t.localeCompare(e)})),y(!1)),C&&(n.sort((function(t,e){return t.length-e.length})),v(!1));return l?Object(b.jsxs)("div",{className:"App",children:[c,Object(b.jsx)("h1",{children:"Goods"}),Object(b.jsx)(i,{goods:Object(r.a)(n)}),Object(b.jsx)("button",{type:"button",onClick:function(){return f(!0)},children:"Reverse"}),Object(b.jsx)("button",{type:"button",onClick:function(){return y(!0)},children:"Srot by alphabet"}),Object(b.jsx)("button",{type:"button",onClick:function(){f(!1),c([].concat(a))},children:"Reset"}),Object(b.jsx)("button",{type:"button",onClick:function(){return v(!0)},children:"Sort by length"})]}):Object(b.jsx)("button",{type:"button",onClick:function(){return O(!0)},children:"Start"})};o.a.render(Object(b.jsx)(j,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.89ce5a9c.chunk.js.map