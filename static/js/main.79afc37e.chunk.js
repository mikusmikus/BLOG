(this.webpackJsonpblog=this.webpackJsonpblog||[]).push([[0],{38:function(e,t,c){},57:function(e,t,c){},58:function(e,t,c){},66:function(e,t,c){},67:function(e,t,c){},68:function(e,t,c){},69:function(e,t,c){},70:function(e,t,c){},71:function(e,t,c){"use strict";c.r(t);var s=c(0),n=c(1),a=c.n(n),o=c(29),r=c.n(o),i=c(9),j=c(2),l=(c(38),c(39),c(13)),A=c(4),b=c(15),u=c.n(b),d=c(30),x=(c(57),function(e){e.id;var t=e.title,c=e.pictureArr,n=e.singlePostClickHandler;return Object(s.jsx)("section",{className:"post-wrapper",children:Object(s.jsxs)("button",{type:"button",className:"post",onClick:n,children:[Object(s.jsx)("h1",{className:"heading",children:t}),Object(s.jsx)("div",{className:"image-wrapper",children:c&&Object(s.jsx)("img",{src:c.image,alt:c.name,className:"image"},c.id)})]})})}),O=(c(58),function(){return Object(s.jsx)("button",{type:"button",className:"ScrollUp",onClick:function(){window.scrollTo({top:0,left:0,behavior:"smooth"})},children:"on Top"})}),m="https://jsonplaceholder.typicode.com/posts",h="https://rickandmortyapi.com/api/character",f=function(){var e=Object(n.useState)([]),t=Object(A.a)(e,2),c=t[0],a=t[1],o=Object(n.useState)([]),r=Object(A.a)(o,2),i=r[0],b=r[1],f=Object(n.useState)(h),g=Object(A.a)(f,2),v=g[0],N=g[1],S=Object(n.useState)(!1),L=Object(A.a)(S,2),p=L[0],k=L[1],V=Object(n.useRef)({next:""}),B=Object(j.g)(),w=function(e){return u.a.get(e)};Object(n.useEffect)((function(){w(m).then((function(e){var t=e.data,s=c.length+20,n=t;n.splice(s),a(n)})).catch((function(e){alert("something wrong, check your API address")})),w(v).then((function(e){V.current.next=e.data.info.next,b([].concat(Object(l.a)(i),Object(l.a)(e.data.results)))}))}),[v]),Object(d.a)((function(){N(V.current.next)})),window.onscroll=function(){return y()};var y=function(){window.scrollY>=800&&k(!0),window.scrollY<800&&k(!1)};return Object(s.jsxs)("section",{style:{paddingTop:"90px"},children:[p&&Object(s.jsx)(O,{}),Object(s.jsx)("div",{className:"container container-fluid ",children:Object(s.jsx)("div",{className:"row middle-xs",children:c.map((function(e,t){var c=e.id,n=e.title;return Object(s.jsx)("div",{className:"col-sm-offset-2 col-sm-8 col-xs-11",children:Object(s.jsx)(x,{id:c,title:n,pictureArr:i[t],singlePostClickHandler:function(){return B.push("/BLOG/post/".concat(c))}})},c)}))})})]})},g=function(){return Object(s.jsx)("div",{children:Object(s.jsx)("div",{className:"container container-fluid about",children:Object(s.jsx)("div",{className:"row center-xs",children:Object(s.jsx)("div",{className:"col-xs-12",children:Object(s.jsx)("img",{src:"data:image/jpeg;base64,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",alt:"image11"})})})})})},v=function(){var e=Object(j.g)();return Object(s.jsx)("div",{children:Object(s.jsx)("div",{className:"container notFound",children:Object(s.jsx)("div",{className:"row",children:Object(s.jsxs)("div",{className:"col-xs-12",children:[Object(s.jsx)("button",{type:"button",className:"button__back",onClick:function(){return e.push("/BLOG/")},children:"Back to home"}),Object(s.jsx)("img",{src:"https://img.freepik.com/free-vector/404-error-page-found-illustration_1124-691.jpg?size=626&ext=jpg",alt:"notFound",className:"notFound__image"})]})})})})},N=(c(66),function(e){var t=e.inputChangeHandler,c=e.inputValue,n=e.saveCommentHandler;return Object(s.jsxs)("div",{className:"input-wrapper",children:[Object(s.jsx)("input",{className:"input",type:"text",name:"comment",id:"",placeholder:"add your comment here...",value:c,onChange:t}),Object(s.jsx)("button",{type:"button",className:"input__button",onClick:n,children:"add comment"})]})}),S=(c(67),function(e){var t=e.onePicture,c=e.onePost,n=e.postId,a=e.inputValue,o=e.comments,r=e.inputChangeHandler,i=e.saveCommentHandler,l=Object(j.g)();return Object(s.jsxs)("div",{className:"hero-wrapper",children:[Object(s.jsx)("button",{type:"button",className:"button__back",onClick:function(){l.push("/BLOG/")},children:"Back to home"}),Object(s.jsxs)("div",{className:"hero",children:[Object(s.jsxs)("div",{className:"hero__text",children:[Object(s.jsx)("h3",{className:"title",children:null===c||void 0===c?void 0:c.title}),Object(s.jsx)("p",{className:"body",children:null===c||void 0===c?void 0:c.body})]}),Object(s.jsxs)("div",{className:"hero__comments",children:[Object(s.jsx)("ol",{children:o&&o.map((function(e){return Object(s.jsxs)("li",{children:["Anonymous: ",e]},e)}))}),Object(s.jsx)(N,{inputValue:a,inputChangeHandler:r,saveCommentHandler:i})]}),Object(s.jsx)("button",{type:"button",className:"prev",onClick:function(){l.push("/BLOG/post/".concat(Number(n)-1))},disabled:Number(n)<=1,children:Object(s.jsx)("button",{type:"button",className:"arrow arrow-prev",disabled:Number(n)<=1})}),Object(s.jsx)("button",{type:"button",className:"next",onClick:function(){l.push("/BLOG/post/".concat(Number(n)+1))},disabled:Number(n)>=100,children:Object(s.jsx)("button",{type:"button",className:"arrow arrow-next",disabled:Number(n)>=100})}),Object(s.jsx)("div",{className:"overlay"}),t&&Object(s.jsx)("div",{className:"background-image",style:{backgroundImage:"url(".concat(t,")")}})]})]})}),L=(c(68),function(){return Object(s.jsx)("div",{className:"loader-wrapper",children:Object(s.jsx)("div",{className:"loader"})})}),p=function(){var e=Object(n.useState)(),t=Object(A.a)(e,2),c=t[0],a=t[1],o=Object(n.useState)(),r=Object(A.a)(o,2),i=r[0],b=r[1],d=Object(n.useState)([]),x=Object(A.a)(d,2),O=x[0],f=x[1],g=Object(n.useState)(""),v=Object(A.a)(g,2),N=v[0],p=v[1],k=Object(n.useState)(!0),V=Object(A.a)(k,2),B=V[0],w=V[1],y=Object(j.h)().postId,C=Object(j.g)(),Z=function(e){return u.a.get(e)};Object(n.useEffect)((function(){w(!0),setTimeout((function(){w(!1)}),100);p(""),f([]),Z("".concat(m,"/").concat(y)).then((function(e){var t=e.data;a(t)})).catch((function(){C.push("/BLOG/404")})),Z("".concat(h,"/").concat(y)).then((function(e){var t=e.data;b(t.image)}));var e=localStorage.getItem("comments".concat(y));e&&f(JSON.parse(e))}),[y]);return Object(s.jsx)("div",{className:"container container-fluid",children:Object(s.jsx)("div",{className:"row",children:Object(s.jsx)("div",{className:"col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1 col-xs-12",children:B?Object(s.jsx)(L,{}):Object(s.jsx)(S,{postId:y,comments:O,onePost:c,onePicture:i,inputValue:N,saveCommentHandler:function(){var e=Object(l.a)(O);N&&e.push(N),f(e),localStorage.setItem("comments".concat(null===c||void 0===c?void 0:c.id),JSON.stringify(e)),p("")},inputChangeHandler:function(e){return p(e.target.value)}})})})})},k=(c(69),function(e){var t=e.id,c=Object(n.useState)(!1),a=Object(A.a)(c,2),o=a[0],r=a[1];return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("div",{className:"gallery__big ".concat(o&&"gallery__big-active"),children:Object(s.jsx)("div",{className:"gallery__big-image-wrapper",children:Object(s.jsx)("img",{src:"https://picsum.photos/id/".concat(t,"/1000/1000"),alt:"image_".concat(t),className:"gallery__big-image",onClick:function(){return r(!1)},"aria-hidden":"true"})})}),Object(s.jsxs)("button",{type:"button",className:"gallery-wrapper",onClick:function(){return console.log("hello"),void r(!0)},children:[Object(s.jsx)(L,{}),Object(s.jsx)("img",{src:"https://picsum.photos/id/".concat(t,"/400/400"),alt:"image_".concat(t),className:"gallery__image"})]})]})}),V=function(){var e=Object(n.useState)(),t=Object(A.a)(e,2),c=t[0],a=t[1];return Object(n.useEffect)((function(){for(var e=[],t=1;t<=100;t++)e.push(t);a(e)}),[]),Object(s.jsx)("div",{children:Object(s.jsx)("div",{className:"container container-fluid about",children:Object(s.jsxs)("div",{className:"row",children:[c&&c.map((function(e){return Object(s.jsx)("div",{className:"col-md-3 col-sm-4 col-xs-6",children:Object(s.jsx)(k,{id:e})},e)})),window.scrollY>=800&&Object(s.jsx)(O,{})]})})})},B=(c(70),function(){return Object(s.jsx)("section",{className:"navBar-wrapper",children:Object(s.jsx)("div",{className:"container ",children:Object(s.jsxs)("div",{className:"row",children:[Object(s.jsx)("div",{className:"col-xs-2 col-sm-2 col-sm-offset-2",children:Object(s.jsx)(i.b,{to:"/BLOG/",children:Object(s.jsx)("img",{src:"https://svgsilh.com/svg/309113.svg",alt:"home__image",className:"navBar__image",width:"50px"})})}),Object(s.jsx)("div",{className:"col-xs-10 col-sm-6",children:Object(s.jsxs)("div",{className:"navBar",children:[Object(s.jsx)(i.b,{to:"/BLOG/gallery",className:"navBar__link",children:"Gallery"}),Object(s.jsx)(i.b,{to:"/BLOG/about",className:"navBar__link",children:"About"}),Object(s.jsx)(i.b,{to:"/BLOG/login",className:"navBar__link",children:"Login"})]})})]})})})}),w=function(){return Object(s.jsx)("div",{children:Object(s.jsx)("div",{className:"container container-fluid about",children:Object(s.jsx)("div",{className:"row center-xs",children:Object(s.jsx)("div",{className:"col-xs-12",children:Object(s.jsx)("img",{src:"https://wpnewsify.com/wp-content/uploads/2019/01/WordPress-Login-Screen.png",alt:"image11"})})})})})},y=function(){return Object(s.jsx)("div",{children:Object(s.jsxs)(i.a,{children:[Object(s.jsx)(B,{}),Object(s.jsxs)(j.d,{children:[Object(s.jsx)(j.b,{exact:!0,path:"/BLOG/",children:Object(s.jsx)(f,{})}),Object(s.jsx)(j.b,{path:"/BLOG/about",children:Object(s.jsx)(g,{})}),Object(s.jsx)(j.b,{path:"/BLOG/gallery",children:Object(s.jsx)(V,{})}),Object(s.jsx)(j.b,{path:"/BLOG/login",children:Object(s.jsx)(w,{})}),Object(s.jsx)(j.b,{exact:!0,path:"/BLOG/post/:postId",children:Object(s.jsx)(p,{})}),Object(s.jsxs)(j.b,{path:"/BLOG/",children:[Object(s.jsx)(j.a,{push:!0,to:"/BLOG/404"}),Object(s.jsx)(v,{})]})]})]})})},C=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,72)).then((function(t){var c=t.getCLS,s=t.getFID,n=t.getFCP,a=t.getLCP,o=t.getTTFB;c(e),s(e),n(e),a(e),o(e)}))};r.a.render(Object(s.jsx)(a.a.StrictMode,{children:Object(s.jsx)(y,{})}),document.getElementById("root")),C()}},[[71,1,2]]]);
//# sourceMappingURL=main.79afc37e.chunk.js.map