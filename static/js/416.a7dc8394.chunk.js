"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[416],{5571:function(n,e,t){t.d(e,{Bc:function(){return u},__:function(){return l},l0:function(){return d}});var r,i,a,o=t(168),c=t(5867),s=t(5705),d=(0,c.ZP)(s.l0)(r||(r=(0,o.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  width: 400px;\n  margin-bottom: 50px;\n"]))),l=c.ZP.label(i||(i=(0,o.Z)(["\n  font-weight: bold;\n"]))),u=(0,c.ZP)(s.Bc)(a||(a=(0,o.Z)(["\n  color: red;\n"])))},4416:function(n,e,t){t.r(e),t.d(e,{default:function(){return Q}});var r,i,a,o,c,s,d,l,u,m=t(9439),x=t(9434),h=t(168),f=t(5867),p=f.ZP.li(r||(r=(0,h.Z)(["\n  display: flex;\n  justify-content: space-between;\n  list-style: none;\n"]))),j=f.ZP.div(i||(i=(0,h.Z)(["\n  width: 600px;\n"]))),b=f.ZP.div(a||(a=(0,h.Z)(["\n  display: flex;\n  gap: 10px;\n"]))),g=t(5162),v=t(2791),Z=t(4164),w=t(7322),y=f.ZP.div(o||(o=(0,h.Z)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(0, 0, 0, 0.8);\n  z-index: 1200;\n"]))),_=f.ZP.div(c||(c=(0,h.Z)(["\n  position: relative;\n  padding: 10px 30px;\n  max-width: calc(100vw - 48px);\n  max-height: calc(100vh - 24px);\n  background: #fff;\n"]))),C=(0,f.ZP)(w.FU5)(s||(s=(0,h.Z)(["\n  position: absolute;\n  top: 20px;\n  right: 0px;\n  width: 50px;\n  cursor: pointer;\n"]))),P=t(184),k=document.querySelector("#modal-root"),F=function(n){var e=n.children,t=n.onClose;(0,v.useEffect)((function(){var n=function(n){"Escape"===n.code&&t()};return window.addEventListener("keydown",n),function(){window.removeEventListener("keydown",n)}}),[t]);return(0,Z.createPortal)((0,P.jsx)(y,{onClick:function(n){n.target===n.currentTarget&&t()},children:(0,P.jsxs)(_,{children:[(0,P.jsx)(C,{onClick:t}),e]})}),k)},L=t(1413),q=t(5705),M=t(6727),N=t(5571),S=t(2624),E=M.Ry().shape({name:M.Z_("Must be a string").max(50,"Too Long!").required("Required"),number:M.Z_("Must be a string").matches(/\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +").max(50,"Too Long!").required("Required")}),z=function(n){var e=n.closeModal,t=n.contact,r=t.id,i=t.name,a=t.number,o=(0,x.I0)();return(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)("h2",{children:"Edit contact"}),(0,P.jsx)(q.J9,{initialValues:{name:i,number:a},validationSchema:E,onSubmit:function(n,t){var i;i=(0,L.Z)({id:r},n),o((0,g.mP)(i)),e(),t.resetForm()},children:(0,P.jsxs)(N.l0,{children:[(0,P.jsx)(N.__,{htmlFor:"name",children:"Name"}),(0,P.jsx)(q.gN,{name:"name"}),(0,P.jsx)(N.Bc,{name:"name",component:"div"}),(0,P.jsx)(N.__,{htmlFor:"number",children:"Number"}),(0,P.jsx)(q.gN,{type:"tel",name:"number"}),(0,P.jsx)(N.Bc,{name:"number",component:"div"}),(0,P.jsx)(S.z,{type:"submit",children:"Save contact"})]})})]})},B=function(n){var e=n.contact,t=e.id,r=e.name,i=e.number,a=(0,x.I0)(),o=(0,v.useState)(!1),c=(0,m.Z)(o,2),s=c[0],d=c[1],l=function(){d(!1)};return(0,P.jsxs)(p,{children:[(0,P.jsxs)(j,{children:[r," ",i," "]}),(0,P.jsxs)(b,{children:[(0,P.jsx)(S.z,{onClick:function(){d(!0)},children:"Edit"}),(0,P.jsx)(S.z,{onClick:function(){return a((0,g.GK)(t))},children:"Delete"})]}),s&&(0,P.jsx)(F,{onClose:l,children:(0,P.jsx)(z,{closeModal:l,contact:e})})]})},R=f.ZP.ul(d||(d=(0,h.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  margin: 70px 0 0 0;\n  padding: 0;\n"]))),T=t(6916),I=function(n){return n.contacts.items},A=function(n){return n.filter},J=(0,T.P1)([I,A],(function(n,e){var t=e.toLowerCase();return n.filter((function(n){return n.name.toLowerCase().includes(t)}))})),K=function(){var n=(0,x.I0)(),e=(0,x.v9)(J);return(0,v.useEffect)((function(){n((0,g.yF)())}),[n]),(0,P.jsx)(R,{children:e.map((function(n){return(0,P.jsx)(B,{contact:n},n.id)}))})},V=t(1993),D=f.ZP.div(l||(l=(0,h.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  width: 400px;\n  margin-bottom: 20px;\n"]))),G=f.ZP.label(u||(u=(0,h.Z)(["\n  font-weight: bold;\n"]))),U=function(){var n=(0,x.v9)(A),e=(0,x.I0)();return(0,P.jsxs)(D,{children:[(0,P.jsx)(G,{htmlFor:"filter",children:"Find contacts by name"}),(0,P.jsx)("input",{type:"text",name:"filter",value:n,onChange:function(n){e((0,V.M)(n.currentTarget.value))}})]})},H=M.Ry().shape({name:M.Z_("Must be a string").max(50,"Too Long!").required("Required"),number:M.Z_("Must be a string").matches(/\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +").max(50,"Too Long!").required("Required")}),O=function(n){var e=n.closeModal,t=(0,x.v9)(I),r=(0,x.I0)();return(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)("h2",{children:"Add new contact"}),(0,P.jsx)(q.J9,{initialValues:{name:"",number:""},validationSchema:H,onSubmit:function(n,i){var a;a=(0,L.Z)({},n),t.filter((function(n){return n.name.toLowerCase().trim()===a.name.toLowerCase().trim()})).length>0?alert("".concat(a.name," is already in contacts")):(r((0,g.uK)(a)),e()),i.resetForm()},children:(0,P.jsxs)(N.l0,{children:[(0,P.jsx)(N.__,{htmlFor:"name",children:"Name"}),(0,P.jsx)(q.gN,{name:"name"}),(0,P.jsx)(N.Bc,{name:"name",component:"div"}),(0,P.jsx)(N.__,{htmlFor:"number",children:"Number"}),(0,P.jsx)(q.gN,{type:"tel",name:"number"}),(0,P.jsx)(N.Bc,{name:"number",component:"div"}),(0,P.jsx)(S.z,{type:"submit",children:"Add contact"})]})})]})},Q=function(){var n=(0,v.useState)(!1),e=(0,m.Z)(n,2),t=e[0],r=e[1],i=function(){r(!1)};return(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)("h2",{children:"Contacts"}),(0,P.jsx)(U,{}),(0,P.jsx)(S.z,{onClick:function(){r(!0)},children:"Add Contact"}),(0,P.jsx)(K,{}),t&&(0,P.jsx)(F,{onClose:i,children:(0,P.jsx)(O,{closeModal:i})})]})}}}]);
//# sourceMappingURL=416.a7dc8394.chunk.js.map