(this.webpackJsonpflickr=this.webpackJsonpflickr||[]).push([[0],{26:function(e,t,c){},27:function(e,t,c){},46:function(e,t,c){},59:function(e,t,c){},60:function(e,t,c){},61:function(e,t,c){"use strict";c.r(t);var n=c(1),o=c.n(n),a=c(8),r=c.n(a),s=(c(26),c(3)),i=(c(27),c(5)),l=c.n(i),j=(c(46),c(21)),u=c(4),b=c.n(u),d=c(0);b.a.setAppElement("#root");var h=function(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),c=t[0],o=t[1],a=Object(n.useState)(""),r=Object(s.a)(a,2),i=r[0],u=r[1],h=Object(n.useState)(!1),f=Object(s.a)(h,2),O=f[0],m=f[1],p=Object(n.useState)(),g=Object(s.a)(p,2),v=g[0],x=g[1];Object(j.useEffect)((function(){l.a.get("https://www.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=7dac89ea8f85859230ab7bd53e97ad60&format=json&nojsoncallback=1").then((function(e){return e.data.photos.photo})).then((function(e){var t=e.map((function(e){var t="https://live.staticflickr.com/".concat(e.server,"/").concat(e.id,"_").concat(e.secret,"_w.jpg");return Object(d.jsx)(d.Fragment,{children:t})}));o(t)}))}),[]);return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("div",{className:"header",children:"Flickr"}),Object(d.jsx)("div",{className:"imgContainer",children:c.map((function(e,t){return Object(d.jsx)("img",{onClick:function(){return function(e,t){m(!0),u(e),x(t)}(e.props.children)},src:e.props.children,alt:t},t)}))}),Object(d.jsx)("div",{children:Object(d.jsx)(b.a,{isOpen:O,onRequestClose:function(){return m(!1)},style:{overlay:{backgroundColor:"grey"},content:{backgroundColor:"white",display:"grid",placeItems:"center"}},children:Object(d.jsx)("img",{id:"modalImg",src:i,alt:i},v)})})]})},f=(c(59),function(e){return Object(d.jsx)("div",{children:Object(d.jsxs)("div",{className:"navbar",children:[Object(d.jsx)("div",{className:"navHeader",children:"Search Photos"}),Object(d.jsxs)("div",{children:[Object(d.jsx)("input",{className:"searchInput",type:"text",name:"photo",onChange:e.onChange}),Object(d.jsx)("button",{onClick:e.onClick,children:"Search"})]})]})})}),O=(c(60),function(e){var t=Object(n.useState)(1),c=Object(s.a)(t,2),o=c[0],a=c[1],r=9,i=Object(n.useState)(""),j=Object(s.a)(i,2),u=j[0],h=j[1],O=Object(n.useState)([]),m=Object(s.a)(O,2),p=m[0],g=m[1],v=Object(n.useState)(""),x=Object(s.a)(v,2),k=x[0],C=x[1],w=Object(n.useState)(!1),S=Object(s.a)(w,2),y=S[0],F=S[1];function I(){l.a.get("https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=716e02262760b235130b0ab8066992cb&tags=".concat(u,"&safe_search=&per_page=").concat(r,"&page=").concat(o,"&format=json&nojsoncallback=1")).then((function(e){return e.data.photos.photo})).then((function(e){var t=e.map((function(e){var t="https://live.staticflickr.com/".concat(e.server,"/").concat(e.id,"_").concat(e.secret,"_w.jpg");return Object(d.jsx)("img",{onClick:function(){return _(t)},src:t,alt:e.owner},e.id)}));g(t)}))}var _=function(e){F(!0),C(e)};return window.onscroll=function(){window.innerHeight+document.documentElement.scrollTop>=document.documentElement.offsetHeight-5&&setTimeout((function(){r+=3,a((function(e){return e+1})),I()}),1e3)},Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(f,{onChange:function(e){h(e.target.value)},onClick:I}),Object(d.jsxs)("div",{className:"searchContainer",children:[p,Object(d.jsx)(b.a,{isOpen:y,onRequestClose:function(){return F(!1)},style:{overlay:{backgroundColor:"grey"},content:{backgroundColor:"white",display:"grid",placeItems:"center"}},children:Object(d.jsx)("img",{id:"modalImg",src:k,alt:k},k)})]})]})});var m=function(){var e=Object(n.useState)(!0),t=Object(s.a)(e,2),c=t[0],o=t[1];return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("button",{onClick:function(){o(!c)},disabled:c,children:"Home"}),Object(d.jsx)("button",{onClick:function(){o(!c)},disabled:!c,children:"Search Images"}),!0===c?Object(d.jsx)(h,{}):Object(d.jsx)(O,{})]})},p=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,62)).then((function(t){var c=t.getCLS,n=t.getFID,o=t.getFCP,a=t.getLCP,r=t.getTTFB;c(e),n(e),o(e),a(e),r(e)}))};r.a.render(Object(d.jsx)(o.a.StrictMode,{children:Object(d.jsx)(m,{})}),document.getElementById("root")),p()}},[[61,1,2]]]);
//# sourceMappingURL=main.adee287b.chunk.js.map