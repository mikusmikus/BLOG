(this.webpackJsonpblog=this.webpackJsonpblog||[]).push([[0],{38:function(e,t,c){},57:function(e,t,c){},58:function(e,t,c){},66:function(e,t,c){},67:function(e,t,c){},68:function(e,t,c){},69:function(e,t,c){},70:function(e,t,c){},71:function(e,t,c){"use strict";c.r(t);var n=c(0),s=c(1),a=c.n(s),i=c(29),o=c.n(i),r=c(9),l=c(2),j=(c(38),c(39),c(13)),b=c(4),d=c(15),u=c.n(d),m=c(30),h=(c(57),function(e){e.id;var t=e.title,c=e.pictureArr,s=e.singlePostClickHandler;return Object(n.jsx)("section",{className:"post-wrapper",children:Object(n.jsxs)("button",{type:"button",className:"post",onClick:s,children:[Object(n.jsx)("h1",{className:"heading",children:t}),Object(n.jsx)("div",{className:"image-wrapper",children:c&&Object(n.jsx)("img",{src:c.image,alt:c.name,className:"image"},c.id)})]})})}),O=(c(58),function(){return Object(n.jsx)("button",{type:"button",className:"ScrollUp",onClick:function(){window.scrollTo({top:0,left:0,behavior:"smooth"})},children:"on Top"})}),x="https://jsonplaceholder.typicode.com/posts",p="https://rickandmortyapi.com/api/character",f=function(){var e=Object(s.useState)([]),t=Object(b.a)(e,2),c=t[0],a=t[1],i=Object(s.useState)([]),o=Object(b.a)(i,2),r=o[0],d=o[1],f=Object(s.useState)(p),v=Object(b.a)(f,2),g=v[0],N=v[1],w=Object(s.useState)(!1),_=Object(b.a)(w,2),y=_[0],k=_[1],C=Object(s.useRef)({next:""}),S=Object(l.g)(),I=function(e){return u.a.get(e)};Object(s.useEffect)((function(){I(x).then((function(e){var t=e.data,n=c.length+20,s=t;s.splice(n),a(s)})).catch((function(e){alert("something wrong, check your API address")})),I(g).then((function(e){C.current.next=e.data.info.next,d([].concat(Object(j.a)(r),Object(j.a)(e.data.results)))}))}),[g]),Object(m.a)((function(){N(C.current.next)})),window.onscroll=function(){return B()};var B=function(){window.scrollY>=800&&k(!0),window.scrollY<800&&k(!1)};return Object(n.jsxs)("section",{style:{paddingTop:"90px"},children:[y&&Object(n.jsx)(O,{}),Object(n.jsx)("div",{className:"container container-fluid ",children:Object(n.jsx)("div",{className:"row middle-xs",children:c.map((function(e,t){var c=e.id,s=e.title;return Object(n.jsx)("div",{className:"col-sm-offset-2 col-sm-8 col-xs-11",children:Object(n.jsx)(h,{id:c,title:s,pictureArr:r[t],singlePostClickHandler:function(){return S.push("/post/".concat(c))}})},c)}))})})]})},v=function(){return Object(n.jsx)("div",{children:Object(n.jsx)("div",{className:"container container-fluid about",children:Object(n.jsx)("div",{className:"row center-xs",children:Object(n.jsx)("div",{className:"col-xs-12",children:Object(n.jsx)("img",{src:"https://www.thebalancecareers.com/thmb/EJMASX8rfUowCnIneVBKWpsMmSo=/1500x1000/filters:fill(auto,1)/how-to-write-about-me-page-examples-4142367-FINAL-ff212f14c0294f2b962695ff84455890.png",alt:"about_me",className:"about__image"})})})})})},g=function(){var e=Object(l.g)();return Object(n.jsx)("div",{children:Object(n.jsx)("div",{className:"container notFound",children:Object(n.jsx)("div",{className:"row",children:Object(n.jsxs)("div",{className:"col-xs-12",children:[Object(n.jsx)("button",{type:"button",className:"button__back",onClick:function(){return e.push("/")},children:"Back to home"}),Object(n.jsx)("img",{src:"https://img.freepik.com/free-vector/404-error-page-found-illustration_1124-691.jpg?size=626&ext=jpg",alt:"notFound",className:"notFound__image"})]})})})})},N=(c(66),function(e){var t=e.inputChangeHandler,c=e.inputValue,s=e.saveCommentHandler;return Object(n.jsxs)("div",{className:"input-wrapper",children:[Object(n.jsx)("input",{className:"input",type:"text",name:"comment",id:"",placeholder:"add your comment here...",value:c,onChange:t}),Object(n.jsx)("button",{type:"button",className:"input__button",onClick:s,children:"add comment"})]})}),w=(c(67),c(68),function(){return Object(n.jsx)("div",{className:"loader-wrapper",children:Object(n.jsx)("div",{className:"loader"})})}),_=function(e){var t=e.onePicture,c=e.onePost,s=e.postId,a=e.inputValue,i=e.comments,o=e.inputChangeHandler,r=e.saveCommentHandler,j=Object(l.g)();return Object(n.jsxs)("div",{className:"hero-wrapper",children:[Object(n.jsx)("button",{type:"button",className:"button__back",onClick:function(){j.push("/")},children:"Back to home"}),Object(n.jsxs)("div",{className:"hero",children:[Object(n.jsx)(w,{}),Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)("div",{className:"hero__text",children:[Object(n.jsx)("h3",{className:"title",children:null===c||void 0===c?void 0:c.title}),Object(n.jsx)("p",{className:"body",children:null===c||void 0===c?void 0:c.body})]}),Object(n.jsxs)("div",{className:"hero__comments",children:[Object(n.jsx)("ol",{children:i&&i.map((function(e){return Object(n.jsxs)("li",{children:["Anonymous: ",e]},e)}))}),Object(n.jsx)(N,{inputValue:a,inputChangeHandler:o,saveCommentHandler:r})]}),Object(n.jsx)("button",{type:"button",className:"prev",onClick:function(){j.push("/post/".concat(Number(s)-1))},disabled:Number(s)<=1,children:Object(n.jsx)("button",{type:"button",className:"arrow arrow-prev",disabled:Number(s)<=1})}),Object(n.jsx)("button",{type:"button",className:"next",onClick:function(){j.push("/post/".concat(Number(s)+1))},disabled:Number(s)>=100,children:Object(n.jsx)("button",{type:"button",className:"arrow arrow-next",disabled:Number(s)>=100})}),Object(n.jsx)("div",{className:"overlay"}),t&&Object(n.jsx)("div",{className:"background-image",style:{backgroundImage:"url(".concat(t,")")}})]})]})]})},y=function(){var e=Object(s.useState)(),t=Object(b.a)(e,2),c=t[0],a=t[1],i=Object(s.useState)(),o=Object(b.a)(i,2),r=o[0],d=o[1],m=Object(s.useState)([]),h=Object(b.a)(m,2),O=h[0],f=h[1],v=Object(s.useState)(""),g=Object(b.a)(v,2),N=g[0],w=g[1],y=Object(l.h)().postId,k=Object(l.g)(),C=function(e){return u.a.get(e)};Object(s.useEffect)((function(){w(""),f([]),C("".concat(x,"/").concat(y)).then((function(e){var t=e.data;a(t)})).catch((function(){k.push("/404")})),C("".concat(p,"/").concat(y)).then((function(e){var t=e.data;d(t.image)}));var e=localStorage.getItem("comments".concat(y));e&&f(JSON.parse(e))}),[y]);return Object(n.jsx)("div",{className:"container container-fluid",children:Object(n.jsx)("div",{className:"row",children:Object(n.jsx)("div",{className:"col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1 col-xs-12",children:Object(n.jsx)(_,{postId:y,comments:O,onePost:c,onePicture:r,inputValue:N,saveCommentHandler:function(){var e=Object(j.a)(O);N&&e.push(N),f(e),localStorage.setItem("comments".concat(null===c||void 0===c?void 0:c.id),JSON.stringify(e)),w("")},inputChangeHandler:function(e){return w(e.target.value)}})})})})},k=(c(69),function(e){var t=e.id,c=Object(s.useState)(!1),a=Object(b.a)(c,2),i=a[0],o=a[1];return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("div",{className:"gallery__big ".concat(i&&"gallery__big-active"),children:Object(n.jsx)("div",{className:"gallery__big-image-wrapper",children:Object(n.jsx)("img",{src:"https://picsum.photos/id/".concat(t,"/1000/1000"),alt:"image_".concat(t),className:"gallery__big-image",onClick:function(){return o(!1)},"aria-hidden":"true"})})}),Object(n.jsxs)("button",{type:"button",className:"gallery-wrapper",onClick:function(){return console.log("hello"),void o(!0)},children:[Object(n.jsx)(w,{}),Object(n.jsx)("img",{src:"https://picsum.photos/id/".concat(t,"/400/400"),alt:"image_".concat(t),className:"gallery__image"})]})]})}),C=function(){var e=Object(s.useState)(),t=Object(b.a)(e,2),c=t[0],a=t[1];return Object(s.useEffect)((function(){for(var e=[],t=1;t<=100;t++)e.push(t);a(e)}),[]),Object(n.jsx)("div",{children:Object(n.jsx)("div",{className:"container container-fluid about",children:Object(n.jsxs)("div",{className:"row",children:[c&&c.map((function(e){return Object(n.jsx)("div",{className:"col-md-3 col-sm-4 col-xs-6",children:Object(n.jsx)(k,{id:e})},e)})),window.scrollY>=800&&Object(n.jsx)(O,{})]})})})},S=(c(70),function(){return Object(n.jsx)("section",{className:"navBar-wrapper",children:Object(n.jsx)("div",{className:"container ",children:Object(n.jsxs)("div",{className:"row",children:[Object(n.jsx)("div",{className:"col-xs-2 col-sm-2 col-sm-offset-2",children:Object(n.jsx)(r.b,{to:"/",children:Object(n.jsx)("img",{src:"https://svgsilh.com/svg/309113.svg",alt:"home__image",className:"navBar__image",width:"50px"})})}),Object(n.jsx)("div",{className:"col-xs-10 col-sm-6",children:Object(n.jsxs)("div",{className:"navBar",children:[Object(n.jsx)(r.b,{to:"/gallery",className:"navBar__link",children:"Gallery"}),Object(n.jsx)(r.b,{to:"/about",className:"navBar__link",children:"About"}),Object(n.jsx)(r.b,{to:"/login",className:"navBar__link",children:"Login"})]})})]})})})}),I=function(){return Object(n.jsx)("div",{children:Object(n.jsx)("div",{className:"container container-fluid about",children:Object(n.jsx)("div",{className:"row center-xs",children:Object(n.jsx)("div",{className:"col-xs-12",children:Object(n.jsx)("img",{src:"https://wpnewsify.com/wp-content/uploads/2019/01/WordPress-Login-Screen.png",alt:"image11"})})})})})},B=function(){return Object(n.jsx)("div",{children:Object(n.jsxs)(r.a,{children:[Object(n.jsx)(S,{}),Object(n.jsxs)(l.d,{children:[Object(n.jsx)(l.b,{exact:!0,path:"/",children:Object(n.jsx)(f,{})}),Object(n.jsx)(l.b,{path:"/about",children:Object(n.jsx)(v,{})}),Object(n.jsx)(l.b,{path:"/gallery",children:Object(n.jsx)(C,{})}),Object(n.jsx)(l.b,{path:"/login",children:Object(n.jsx)(I,{})}),Object(n.jsx)(l.b,{exact:!0,path:"/post/:postId",children:Object(n.jsx)(y,{})}),Object(n.jsxs)(l.b,{path:"/",children:[Object(n.jsx)(l.a,{push:!0,to:"/404"}),Object(n.jsx)(g,{})]})]})]})})},F=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,72)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,a=t.getLCP,i=t.getTTFB;c(e),n(e),s(e),a(e),i(e)}))};o.a.render(Object(n.jsx)(a.a.StrictMode,{children:Object(n.jsx)(B,{})}),document.getElementById("root")),F()}},[[71,1,2]]]);
//# sourceMappingURL=main.c8893ff8.chunk.js.map