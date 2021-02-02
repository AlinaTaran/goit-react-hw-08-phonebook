(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[0],{128:function(e,t,n){e.exports={input:"ContactForm_input__3ccaS",button:"ContactForm_button__1WblQ"}},130:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return q}));var c={};n.r(c),n.d(c,"fetchContacts",(function(){return m})),n.d(c,"addContact",(function(){return h})),n.d(c,"deleteContact",(function(){return p}));var r={};n.r(r),n.d(r,"getContacts",(function(){return O})),n.d(r,"getFilter",(function(){return x})),n.d(r,"filteredContacts",(function(){return v}));var a=n(2),o=n(0),s=n(10),u=function(e){var t=e.name,n=e.number,c=e.onClick;return Object(a.jsxs)("li",{children:[Object(a.jsxs)("p",{children:[t,": ",n]}),Object(a.jsx)("button",{onClick:c,children:"Delete"})]})},i=n(19),b=n.n(i),l=n(25),j=n(22),d=n.n(j),f=n(12),m=function(){return function(){var e=Object(l.a)(b.a.mark((function e(t){var n,c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(Object(f.fetchContactsRequest)()),e.prev=1,e.next=4,d.a.get("/contacts");case 4:n=e.sent,c=n.data,t(Object(f.fetchContactsSuccess)(c)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),t(Object(f.fetchContactsError)(e.t0));case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}()},h=function(e,t){return function(){var n=Object(l.a)(b.a.mark((function n(c){var r,a,o;return b.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r={name:e,number:t},c(Object(f.addContactRequest)()),n.prev=2,n.next=5,d.a.post("/contacts",r);case 5:a=n.sent,o=a.data,c(Object(f.addContactSuccess)(o)),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(2),c(Object(f.addContactError)(n.t0));case 13:case"end":return n.stop()}}),n,null,[[2,10]])})));return function(e){return n.apply(this,arguments)}}()},p=function(e){return function(){var t=Object(l.a)(b.a.mark((function t(n){return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(Object(f.deleteContactRequest)()),t.prev=1,t.next=4,d.a.delete("/contacts/".concat(e));case 4:n(Object(f.deleteContactSuccess)(e)),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(1),n(Object(f.deleteContactError)(t.t0));case 10:case"end":return t.stop()}}),t,null,[[1,7]])})));return function(e){return t.apply(this,arguments)}}()},O=function(e){return e.contacts.items},x=function(e){return e.contacts.filter},v=function(e){var t=O(e),n=x(e).toLowerCase();return t.filter((function(e){return e.name.toLowerCase().includes(n)}))},C=(n(38),function(){var e=Object(s.c)(r.getContacts),t=Object(s.b)(),n=Object(s.c)(r.filteredContacts);return Object(a.jsx)(a.Fragment,{children:e.length>0?Object(a.jsx)("ul",{children:n.map((function(e){var n=e.id,r=e.name,o=e.number;return Object(a.jsx)(u,{name:r,number:o,onClick:function(){return t(c.deleteContact(n))}},n)}))}):Object(a.jsx)("p",{children:"No contacts have been added to your phonebook"})})}),g=n(129),k=n(126),_=n.n(k),w=n(128),y=n.n(w);var N=function(){var e=Object(g.b)(),t=e.register,n=e.handleSubmit,o=e.errors,u=e.reset,i=e.control,b=Object(s.c)(r.getContacts),l=Object(s.b)();return Object(a.jsxs)("form",{className:y.a.form,onSubmit:n((function(e){var t=e.name,n=e.number;(function(e){var t=e.toLowerCase();return b.find((function(e){return e.name.toLowerCase()===t}))})(t)?alert("".concat(t," is already in your phonebook")):l(c.addContact(t,n)),u()})),children:[Object(a.jsxs)("label",{className:y.a.label,children:["Name",Object(a.jsx)("input",{className:y.a.input,name:"name",ref:t({minLength:{value:2,message:"Too short name"},maxLength:{value:20,message:"Too long name"},required:"Is a required field"}),type:"text"}),o.name&&Object(a.jsx)("p",{className:y.a.errors,children:o.name.message})]}),Object(a.jsxs)("label",{children:["Number",Object(a.jsx)(g.a,{as:_.a,name:"number",rules:{required:"Phone number is required"},defaultValue:"",control:i,className:y.a.input,placeholder:"+38 (___) ___-__-__",mask:"+38 (999) 999-99-99"}),o.number&&Object(a.jsx)("p",{className:y.a.errors,children:o.number.message})]}),Object(a.jsx)("button",{className:y.a.button,type:"submit",children:"Add to contact"})]})},F=function(){var e=Object(s.c)(r.getFilter),t=Object(s.b)(),n=Object(s.c)(r.getContacts);return Object(a.jsx)(a.Fragment,{children:n.length>1&&Object(a.jsxs)("label",{children:["Find contact by name",Object(a.jsx)("input",{type:"text",name:"name",value:e,onChange:function(e){return t(f.changeFilter(e.target.value))}})]})})};function q(){var e=Object(s.b)();return Object(o.useEffect)((function(){return e(c.fetchContacts())}),[e]),Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{children:"Phonebook"}),Object(a.jsx)(N,{}),Object(a.jsx)("h2",{children:"Contacts"}),Object(a.jsx)(F,{}),Object(a.jsx)(C,{})]})}}}]);
//# sourceMappingURL=contacts-view.7d605de1.chunk.js.map