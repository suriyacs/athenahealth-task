(this["webpackJsonpathenahealth-task"]=this["webpackJsonpathenahealth-task"]||[]).push([[0],{13:function(e,t,a){e.exports={link:"Header_link__2fBBZ",headerParent:"Header_headerParent__13rOQ",headerRow:"Header_headerRow__31rdL",rightCol:"Header_rightCol__2FILH",header:"Header_header__1fCsm",leftCol:"Header_leftCol__3ffYh"}},16:function(e,t,a){e.exports={headColor:"Home_headColor__DdX7Q",homeSection:"Home_homeSection__2AvWU",parentRow:"Home_parentRow__2FZP5",buttonSection:"Home_buttonSection__2KPaT",viewHistory:"Home_viewHistory__2iNIz",searchSection:"Home_searchSection__1ngjz",searchIcon:"Home_searchIcon__2Izad"}},19:function(e,t,a){e.exports={loadingOverlay:"Loader_loadingOverlay__VygoW",loader:"Loader_loader__lzqSF",loaderOne:"Loader_loaderOne__32xy_",loaderTwo:"Loader_loaderTwo__3ldOf",loaderThree:"Loader_loaderThree__1ai-W",pulse:"Loader_pulse__1V-uZ"}},33:function(e,t,a){e.exports={customButton:"Button_customButton__3nGFb"}},45:function(e,t,a){},51:function(e,t,a){},52:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),r=a(21),o=a.n(r),s=a(18),i=(a(45),a(46),a(47),a(15)),l=a(36),d=a(30),u=a.n(d),j=a(14),b="FETCH_SITE_LIST_REQUEST",h="FETCH_SITE_LIST_SUCCESS",m="FETCH_SITE_LIST_FAILURE",p={pending:!1,siteList:[],error:null},O=Object(i.b)({home:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b:return Object(j.a)(Object(j.a)({},e),{},{pending:!0});case h:return Object(j.a)(Object(j.a)({},e),{},{pending:!1,siteList:t.payload.siteList,error:null});case m:return Object(j.a)(Object(j.a)({},e),{},{pending:!1,siteList:[],error:t.payload.error});default:return Object(j.a)({},e)}}}),_=O,x=a(11),f=a.n(x),v=a(12),g=function(e){return{type:m,payload:e}},y=f.a.mark(w),N=f.a.mark(S);function w(){var e;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,e=[{avatar:"https://reqres.in/img/faces/1-image.jpg",email:"george.bluth@reqres.in",first_name:"George",id:1,last_name:"Bluth"},{avatar:"https://reqres.in/img/faces/1-image.jpg",email:"george.bluth@reqres.in",first_name:"Button",id:1,last_name:"Bluth"},{avatar:"https://reqres.in/img/faces/1-image.jpg",email:"george.bluth@reqres.in",first_name:"Sam",id:1,last_name:"Bluth"}],t.next=4,Object(v.c)({type:h,payload:{siteList:e}});case 4:t.next=10;break;case 6:return t.prev=6,t.t0=t.catch(0),t.next=10,Object(v.c)(g({error:t.t0.message}));case 10:case"end":return t.stop()}}),y,null,[[0,6]])}function S(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(v.a)([Object(v.d)(b,w)]);case 2:case"end":return e.stop()}}),N)}var H=S,L=f.a.mark(C);function C(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(v.a)([Object(v.b)(H)]);case 2:case"end":return e.stop()}}),L)}var T=Object(l.a)(),k=Object(i.d)(_,Object(i.a)(T,u.a));T.run(C);var B=k,I=a(27),E=a(6),R=a(31),q=a(32),F=a(37),U=a(35),P=a(33),z=a.n(P),A=a(2),M=function(e){return Object(A.jsxs)("button",{type:"button",className:"".concat(z.a.customButton," btn btn-primary"),id:"create-bootstrap",onClick:e.callBack,children:[Object(A.jsx)("i",{className:"".concat(e.icon," m-r-10px")}),e.name]})},Q=a(16),V=a.n(Q),W=function(e){Object(F.a)(a,e);var t=Object(U.a)(a);function a(e){var c;return Object(R.a)(this,a),(c=t.call(this,e)).createNewBootstrapRequest=function(){console.log("Function executed!!")},c.viewAllHistory=function(){c.props.history.push("/history")},c}return Object(q.a)(a,[{key:"componentDidMount",value:function(){this.props.fetchSiteList()}},{key:"render",value:function(){var e=this.props,t=e.pending,a=e.sites;return Object(A.jsx)("main",{style:{padding:"15px"},className:"text-primary",children:Object(A.jsx)("section",{className:"".concat(V.a.homeSection),children:Object(A.jsxs)("div",{className:"".concat(V.a.parentRow," row"),children:[Object(A.jsx)("div",{className:"".concat(V.a.buttonSection," col-12"),children:Object(A.jsxs)("div",{className:"row justify-content-between mb-4",children:[Object(A.jsx)("div",{className:"col-sm-6 col-lg-5 col-xl-4",children:Object(A.jsx)(M,{name:"Create Bootstrap Request",callBack:this.createNewBootstrapRequest,icon:"bi bi-plus-circle"})}),Object(A.jsx)("div",{className:"col-xs-6 col-sm-4 col-lg-3 text-sm-right",children:Object(A.jsx)("button",{type:"button",className:"".concat(V.a.viewHistory," btn btn-primary"),onClick:this.viewAllHistory,children:"View all History"})})]})}),Object(A.jsx)("div",{className:"".concat(V.a.searchSection," col-12 mb-3"),children:Object(A.jsxs)("div",{className:"input-group mb-3",children:[Object(A.jsx)("input",{type:"text",className:"form-control",placeholder:"Search site/stack","aria-label":"Username","aria-describedby":"basic-addon1"}),Object(A.jsx)("i",{className:"".concat(V.a.searchIcon," bi bi-search position-absolute")})]})}),this.props.error?Object(A.jsx)("div",{id:"error",className:"col error",children:"Something went wrong!"}):Object(A.jsx)("div",{className:"col-12",children:Object(A.jsx)("ul",{id:"list-group",className:"list-group",children:a&&a.length?a.map((function(e,t){return Object(A.jsxs)("li",{className:"list-group-item",children:[++t,". ",e.first_name]},e.id)})):t&&Object(A.jsx)("div",{id:"no-result",children:"No results found!"})})})]})})})}}]),a}(n.a.Component),Z=Object(E.f)(Object(s.b)((function(e){return{pending:e.home.pending,sites:e.home.siteList,error:e.home.error}}),(function(e){return{fetchSiteList:function(){return e({type:b})}}}))(W)),D=a(13),G=a.n(D);function J(){return Object(A.jsx)("div",{className:"".concat(G.a.headerParent," container-fluid"),children:Object(A.jsxs)("div",{className:"".concat(G.a.headerRow," row align-items-center"),children:[Object(A.jsx)("div",{className:"".concat(G.a.rightCol," col-8 col-sm-10 col-lg-10 col-xl-11 text-center"),children:Object(A.jsx)("span",{className:"".concat(G.a.header),children:"MyUnity Mobile Sync Tool"})}),Object(A.jsxs)("div",{className:"".concat(G.a.leftCol," col"),children:[Object(A.jsx)("i",{className:"".concat(G.a.personIcon," c-pointer bi bi-person-fill")}),Object(A.jsx)("i",{className:"".concat(G.a.hamburIcon," c-pointer m-l-15px bi bi-list")})]})]})})}var K=a(24),X=(Object(K.a)((function(e){return e.home.siteList}),(function(e){return e})),Object(K.a)((function(e){return e.home.pending}),(function(e){return e}))),Y=(Object(K.a)((function(e){return e.home.error}),(function(e){return e})),a(19)),$=a.n(Y),ee=function(){var e=Object(s.c)(X);return Object(A.jsx)("div",{children:e?Object(A.jsx)("div",{id:"loader",className:"".concat($.a.loadingOverlay),children:Object(A.jsxs)("div",{className:"".concat($.a.loader),children:[Object(A.jsx)("div",{className:"".concat($.a.loaderOne)}),Object(A.jsx)("div",{className:"".concat($.a.loaderTwo)}),Object(A.jsx)("div",{className:"".concat($.a.loaderThree)})]})}):""})},te=(a(51),function(){return Object(A.jsx)(I.a,{children:Object(A.jsxs)("div",{className:"app-container",children:[Object(A.jsx)(J,{}),Object(A.jsx)(ee,{}),Object(A.jsx)("div",{className:"container m-t-30px",children:Object(A.jsx)(E.c,{children:Object(A.jsx)(E.a,{exact:!0,path:"/",children:Object(A.jsx)(Z,{})})})})]})})});o.a.render(Object(A.jsx)(n.a.StrictMode,{children:Object(A.jsx)(s.a,{store:B,children:Object(A.jsx)(te,{})})}),document.getElementById("root"))}},[[52,1,2]]]);
//# sourceMappingURL=main.e3ff4d28.chunk.js.map