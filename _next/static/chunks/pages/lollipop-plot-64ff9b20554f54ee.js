(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[764],{3820:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/lollipop-plot",function(){return i(6120)}])},3485:function(e,t,i){"use strict";i.d(t,{U:function(){return a}});var n=i(5893),r=i(7294),a=function(e){var t=e.startOpen,i=e.title,a=e.children,s=(0,r.useState)(t),o=s[0],l=s[1],c=o?"max-h-full":"max-h-0",d=o?"overflow-visible":"overflow-hidden";return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("h2",{className:"cursor-pointer",onClick:function(){return l(!o)},children:[o?(0,n.jsx)("span",{className:"text-purple-700 w-4 mr-2 hover:text-purple-900 inline-block",children:"-"}):(0,n.jsx)("span",{className:"text-purple-700 w-4 mr-2 hover:text-purple-900 inline-block",children:"+"}),i]}),(0,n.jsx)("div",{className:"transition-max-height ease-in duration-300  "+c+" "+d,children:a})]})}},2729:function(e,t,i){"use strict";i.d(t,{z:function(){return r}});var n=i(5893),r=function(e){var t=e.children,i=e.onClick,r=e.isFilled,a=e.size,s=void 0===a?"md":a,o="rounded m-1 cursor-pointer border-purple-700 border ";return"sm"===s&&(o+="text-sm py-1 px-2"),"md"===s&&(o+="text-md py-2 px-4"),o+=r?" bg-purple-500 hover:bg-purple-700 text-white":" bg-white hover:bg-purple-700 hover:text-white text-purple-700",(0,n.jsx)("button",{className:o,onClick:i,children:t})}},6158:function(e,t,i){"use strict";i.d(t,{Y:function(){return r}});var n=i(5893),r=function(e){var t=e.children;return(0,n.jsx)("p",{className:"text-sm text-gray-500 max-w-xs italic text-center mt-4 font-light",children:t})}},33:function(e,t,i){"use strict";i.d(t,{$:function(){return c}});var n=i(5893),r=i(7294),a=i(217),s=i(2729),o=i(6158),l=i(7975),c=function(e){var t=e.VizComponent,i=e.vizName,c=e.height,d=void 0===c?400:c,u=e.maxWidth,h=void 0===u?800:u,m=e.caption,p=(0,r.useState)(!1),x=p[0],f=p[1],v=(0,r.useRef)(null),j=(0,a.B)(v);return(0,n.jsx)("div",{style:{marginLeft:"-50vw",left:"50%"},className:"my-4 py-4 w-screen relative",children:x?(0,n.jsxs)("div",{className:"flex flex-col items-center justify-center w-full",children:[(0,n.jsx)("div",{style:{maxWidth:2e3},className:"w-full",children:(0,n.jsx)(l.X,{vizName:i})}),(0,n.jsx)("div",{className:"flex justify-center mt-2",children:(0,n.jsx)(s.z,{size:"sm",onClick:function(){return f(!x)},children:"Hide Sandbox"})})]}):(0,n.jsxs)("div",{className:"flex flex-col items-center justify-center",children:[(0,n.jsx)("div",{className:"bg-gray-50 w-screen flex justify-center",children:(0,n.jsx)("div",{style:{height:d,width:"100%",maxWidth:h},ref:v,children:(0,n.jsx)(t,{height:d,width:j.width})})}),(0,n.jsx)(o.Y,{children:m}),(0,n.jsx)("div",{className:"flex justify-center",children:(0,n.jsx)(s.z,{size:"sm",onClick:function(){return f(!x)},children:"Show code"})})]})})}},903:function(e,t,i){"use strict";i.d(t,{d:function(){return o}});var n=i(5893),r=i(4725),a=i.n(r),s=i(7294),o=function(e){var t=e.code,i=(0,s.useRef)(null);return(0,s.useEffect)((function(){i.current&&a().highlightElement(i.current)}),[i,t]),(0,n.jsx)("div",{className:"mb-4",children:(0,n.jsx)("pre",{className:"rounded-md line-numbers",children:(0,n.jsx)("code",{ref:i,className:"p-0 language-js",children:t})})})}},7975:function(e,t,i){"use strict";i.d(t,{X:function(){return r}});var n=i(5893),r=(i(7294),function(e){var t="https://codesandbox.io/embed/github/holtzy/react-graph-gallery/tree/main/viz/"+e.vizName+"?fontsize=14&hidenavigation=1&theme=dark&expanddevtools=0";return(0,n.jsx)("iframe",{src:t,style:{width:"100%",height:"500px",border:"solid",borderWidth:2,borderRadius:"4px",overflow:"hidden"},allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"})})},3440:function(e,t,i){"use strict";i.d(t,{Z:function(){return o}});var n=i(5893),r=(i(7294),i(3485)),a=i(1687),s=function(e){var t=e.imgLink,i=e.height,r=e.opacity,a=e.children;return(0,n.jsxs)("div",{className:"relative",children:[(0,n.jsx)("div",{style:{backgroundImage:"url("+t+")",height:i,backgroundAttachment:"fixed",opacity:r,backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover"}}),(0,n.jsx)("div",{className:"absolute top-0 left-0 w-full h-full",children:a})]})};function o(e){e.chartId;return(0,n.jsxs)(r.U,{title:"More inspiration",startOpen:!0,children:[(0,n.jsxs)("p",{children:["If you're looking for inspiration to create your next histogram, note that"," ",(0,n.jsx)("a",{href:"https://www.dataviz-inspiration.com",children:"dataviz-inspiration.com"})," ","showcases many examples. Definitely the best place to get ... inspiration!"]}),(0,n.jsx)("div",{className:"border mb-10",children:(0,n.jsx)(s,{height:250,imgLink:"https://github.com/holtzy/dataviz-inspiration/blob/main/public/misc/overview1.png?raw=true",opacity:.3,children:(0,n.jsx)("div",{className:"flex justify-center items-center h-full",children:(0,n.jsxs)("div",{style:{maxWidth:400},className:"flex flex-col items-center",children:[(0,n.jsxs)("p",{className:"text-center text-sm",children:[(0,n.jsx)("a",{href:"https://www.dataviz-inspiration.com",children:"dataviz-inspiration.com"})," ","showcases hundreds of stunning dataviz projects. Have a look to get some ideas on how to make your histogram looks good!"]}),(0,n.jsx)(a.J,{href:"https://www.dataviz-inspiration.com",isFilled:!0,size:"md",children:"visit"})]})})})})]})}},217:function(e,t,i){"use strict";i.d(t,{B:function(){return r}});var n=i(7294),r=function(e){var t=function(){return{width:e.current?e.current.offsetWidth:0,height:e.current?e.current.offsetHeight:0}},i=(0,n.useState)(t),r=i[0],a=i[1],s=function(){a(t())};return(0,n.useEffect)((function(){return window.addEventListener("resize",s),function(){return window.removeEventListener("resize",s)}}),[]),(0,n.useLayoutEffect)((function(){s()}),[]),r}},6120:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return b}});var n=i(5893),r=i(7294),a=i(6184),s=i(6193),o=i(7197),l=i(6978),c=i(3485),d=i(903),u=i(33),h=i(1664),m=i(3440),p=[{name:"Mark",value:90},{name:"Robert",value:12},{name:"Emily",value:34},{name:"Marion",value:53},{name:"Nicolas",value:98},{name:"M\xe9lanie",value:23},{name:"Gabriel",value:18},{name:"Jean",value:104},{name:"Paul",value:2}],x=i(2535);function f(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var i=[],n=!0,r=!1,a=void 0;try{for(var s,o=e[Symbol.iterator]();!(n=(s=o.next()).done)&&(i.push(s.value),!t||i.length!==t);n=!0);}catch(l){r=!0,a=l}finally{try{n||null==o.return||o.return()}finally{if(r)throw a}}return i}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var v={top:30,right:30,bottom:30,left:80},j=function(e){var t=e.width,i=e.height,a=e.data,s=t-v.right-v.left,o=i-v.top-v.bottom,l=a.sort((function(e,t){return t.value-e.value})).map((function(e){return e.name}));console.log("groups",l);var c=(0,r.useMemo)((function(){return x.tiA().domain(l).range([0,o])}),[a,i]);console.log(c),console.log("yScale",c("Emiccly"));var d=(0,r.useMemo)((function(){var e=f(x.Wem(a.map((function(e){return e.value}))),2),t=(e[0],e[1]);return x.BYU().domain([0,t||10]).range([0,s])}),[a,t]),u=a.map((function(e,t){var i=c(e.name)+c.bandwidth()/2;return(0,n.jsxs)("g",{children:[(0,n.jsx)("line",{x1:d(0),y1:i,y2:i,x2:d(e.value),opacity:.7,stroke:"#9d174d",strokeWidth:1}),(0,n.jsx)("circle",{cy:i,cx:d(e.value),opacity:.7,stroke:"#9d174d",fill:"#9d174d",strokeWidth:1,r:3}),(0,n.jsx)("text",{x:d(0)-7,y:i,textAnchor:"end",alignmentBaseline:"central",fontSize:12,children:e.name})]},t)})),h=d.ticks(5).slice(1).map((function(e,t){return(0,n.jsxs)("g",{children:[(0,n.jsx)("line",{x1:d(e),x2:d(e),y1:0,y2:o,stroke:"#808080",opacity:.2}),(0,n.jsx)("text",{x:d(e),y:o+10,textAnchor:"middle",alignmentBaseline:"central",fontSize:9,stroke:"#808080",opacity:.8,children:e})]},t)}));return(0,n.jsx)("div",{children:(0,n.jsx)("svg",{width:t,height:i,children:(0,n.jsxs)("g",{width:s,height:o,transform:"translate(".concat([v.left,v.top].join(","),")"),children:[h,u]})})})},g=function(e){var t=e.width,i=void 0===t?700:t,r=e.height,a=void 0===r?400:r;return(0,n.jsx)(j,{data:p,width:i,height:a})},w=(0,n.jsxs)("p",{children:["A"," ",(0,n.jsx)("a",{href:"https://www.data-to-viz.com/graph/lollipop.html",children:"lollipop plot"})," ","is a variation of the more common ",(0,n.jsx)(h.default,{href:"barplot",children:"barplot"}),". This section describes how to build lollipop charts with d3.js in a react context. It starts very basic and then explains how to add more complex features like windowing, dark mode and more."]}),y='\nconst data = [\n  {name:"Mark", value: 90},\n  {name:"Robert", value: 12},\n  {name:"Emily", value: 34},\n  {name:"Marion", value: 53},\n  {name:"Nicolas", value: 98},\n]\n'.trim();function b(){return(0,n.jsxs)(a.A,{title:"Lollipop plot with React",seoDescription:"How to build a lollipop plot with React and D3.js. A set of re-usable components",children:[(0,n.jsx)(s.Z,{title:"Lollipop plot",description:w,chartType:"lollipop"}),(0,n.jsxs)(c.U,{title:"Dataset",startOpen:!0,children:[(0,n.jsxs)("p",{children:["The dataset required to build a lollipop is usually an array where each item is an object providing the ",(0,n.jsx)("code",{children:"name"})," and the"," ",(0,n.jsx)("code",{children:"value"})," of the group."]}),(0,n.jsx)("br",{}),(0,n.jsx)("p",{children:"Here is a minimal example"}),(0,n.jsx)(d.d,{code:y}),(0,n.jsxs)("p",{children:["Note: if your data is in ",(0,n.jsx)("code",{children:".csv"})," formart, you can translate it thanks to the ",(0,n.jsx)("code",{children:"d3.csv()"})," function as suggested"," ",(0,n.jsx)("a",{href:"https://d3-graph-gallery.com/graph/barplot_horizontal.html",children:"here"}),"."]})]}),(0,n.jsxs)(c.U,{title:"Most basic lollipop",startOpen:!0,children:[(0,n.jsxs)("p",{children:["There is nothing really tricky when it comes to build a basic barplot with react, all is pretty close to the"," ",(0,n.jsx)("a",{href:"https://d3-graph-gallery.com/barplot",children:"d3-only examples"}),"."]}),(0,n.jsx)(u.$,{vizName:"LollipopBasic",VizComponent:g,height:400,maxWidth:600,caption:"Most basic Lollipop built with d3.js for scales, and react for rendering"})]}),(0,n.jsx)(m.Z,{chartId:"lollipop"}),(0,n.jsx)(c.U,{title:"Vertical barplot",startOpen:!0,children:(0,n.jsx)("p",{children:"The vertical option is less common since it makes is much harder to read the labels. But if you really need it, it is just a matter of swaping the X and Y axes of the previous example. Here is a working version."})}),(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),(0,n.jsx)("div",{className:"full-bleed border-t h-0 bg-gray-100 my-3"}),(0,n.jsx)(o.Z,{chartFamily:"partOfAWhole"}),(0,n.jsx)("div",{className:"mt-20"}),(0,n.jsx)(l.Z,{})]})}}},function(e){e.O(0,[952,660,702,774,888,179],(function(){return t=3820,e(e.s=t);var t}));var t=e.O();_N_E=t}]);