(this["webpackJsonphackernews-react-apollo"]=this["webpackJsonphackernews-react-apollo"]||[]).push([[0],{35:function(e,t,a){e.exports=a(49)},40:function(e,t,a){},49:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),r=a(25),l=a.n(r),o=(a(40),a(12)),i=a(15),u=a(16);function s(){return{width:window.innerWidth}}function m(){var e=Object(n.useState)(s()),t=Object(o.a)(e,2),a=t[0],c=t[1];return Object(n.useEffect)((function(){function e(){c(s())}return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),a}var d=["link 1","link 2","link 3"];var b=function(){var e=Object(n.useState)(!1),t=Object(o.a)(e,2),a=t[0],r=t[1],l=function(){return m().width>720?d.map((function(e,t){return c.a.createElement("li",{key:t},e)})):c.a.createElement(i.a,{icon:u.a,onClick:function(){return r(!a)}})};return c.a.createElement("footer",{className:"footer"},c.a.createElement("div",{className:"logo"},"Keith Raucy"),c.a.createElement("div",{className:"links"},c.a.createElement(l,null)))},E=a(14),f=["/","about","contact"];var p=function(){var e=Object(n.useState)(!1),t=Object(o.a)(e,2),a=t[0],r=t[1],l=function(){return m().width>720?f.map((function(e,t){return c.a.createElement("li",{key:t},c.a.createElement(E.b,{to:"".concat(e)},e))})):c.a.createElement(i.a,{icon:u.a,onClick:function(){return r(!a)}})};return c.a.createElement("header",{className:"header"},c.a.createElement("div",{className:"logo"},"Keith Raucy"),c.a.createElement("div",{className:"links"},c.a.createElement(E.a,null,c.a.createElement(l,null))))};var h=function(){return c.a.createElement("div",null,c.a.createElement("h2",null,"About"))};var v=function(){return c.a.createElement("div",null,c.a.createElement("h2",null,"Contact"))},k=function(){alert("Button clicked!")};var y=function(e){return c.a.createElement("button",{className:e.className,onClick:k},e.title)};var w=function(e){return c.a.createElement("div",{className:"card-container flex"},c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"card-header"},c.a.createElement("h2",null,e.title)),c.a.createElement("div",{className:"card-body"},c.a.createElement("p",null,e.copy)),c.a.createElement("div",{className:"card-footer"},c.a.createElement(y,{className:e.button.class,title:e.button.title}))))},N=[{button:{class:"button",title:"Click"},copy:"This copy is for card number",title:"Card number"},{button:{class:"button",title:"Click"},copy:"This copy is for card number",title:"Card number"},{button:{class:"button",title:"Click"},copy:"This copy is for card number",title:"Card number"},{button:{class:"button",title:"Click"},copy:"This copy is for card number",title:"Card number"},{button:{class:"button",title:"Click"},copy:"This copy is for card number",title:"Card number"},{button:{class:"button",title:"Click"},copy:"This copy is for card number",title:"Card number"},{button:{class:"button",title:"Click"},copy:"This copy is for card number",title:"Card number"}];var C=function(){var e=N.map((function(e,t){return c.a.createElement(w,{button:e.button,copy:"".concat(e.copy," ").concat(t+1),key:t,title:"".concat(e.title," ").concat(t+1)})}));return c.a.createElement("div",{className:"row"},e)},j=a(5);var O=function(){return c.a.createElement(E.a,null,c.a.createElement("div",{className:"App"},c.a.createElement(p,{className:"App-header"}),c.a.createElement("div",{className:"body"},c.a.createElement(j.c,null,c.a.createElement(j.a,{exact:!0,path:"/"},c.a.createElement(C,null)),c.a.createElement(j.a,{path:"/about"},c.a.createElement(h,null)),c.a.createElement(j.a,{path:"/contact"},c.a.createElement(v,null)))),c.a.createElement(b,{className:"App-footer"})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var g=a(51),T=a(30),A=a(33),x=a(34),B=Object(A.a)({uri:"http://localhost:4000"}),S=new T.a({link:B,cache:new x.a});l.a.render(c.a.createElement(g.a,{client:S},c.a.createElement(O,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[35,1,2]]]);
//# sourceMappingURL=main.f5dd172b.chunk.js.map