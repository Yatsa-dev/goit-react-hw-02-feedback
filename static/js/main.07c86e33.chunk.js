(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],[,,function(t,e,n){t.exports={statistics:"Statistics_statistics__J3Iu9"}},,,,,,,function(t,e,n){t.exports={container:"Container_container__1Wo4e"}},function(t,e,n){t.exports={btn:"FeedbackOptions_btn__2nByz"}},function(t,e,n){t.exports={notification:"Notification_notification__1A4n_"}},function(t,e,n){t.exports={section:"Section_section__2VhwK"}},,,,,,,,,,function(t,e,n){},function(t,e,n){"use strict";n.r(e);var c=n(1),a=n.n(c),i=n(5),s=n.n(i),r=n(6),o=n(7),l=n(8),u=n(14),d=n(13),b=n(9),j=n.n(b),h=n(0);function f(t){var e=t.children;return Object(h.jsx)("div",{className:j.a.container,children:e})}var O=n(3),x=n.n(O),p=n(10),v=n.n(p),_=function(t){var e=t.options,n=t.onLeaveFeedback;return Object(h.jsx)(h.Fragment,{children:e.map((function(t){return Object(h.jsx)("button",{className:v.a.btn,type:"button",onClick:function(){return n(t)},children:t.charAt(0).toUpperCase()+t.slice(1)},t)}))})};_.prototype={good:x.a.func.isRequired,neutral:x.a.func.isRequired,bad:x.a.func.isRequired};var k=_,m=n(2),g=n.n(m),N=function(t){var e=t.good,n=t.neutral,c=t.bad,a=t.total,i=t.positivePercentage;return Object(h.jsx)("div",{children:Object(h.jsxs)("ul",{children:[Object(h.jsxs)("li",{className:g.a.statistics,children:["Good: ",e]}),Object(h.jsxs)("li",{className:g.a.statistics,children:["Neutral: ",n]}),Object(h.jsxs)("li",{className:g.a.statistics,children:["Bad: ",c]}),Object(h.jsxs)("li",{className:g.a.statistics,children:["Total: ",a]}),Object(h.jsxs)("li",{className:g.a.statistics,children:["Positive feedback: ",i,"%"]})]})})},y=n(11),w=n.n(y),F=function(t){var e=t.message;return Object(h.jsx)("h3",{className:w.a.notification,children:e})},S=n(12),q=n.n(S),C=function(t){var e=t.title,n=t.children;return Object(h.jsxs)("section",{className:q.a.section,children:[Object(h.jsx)("h2",{children:e}),n]})},L=function(t){Object(u.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(o.a)(this,n);for(var c=arguments.length,a=new Array(c),i=0;i<c;i++)a[i]=arguments[i];return(t=e.call.apply(e,[this].concat(a))).state={good:0,neutral:0,bad:0},t.onLeaveFeedback=function(e){t.setState((function(t){return Object(r.a)({},e,t[e]+1)}))},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.state,e=t.good,n=t.neutral,c=t.bad,a=this.onLeaveFeedback,i=e+c+n,s=Math.round(e/i*100),r=Object.keys(this.state);return Object(h.jsxs)(f,{children:[Object(h.jsx)(C,{title:"Please leave feedback",children:Object(h.jsx)(k,{options:r,onLeaveFeedback:a})}),Object(h.jsx)(C,{title:"Statistics",children:i?Object(h.jsx)(N,{good:e,neutral:n,bad:c,total:i,positivePercentage:s}):Object(h.jsx)(F,{message:"No feedback given"})})]})}}]),n}(c.Component);n(22);s.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(L,{})}),document.querySelector("#root"))}],[[23,1,2]]]);
//# sourceMappingURL=main.07c86e33.chunk.js.map