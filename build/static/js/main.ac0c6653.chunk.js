(this["webpackJsonpmeetingsdk-sample-react"]=this["webpackJsonpmeetingsdk-sample-react"]||[]).push([[0],{150:function(e,t,c){},151:function(e,t,c){},191:function(e,t){},192:function(e,t){},198:function(e,t){},200:function(e,t){},233:function(e,t){},235:function(e,t){},263:function(e,t){},265:function(e,t){},266:function(e,t){},271:function(e,t){},273:function(e,t){},292:function(e,t){},304:function(e,t){},307:function(e,t){},332:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),i=c(142),a=c.n(i),r=(c(150),c(151),c(21)),o=c(3),l=c(0),j=function(e){return Object(l.jsxs)("div",{className:"home",children:[Object(l.jsx)("h1",{children:"Zoom Meeting SDK Sample React"}),Object(l.jsxs)("div",{className:"btn-group",role:"group","aria-label":"Basic example",children:[Object(l.jsx)(r.b,{className:"btn btn-primary ms-5",to:"/create-meeting",children:"Create Meeting"}),Object(l.jsx)(r.b,{className:"btn btn-primary ms-5",to:"/meeting",children:"Join Meeting"})]})]})},d=c(10),b=c(16),m=(c(162),c(231),c(310),c(312));b.ZoomMtg.setZoomJSLib("https://source.zoom.us/2.4.0/lib","/av"),b.ZoomMtg.preLoadWasm(),b.ZoomMtg.prepareWebSDK(),b.ZoomMtg.i18n.load("en-US"),b.ZoomMtg.i18n.reload("en-US");var u=function(){var e=Object(o.g)(),t="ZFD3L0icBEBKPEcpG9jI4UFAGFHXtY1B612O",c="ZvFB2Y0aB337IkixuPUegDoSMV2HL4hMUSq1",s="".concat("http://54.165.82.130/api","/getMeeting"),i=window.location.href,a=Object(n.useState)(""),r=Object(d.a)(a,2),j=r[0],u=r[1],h=Object(n.useState)(""),p=Object(d.a)(h,2),O=p[0],x=p[1],g=Object(n.useState)(""),f=Object(d.a)(g,2),v=f[0],N=f[1];function y(e){var n=Math.round((new Date).getTime()/1e3)-30,s={sdkKey:t,mn:e,role:1,iat:n,exp:n+7200,appKey:c,tokenExp:n+7200},i=JSON.stringify({alg:"HS256",typ:"JWT"}),a=JSON.stringify(s);return m.jws.JWS.sign("HS256",i,a,c)}function S(e,c){document.getElementById("zmmtg-root").style.display="block",b.ZoomMtg.init({leaveUrl:i,isSupportAV:!0,success:function(n){console.log(n),b.ZoomMtg.join({signature:e,meetingNumber:c,userName:"Call Center - Agent",sdkKey:t,userEmail:"dinesh@sp-solutions.biz",passWord:"123456",tk:"",success:function(e){console.log(e),b.ZoomMtg.record({record:!0})},error:function(e){console.log(e)}})},error:function(e){console.log(e)}})}return Object(n.useEffect)((function(){!function(){if(console.log(e),e.id){var t=y(parseInt(e.id));u(e.id),N(t),S(v,j)}else fetch(s,{method:"GET"}).then((function(e){return e.json()})).then((function(e){console.log(e);var t=y(parseInt(e.id));return u(e.id),x(e.join_url),N(t),e})).catch((function(e){console.error(e)}))}()}),[]),Object(l.jsx)("div",{className:"App",children:Object(l.jsx)("main",{children:j?Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{children:"Zoom Meeting SDK Sample React"}),Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),Object(l.jsx)("p",{children:"Join URL : "}),Object(l.jsx)("a",{href:O,children:O}),Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),Object(l.jsxs)("div",{className:"btn-group",role:"group","aria-label":"Basic example",children:[Object(l.jsx)("button",{className:"btn btn-primary",onClick:function(){navigator.clipboard.writeText(O)},children:"Copy URL"}),Object(l.jsx)("button",{className:"btn btn-success",onClick:function(){S(v,j)},children:"Start Meeting"})]})]}):Object(l.jsx)("h1",{children:" Loading ...."})})})},h=c(145),p=c.n(h),O=function(e){var t=Object(n.useState)(null),c=Object(d.a)(t,2),s=c[0],i=c[1];return Object(l.jsx)("div",{className:"createMeeting",children:Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)("h1",{className:"mb-5 mt-5",children:"Create a New Meeting"}),s?Object(l.jsxs)("div",{className:"card",children:[Object(l.jsx)("div",{class:"alert alert-success",role:"alert",children:"Meeting Created"}),Object(l.jsx)("div",{className:"card-body",children:Object(l.jsxs)("table",{className:"table",children:[Object(l.jsx)("thead",{children:Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{scope:"col",children:"#"}),Object(l.jsx)("th",{scope:"col",children:"id"}),Object(l.jsx)("th",{scope:"col",children:"Topic"}),Object(l.jsx)("th",{scope:"col",children:"start_time"})]})}),Object(l.jsx)("tbody",{children:Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{scope:"row",children:"1"}),Object(l.jsx)("td",{children:s.id}),Object(l.jsx)("td",{children:s.topic}),Object(l.jsx)("td",{children:s.start_time})]})})]})})]}):Object(l.jsx)("div",{className:"card",children:Object(l.jsx)("div",{className:"card-body",children:Object(l.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t=e.target.topic.value,c=e.target.agenda.value,n=e.target.date.value,s=e.target.time.value,a={topic:t,agenda:c,invitees:e.target.invitees.value,start_date:n,start_time:s+":00"};console.log("request body",a),p.a.post("".concat("http://54.165.82.130/api","/createMeeting"),a).then((function(e){i(e.data)})).catch((function(e){console.error(e)}))},className:"row g-3",children:[Object(l.jsxs)("div",{className:"col-md-12",children:[Object(l.jsx)("label",{for:"inputAddress",className:"form-label",children:"Meeting Topic"}),Object(l.jsx)("input",{type:"text",className:"form-control",name:"topic",placeholder:"Meeting Topic"})]}),Object(l.jsxs)("div",{className:"col-md-12",children:[Object(l.jsx)("label",{for:"inputAddress2",className:"form-label",children:"Detailed Meeting Agenda"}),Object(l.jsx)("input",{type:"text",className:"form-control",name:"agenda",placeholder:"Agenda"})]}),Object(l.jsxs)("div",{className:"col-md-12",children:[Object(l.jsx)("label",{for:"inputAddress2",className:"form-label",children:"Invitees"}),Object(l.jsx)("input",{type:"text",className:"form-control",name:"invitees",placeholder:"Invitees list seperated by Semicolon (;) "})]}),Object(l.jsxs)("div",{className:"col-md-6",children:[Object(l.jsx)("label",{for:"inputCity",className:"form-label",children:"Start Date"}),Object(l.jsx)("input",{type:"date",className:"form-control",name:"date"})]}),Object(l.jsxs)("div",{className:"col-md-6",children:[Object(l.jsx)("label",{for:"inputCity",className:"form-label",children:"Start Time"}),Object(l.jsx)("input",{type:"time",className:"form-control",name:"time"})]}),Object(l.jsx)("div",{className:"col-md-12",children:Object(l.jsx)("button",{type:"submit",className:"btn btn-primary  btn-lg",children:"Schedule Meeting"})})]})})})]})})};var x=function(){return Object(l.jsx)("div",{className:"App",children:Object(l.jsx)(r.a,{children:Object(l.jsxs)(o.c,{children:[Object(l.jsx)(o.a,{strict:!0,path:"/",element:Object(l.jsx)(j,{})}),Object(l.jsx)(o.a,{strict:!0,path:"/meeting",element:Object(l.jsx)(u,{})}),Object(l.jsx)(o.a,{strict:!0,path:"/meeting/:id",element:Object(l.jsx)(u,{})}),Object(l.jsx)(o.a,{strict:!0,path:"/create-meeting",element:Object(l.jsx)(O,{})})]})})})},g=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,333)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,i=t.getLCP,a=t.getTTFB;c(e),n(e),s(e),i(e),a(e)}))};a.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(x,{})}),document.getElementById("root")),g()}},[[332,1,2]]]);
//# sourceMappingURL=main.ac0c6653.chunk.js.map