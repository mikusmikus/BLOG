(this.webpackJsonpblog=this.webpackJsonpblog||[]).push([[0],{38:function(t,e,c){},57:function(t,e,c){},65:function(t,e,c){"use strict";c.r(e);var n=c(0),s=c(1),a=c.n(s),i=c(29),o=c.n(i),r=c(8),l=c(9),j=c(2),b=(c(38),c(39),c(13)),d=c(15),u=c.n(d),O=c(30),h=(c(57),function(t){t.id;var e=t.title,c=t.pictureArr,s=t.singlePostClickHandler;return Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)("button",{type:"button",className:"post",onClick:s,children:[Object(n.jsx)("h1",{className:"heading",children:e}),Object(n.jsx)("div",{className:"image-wrapper",children:c&&Object(n.jsx)("img",{src:c.image,alt:c.name,className:"image"},c.id)})]})})}),m=function(){return Object(n.jsx)("button",{type:"button",onClick:function(){window.scrollTo({top:0,left:0,behavior:"smooth"})},children:"on Top"})},x="https://jsonplaceholder.typicode.com/posts",p="https://rickandmortyapi.com/api/character",v=function(){var t=Object(s.useState)([]),e=Object(r.a)(t,2),c=e[0],a=e[1],i=Object(s.useState)([]),o=Object(r.a)(i,2),l=o[0],d=o[1],v=Object(s.useState)(p),f=Object(r.a)(v,2),g=f[0],N=f[1],k=Object(s.useRef)({next:""}),_=Object(j.g)(),B=function(t){return u.a.get(t)};return Object(s.useEffect)((function(){B(x).then((function(t){var e=t.data,n=c.length+20,s=e;s.splice(n),a(s)})).catch((function(t){alert("something wrong, check your API address")})),B(g).then((function(t){k.current.next=t.data.info.next,d([].concat(Object(b.a)(l),Object(b.a)(t.data.results)))}))}),[g]),Object(O.a)((function(){N(k.current.next)})),Object(n.jsxs)("section",{style:{paddingTop:"50px"},children:[Object(n.jsx)("div",{className:"row center-xs",children:Object(n.jsx)("div",{className:"col-12",children:Object(n.jsx)("h2",{children:"WELCOME TO MY BLOG"})})}),Object(n.jsxs)("div",{className:"container container-fluid home",children:[Object(n.jsx)("div",{className:"row middle-xs",children:c.map((function(t,e){var c=t.id,s=t.title;return Object(n.jsx)("div",{className:"col-sm-offset-2 col-sm-8 col-xs-12",children:Object(n.jsx)(h,{id:c,title:s,pictureArr:l[e],singlePostClickHandler:function(){return _.push("/BLOG/post/".concat(c))}})},c)}))}),100===c.length&&Object(n.jsx)(m,{})]})]})},f=function(){return Object(n.jsx)("div",{children:Object(n.jsx)("div",{className:"container about",children:Object(n.jsx)("div",{className:"row",children:Object(n.jsx)("div",{className:"col-xs-12",children:Object(n.jsx)("img",{src:"https://picsum.photos/200/200",alt:"image11"})})})})})},g=function(){var t=Object(j.g)();return Object(n.jsx)("div",{children:Object(n.jsx)("div",{className:"container notFound",children:Object(n.jsx)("div",{className:"row",children:Object(n.jsxs)("div",{className:"col-xs-12",children:[Object(n.jsx)("button",{type:"button",className:"button__back",onClick:function(){return t.push("/BLOG/")},children:"Back to home"}),Object(n.jsx)("img",{src:"https://img.freepik.com/free-vector/404-error-page-found-illustration_1124-691.jpg?size=626&ext=jpg",alt:"notFound",className:"notFound__image"})]})})})})},N=function(){var t=Object(s.useState)(),e=Object(r.a)(t,2),c=e[0],a=e[1],i=Object(s.useState)(),o=Object(r.a)(i,2),l=o[0],d=o[1],O=Object(s.useState)([]),h=Object(r.a)(O,2),m=h[0],v=h[1],f=Object(s.useState)(""),g=Object(r.a)(f,2),N=g[0],k=g[1],_=Object(j.h)().postId,B=Object(j.g)(),y=function(t){return u.a.get(t)};Object(s.useEffect)((function(){v([]),y("".concat(x,"/").concat(_)).then((function(t){var e=t.data;a(e)})).catch((function(){B.push("/BLOG/404")})),y("".concat(p,"/").concat(_)).then((function(t){var e=t.data;d(e.image)}));var t=localStorage.getItem("comments".concat(_));t&&v(JSON.parse(t))}),[_]);return Object(n.jsx)("div",{className:"container container-fluid",children:Object(n.jsx)("div",{className:"row",children:Object(n.jsx)("div",{className:"col-md-8 col-sm-offset-2 ",children:Object(n.jsxs)("div",{className:"hero",children:[Object(n.jsx)("button",{type:"button",disabled:Number(_)<=1,onClick:function(){B.push("/BLOG/post/".concat(Number(_)-1))},children:"prev"}),Object(n.jsx)("button",{type:"button",disabled:Number(_)>=100,onClick:function(){B.push("/BLOG/post/".concat(Number(_)+1))},children:"next"}),Object(n.jsx)("button",{type:"button",className:"button__back",onClick:function(){B.push("/BLOG/")},children:"Back to home"}),Object(n.jsxs)("div",{className:"post__text",children:[Object(n.jsx)("div",{className:"overlay"}),l&&Object(n.jsx)("div",{className:"background-image",style:{backgroundImage:"url(".concat(l,")")}}),Object(n.jsx)("div",{className:"post__heading",children:Object(n.jsx)("span",{className:"title",children:null===c||void 0===c?void 0:c.title})}),Object(n.jsx)("p",{className:"post__body",children:null===c||void 0===c?void 0:c.body}),Object(n.jsx)("br",{})]}),Object(n.jsxs)("div",{className:"post__text post__comments",children:[Object(n.jsx)("div",{className:"comments",children:Object(n.jsx)("ol",{children:m&&m.map((function(t){return Object(n.jsxs)("li",{children:["Anonymous: ",t]},t)}))})}),Object(n.jsxs)("div",{className:"input-wrapper",children:[Object(n.jsx)("input",{className:"input",type:"text",name:"comment",id:"",placeholder:"add your comment here...",value:N,onChange:function(t){return k(t.target.value)}}),Object(n.jsx)("button",{type:"button",className:"input__button",onClick:function(){return function(){var t=Object(b.a)(m);N&&t.push(N),v(t),localStorage.setItem("comments".concat(null===c||void 0===c?void 0:c.id),JSON.stringify(t)),k("")}()},children:"add comment"})]})]})]})})})})},k=function(){var t=Object(s.useState)(!0),e=Object(r.a)(t,2),c=e[0],a=e[1];return Object(n.jsx)("div",{children:Object(n.jsxs)(l.a,{children:[Object(n.jsxs)("div",{className:"navBar",children:[Object(n.jsxs)(l.b,{to:"/BLOG/",className:"navBar__link ".concat(c&&"active"," "),onClick:function(){return a(!0)},children:["Home"," "]}),"\xa0\xa0\xa0",Object(n.jsxs)(l.b,{to:"/BLOG/about",className:"navBar__link ".concat(!c&&"active"," "),onClick:function(){return a(!1)},children:["About"," "]}),"\xa0\xa0\xa0"]}),Object(n.jsxs)(j.d,{children:[Object(n.jsx)(j.b,{exact:!0,path:"/BLOG/",children:Object(n.jsx)(v,{})}),Object(n.jsx)(j.b,{path:"/BLOG/about",children:Object(n.jsx)(f,{})}),Object(n.jsx)(j.b,{exact:!0,path:"/BLOG/post/:postId",children:Object(n.jsx)(N,{})}),Object(n.jsxs)(j.b,{path:"/BLOG/",children:[Object(n.jsx)(j.a,{push:!0,to:"/BLOG/404"}),Object(n.jsx)(g,{})]})]})]})})},_=function(t){t&&t instanceof Function&&c.e(3).then(c.bind(null,66)).then((function(e){var c=e.getCLS,n=e.getFID,s=e.getFCP,a=e.getLCP,i=e.getTTFB;c(t),n(t),s(t),a(t),i(t)}))};o.a.render(Object(n.jsx)(a.a.StrictMode,{children:Object(n.jsx)(k,{})}),document.getElementById("root")),_()}},[[65,1,2]]]);
//# sourceMappingURL=main.c2f044aa.chunk.js.map