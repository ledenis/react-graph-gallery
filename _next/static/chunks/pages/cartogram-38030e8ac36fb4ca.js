(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9954],{237:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/cartogram",function(){return r(2256)}])},7262:function(e,t,r){"use strict";r.d(t,{Z:function(){return p}});var s=r(5893);r(7294);var a=r(5887),o=r(8843),i=r(1664),l=r.n(i);let n=o.c.filter(e=>"general"===e.family).map(e=>e.logo);function c(e){let{chartLogo:t,caption:r,link:o,isAvailable:i,size:c}=e,h=n.includes(t),m=i?"opacity-100":"opacity-20";return(0,s.jsx)(l(),{href:i?o:"subscribe",className:"no-underline",children:(0,s.jsxs)("div",{className:"flex flex-col items-center",children:[(0,s.jsxs)("div",{style:{width:c,height:c},className:"relative mr-2 rounded-full "+m+" "+(i?"cursor-pointer":"cursor-not-allowed"),children:[(0,s.jsx)("div",{className:"absolute",children:(0,s.jsx)(a.Z,{chartLogo:t})}),h?(0,s.jsx)("div",{className:"absolute opacity-0 hover:opacity-60 flex items-center justify-center w-full h-full z-30",children:(0,s.jsx)(d,{size:c})}):(0,s.jsx)("div",{style:{backgroundColor:"var(--react-gallery)"},className:"opacity-0 hover:opacity-60 flex items-center justify-center w-full h-full rounded-full  z-30",children:(0,s.jsx)("span",{className:"text-white text-4xl",children:"+"})})]}),(0,s.jsx)("p",{className:"font-light text-sm text-gray-600 "+m,children:r})]})})}let d=e=>{let{size:t}=e;return(0,s.jsx)("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:t,height:t,viewBox:"0 0 100 100",className:"fill-current text-purple-800",children:(0,s.jsx)("path",{d:"M50,0 L100,20 L100,80 L50,100 L0,80 L0,20 Z"})})};var h=r(4588);let m={distribution:"Distribution",correlation:"Correlation",ranking:"Ranking",partOfAWhole:"Part Of A Whole",evolution:"Evolution",map:"Map",flow:"Flow",general:"General Knowledge"};function p(e){let{chartFamily:t}=e,r=o.c.filter(e=>e.family===t).map((e,t)=>{let r=(0,h.y)(e.reactURL);return(0,s.jsx)("div",{className:"flex flex-col items-center justify-center",children:(0,s.jsx)(c,{link:r,chartLogo:e.logo,caption:e.label,isAvailable:e.isAvailable,size:129})},t)});return(0,s.jsxs)("div",{children:[(0,s.jsx)("p",{className:t+"  mt-4 text-md border-b mb-2 border-gray-100 tracking-wider",children:null==m?void 0:m[t]}),(0,s.jsx)("div",{className:"flex flex-row justify-start flex-wrap",children:r})]})}},153:function(e,t,r){"use strict";r.d(t,{A:function(){return m}});var s=r(5893),a=r(9700),o=r(3476),i=r(7294),l=r(3084),n=r.n(l);function c(){let[e,t]=(0,i.useState)([]),[r,a]=(0,i.useState)(0);return(0,i.useEffect)(()=>{let e=Array.from(document.querySelectorAll("h2"));t(e)},[]),(0,i.useEffect)(()=>{let t=()=>{let t=e.map(e=>e.offsetTop-e.scrollTop+e.clientTop),r=window.scrollY+150,s=t.reduce((e,t)=>Math.abs(t-r)<Math.abs(e-r)?t:e,0),o=t.findIndex(e=>e===s);a(-1===o?0:o)};return window.addEventListener("scroll",t),()=>window.removeEventListener("scroll",t)},[e]),(0,s.jsx)("div",{className:n().tableOfContent,children:e.map((t,a)=>(0,s.jsx)("p",{className:r===a?"".concat(n().tocItem," ").concat(n().tocItemActive):n().tocItem,onClick:t=>{t.preventDefault(),e[a].scrollIntoView({behavior:"smooth",block:"start",alignToTop:!0})},children:t.id.charAt(0).toUpperCase()+t.id.slice(1)},t.id))})}var d=r(7414),h=r(2594);let m=e=>{let{children:t,title:r,seoDescription:i}=e;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(d.A,{title:r,seoDescription:i}),(0,s.jsx)("div",{className:"wrapper",children:(0,s.jsx)(a.Z,{})}),(0,s.jsx)("div",{className:"wrapper",children:t}),(0,s.jsx)(h.Z,{}),(0,s.jsx)("div",{className:"wrapper",children:(0,s.jsx)(o.Z,{})}),(0,s.jsx)(c,{})]})}},6438:function(e,t,r){"use strict";r.d(t,{J:function(){return i}});var s=r(5893),a=r(1664),o=r.n(a);let i=e=>{let{children:t,href:r,isFilled:a,size:i="md",isFaded:l}=e,n=r.startsWith("www")||r.startsWith("http"),c="font-normal rounded mr-1 cursor-pointer border-reactGallery border ";a?c+=" bg-reactGallery hover:bg-reactGallery text-white ":c+=" bg-white hover:bg-reactGallery hover:text-white text-reactGallery ","sm"===i&&(c+="text-sm py-1 px-2 "),"md"===i&&(c+="text-md py-2 px-4 "),l&&(c+="opacity-60");let d=(0,s.jsx)("span",{className:c,children:t});return n?(0,s.jsx)("a",{href:r,target:"_blank",children:d}):(0,s.jsx)(o(),{href:r,passHref:!0,children:d})}},9965:function(e,t,r){"use strict";r.d(t,{Z:function(){return m}});var s=r(5893);r(7294);var a=r(8843),o=r(4588),i=r(1859),l=r(6438),n=r(1832),c=r.n(n);let d=e=>{let{direction:t,text:r,children:a}=e;return(0,s.jsx)("span",{className:c().tooltip+" "+c()[t],id:r,children:a})};var h=r(5887);function m(e){let{title:t,description:r,chartType:n,showSectionLink:c=!1,showInspirationLink:m=!0,showD3GalleryLink:p=!0}=e,u=a.c.find(e=>e.id===n);return u?(0,s.jsxs)("div",{className:"w-full pt-1 sm:pt-28 pb-20 ",children:[(0,s.jsxs)("div",{className:"flex justify-start items-center",children:[(0,s.jsx)("h1",{children:t}),(0,s.jsx)("div",{className:"w-20 ml-4",children:(0,s.jsx)(h.Z,{chartLogo:null==u?void 0:u.logo})})]}),(0,s.jsx)(i.r,{}),(0,s.jsx)("div",{className:"max-w-xxl  py-2",children:r}),n&&(0,s.jsx)("span",{className:"text-gray-400 text-sm font-light",children:"Useful links"}),n&&(0,s.jsxs)("div",{className:"flex flex-row flex-wrap",children:[c&&(0,s.jsx)(d,{text:"visit related section in the gallery",direction:"bottom",children:(0,s.jsx)(l.J,{href:(0,o.y)(u.reactURL),size:"sm",children:u.label+" section"})}),m&&(0,s.jsx)(d,{text:"Hundreds of stunning dataviz projects to gather inspiration",direction:"bottom",children:(0,s.jsx)(l.J,{href:"https://www.dataviz-inspiration.com/"+u.id,size:"sm",children:"inspiration"})}),p&&(0,s.jsx)(d,{text:"Pure d3 implementation, no React",direction:"bottom",children:(0,s.jsx)(l.J,{href:u.d3URL,size:"sm",children:"d3 gallery"})}),(0,s.jsx)(d,{text:"Dataviz theory about this chart",direction:"bottom",children:(0,s.jsx)(l.J,{href:u.dataToVizURL,isFilled:!0,size:"sm",children:"About this chart"})})]})]}):null}},8893:function(e,t,r){"use strict";r.d(t,{H:function(){return a}});var s=r(5893);let a=e=>{let{text:t}=e;return(0,s.jsxs)("blockquote",{className:"mt-10 opacity-20",children:[(0,s.jsx)("b",{className:"text-reactGallery mr-4",children:"ToDo"}),t]})}},2256:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return h}});var s=r(5893);r(7294);var a=r(153),o=r(9965),i=r(7262),l=r(1664),n=r.n(l),c=r(8893);let d=(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("p",{children:["A ",(0,s.jsx)("a",{href:"https://www.data-to-viz.com/graph/cartogram.html",children:"cartogram"})," ","is a map in which the geometry of regions is ",(0,s.jsx)("b",{children:"distorted"})," in order to convey the information of an alternate variable."]}),(0,s.jsxs)("p",{children:["It is possible to build a Cartogram react component thanks to a js library called"," ",(0,s.jsx)("a",{href:"https://github.com/shawnbot/topogram/pulls",target:"_blank",children:"topogram"}),". This page provides step-by-step explanations on how to use the library based on a ",(0,s.jsx)("code",{children:"geoJson"})," file with the help of d3.js for manipulating such a data source."]})]});function h(){return(0,s.jsxs)(a.A,{title:"How to build a cartogram with React and D3.",seoDescription:"A step-by-step guide to build your very own Cartogram component from scratch. Comes with explanations, code sandboxes, and ready-to-use templates.",children:[(0,s.jsx)(o.Z,{title:"Cartogram",description:d,chartType:"cartogram"}),(0,s.jsx)("h2",{id:"data",children:"The Data"}),(0,s.jsxs)("p",{children:["Probably uses the same as for a"," ",(0,s.jsx)(n(),{href:"choropleth-map",children:"choropleth map"})," or for a bubble map."]}),(0,s.jsx)("h2",{id:"topogram",children:"The Topogram library"}),(0,s.jsxs)("p",{children:["As far as I can tell the best way to create a cartogram in JS is the"," ",(0,s.jsx)("a",{href:"https://github.com/shawnbot/topogram",children:"topogram library"}),"."]}),(0,s.jsxs)("p",{children:["However it looks like there is no easy way to install it using"," ",(0,s.jsx)("code",{children:"npm"}),". The easiest way is probably to clone the repo and create the build, or to copy the content of the"," ",(0,s.jsx)("a",{href:"https://github.com/shawnbot/topogram/blob/master/src/cartogram.js",target:"_blank",children:"cartogram.js"})," ","file."]}),(0,s.jsx)(c.H,{text:"Add example of usage of the topogram lib"}),(0,s.jsx)("div",{className:"full-bleed border-t h-0 bg-gray-100 mb-3 mt-24"}),(0,s.jsx)(i.Z,{chartFamily:"map"}),(0,s.jsx)("div",{className:"mt-20"})]})}},1832:function(e){e.exports={tooltip:"tooltip_tooltip__Fv96Y",right:"tooltip_right__lXq9G",left:"tooltip_left__hUc5l",bottom:"tooltip_bottom__Qzoh5",top:"tooltip_top__qDz28"}},3084:function(e){e.exports={tableOfContent:"table-of-content_tableOfContent__oi0XB",tocItem:"table-of-content_tocItem__fZBSX",tocItemActive:"table-of-content_tocItemActive__kiClt"}}},function(e){e.O(0,[3996,645,9774,2888,179],function(){return e(e.s=237)}),_N_E=e.O()}]);