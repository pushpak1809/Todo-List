(this.webpackJsonpnew=this.webpackJsonpnew||[]).push([[0],{13:function(t,e,c){},15:function(t,e,c){"use strict";c.r(e);var o=c(1),n=c(7),s=c.n(n),a=(c(13),c(3)),l=c(8),i=c(0),r=function(t){var e=t.setinput,c=t.input,o=t.settodo,n=t.todo,s=t.setstatus;return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)("form",{children:[Object(i.jsx)("input",{value:c,onChange:function(t){console.log(t.target.value),e(t.target.value)},type:"text",className:"todo-input"}),Object(i.jsx)("button",{onClick:function(t){t.preventDefault(),o([].concat(Object(l.a)(n),[{text:c,completed:!1,id:Math.random()}])),e("")},className:"todo-button",type:"submit",children:Object(i.jsx)("i",{className:"fas fa-plus-square"})}),Object(i.jsx)("div",{className:"select",children:Object(i.jsxs)("select",{onChange:function(t){s(t.target.value)},name:"todos",className:"filter-todo",children:[Object(i.jsx)("option",{value:"all",children:"All"}),Object(i.jsx)("option",{value:"completed",children:"Completed"}),Object(i.jsx)("option",{value:"uncompleted",children:"Uncompleted"})]})})]})})},d=c(6),j=function(t){var e=t.text,c=t.todo,o=t.settodo,n=t.todos;return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)("div",{className:"todo",children:[Object(i.jsx)("li",{className:"todo-item  ".concat(n.completed?"completed":""),children:e}),Object(i.jsx)("button",{onClick:function(){o(c.map((function(t){return t.id===n.id?Object(d.a)(Object(d.a)({},t),{},{completed:!t.completed}):t})))},className:"complete-btn",children:Object(i.jsx)("i",{className:"fas fa-check"})}),Object(i.jsx)("button",{onClick:function(){o(c.filter((function(t){return t.id!==n.id})))},className:"trash-btn",children:Object(i.jsx)("i",{className:"fas fa-trash"})})]})})},u=function(t){var e=t.todo,c=t.settodo,o=t.filteredtodos;return Object(i.jsx)(i.Fragment,{children:Object(i.jsx)("div",{className:"todo-container",children:Object(i.jsx)("ul",{className:"todo-list",children:o.map((function(t){return Object(i.jsx)(j,{settodo:c,todo:e,todos:t,text:t.text},t.id)}))})})})},b=function(){var t=Object(o.useState)(""),e=Object(a.a)(t,2),c=e[0],n=e[1],s=Object(o.useState)([]),l=Object(a.a)(s,2),d=l[0],j=l[1],b=Object(o.useState)("all"),m=Object(a.a)(b,2),O=m[0],f=m[1],p=Object(o.useState)([]),x=Object(a.a)(p,2),h=x[0],g=x[1];Object(o.useEffect)((function(){S()}),[]),Object(o.useEffect)((function(){v(),N()}),[d,O]);var v=function(){switch(O){case"completed":g(d.filter((function(t){return!0===t.completed})));break;case"uncompleted":g(d.filter((function(t){return!1===t.completed})));break;default:g(d)}},N=function(){localStorage.setItem("todo",JSON.stringify([]))},S=function(){if(null===localStorage.getItem("todo"))localStorage.setItem("todo",JSON.stringify([]));else{var t=JSON.parse(localStorage.getItem("todo"));j(t)}};return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)("header",{children:Object(i.jsx)("h1",{children:"ToDo List"})}),Object(i.jsx)(r,{input:c,todo:d,settodo:j,setinput:n,setstatus:f}),Object(i.jsx)(u,{filteredtodos:h,settodo:j,todo:d})]})})};s.a.render(Object(i.jsx)(i.Fragment,{children:Object(i.jsx)(b,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.dc2ad430.chunk.js.map