(this.webpackJsonpui=this.webpackJsonpui||[]).push([[0],{102:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(10),c=a.n(l),o=(a(92),a(55)),i=a.n(o),s=a(68),u=a(26),m=a(33),d=a(72),p=a.n(d),b=(a(94),a(159)),f=a(158),h=a(73),E=a(157),v=a(145),g=a(78),k=a(51),y=a(75),O=a(74),w=a(56),C=a(142),j=a(162),x=a(149),_=a(150),S=a(57),F=a.n(S),A=a(161),B=a(147),L=a(160),P=a(163),T=Object({NODE_ENV:"production",PUBLIC_URL:"/miniature_search",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_API_URL||"http://localhost:3000",W=Object(C.a)((function(e){return{root:{display:"flex","& > * + *":{marginLeft:e.spacing(2)}},leaf:{display:"flex",flexWrap:"wrap",minWidth:"300px"},topLevelFilter:{borderRadius:0}}})),N=function(){return r.a.createElement(v.a,null)},I=function(e){var t=e.label,a=e.type,n=e.onChecked,l=e.checked;return r.a.createElement(B.a,{"aria-label":"Acknowledge",onClick:function(e){return e.stopPropagation()},onFocus:function(e){return e.stopPropagation()},control:r.a.createElement(A.a,{onChange:n(t,a),checked:l}),label:t})},R=function(e){var t=e.label,a=e.children,n=e.classes,l=e.onChecked,c=e.checked;return a?r.a.createElement(j.a,null,r.a.createElement(x.a,{expandIcon:r.a.createElement(F.a,null),"aria-label":"Expand","aria-controls":"additional-actions1-content",id:"additional-actions1-header"},r.a.createElement(I,{label:t,type:"faction",onChecked:l,checked:c(t,"faction")})),r.a.createElement(_.a,{classes:{root:n.leaf}},a)):r.a.createElement("div",null,r.a.createElement(I,{label:t,type:"race",onChecked:l,checked:c(t,"race")}))},D=function(e){var t=e.label,a=e.nestedFilters,n=e.classes,l=e.toggleFilter,c=e.checked,o=r.a.useState(null),i=Object(m.a)(o,2),s=i[0],u=i[1],d=Boolean(s),p=d?"simple-popover":void 0,b=function(e,t){return function(a){var n=a.target.checked;l(e,t,n)}};return r.a.createElement("div",null,r.a.createElement(P.a,{color:"primary",deleteIcon:r.a.createElement(F.a,null),onDelete:function(e){u(e.currentTarget)},style:{margin:"10px",marginLeft:"1px",marginRight:"1px"},"aria-describedby":"".concat(p,"_").concat(t),clickable:!1,classes:{root:n.topLevelFilter},label:r.a.createElement(I,{label:t,type:"game",checked:c(t,"game"),onChecked:b})}),r.a.createElement(L.a,{id:"".concat(p,"_").concat(t),open:d,anchorEl:s,onClose:function(){u(null)},style:{maxWidth:"50%"},anchorOrigin:{vertical:"top",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"left"}},a.map((function(e){var t=e.label,a=e.children;return r.a.createElement(R,{key:t,label:t,classes:n,onChecked:b,checked:c,children:a.map((function(e){var t=e.label;return r.a.createElement(R,{classes:n,key:t,label:t,onChecked:b,checked:c})}))})}))))};var K=function(e){var t=e.setActiveFilters,a=e.activeFilters,n=W(),l=function(e,n,r){var l="".concat(n,":").concat(e);if(r)t(Object(w.a)(Object(w.a)({},a),{},Object(u.a)({},l,n)));else{a[l];var c=Object(y.a)(a,[l].map(O.a));t(c)}},c=function(e,t){var n="".concat(t,":").concat(e);return!!a[n]},o=Object(k.b)("".concat(T,"/available_filters"),{},[]),i=o.loading,s=o.error,m=o.data;return i?r.a.createElement(N,null):s?r.a.createElement(g.a,{style:{margin:"10px"},color:"secondary"},"Error loading filters..."):r.a.createElement("div",{className:n.root},m.map((function(e){var t=e.name,a=e.factions;return r.a.createElement(D,{classes:n,key:t,label:t,toggleFilter:l,checked:c,nestedFilters:a.map((function(e){return{label:e.name,children:e.races.map((function(e){return{label:e.name}}))}}))})})))};var M=function(e){var t=e.activeFilters;return r.a.createElement("div",{className:"AppliedFilters"},Object.keys(t).map((function(e){return r.a.createElement(P.a,{key:"".concat(e),label:"".concat(e),color:"primary",variant:"outlined"})})))},U=a(152),z=a(153),H=a(155),J=a(151),V=a(154),Q=a(156),$=a(71),q=a.n($),G=Object(C.a)((function(e){return{table:{minWidth:650},tableBody:{color:"white"},tableCell:{color:"white"}}}));var X=function(e){var t=e.data,a=G();return t.results?r.a.createElement("div",{className:"Results"},r.a.createElement(J.a,null,r.a.createElement(U.a,{className:a.table,"aria-label":"simple table"},r.a.createElement(z.a,{classes:{root:a.tableBody}},t.results.map((function(e,t){e._score;var n=e.id,l=(e.game,e.website),c=e.race,o=e.price,i=(e.faction,e.link),s=e.name,u=e.title;e.inStockQuantity;return r.a.createElement(V.a,{style:t%2?{background:"rgba(255, 255, 255, 0.05)"}:{background:"rgba(255, 255, 255, 0)"},key:n},r.a.createElement(H.a,{classes:{root:a.tableCell},align:"left"},function(e,t){return e&&t&&(a=t,!e.toLowerCase().trim().includes(a.toLowerCase().trim()))?"".concat(e,": ").concat(t):e||t;var a}(s,u)),r.a.createElement(H.a,{classes:{root:a.tableBody},align:"left"},c),r.a.createElement(H.a,{classes:{root:a.tableBody},align:"left"},l.replace(/www\./,"")),r.a.createElement(H.a,{classes:{root:a.tableBody},align:"left"},function(e){return"\xa3".concat(e)}(o)),r.a.createElement(H.a,{classes:{root:a.tableBody},align:"left"},r.a.createElement(Q.a,{target:"_blank",href:i},r.a.createElement(q.a,null))))})))))):null},Y=Object(h.a)({overrides:{MuiFormLabel:{root:{color:"white"}},MuiInput:{underline:{"&&&&:before":{borderBottom:"1px solid white"}},input:{color:"white"}}}}),Z=function(){return r.a.createElement(v.a,null)};var ee=function(){var e=Object(n.useState)([]),t=Object(m.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)(""),o=Object(m.a)(c,2),d=o[0],h=o[1],v=Object(n.useState)({}),y=Object(m.a)(v,2),O=y[0],w=y[1],C={body:{input:d,filters:Object.keys(O).map((function(e){var t=O[e],a=e.replace("".concat(t,":"),"");return Object(u.a)({},t,a)}))},headers:{"Content-Type":"application/json"}},j=Object(k.b)(T),x=j.post,_=j.response,S=j.loading,F=j.error,A=function(){var e=Object(s.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(d){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,x("/search",C.body);case 4:t=e.sent,_.ok&&l(t);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"App"},r.a.createElement(p.a,null,r.a.createElement("title",null,"Miniature Search")),r.a.createElement(E.a,{theme:Y},r.a.createElement("header",{className:"App-header"},r.a.createElement("form",{noValidate:!0,autoComplete:"off",style:{width:"50%",paddingTop:"8%"}},r.a.createElement(b.a,{label:"Search",style:{width:"80%",verticalAlign:"bottom"},InputProps:{onChange:function(e){return h(e.target.value)},onKeyPress:function(e){"Enter"===e.key&&(A(),e.preventDefault())}}}),r.a.createElement(f.a,{variant:"contained",color:"primary",style:{marginLeft:"10px"},onClick:A},"Search")),r.a.createElement(K,{activeFilters:O,setActiveFilters:w}),r.a.createElement(M,{activeFilters:O}),F&&r.a.createElement(g.a,{style:{margin:"10px"},color:"secondary"},"Error loading results..."),S&&r.a.createElement(Z,null),!F&&!S&&r.a.createElement(X,{data:a}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(ee,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},87:function(e,t,a){e.exports=a(102)},92:function(e,t,a){},94:function(e,t,a){}},[[87,1,2]]]);
//# sourceMappingURL=main.a5e77287.chunk.js.map