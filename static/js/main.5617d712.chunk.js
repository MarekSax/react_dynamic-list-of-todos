(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{19:function(e,c,t){},20:function(e,c,t){"use strict";t.r(c);var a,s,l=t(7),n=t.n(l),i=(t(14),t(15),t(3)),d=t(4),o=t(1),r=t(6),j=t.n(r);!function(e){e.all="all",e.completed="completed",e.active="active"}(a||(a={})),function(e){e.Enter="Enter",e.Escape="Escape"}(s||(s={}));var u=Object(i.c)([]),b=Object(i.c)(null),h=Object(i.c)(null),m=Object(i.c)(""),v=Object(i.c)(a.all),O=t(0),x=Object(i.a)((function(){return u.value.filter((function(e){switch(v.value){default:case a.all:return e;case a.completed:return e.completed;case a.active:return!e.completed}})).filter((function(e){return e.title.toLowerCase().includes(m.value.toLowerCase())}))})),f=function(){return Object(d.a)(),Object(O.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(O.jsx)("thead",{children:Object(O.jsxs)("tr",{children:[Object(O.jsx)("th",{children:"#"}),Object(O.jsx)("th",{children:Object(O.jsx)("span",{className:"icon",children:Object(O.jsx)("i",{className:"fas fa-check"})})}),Object(O.jsx)("th",{children:"Title"}),Object(O.jsx)("th",{children:" "})]})}),Object(O.jsx)("tbody",{children:x.value.map((function(e){var c;return Object(O.jsxs)("tr",{"data-cy":"todo",className:j()({"has-background-info-light":b.value}),children:[Object(O.jsx)("td",{className:"is-vcentered",children:e.id}),Object(O.jsx)("td",{className:"is-vcentered",children:e.completed&&Object(O.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(O.jsx)("i",{className:"fas fa-check"})})}),Object(O.jsx)("td",{className:"is-vcentered is-expanded",children:Object(O.jsx)("p",{className:j()("has-text-".concat(e.completed?"success":"danger")),children:e.title})}),Object(O.jsx)("td",{className:"has-text-right is-vcentered",children:Object(O.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){b.value=e},children:Object(O.jsx)("span",{className:"icon",children:Object(O.jsx)("i",{className:j()("far","fa-eye".concat(e.id===(null===(c=b.value)||void 0===c?void 0:c.id)?"-slash":""))})})})})]},e.id)}))})]})},p=function(){Object(d.a)();return Object(O.jsxs)("form",{className:"field has-addons",children:[Object(O.jsx)("p",{className:"control",children:Object(O.jsx)("span",{className:"select",children:Object(O.jsxs)("select",{"data-cy":"statusSelect",onChange:function(e){v.value=e.target.value},children:[Object(O.jsx)("option",{value:a.all,children:"All"}),Object(O.jsx)("option",{value:a.active,children:"Active"}),Object(O.jsx)("option",{value:a.completed,children:"Complete"})]})})}),Object(O.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(O.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:m.value,onChange:function(e){m.value=e.target.value},onKeyDown:function(e){return e.key===s.Enter&&e.preventDefault()}}),Object(O.jsx)("span",{className:"icon is-left",children:Object(O.jsx)("i",{className:"fas fa-magnifying-glass"})}),!!m.value.length&&Object(O.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:Object(O.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete",onClick:function(){m.value=""}})})]})]})},N=(t(19),function(){return Object(O.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(O.jsx)("div",{className:"Loader__content"})})});function y(e){var c,t="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(c=300,new Promise((function(e){setTimeout(e,c)}))).then((function(){return fetch(t)})).then((function(e){return e.json()}))}var g=Object(i.c)(!0);Object(i.b)((function(){var e;b.value&&(e=b.value.userId,y("/users/".concat(e))).then((function(e){h.value=e})).then((function(){g.value=!1}))}));var k=function(){var e,c,t,a,s;Object(d.a)();return Object(O.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(O.jsx)("div",{className:"modal-background"}),g.value?Object(O.jsx)(N,{}):Object(O.jsxs)("div",{className:"modal-card",children:[Object(O.jsxs)("header",{className:"modal-card-head",children:[Object(O.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(null===(e=b.value)||void 0===e?void 0:e.id)}),Object(O.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:function(){b.value=null,h.value=null,g.value=!0}})]}),Object(O.jsxs)("div",{className:"modal-card-body",children:[Object(O.jsx)("p",{className:"block","data-cy":"modal-title",children:null===(c=b.value)||void 0===c?void 0:c.title}),Object(O.jsxs)("p",{className:"block","data-cy":"modal-user",children:[null!==(t=b.value)&&void 0!==t&&t.completed?Object(O.jsx)("strong",{className:"has-text-success",children:"Done"}):Object(O.jsx)("strong",{className:"has-text-danger",children:"Planned"})," by ",Object(O.jsx)("a",{href:"mailto:".concat(null===(a=h.value)||void 0===a?void 0:a.email),children:null===(s=h.value)||void 0===s?void 0:s.name})]})]})]})]})},w=Object(i.c)(!0);Object(i.b)((function(){y("/todos").then((function(e){u.value=e})).then((function(){w.value=!1}))}));var C=function(){return Object(d.a)(),Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("div",{className:"section",children:Object(O.jsx)("div",{className:"container",children:Object(O.jsxs)("div",{className:"box",children:[Object(O.jsx)("h1",{className:"title",children:"Todos:"}),Object(O.jsx)("div",{className:"block",children:Object(O.jsx)(p,{})}),Object(O.jsx)("div",{className:"block",children:w.value?Object(O.jsx)(N,{}):Object(O.jsx)(f,{})})]})})}),Object(O.jsx)(o.StrictMode,{children:!!b.value&&Object(O.jsx)(k,{})})]})};n.a.render(Object(O.jsx)(C,{}),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.5617d712.chunk.js.map