(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5405],{5301:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return i(7873)}])},7197:function(e,t,i){"use strict";i.d(t,{Z:function(){return h}});var r=i(5893),n=(i(7294),i(6761)),a=i(1878),s=i(1664),l=a.c.filter((function(e){return"general"===e.family})).map((function(e){return e.logo}));function c(e){var t=e.chartLogo,i=e.caption,a=e.link,c=e.isAvailable,u=e.size,d=l.includes(t),h=c?"opacity-100":"opacity-20",f=c?"cursor-pointer":"cursor-not-allowed";return(0,r.jsx)(s.default,{href:c?a:"subscribe",children:(0,r.jsxs)("div",{className:"flex flex-col items-center",children:[(0,r.jsxs)("div",{style:{width:u,height:u},className:"relative mr-2 rounded-full "+h+" "+f,children:[(0,r.jsx)("div",{className:"absolute",children:(0,r.jsx)(n.Z,{chartLogo:t})}),d?(0,r.jsx)("div",{className:"absolute opacity-0 hover:opacity-60 flex items-center justify-center w-full h-full z-30",children:(0,r.jsx)(o,{size:u})}):(0,r.jsx)("div",{className:"opacity-0 hover:opacity-60 flex items-center justify-center w-full h-full rounded-full bg-purple-800 z-30",children:(0,r.jsx)("p",{className:"text-white text-4xl",children:"+"})})]}),(0,r.jsx)("p",{className:"font-light text-sm text-gray-600 "+h,children:i})]})})}var o=function(e){var t=e.size;return(0,r.jsx)("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:t,height:t,viewBox:"0 0 100 100",className:"fill-current text-purple-800",children:(0,r.jsx)("path",{d:"M50,0 L100,20 L100,80 L50,100 L0,80 L0,20 Z"})})},u=i(3414),d={distribution:"Distribution",correlation:"Correlation",ranking:"Ranking",partOfAWhole:"Part Of A Whole",evolution:"Evolution",map:"Map",flow:"Flow",general:"General Knowledge"};function h(e){var t=e.chartFamily,i=a.c.filter((function(e){return e.family===t})).map((function(e,t){var i=(0,u.y)(e.reactURL);return(0,r.jsx)("div",{className:"flex flex-col items-center justify-center",children:(0,r.jsx)(c,{link:i,chartLogo:e.logo,caption:e.label,isAvailable:e.isAvailable,size:129})},t)}));return(0,r.jsxs)("div",{children:[(0,r.jsx)("p",{className:t+"  mt-4 text-md border-b mb-2 border-gray-100 tracking-wider",children:null===d||void 0===d?void 0:d[t]}),(0,r.jsx)("div",{className:"flex flex-row justify-start flex-wrap",children:i})]})}},7873:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return y}});var r=i(5893),n=i(7294),a=i(7197),s=i(6978),l=["unique","performant","interactive","insightful"],c=function(){var e=(0,n.useRef)(null),t=0,i=0,a=function(){var r=l[i];(null===e||void 0===e?void 0:e.current)&&(t<r.length?(e.current.innerHTML+=r.charAt(t),t++,setTimeout(a,40)):setTimeout((function(){e.current.innerHTML="",t=0,i>=l.length-1?i=0:i+=1,a()}),5e3))};return(0,n.useEffect)((function(){a()})),(0,r.jsx)("span",{style:{width:250,display:"inline-block"},children:(0,r.jsx)("span",{ref:e,className:"gradient with-blinking-cursor",children:""})})},o=i(8520),u=i.n(o),d=i(6502),h=i(1677);function f(e,t,i,r,n,a,s){try{var l=e[a](s),c=l.value}catch(o){return void i(o)}l.done?t(c):Promise.resolve(c).then(r,n)}var x=function(){var e,t=(0,n.useCallback)((e=u().mark((function e(t){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,h.R)(t);case 2:case"end":return e.stop()}}),e)})),function(){var t=this,i=arguments;return new Promise((function(r,n){var a=e.apply(t,i);function s(e){f(a,r,n,s,l,"next",e)}function l(e){f(a,r,n,s,l,"throw",e)}s(void 0)}))}),[]);return(0,r.jsx)(d.Z,{className:"h-full",id:"tsparticles",init:t,options:{fullScreen:{enable:!1},background:{color:{value:"transparent"}},fpsLimit:60,interactivity:{events:{onClick:{enable:!0,mode:"push"},onHover:{enable:!0,mode:"repulse"},resize:!0},modes:{push:{quantity:4},repulse:{distance:200,duration:.4}}},particles:{color:{value:"#C8C8C8"},links:{color:"#C8C8C8",distance:150,enable:!0,opacity:.5,width:1},collisions:{enable:!0},move:{direction:"none",enable:!0,outModes:{default:"out"},random:!1,speed:.6,straight:!1},number:{density:{enable:!0,area:800},value:70},opacity:{value:.5},shape:{type:"circle"},size:{value:{min:1,max:6}}},detectRetina:!0}})},p=i(8171),m=i(3919),v=i(3185),j=i(1261);function y(){return(0,r.jsxs)("div",{children:[(0,r.jsx)(p.A,{title:"Learn to build unique charts with React",seoDescription:"The React Graph Gallery displays hundreds of charts made with React, always with explanation and reproduciible code"}),(0,r.jsxs)("div",{className:"relative",children:[(0,r.jsx)("div",{className:"absolute top-0 bottom-0 left-0 right-0 h-full ",children:(0,r.jsx)(x,{})}),(0,r.jsxs)("div",{className:"wrapper relative",children:[(0,r.jsx)(v.Z,{}),(0,r.jsxs)("h1",{className:"mt-14",children:["Build ",(0,r.jsx)(c,{})," charts for the web"]}),(0,r.jsx)(m.r,{}),(0,r.jsx)("div",{className:"max-w-xxl pt-2 pb-14",children:(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("p",{children:["Have you ever wanted to create your ",(0,r.jsx)("b",{children:"own chart"}),"?"]}),(0,r.jsxs)("p",{children:["Based on ",(0,r.jsx)("del",{children:"hundreds"})," (not yet) of graph examples, this gallery guides you through the basic concepts of"," ",(0,r.jsx)("b",{children:"data visualization"})," with"," ",(0,r.jsx)("a",{href:"https://reactjs.org",children:"React"})," and"," ",(0,r.jsx)("a",{href:"https://www.d3-graph-gallery.com",children:"D3.js"}),". It also provides ready-to-use ",(0,r.jsx)("b",{children:"templates"})," to get started quicker."]}),(0,r.jsxs)("p",{children:["Stop using pre-made dataviz components \u2192 ",(0,r.jsx)("b",{children:"imagination"})," ","will become the only boundary to your ",(0,r.jsx)("b",{children:"creativity"}),"."]}),(0,r.jsxs)("p",{className:"mt-8",children:["The gallery is organized by chart types following the"," ",(0,r.jsx)("a",{href:"https://www.data-to-viz.com",children:"data-to-viz"})," ","classification. \u2193"]})]})})]})]}),(0,r.jsx)("div",{className:"wrapper ",children:(0,r.jsxs)("div",{className:"mb-20",children:[(0,r.jsx)(a.Z,{chartFamily:"correlation"}),(0,r.jsx)(a.Z,{chartFamily:"distribution"}),(0,r.jsx)(a.Z,{chartFamily:"ranking"}),(0,r.jsx)(a.Z,{chartFamily:"partOfAWhole"}),(0,r.jsx)(a.Z,{chartFamily:"evolution"}),(0,r.jsx)(a.Z,{chartFamily:"map"}),(0,r.jsx)(a.Z,{chartFamily:"flow"}),(0,r.jsx)(a.Z,{chartFamily:"general"})]})}),(0,r.jsx)(s.Z,{}),(0,r.jsx)("div",{className:"wrapper",children:(0,r.jsx)(j.Z,{})})]})}}},function(e){e.O(0,[1986,358,9774,2888,179],(function(){return t=5301,e(e.s=t);var t}));var t=e.O();_N_E=t}]);