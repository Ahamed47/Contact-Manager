(this["webpackJsonpfirebase-crud"]=this["webpackJsonpfirebase-crud"]||[]).push([[0],{18:function(e,t,c){},19:function(e,t,c){},25:function(e,t,c){"use strict";c.r(t);var a=c(1),s=c(3),n=c.n(s),r=c(11),l=c.n(r),i=(c(18),c(19),c(5)),d=c(8),o=c(9),j=function(e){var t={fullName:"",mobile:"",email:"",address:""},c=Object(s.useState)(t),n=Object(d.a)(c,2),r=n[0],l=n[1];Object(s.useEffect)((function(){""===e.currentId?l(Object(i.a)({},t)):l(Object(i.a)({},e.contactObjects[e.currentId]))}),[e.currentId,e.contactObjects]);var j=function(e){var t=e.target,c=t.name,a=t.value;l(Object(i.a)(Object(i.a)({},r),{},Object(o.a)({},c,a)))};return Object(a.jsxs)("form",{autoComplete:"off",onSubmit:function(t){t.preventDefault(),e.addOrEdit(r)},children:[Object(a.jsxs)("div",{className:"form-group input-group",children:[Object(a.jsx)("div",{className:"input-group-prepend",children:Object(a.jsx)("div",{className:"input-group-text",children:Object(a.jsx)("i",{className:"fas fa-user"})})}),Object(a.jsx)("input",{className:"form-control",name:"fullName",placeholder:"Full Name",value:r.fullName,onChange:j,pattern:"[a-zA-Z ]+",required:!0})]}),Object(a.jsxs)("div",{className:"form-row",children:[Object(a.jsxs)("div",{className:"form-group input-group col-md-6",children:[Object(a.jsx)("div",{className:"input-group-prepend",children:Object(a.jsx)("div",{className:"input-group-text",children:Object(a.jsx)("i",{className:"fas fa-mobile-alt"})})}),Object(a.jsx)("input",{className:"form-control",name:"mobile",placeholder:"Mobile",value:r.mobile,onChange:j,pattern:"[0-9]{10}",required:!0})]}),Object(a.jsxs)("div",{className:"form-group input-group col-md-6",children:[Object(a.jsx)("div",{className:"input-group-prepend",children:Object(a.jsx)("div",{className:"input-group-text",children:Object(a.jsx)("i",{className:"fas fa-envelope"})})}),Object(a.jsx)("input",{className:"form-control",type:"email",name:"email",id:"email",placeholder:"Email",value:r.email,onChange:j,required:!0})]})]}),Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("textarea",{className:"form-control",name:"address",placeholder:"Address",value:r.address,onChange:j,required:!0})}),Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("input",{type:"submit",value:""===e.currentId?"Save":"Update",className:"btn btn-primary btn-block btn-outline-success"})})]})},b=c(12),u=(c(21),b.a.initializeApp({apiKey:"AIzaSyDriHyeoN014TqWyELPp7VtjxMv00Z0T4I",authDomain:"react-crud-c375d.firebaseapp.com",databaseURL:"https://react-crud-c375d.firebaseio.com",projectId:"react-crud-c375d",storageBucket:"react-crud-c375d.appspot.com",messagingSenderId:"104082329567",appId:"1:104082329567:web:dadb7cea2f65af4fb83e6a"}).database().ref()),m=function(){var e=Object(s.useState)(""),t=Object(d.a)(e,2),c=t[0],n=t[1],r=Object(s.useState)({}),l=Object(d.a)(r,2),o=l[0],b=l[1];Object(s.useEffect)((function(){u.child("contacts").on("value",(function(e){null!=e.val()&&b(Object(i.a)({},e.val()))}))}),[]);return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("div",{className:"jumbotron jumbotron-fluid",children:Object(a.jsx)("div",{className:"container",children:Object(a.jsx)("h1",{className:"display-4 text-center",children:"Contact Manager"})})}),Object(a.jsxs)("div",{className:"row",children:[Object(a.jsx)("div",{className:"col-md-5",children:Object(a.jsx)(j,Object(i.a)({},{currentId:c,contactObjects:o,addOrEdit:function(e){""==c?u.child("contacts").push(e,(function(e){e?console.log(e):n("")})):u.child("contacts/".concat(c)).set(e,(function(e){e?console.log(e):n("")}))}}))}),Object(a.jsx)("div",{className:"col-md-7",children:Object(a.jsxs)("table",{className:"table table-borderless table-stripped",children:[Object(a.jsx)("thead",{className:"thead-light",children:Object(a.jsxs)("tr",{children:[Object(a.jsx)("th",{children:"Name"}),Object(a.jsx)("th",{children:"Mobile"}),Object(a.jsx)("th",{children:"Email"}),Object(a.jsx)("th",{children:"Actions"})]})}),Object(a.jsx)("tbody",{children:Object.keys(o).map((function(e){return Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{children:o[e].fullName}),Object(a.jsx)("td",{children:o[e].mobile}),Object(a.jsx)("td",{children:o[e].email}),Object(a.jsxs)("td",{className:"bg-light",children:[Object(a.jsx)("a",{className:"btn text-primary",onClick:function(){n(e)},children:Object(a.jsx)("i",{className:"fas fa-pencil-alt"})}),Object(a.jsx)("a",{className:"btn text-danger",onClick:function(){var t;t=e,window.confirm("Are you sure to delete this record?")&&u.child("contacts/".concat(t)).remove((function(e){e?console.log(e):n("")}))},children:Object(a.jsx)("i",{className:"far fa-trash-alt"})})]})]},e)}))})]})})]})]})};var O=function(){return Object(a.jsx)("div",{className:"row",children:Object(a.jsx)("div",{className:"col-md-8 offset-md-2",children:Object(a.jsx)(m,{})})})},p=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,26)).then((function(t){var c=t.getCLS,a=t.getFID,s=t.getFCP,n=t.getLCP,r=t.getTTFB;c(e),a(e),s(e),n(e),r(e)}))};l.a.render(Object(a.jsx)(n.a.StrictMode,{children:Object(a.jsx)(O,{})}),document.getElementById("root")),p()}},[[25,1,2]]]);
//# sourceMappingURL=main.62fe0e9d.chunk.js.map