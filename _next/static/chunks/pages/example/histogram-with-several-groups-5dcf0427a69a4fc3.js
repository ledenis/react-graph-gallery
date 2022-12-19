(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5444],{5037:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/example/histogram-with-several-groups",function(){return r(8247)}])},7197:function(e,t,r){"use strict";r.d(t,{Z:function(){return h}});var n=r(5893),i=(r(7294),r(6761)),a=r(1878),s=r(1664),o=a.c.filter((function(e){return"general"===e.family})).map((function(e){return e.logo}));function l(e){var t=e.chartLogo,r=e.caption,a=e.link,l=e.isAvailable,d=e.size,u=o.includes(t),h=l?"opacity-100":"opacity-20",f=l?"cursor-pointer":"cursor-not-allowed";return(0,n.jsx)(s.default,{href:l?a:"subscribe",children:(0,n.jsxs)("div",{className:"flex flex-col items-center",children:[(0,n.jsxs)("div",{style:{width:d,height:d},className:"relative mr-2 rounded-full "+h+" "+f,children:[(0,n.jsx)("div",{className:"absolute",children:(0,n.jsx)(i.Z,{chartLogo:t})}),u?(0,n.jsx)("div",{className:"absolute opacity-0 hover:opacity-60 flex items-center justify-center w-full h-full z-30",children:(0,n.jsx)(c,{size:d})}):(0,n.jsx)("div",{style:{backgroundColor:"var(--react-gallery)"},className:"opacity-0 hover:opacity-60 flex items-center justify-center w-full h-full rounded-full z-30",children:(0,n.jsx)("span",{className:"text-white text-4xl",children:"+"})})]}),(0,n.jsx)("p",{className:"font-light text-sm text-gray-600 "+h,children:r})]})})}var c=function(e){var t=e.size;return(0,n.jsx)("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:t,height:t,viewBox:"0 0 100 100",className:"fill-current text-purple-800",children:(0,n.jsx)("path",{d:"M50,0 L100,20 L100,80 L50,100 L0,80 L0,20 Z"})})},d=r(3414),u={distribution:"Distribution",correlation:"Correlation",ranking:"Ranking",partOfAWhole:"Part Of A Whole",evolution:"Evolution",map:"Map",flow:"Flow",general:"General Knowledge"};function h(e){var t=e.chartFamily,r=a.c.filter((function(e){return e.family===t})).map((function(e,t){var r=(0,d.y)(e.reactURL);return(0,n.jsx)("div",{className:"flex flex-col items-center justify-center",children:(0,n.jsx)(l,{link:r,chartLogo:e.logo,caption:e.label,isAvailable:e.isAvailable,size:129})},t)}));return(0,n.jsxs)("div",{children:[(0,n.jsx)("p",{className:t+"  mt-4 text-md border-b mb-2 border-gray-100 tracking-wider",children:null===u||void 0===u?void 0:u[t]}),(0,n.jsx)("div",{className:"flex flex-row justify-start flex-wrap",children:r})]})}},33:function(e,t,r){"use strict";r.d(t,{$:function(){return c}});var n=r(5893),i=r(7294),a=r(217),s=r(4893),o=r(5380),l=r(7975),c=function(e){var t=e.VizComponent,r=e.vizName,c=e.height,d=void 0===c?400:c,u=e.maxWidth,h=void 0===u?800:u,f=e.caption,m=(0,i.useState)(!1),p=m[0],x=m[1],g=(0,i.useRef)(null),v=(0,a.B)(g);return(0,n.jsx)("div",{style:{marginLeft:"-50vw",left:"50%"},className:"my-4 py-4 w-screen relative",children:p?(0,n.jsxs)("div",{className:"flex flex-col items-center justify-center w-full",children:[(0,n.jsx)("div",{style:{maxWidth:2e3},className:"w-full z-50",children:(0,n.jsx)(l.X,{vizName:r})}),(0,n.jsx)("div",{className:"flex justify-center mt-2",children:(0,n.jsx)(s.z,{size:"sm",onClick:function(){return x(!p)},children:"Hide Sandbox"})})]}):(0,n.jsxs)("div",{className:"flex flex-col items-center justify-center",children:[(0,n.jsx)("div",{className:"bg-gray-100 bg-opacity-50 w-screen flex justify-center z-50 pointer-events-none",children:(0,n.jsx)("div",{style:{height:d,width:"100%",maxWidth:h},ref:g,className:"pointer-events-auto",children:(0,n.jsx)(t,{height:d,width:v.width})})}),(0,n.jsx)(o.Y,{children:f}),(0,n.jsx)("div",{className:"flex justify-center",children:(0,n.jsx)(s.z,{size:"sm",onClick:function(){return x(!p)},children:"Show code"})})]})})}},7975:function(e,t,r){"use strict";r.d(t,{X:function(){return i}});var n=r(5893),i=(r(7294),function(e){var t="https://codesandbox.io/embed/github/holtzy/react-graph-gallery/tree/main/viz/"+e.vizName+"?fontsize=14&hidenavigation=1&theme=dark&expanddevtools=0";return(0,n.jsx)("iframe",{src:t,style:{width:"100%",height:"500px",border:"solid",borderWidth:2,borderRadius:"4px",overflow:"hidden"},allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"})})},1884:function(e,t,r){"use strict";r.d(t,{A:function(){return h}});var n=r(5893),i=r(3185),a=r(1261),s=r(7294),o=r(3924),l=r.n(o);function c(){var e=(0,s.useState)([]),t=e[0],r=e[1],i=(0,s.useState)(0),a=i[0],o=i[1];return(0,s.useEffect)((function(){var e=Array.from(document.querySelectorAll("h2"));r(e)}),[]),(0,s.useEffect)((function(){var e=function(){var e=t.map((function(e){return e.offsetTop-e.scrollTop+e.clientTop})),r=window.scrollY+150,n=e.reduce((function(e,t){return Math.abs(t-r)<Math.abs(e-r)?t:e}),0),i=e.findIndex((function(e){return e===n}));o(-1===i?0:i)};return window.addEventListener("scroll",e),function(){return window.removeEventListener("scroll",e)}}),[t]),(0,n.jsx)("div",{className:l().tableOfContent,children:t.map((function(e,r){return(0,n.jsx)("p",{className:a===r?"".concat(l().tocItem," ").concat(l().tocItemActive):l().tocItem,onClick:function(e){e.preventDefault(),t[r].scrollIntoView({behavior:"smooth",block:"start",alignToTop:!0})},children:e.id.charAt(0).toUpperCase()+e.id.slice(1)},e.id)}))})}var d=r(8171),u=r(6978),h=function(e){var t=e.children,r=e.title,s=e.seoDescription;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(d.A,{title:r,seoDescription:s}),(0,n.jsxs)("div",{className:"wrapper",children:[(0,n.jsx)(i.Z,{}),t]}),(0,n.jsx)(u.Z,{}),(0,n.jsx)("div",{className:"wrapper",children:(0,n.jsx)(a.Z,{})}),(0,n.jsx)(c,{})]})}},1687:function(e,t,r){"use strict";r.d(t,{J:function(){return a}});var n=r(5893),i=r(1664),a=function(e){var t=e.children,r=e.href,a=e.isFilled,s=e.size,o=void 0===s?"md":s,l=e.isFaded,c=r.startsWith("www")||r.startsWith("http"),d="font-normal rounded mr-1 cursor-pointer border-reactGallery border ";d+=a?" bg-reactGallery hover:bg-reactGallery text-white ":" bg-white hover:bg-reactGallery hover:text-white text-reactGallery ","sm"===o&&(d+="text-sm py-1 px-2 "),"md"===o&&(d+="text-md py-2 px-4 "),l&&(d+="opacity-60");var u=(0,n.jsx)("span",{className:d,children:t});return c?(0,n.jsx)("a",{href:r,target:"_blank",children:u}):(0,n.jsx)(i.default,{href:r,passHref:!0,children:(0,n.jsx)("a",{children:u})})}},8807:function(e,t,r){"use strict";r.d(t,{Z:function(){return h}});var n=r(5893),i=(r(7294),r(1878)),a=r(3414),s=r(3919),o=r(1687),l=r(3187),c=r.n(l),d=function(e){var t=e.direction,r=e.text,i=e.children;return(0,n.jsx)("span",{className:c().tooltip+" "+c()[t],id:r,children:i})},u=r(6761);function h(e){var t=e.title,r=e.description,l=e.chartType,c=e.showSectionLink,h=void 0!==c&&c,f=e.showInspirationLink,m=void 0===f||f,p=e.showD3GalleryLink,x=void 0===p||p,g=i.c.find((function(e){return e.id===l}));return g?(0,n.jsxs)("div",{className:"w-full pt-1 sm:pt-28 pb-20 ",children:[(0,n.jsxs)("div",{className:"flex justify-start items-center",children:[(0,n.jsx)("h1",{children:t}),(0,n.jsx)("div",{className:"w-20 ml-4",children:(0,n.jsx)(u.Z,{chartLogo:null===g||void 0===g?void 0:g.logo})})]}),(0,n.jsx)(s.r,{}),(0,n.jsx)("div",{className:"max-w-xxl py-2",children:r}),l&&(0,n.jsx)("span",{className:"text-gray-400 text-sm font-light",children:"Useful links"}),l&&(0,n.jsxs)("div",{className:"flex flex-row flex-wrap",children:[h&&(0,n.jsx)(d,{text:"kkkk",direction:"bottom",children:(0,n.jsx)(o.J,{href:(0,a.y)(g.reactURL),size:"sm",children:g.label+" section"})}),m&&(0,n.jsx)(d,{text:"Hundreds of stunning dataviz projects to gather inspiration",direction:"bottom",children:(0,n.jsx)(o.J,{href:"https://www.dataviz-inspiration.com/"+g.id,size:"sm",children:"inspiration"})}),x&&(0,n.jsx)(d,{text:"Pure d3 implementation, no React",direction:"bottom",children:(0,n.jsx)(o.J,{href:g.d3URL,size:"sm",children:"d3 gallery"})}),(0,n.jsx)(d,{text:"Dataviz theory about this chart",direction:"bottom",children:(0,n.jsx)(o.J,{href:g.dataToVizURL,isFilled:!0,size:"sm",children:"About this chart"})})]})]}):null}},4893:function(e,t,r){"use strict";r.d(t,{z:function(){return i}});var n=r(5893),i=function(e){var t=e.children,r=e.onClick,i=e.isFilled,a=e.size,s=void 0===a?"md":a,o="rounded m-1 cursor-pointer border-reactGallery border ";return"sm"===s&&(o+="text-sm py-1 px-2"),"md"===s&&(o+="text-md py-2 px-4"),o+=i?" bg-reactGallery hover:bg-reactGallery text-white":" bg-white hover:bg-reactGallery hover:text-white text-reactGallery",(0,n.jsx)("button",{className:o,onClick:r,children:t})}},5380:function(e,t,r){"use strict";r.d(t,{Y:function(){return i}});var n=r(5893),i=function(e){var t=e.children;return(0,n.jsx)("p",{className:"text-sm text-gray-500 max-w-xs italic text-center mt-4 font-light",children:t})}},8193:function(e,t,r){"use strict";r.d(t,{d:function(){return o}});var n=r(5893),i=r(4725),a=r.n(i),s=r(7294),o=function(e){var t=e.code,r=(0,s.useRef)(null);return(0,s.useEffect)((function(){r.current&&a().highlightElement(r.current)}),[r,t]),(0,n.jsx)("div",{className:"mb-6",children:(0,n.jsx)("pre",{className:"rounded-md line-numbers",children:(0,n.jsx)("code",{ref:r,className:"p-0 language-js",children:t})})})}},217:function(e,t,r){"use strict";r.d(t,{B:function(){return i}});var n=r(7294),i=function(e){var t=function(){return{width:e.current?e.current.offsetWidth:0,height:e.current?e.current.offsetHeight:0}},r=(0,n.useState)(t),i=r[0],a=r[1],s=function(){a(t())};return(0,n.useEffect)((function(){return window.addEventListener("resize",s),function(){return window.removeEventListener("resize",s)}}),[]),(0,n.useLayoutEffect)((function(){s()}),[]),i}},8247:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return j}});var n=r(5893),i=r(7294),a=r(1884),s=r(8807),o=r(7197),l=r(8193),c=r(33),d=[{name:"A",values:[0,0,2,2,2,0,0,1,1,1,1,1,1,1,1,1,2,3,3,1,2,2,4,3,5,6,4,3,7,2]},{name:"B",values:[19,20,19,18,18,18,12,13,13,15,18,18,13,20,20,19,19,19,19,19,17,20,16,16,16]},{name:"C",values:[7,8,8,9,9,9,10,10,10,10,11,11,12,13,10,10,10,10,10,10,10]}],u=r(8875);function h(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var f={top:30,right:30,bottom:40,left:50},m=["#e0ac2b","#e85252","#6689c6","#9a6fb0","#a53253"],p=function(e){var t=e.width,r=e.height,a=e.data,s=(0,i.useRef)(null),o=t-f.right-f.left,l=r-f.top-f.bottom,c=a.map((function(e){return e.name})),d=u.PKp().domain(c).range(m),p=(0,i.useMemo)((function(){var e,t,r=a.map((function(t){return(e=Math).max.apply(e,h(t.values))})),n=(t=Math).max.apply(t,h(r));return u.BYU().domain([0,n]).range([10,o]).nice()}),[a,t]),x=(0,i.useMemo)((function(){return u.Ly_().value((function(e){return e})).domain(p.domain()).thresholds(p.ticks(20))}),[p]),g=(0,i.useMemo)((function(){return a.map((function(e){return{name:e.name,buckets:x(e.values)}}))}),[a]),v=(0,i.useMemo)((function(){var e,t=(e=Math).max.apply(e,h(g.map((function(e){var t;return(t=Math).max.apply(t,h(e.buckets.map((function(e){return null===e||void 0===e?void 0:e.length}))))}))));return u.BYU().range([l,0]).domain([0,t]).nice()}),[a,r]);(0,i.useEffect)((function(){var e=u.Ys(s.current);e.selectAll("*").remove();var t=u.LLu(p);e.append("g").attr("transform","translate(0,"+l+")").call(t);var r=u.y4O(v);e.append("g").call(r)}),[p,v,l]);var j=g.map((function(e,t){return e.buckets.map((function(r,i){var a=r.x0,s=r.x1;return void 0==a||void 0==s?null:(0,n.jsx)("rect",{fill:d(e.name),opacity:.7,x:p(a)+2,width:p(s)-p(a)-4,y:v(r.length),height:l-v(r.length)},t+"_"+i)}))}));return(0,n.jsxs)("svg",{width:t,height:r,children:[(0,n.jsx)("g",{width:o,height:l,transform:"translate(".concat([f.left,f.top].join(","),")"),children:j}),(0,n.jsx)("g",{width:o,height:l,ref:s,transform:"translate(".concat([f.left,f.top].join(","),")")})]})},x=function(e){var t=e.width,r=void 0===t?700:t,i=e.height,a=void 0===i?400:i;return(0,n.jsx)(p,{width:r,height:a,data:d})},g=r(1664),v=(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("p",{children:["This tutorial is a variation around the general"," ",(0,n.jsx)(g.default,{href:"histogram",children:"introduction to histogram with react"})," and d3.js. You should probably understand the concepts described there before reading here."]}),(0,n.jsxs)("p",{children:["This example explains how to plot several groups on the ",(0,n.jsx)("b",{children:"same"})," ","histogram, by ",(0,n.jsx)("b",{children:"overlapping"})," them on the same X axis. It can be useful to ",(0,n.jsx)("b",{children:"compare the distribution"})," of several items in a dataset."]}),(0,n.jsx)("p",{children:"A code sandbox is provided for the final result, but explanations target what's different compared to an usual histogram."})]});function j(){return(0,n.jsxs)(a.A,{title:"How to build a histogram with React and D3.",seoDescription:"A step-by-step guide to build your very own histogram from scratch. Comes with explanations, code sandboxes, and ready-to-use templates.",children:[(0,n.jsx)(s.Z,{title:(0,n.jsxs)("h1",{children:["Histogram"," ",(0,n.jsx)("span",{className:"text-gray-600 font-light hidden sm:inline",children:"with several groups"})]}),description:v,chartType:"histogram"}),(0,n.jsx)("h2",{id:"plot",children:"Plot and code"}),(0,n.jsx)("p",{children:"If you are in a hurry, this is what we're trying to achieve here.\ud83d\ude47\u200d\u2642\ufe0f"}),(0,n.jsxs)("p",{children:["The distribution of ",(0,n.jsx)("b",{children:"several groups"})," are displayed on the same figure, allowing to easily compare them. Please note that this kind of visual works well when there is a clear distinction between groups. Otherwise, bars will overlap each other resulting in an"," ",(0,n.jsx)("a",{href:"https://www.data-to-viz.com/graph/histogram.html",children:"unreadable chart"}),"."]}),(0,n.jsx)(c.$,{VizComponent:x,vizName:"HistogramSeveralGroups",maxWidth:700,height:300,caption:"Histogram representing the distribution of 3 groups in a dataset. Made with react (rendering) and d3.js (scales)"}),(0,n.jsx)("h2",{id:"data",children:"The Data"}),(0,n.jsxs)("p",{children:["The dataset used here is slightly different as"," ",(0,n.jsx)(g.default,{href:"/histogram#data",children:"the one"})," used for the simple 1 group histogram."]}),(0,n.jsxs)("p",{children:["An ",(0,n.jsx)("b",{children:"array"})," is used, with each object in it providing the name (",(0,n.jsx)("code",{children:"group"})," property here) and the ",(0,n.jsx)("code",{children:"values"})," of a group."]}),(0,n.jsx)("p",{children:"Here is a minimal example of the data structure:"}),(0,n.jsx)(l.d,{code:b}),(0,n.jsx)("h2",{id:"color scale",children:"Color scale"}),(0,n.jsxs)("p",{children:["There is a finite number of groups here. We need to assign a specific color to each group. This is called an ",(0,n.jsx)("b",{children:"ordinal"})," scale and is implemented in the d3 ",(0,n.jsx)("code",{children:"scaleOrdinal"})," function."]}),(0,n.jsxs)("p",{children:["What's needed here is thus a list of colors to use (the"," ",(0,n.jsx)("code",{children:"range"}),") and a list of group names: the ",(0,n.jsx)("code",{children:"domain"}),"."]}),(0,n.jsx)("p",{children:"To put it in a nutshell, that's how the color scale is implemented:"}),(0,n.jsx)(l.d,{code:w}),(0,n.jsxs)("p",{children:["It's fundamental to understand that with this code organization, d3.js will be used to prepare the svg ",(0,n.jsx)("code",{children:"circle"}),", but it's react that will render them in the ",(0,n.jsx)("code",{children:"return()"})," statement. We won't use d3 methods like ",(0,n.jsx)("code",{children:"append"})," that you can find in usual"," ",(0,n.jsx)("a",{href:"https://www.d3-graph-gallery.com",children:"d3.js examples"}),"."]}),(0,n.jsx)("h2",{id:"buckets",children:"Building the histogram buckets"}),(0,n.jsxs)("p",{children:["The exact same logic as the one"," ",(0,n.jsx)(g.default,{href:"/histogram#binning",children:"used on the 1 group histogram"})," ","must be used here. But the ",(0,n.jsx)("code",{children:"bucketGenerator"})," must be run on each group of the dataset."]}),(0,n.jsxs)("p",{children:["Once it is done we'll have to ",(0,n.jsx)("code",{children:"map"})," twice to render the rectangles. Once for each group, and a second time for each bar in the group."]}),(0,n.jsx)(l.d,{code:y}),(0,n.jsx)("div",{className:"full-bleed border-t h-0 bg-gray-100 mb-3 mt-24"}),(0,n.jsx)(o.Z,{chartFamily:"distribution"}),(0,n.jsx)("div",{className:"mt-20"})]})}var b='\nconst data = [\n  {\n    group: "A",\n    values: [0, 0, 2, 2, 2, 0]\n  },\n  {\n    group: "B",\n    values: [0, 0, 2, 2, 2, 0]\n  },\n  ...\n];'.trim(),w='\n// List of arbitrary colors\nconst COLORS = ["#e0ac2b", "#e85252", "#6689c6", "#9a6fb0", "#a53253"];\n\n// List of all group names\nconst allGroups = data.map((group) => group.group);\n\n// Color scale\nconst colorScale = d3.scaleOrdinal<string>()\n  .domain(allGroups)\n  .range(COLORS);\n'.trim(),y='\n// Create a function that creates buckets from a blob of data\nconst bucketGenerator = useMemo(() => {\n  return d3\n    .bin()\n    .value((d) => d)\n    .domain(xScale.domain())\n    .thresholds(xScale.ticks(BUCKET_NUMBER));\n}, [xScale]);\n\n// Use the function for all groups of the dataset, one by one\n// The result is an array with bucket details of each group\nconst groupBuckets = useMemo(() => {\n  return data.map((group) => {\n    return { group, buckets: bucketGenerator(group.values) };\n  });\n}, [data]);\n\n// render the rects: group by group, bar by bar\nconst allRects = groupBuckets.map((group, i) =>\n  group.buckets.map((bucket, j) => (\n    <rect\n      key={i + "_" + j}\n      fill={colorScale(group.group)}\n      opacity={0.7}\n      x={xScale(bucket.x0) + BUCKET_PADDING / 2}\n      width={xScale(bucket.x1) - xScale(bucket.x0) - BUCKET_PADDING}\n      y={yScale(bucket.length)}\n      height={boundsHeight - yScale(bucket.length)}\n    />\n  ))\n);\n\n'.trim()},3187:function(e){e.exports={tooltip:"tooltip_tooltip__Fv96Y",right:"tooltip_right__lXq9G",left:"tooltip_left__hUc5l",bottom:"tooltip_bottom__Qzoh5",top:"tooltip_top__qDz28"}},3924:function(e){e.exports={tableOfContent:"table-of-content_tableOfContent__oi0XB",tocItem:"table-of-content_tocItem__fZBSX",tocItemActive:"table-of-content_tocItemActive__kiClt"}}},function(e){e.O(0,[8109,5660,358,9774,2888,179],(function(){return t=5037,e(e.s=t);var t}));var t=e.O();_N_E=t}]);