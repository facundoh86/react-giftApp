(this["webpackJsonp04-gift-expert-app"]=this["webpackJsonp04-gift-expert-app"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},16:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(6),i=n.n(c),o=(n(14),n(15),n(16),n(1)),l=n(8),u=function(e){var t=e.setCategories,n=Object(a.useState)(""),c=Object(o.a)(n,2),i=c[0],u=c[1];return r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),i.trim().length>2&&(t((function(e){return[i].concat(Object(l.a)(e))})),u(""))}},r.a.createElement("h2",null,"Add categories"),r.a.createElement("input",{type:"text",value:i,onChange:function(e){u(e.target.value)}}))},s=n(4),m=n.n(s),d=n(7),f=function(){var e=Object(d.a)(m.a.mark((function e(t){var n,a,r,c,i;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://api.giphy.com/v1/gifs/search?q=".concat(encodeURI(t),"&limit=5&api_key=4yP59quFLVT42Ny4Ly7X0SlBoBhy89Xa"),e.next=3,fetch(n);case 3:return a=e.sent,e.next=6,a.json();case 6:return r=e.sent,c=r.data,i=c.map((function(e){var t;return{id:e.id,image:e.images,title:e.title,url:null===(t=e.images)||void 0===t?void 0:t.downsized_medium.url}})),e.abrupt("return",i);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(e){var t=e.id,n=e.title,a=e.url;return console.log(t,n,a),r.a.createElement("div",{className:"card animate__animated animate__fadeInUp "},r.a.createElement("img",{src:a,alt:n}),r.a.createElement("p",null,n))},g=function(e){var t=e.category,n=function(e){var t=Object(a.useState)({data:[],loading:!0}),n=Object(o.a)(t,2),r=n[0],c=n[1];return Object(a.useEffect)((function(){f(e).then((function(e){c({data:e,loading:!1})}))}),[e]),r}(t),c=n.loading,i=n.data;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",{className:"animate__animated animate__fadeInDownBig"}," ",t),c&&r.a.createElement("p",{className:"animate__animated animate__hinge"},"Loading..."),r.a.createElement("div",{className:"card-grid"},i.map((function(e){return r.a.createElement(p,Object.assign({key:e.id},e))}))))},h=function(){var e=Object(a.useState)(["Futbol"]),t=Object(o.a)(e,2),n=t[0],c=t[1];return r.a.createElement("div",null,r.a.createElement("h2",null,"GifExpertApp"),r.a.createElement(u,{setCategories:c}),r.a.createElement("hr",null),r.a.createElement("ol",null,n.map((function(e){return r.a.createElement(g,{key:e,category:e})}))))};var v=function(){return r.a.createElement(h,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,t,n){e.exports=n(18)}},[[9,1,2]]]);
//# sourceMappingURL=main.77a15e4a.chunk.js.map