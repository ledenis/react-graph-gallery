(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5503],{8702:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/streamchart",function(){return r(2169)}])},3485:function(e,t,r){"use strict";r.d(t,{U:function(){return s}});var i=r(5893),n=r(7294),s=function(e){var t=e.startOpen,r=e.title,s=e.children,a=e.toc,o=(0,n.useState)(t),c=o[0],l=o[1],h=c?"max-h-full":"max-h-0",d=c?"overflow-visible":"overflow-hidden";return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("h2",{className:"cursor-pointer",onClick:function(){return l(!c)},id:a,children:[c?(0,i.jsx)("span",{className:"text-purple-700 w-4 mr-2 hover:text-purple-900 inline-block",children:"-"}):(0,i.jsx)("span",{className:"text-purple-700 w-4 mr-2 hover:text-purple-900 inline-block",children:"+"}),r]}),(0,i.jsx)("div",{className:"transition-max-height ease-in duration-300  "+h+" "+d,children:s})]})}},7197:function(e,t,r){"use strict";r.d(t,{Z:function(){return u}});var i=r(5893),n=(r(7294),r(6761)),s=r(1878),a=r(1664),o=s.c.filter((function(e){return"general"===e.family})).map((function(e){return e.logo}));function c(e){var t=e.chartLogo,r=e.caption,s=e.link,c=e.isAvailable,h=e.size,d=o.includes(t),u=c?"opacity-100":"opacity-20",p=c?"cursor-pointer":"cursor-not-allowed";return(0,i.jsx)(a.default,{href:c?s:"subscribe",children:(0,i.jsxs)("div",{className:"flex flex-col items-center",children:[(0,i.jsxs)("div",{style:{width:h,height:h},className:"relative mr-2 rounded-full "+u+" "+p,children:[(0,i.jsx)("div",{className:"absolute",children:(0,i.jsx)(n.Z,{chartLogo:t})}),d?(0,i.jsx)("div",{className:"absolute opacity-0 hover:opacity-60 flex items-center justify-center w-full h-full z-30",children:(0,i.jsx)(l,{size:h})}):(0,i.jsx)("div",{className:"opacity-0 hover:opacity-60 flex items-center justify-center w-full h-full rounded-full bg-purple-800 z-30",children:(0,i.jsx)("p",{className:"text-white text-4xl",children:"+"})})]}),(0,i.jsx)("p",{className:"font-light text-sm text-gray-600 "+u,children:r})]})})}var l=function(e){var t=e.size;return(0,i.jsx)("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:t,height:t,viewBox:"0 0 100 100",className:"fill-current text-purple-800",children:(0,i.jsx)("path",{d:"M50,0 L100,20 L100,80 L50,100 L0,80 L0,20 Z"})})},h=r(3414),d={distribution:"Distribution",correlation:"Correlation",ranking:"Ranking",partOfAWhole:"Part Of A Whole",evolution:"Evolution",map:"Map",flow:"Flow",general:"General Knowledge"};function u(e){var t=e.chartFamily,r=s.c.filter((function(e){return e.family===t})).map((function(e,t){var r=(0,h.y)(e.reactURL);return(0,i.jsx)("div",{className:"flex flex-col items-center justify-center",children:(0,i.jsx)(c,{link:r,chartLogo:e.logo,caption:e.label,isAvailable:e.isAvailable,size:129})},t)}));return(0,i.jsxs)("div",{children:[(0,i.jsx)("p",{className:t+"  mt-4 text-md border-b mb-2 border-gray-100 tracking-wider",children:null===d||void 0===d?void 0:d[t]}),(0,i.jsx)("div",{className:"flex flex-row justify-start flex-wrap",children:r})]})}},33:function(e,t,r){"use strict";r.d(t,{$:function(){return l}});var i=r(5893),n=r(7294),s=r(217),a=r(4893),o=r(5380),c=r(7975),l=function(e){var t=e.VizComponent,r=e.vizName,l=e.height,h=void 0===l?400:l,d=e.maxWidth,u=void 0===d?800:d,p=e.caption,f=(0,n.useState)(!1),x=f[0],m=f[1],g=(0,n.useRef)(null),v=(0,s.B)(g);return(0,i.jsx)("div",{style:{marginLeft:"-50vw",left:"50%"},className:"my-4 py-4 w-screen relative",children:x?(0,i.jsxs)("div",{className:"flex flex-col items-center justify-center w-full",children:[(0,i.jsx)("div",{style:{maxWidth:2e3},className:"w-full",children:(0,i.jsx)(c.X,{vizName:r})}),(0,i.jsx)("div",{className:"flex justify-center mt-2",children:(0,i.jsx)(a.z,{size:"sm",onClick:function(){return m(!x)},children:"Hide Sandbox"})})]}):(0,i.jsxs)("div",{className:"flex flex-col items-center justify-center",children:[(0,i.jsx)("div",{className:"bg-gray-50 w-screen flex justify-center",children:(0,i.jsx)("div",{style:{height:h,width:"100%",maxWidth:u},ref:g,children:(0,i.jsx)(t,{height:h,width:v.width})})}),(0,i.jsx)(o.Y,{children:p}),(0,i.jsx)("div",{className:"flex justify-center",children:(0,i.jsx)(a.z,{size:"sm",onClick:function(){return m(!x)},children:"Show code"})})]})})}},7975:function(e,t,r){"use strict";r.d(t,{X:function(){return n}});var i=r(5893),n=(r(7294),function(e){var t="https://codesandbox.io/embed/github/holtzy/react-graph-gallery/tree/main/viz/"+e.vizName+"?fontsize=14&hidenavigation=1&theme=dark&expanddevtools=0";return(0,i.jsx)("iframe",{src:t,style:{width:"100%",height:"500px",border:"solid",borderWidth:2,borderRadius:"4px",overflow:"hidden"},allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"})})},3440:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});var i=r(5893),n=(r(7294),r(1878)),s=r(1687),a=function(e){var t=e.imgLink,r=e.height,n=e.opacity,s=e.children;return(0,i.jsxs)("div",{className:"relative",children:[(0,i.jsx)("div",{style:{backgroundImage:"url("+t+")",height:r,backgroundAttachment:"fixed",opacity:n,backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover"}}),(0,i.jsx)("div",{className:"absolute top-0 left-0 w-full h-full",children:s})]})};function o(e){var t,r=e.chartId,o=(null===(t=n.c.find((function(e){return e.id===r})))||void 0===t?void 0:t.label)||"chart";return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("h2",{id:"inspiration",children:"More inspiration"}),(0,i.jsxs)("p",{children:["If you're looking for inspiration to create your next"," ",(0,i.jsx)("span",{children:o}),", note that"," ",(0,i.jsx)("a",{href:"https://www.dataviz-inspiration.com",children:"dataviz-inspiration.com"})," ","showcases many examples. Definitely the best place to get ... inspiration!"]}),(0,i.jsx)("div",{className:"border mb-10",children:(0,i.jsx)(a,{height:250,imgLink:"https://github.com/holtzy/dataviz-inspiration/blob/main/public/misc/overview1.png?raw=true",opacity:.3,children:(0,i.jsx)("div",{className:"flex justify-center items-center h-full",children:(0,i.jsxs)("div",{style:{maxWidth:400},className:"flex flex-col items-center",children:[(0,i.jsxs)("p",{className:"text-center text-sm",children:[(0,i.jsx)("a",{href:"https://www.dataviz-inspiration.com",children:"dataviz-inspiration.com"})," ","showcases hundreds of stunning dataviz projects. Have a look to get some ideas on how to make your ",(0,i.jsx)("span",{children:o})," ","looks good!"]}),(0,i.jsx)(s.J,{href:"https://www.dataviz-inspiration.com",isFilled:!0,size:"md",children:"visit"})]})})})})]})}},2173:function(e,t,r){"use strict";r.d(t,{r:function(){return s}});var i=r(5893),n=r(1878),s=function(e){var t=e.chartId,r=n.c.filter((function(e){return e.id===t}))[0].label;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("h2",{id:"responsiveness",children:"Responsive "+r+" with react"}),(0,i.jsxs)("p",{children:["The component above is not responsive. It expects 2 props called"," ",(0,i.jsx)("code",{children:"width"})," and ",(0,i.jsx)("code",{children:"height"})," and will render a ",r," of those dimensions."]}),(0,i.jsxs)("p",{children:["Making the ",r," responsive requires to add a ",(0,i.jsx)("b",{children:"wrapper"})," component that gets the dimension of the parent ",(0,i.jsx)("code",{children:"div"}),", and listen to a potential dimension change."]}),(0,i.jsxs)("p",{children:["The process is extensively described in"," ",(0,i.jsx)("a",{href:"https://www.react-graph-gallery.com/make-a-graph-responsive",children:"this post"})," ","of the gallery. Basically most of the job is made by a hook called"," ",(0,i.jsx)("code",{children:"useDimensions"})," that targets a specific ",(0,i.jsx)("code",{children:"ref"}),"."]}),(0,i.jsx)("a",{href:"https://www.react-graph-gallery.com/make-a-graph-responsive",children:"Read more about responsiveness"}),(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),(0,i.jsx)("br",{})]})}},4893:function(e,t,r){"use strict";r.d(t,{z:function(){return n}});var i=r(5893),n=function(e){var t=e.children,r=e.onClick,n=e.isFilled,s=e.size,a=void 0===s?"md":s,o="rounded m-1 cursor-pointer border-reactGallery border ";return"sm"===a&&(o+="text-sm py-1 px-2"),"md"===a&&(o+="text-md py-2 px-4"),o+=n?" bg-reactGallery hover:bg-reactGallery text-white":" bg-white hover:bg-reactGallery hover:text-white text-reactGallery",(0,i.jsx)("button",{className:o,onClick:r,children:t})}},5380:function(e,t,r){"use strict";r.d(t,{Y:function(){return n}});var i=r(5893),n=function(e){var t=e.children;return(0,i.jsx)("p",{className:"text-sm text-gray-500 max-w-xs italic text-center mt-4 font-light",children:t})}},8193:function(e,t,r){"use strict";r.d(t,{d:function(){return o}});var i=r(5893),n=r(4725),s=r.n(n),a=r(7294),o=function(e){var t=e.code,r=(0,a.useRef)(null);return(0,a.useEffect)((function(){r.current&&s().highlightElement(r.current)}),[r,t]),(0,i.jsx)("div",{className:"mb-4",children:(0,i.jsx)("pre",{className:"rounded-md line-numbers",children:(0,i.jsx)("code",{ref:r,className:"p-0 language-js",children:t})})})}},217:function(e,t,r){"use strict";r.d(t,{B:function(){return n}});var i=r(7294),n=function(e){var t=function(){return{width:e.current?e.current.offsetWidth:0,height:e.current?e.current.offsetHeight:0}},r=(0,i.useState)(t),n=r[0],s=r[1],a=function(){s(t())};return(0,i.useEffect)((function(){return window.addEventListener("resize",a),function(){return window.removeEventListener("resize",a)}}),[]),(0,i.useLayoutEffect)((function(){a()}),[]),n}},2169:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return N}});var i=r(5893),n=r(7294),s=r(9281),a=r(4386),o=r(7197),c=r(6978),l=r(3485),h=r(8193),d=r(33),u=r(1664),p=r(3440),f=[{x:1,groupA:38,groupB:19,groupC:9,groupD:4},{x:2,groupA:16,groupB:14,groupC:96,groupD:40},{x:3,groupA:64,groupB:96,groupC:64,groupD:40},{x:4,groupA:32,groupB:48,groupC:64,groupD:40},{x:5,groupA:12,groupB:18,groupC:14,groupD:10}],x=r(2535);function m(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=[],i=!0,n=!1,s=void 0;try{for(var a,o=e[Symbol.iterator]();!(i=(a=o.next()).done)&&(r.push(a.value),!t||r.length!==t);i=!0);}catch(c){n=!0,s=c}finally{try{i||null==o.return||o.return()}finally{if(n)throw s}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var g={top:30,right:30,bottom:50,left:50},v=function(e){var t=e.width,r=e.height,s=e.data,a=t-g.right-g.left,o=r-g.top-g.bottom,c=["groupA","groupB","groupC","groupD"],l=x.knu().keys(c).order(x.Qxt).offset(x.KuJ)(s),h=(0,n.useMemo)((function(){return x.BYU().domain([-200,200]).range([o,0])}),[s,r]),d=m(x.Wem(s,(function(e){return e.x})),2),u=d[0],p=d[1],f=(0,n.useMemo)((function(){return x.BYU().domain([u||0,p||0]).range([0,a])}),[s,t]),v=x.PKp().domain(c).range(["#e0ac2b","#e85252","#6689c6","#9a6fb0","#a53253"]),j=x.SOn().x((function(e){return f(e.data.x)})).y1((function(e){return h(e[1])})).y0((function(e){return h(e[0])})).curve(x.zgE),w=l.map((function(e,t){var r=j(e);return(0,i.jsx)("path",{d:r,opacity:1,stroke:"grey",fill:v(e.key),fillOpacity:.8},t)})),y=f.ticks(5).map((function(e,t){return(0,i.jsxs)("g",{children:[(0,i.jsx)("line",{x1:f(e),x2:f(e),y1:0,y2:o,stroke:"#808080",opacity:.2}),(0,i.jsx)("text",{x:f(e),y:o+10,textAnchor:"middle",alignmentBaseline:"central",fontSize:9,stroke:"#808080",opacity:.8,children:e})]},t)}));return(0,i.jsx)("div",{children:(0,i.jsx)("svg",{width:t,height:r,children:(0,i.jsxs)("g",{width:a,height:o,transform:"translate(".concat([g.left,g.top].join(","),")"),children:[y,w]})})})},j=function(e){var t=e.width,r=void 0===t?700:t,n=e.height,s=void 0===n?400:n;return(0,i.jsx)(v,{data:f,width:r,height:s})},w=r(2173),y=(0,i.jsxs)("p",{children:["A"," ",(0,i.jsx)("a",{href:"https://www.data-to-viz.com/graph/streamgraph.html",children:"streamgraph"})," ","is a variation of the more common"," ",(0,i.jsx)(u.default,{href:"stacked-area-plot",children:"stacked area chart"}),". This section explains how to stack and smooth the data with ",(0,i.jsx)("code",{children:"d3.js"}),", and render the shapes with ",(0,i.jsx)("code",{children:"react"}),". It starts from the basic and goes until necessary customization like tooltips, hover effect, legend and annotation, always with editable sandboxes."]}),b="\nconst data = [\n  {\n    x: 1,\n    groupA: 38,\n    groupB: 19,\n  },\n  {\n    x: 2,\n    groupA: 16,\n    groupB: 14,\n  },\n  ...\n];\n".trim(),k="\nconst stackSeries = d3\n  .stack()\n  .keys(groups)\n  .order(d3.stackOrderNone)\n  .offset(d3.stackOffsetSilhouette);\nconst series = stackSeries(data);\n".trim();"\nconst series = stackSeries(data);\n".trim();function N(){return(0,i.jsxs)(s.A,{title:"Streamchart with React",seoDescription:"How to build a stream chart with React and D3.js. A set of re-usable components",children:[(0,i.jsx)(a.Z,{title:"Streamcharts",description:y,chartType:"stream"}),(0,i.jsxs)(l.U,{title:"Dataset",startOpen:!0,children:[(0,i.jsx)("p",{children:"Most of the time the input dataset is an array where each item is an object."}),(0,i.jsxs)("p",{children:["Each object provides information for a step on the X axis. It has a value like ",(0,i.jsx)("code",{children:"x"})," that provides the exact position on the X axis. It then has several numeric values, one for each group of the dataset."]}),(0,i.jsx)("p",{children:"Here is a minimal example:"}),(0,i.jsx)(h.d,{code:b}),(0,i.jsxs)("p",{children:["Note: if your data is in ",(0,i.jsx)("code",{children:".csv"})," format, you can translate it thanks to the ",(0,i.jsx)("code",{children:"d3.csv()"})," function as suggested"," ",(0,i.jsx)("a",{href:"https://d3-graph-gallery.com/graph/line_basic.html",children:"here"}),"."]})]}),(0,i.jsxs)(l.U,{title:"Data wrangling",startOpen:!0,children:[(0,i.jsx)("p",{children:"Building a stream chart requires to stack the data. Series are displayed one on top of each other and you have to compute their positions on the Y axis."}),(0,i.jsxs)("p",{children:["Fortunately, ",(0,i.jsx)("code",{children:"D3.js"})," has a handy ",(0,i.jsx)("code",{children:"stack()"})," ","function that does exactly that. The process is deeply explained in the ",(0,i.jsx)(u.default,{href:"stacked-area-plot",children:"stacked area chart"})," section of the gallery."]}),(0,i.jsxs)("p",{children:["The only variation required here is to use the",(0,i.jsx)("code",{children:"d3.stackOffsetSilhouette"})," offset option. Instead of stacking everything above the 0 baseline, it will put groups on both part of it."]}),(0,i.jsx)("p",{children:"Computing the position of the chart series should look something like:"}),(0,i.jsx)(h.d,{code:k})]}),(0,i.jsxs)(l.U,{title:"Most basic streamgraph",startOpen:!0,children:[(0,i.jsxs)("p",{children:["Once more, the process to render the shape is very close to the"," ",(0,i.jsx)(u.default,{href:"stacked-area-plot",children:"stacked area chart"}),". A few variations are required though."]}),(0,i.jsx)("h3",{children:"\u2192 Smoothing"}),(0,i.jsxs)("p",{children:["We need to smooth the area shape to get the good-looking organic flow. Once more d3 is here to the rescue with a"," ",(0,i.jsx)("a",{href:"https://github.com/d3/d3-shape#curves",children:"curve"})," function that does all the work for us."]}),(0,i.jsx)("h3",{children:"\u2192 Axis"}),(0,i.jsxs)("p",{children:[(0,i.jsx)(u.default,{href:"build-axis-with-react",children:"Usual axes"})," do not work for streamgraphs. The Y axis would make no sense since shapes are on both side of the 0 baseline. It is commonly"," ",(0,i.jsx)("a",{href:"https://www.dataviz-inspiration.com/stream",children:"removed"}),". The X axis would feel lost alone at the very bottom of the chart."]}),(0,i.jsx)("p",{children:"Here I suggest to replace the X axis with vertical ablines. The Y axis is removed and we will see later how"}),(0,i.jsx)(d.$,{vizName:"StreamGraphBasic",VizComponent:j,height:400,maxWidth:600,caption:"Most basic streamgraph with react and d3.js"})]}),(0,i.jsx)(w.r,{chartId:"stream"}),(0,i.jsx)(p.Z,{chartId:"stackedArea"}),(0,i.jsx)("div",{className:"full-bleed border-t h-0 bg-gray-100 my-3"}),(0,i.jsx)(o.Z,{chartFamily:"evolution"}),(0,i.jsx)("div",{className:"mt-20"}),(0,i.jsx)(c.Z,{})]})}}},function(e){e.O(0,[3888,5660,7045,9774,2888,179],(function(){return t=8702,e(e.s=t);var t}));var t=e.O();_N_E=t}]);