(this.webpackJsonpwebsite=this.webpackJsonpwebsite||[]).push([[0],{14:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(1),s=n(7),r=n.n(s),i=n(2),l=n(3),o=n(5),h=n(4),j=n(8),d=n.n(j),u=function(e){Object(o.a)(n,e);var t=Object(h.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.social.map((function(e){return Object(a.jsx)("li",{children:Object(a.jsx)("a",{href:e.url,children:Object(a.jsx)("i",{className:e.className})})},e.name)}));return Object(a.jsxs)("header",{id:"home",children:[Object(a.jsxs)("nav",{id:"nav-wrap",children:[Object(a.jsx)("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation",children:"Show navigation"}),Object(a.jsx)("a",{className:"mobile-btn",href:"#home",title:"Hide navigation",children:"Hide navigation"}),Object(a.jsxs)("ul",{id:"nav",className:"nav",children:[Object(a.jsx)("li",{className:"brand",children:Object(a.jsx)("h2",{children:"andi motas"})}),Object(a.jsx)("li",{className:"current",children:Object(a.jsx)("a",{className:"smoothscroll",href:"#home",children:"home"})}),Object(a.jsx)("li",{children:Object(a.jsx)("a",{className:"smoothscroll",href:"#about",children:"about"})}),Object(a.jsx)("li",{children:Object(a.jsx)("a",{href:"https://drive.google.com/file/d/1jlRSBUBgI0JStEHdG6rP2iyHL37RnrCH/view?usp=sharing",children:"resume"})})]})]}),Object(a.jsx)("div",{className:"row banner",children:Object(a.jsxs)("div",{className:"banner-text",children:[Object(a.jsx)("h1",{children:"\uff41\uff4e\uff44\uff49fsdf\u3010\uff06 \uff45\u3011 \u207a\u208a"}),Object(a.jsxs)("h3",{children:[Object(a.jsx)("span",{children:"software engineer"})," with a passion for ",Object(a.jsx)("span",{children:"design"})," and ",Object(a.jsx)("span",{children:"data"})]}),Object(a.jsx)("ul",{className:"social",children:e})]})})]})}}]),n}(c.Component),b=function(e){Object(o.a)(n,e);var t=Object(h.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(a.jsx)("section",{id:"about",children:Object(a.jsxs)("div",{className:"text",children:[Object(a.jsx)("h2",{children:"hello there!  i'm andi."}),Object(a.jsxs)("span",{children:[Object(a.jsx)("p",{children:"i graduated from george mason university with a degree in computer science minoring in art/visual technology. my experience is mostly in back end development but currently expanding on full-stack and data engineering skills. i am a big data engineer at oracle opower where i develop software that helps people reduce their energy usage. in my free time i enjoy making art, playing instruments, helping out in the community, and exploring the latest in tech."}),Object(a.jsxs)("p",{children:["you can reach me at ",Object(a.jsx)("a",{href:"mailto:amotas2@gmu.edu",children:"amotas2@gmu.edu"})," ",Object(a.jsx)("br",{}),"(\uff89\xb4\u30ee\xb4)\uff89*: \uff65\uff9f\u207a\u208a"]}),Object(a.jsx)("h3",{children:"mentions:"}),Object(a.jsxs)("ul",{children:[Object(a.jsx)("li",{children:Object(a.jsx)("a",{href:"https://cahmp.gmu.edu/2022-cahmp-entrepreneurship-challenge/",children:"center for the advancement of human-machine partnership \u207a\u208a entrepreneurship challenge 2022"})}),Object(a.jsx)("li",{children:Object(a.jsx)("a",{href:"https://kplsorority.org/events/march-convention-2022/ ",children:"kappa phi lambda \u207a\u208a national convention 2022 panelists"})}),Object(a.jsx)("li",{children:Object(a.jsx)("a",{href:"https://cs.gmu.edu/blog/btt-mason-peer-leaders-are-cheer-leaders-for-students/",children:"george mason university, computer science department \u207a\u208a break through tech dc article"})}),Object(a.jsx)("li",{children:Object(a.jsx)("a",{href:"https://computing.gmu.edu/news/2021-10/grace-hoppers-legacy-continues-draw-women-cs ",children:"george mason university, college of engineering and computing \u207a\u208a grace hopper 2021 article"})})]})]})]})})}}]),n}(c.Component),m=(c.Component,c.Component,function(e){Object(o.a)(n,e);var t=Object(h.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(a.jsx)("footer",{children:Object(a.jsx)("div",{className:"row",children:Object(a.jsx)("div",{className:"twelve columns",children:Object(a.jsx)("ul",{className:"copyright",children:Object(a.jsxs)("li",{children:["andi motas \xa9 ",(new Date).getFullYear()]})})})})})}}]),n}(c.Component)),p=function(e){Object(o.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).state={foo:"bar",resumeData:{}},a}return Object(l.a)(n,[{key:"getResumeData",value:function(){d.a.ajax({url:"/resumeData.json",dataType:"json",cache:!1,success:function(e){this.setState({resumeData:e})}.bind(this),error:function(e,t,n){console.log(n),alert(n)}})}},{key:"componentDidMount",value:function(){this.getResumeData()}},{key:"render",value:function(){return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)(u,{data:this.state.resumeData.main}),Object(a.jsx)(b,{data:this.state.resumeData.main}),Object(a.jsx)(m,{data:this.state.resumeData.footer})]})}}]),n}(c.Component);r.a.render(Object(a.jsx)(p,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.52ead8ea.chunk.js.map