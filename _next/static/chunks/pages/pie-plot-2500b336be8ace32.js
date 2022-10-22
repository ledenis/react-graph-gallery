(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3053],{6350:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/pie-plot",function(){return n(2741)}])},33:function(e,t,n){"use strict";n.d(t,{$:function(){return l}});var r=n(5893),a=n(7294),i=n(217),s=n(4893),o=n(5380),c=n(7975),l=function(e){var t=e.VizComponent,n=e.vizName,l=e.height,d=void 0===l?400:l,u=e.maxWidth,h=void 0===u?800:u,m=e.caption,p=(0,a.useState)(!1),f=p[0],v=p[1],x=(0,a.useRef)(null),j=(0,i.B)(x);return(0,r.jsx)("div",{style:{marginLeft:"-50vw",left:"50%"},className:"my-4 py-4 w-screen relative",children:f?(0,r.jsxs)("div",{className:"flex flex-col items-center justify-center w-full",children:[(0,r.jsx)("div",{style:{maxWidth:2e3},className:"w-full",children:(0,r.jsx)(c.X,{vizName:n})}),(0,r.jsx)("div",{className:"flex justify-center mt-2",children:(0,r.jsx)(s.z,{size:"sm",onClick:function(){return v(!f)},children:"Hide Sandbox"})})]}):(0,r.jsxs)("div",{className:"flex flex-col items-center justify-center",children:[(0,r.jsx)("div",{className:"bg-gray-50 w-screen flex justify-center",children:(0,r.jsx)("div",{style:{height:d,width:"100%",maxWidth:h},ref:x,children:(0,r.jsx)(t,{height:d,width:j.width})})}),(0,r.jsx)(o.Y,{children:m}),(0,r.jsx)("div",{className:"flex justify-center",children:(0,r.jsx)(s.z,{size:"sm",onClick:function(){return v(!f)},children:"Show code"})})]})})}},7975:function(e,t,n){"use strict";n.d(t,{X:function(){return a}});var r=n(5893),a=(n(7294),function(e){var t="https://codesandbox.io/embed/github/holtzy/react-graph-gallery/tree/main/viz/"+e.vizName+"?fontsize=14&hidenavigation=1&theme=dark&expanddevtools=0";return(0,r.jsx)("iframe",{src:t,style:{width:"100%",height:"500px",border:"solid",borderWidth:2,borderRadius:"4px",overflow:"hidden"},allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"})})},4893:function(e,t,n){"use strict";n.d(t,{z:function(){return a}});var r=n(5893),a=function(e){var t=e.children,n=e.onClick,a=e.isFilled,i=e.size,s=void 0===i?"md":i,o="rounded m-1 cursor-pointer border-reactGallery border ";return"sm"===s&&(o+="text-sm py-1 px-2"),"md"===s&&(o+="text-md py-2 px-4"),o+=a?" bg-reactGallery hover:bg-reactGallery text-white":" bg-white hover:bg-reactGallery hover:text-white text-reactGallery",(0,r.jsx)("button",{className:o,onClick:n,children:t})}},8193:function(e,t,n){"use strict";n.d(t,{d:function(){return o}});var r=n(5893),a=n(4725),i=n.n(a),s=n(7294),o=function(e){var t=e.code,n=(0,s.useRef)(null);return(0,s.useEffect)((function(){n.current&&i().highlightElement(n.current)}),[n,t]),(0,r.jsx)("div",{className:"mb-4",children:(0,r.jsx)("pre",{className:"rounded-md line-numbers",children:(0,r.jsx)("code",{ref:n,className:"p-0 language-js",children:t})})})}},217:function(e,t,n){"use strict";n.d(t,{B:function(){return a}});var r=n(7294),a=function(e){var t=function(){return{width:e.current?e.current.offsetWidth:0,height:e.current?e.current.offsetHeight:0}},n=(0,r.useState)(t),a=n[0],i=n[1],s=function(){i(t())};return(0,r.useEffect)((function(){return window.addEventListener("resize",s),function(){return window.removeEventListener("resize",s)}}),[]),(0,r.useLayoutEffect)((function(){s()}),[]),a}},2741:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return y}});var r=n(5893),a=n(7294),i=n(4813),s=n(8807),o=n(6978),c=n(33),l=n(7197),d=n(3485),u=n(8193),h=[{name:"Mark",value:90},{name:"Robert",value:12},{name:"Emily",value:34},{name:"Marion",value:53},{name:"Nicolas",value:98}],m=[{name:"Mark",value:90},{name:"Robert",value:12},{name:"Emily",value:34},{name:"Marion",value:53},{name:"Nicolas",value:98}],p=n(2535),f=["#98abc5","#8a89a6","#7b6888","#6b486b","#a05d56"],v=function(e){var t=e.width,n=e.height,i=e.data,s=Math.min(t,n)/2-30,o=(0,a.useMemo)((function(){return p.ve8().value((function(e){return e.value}))(i)}),[i]),c=(0,a.useMemo)((function(){var e=p.Nb1();return o.map((function(t){return e({innerRadius:0,outerRadius:s,startAngle:t.startAngle,endAngle:t.endAngle})}))}),[s,o]);return(0,r.jsx)("svg",{width:t,height:n,style:{display:"inline-block"},children:(0,r.jsx)("g",{transform:"translate(".concat(t/2,", ").concat(n/2,")"),children:c.map((function(e,t){return(0,r.jsx)("path",{d:e,fill:f[t]},t)}))})})},x=function(e){var t=e.width,n=void 0===t?700:t,a=e.height,i=void 0===a?400:a;return(0,r.jsx)(v,{data:m,width:n,height:i})},j=(0,r.jsxs)("p",{children:["The ",(0,r.jsx)("a",{href:"https://www.data-to-viz.com/caveat/pie.html",children:"pie chart"})," is both the most common and the most criticized chart. D3.js has a"," ",(0,r.jsx)("code",{children:"pie()"})," function that creates some svg ",(0,r.jsx)("code",{children:"path"})," for you, ready to be renderered with React."]}),g='\nconst data = [\n  {name:"Mark", value: 90},\n  {name:"Robert", value: 12},\n  {name:"Emily", value: 34},\n  {name:"Marion", value: 53},\n  {name:"Nicolas", value: 98},\n]\n'.trim(),b='\nconst pieGenerator = d3.pie().value((d) => d.value);\nconst pie = pieGenerator(data);\n\n/*\n[\n  {\n      "data": {"name": "Mark", "value": 90},\n      "index": 1,\n      "value": 90,\n      "startAngle": 2.145477909768639,\n      "endAngle": 4.115814765678614,\n      "padAngle": 0\n  }, .... same for other groups\n]\n*/\n'.trim(),w='\nconst arcPathGenerator = d3.arc();\nconst arcs pie.map((p) =>\n      arcPathGenerator({\n        innerRadius: 0,\n        outerRadius: radius,\n        startAngle: p.startAngle,\n        endAngle: p.endAngle,\n      })\n    );\n\n/*\n[\n  "M151,97 A180,180,0,0,1,-148,101 L0,0Z",\n  .... other groups\n]\n*/\n'.trim();function y(){var e=(0,a.useState)(h);e[0],e[1];return(0,r.jsxs)(i.A,{title:"Pie chart with React",seoDescription:"How to build a pie chart with React and D3.js. A set of re-usable components",children:[(0,r.jsx)(s.Z,{title:"Pie chart",description:j,chartType:"pie"}),(0,r.jsxs)(d.U,{title:"Dataset",startOpen:!0,children:[(0,r.jsxs)("p",{children:["The dataset required to build a pie chart is pretty simple. It is an array where each item represents a group of the pie chart. Each item is an object with 2 properties. They provide the group name (",(0,r.jsx)("code",{children:"name"}),") and its value (",(0,r.jsx)("code",{children:"value"}),")."]}),(0,r.jsx)("br",{}),(0,r.jsx)("p",{children:"For instance, here is the dataset used for the simple pie chart below:"}),(0,r.jsx)(u.d,{code:g})]}),(0,r.jsxs)(d.U,{title:"Most basic pie chart",startOpen:!0,children:[(0,r.jsx)("p",{children:"As usual, the math is done thanks to d3.js, and the rendering using React"}),(0,r.jsx)("br",{}),(0,r.jsxs)("p",{children:["First of all, the ",(0,r.jsx)("code",{children:"pie()"})," function is used to compute the start and end angles of each group. By default this function expects an array of number as input. Thus we have to tell it how to find the value to use in our dataset using an assesor function"]}),(0,r.jsx)(u.d,{code:b}),(0,r.jsx)("br",{}),(0,r.jsxs)("p",{children:["From those start and end angles we now need to build a proper string that we can pass as the ",(0,r.jsx)("code",{children:"d"})," attribute of a"," ",(0,r.jsx)("code",{children:"path"}),". This is pretty easy thanks to the"," ",(0,r.jsx)("code",{children:"arc()"})," function of d3. This function must be applied to every item of the pie object created above."]}),(0,r.jsx)(u.d,{code:w}),(0,r.jsx)("br",{}),(0,r.jsx)("p",{children:"And that's it. This array of path can be renderer using react using a map pretty easily."}),(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),(0,r.jsx)(c.$,{vizName:"PieChartBasic",VizComponent:x,maxWidth:400,height:400,caption:"basic pie chart with react and d3.js"})]}),(0,r.jsx)("div",{className:"full-bleed border-t h-0 bg-gray-100 my-3"}),(0,r.jsx)(l.Z,{chartFamily:"partOfAWhole"}),(0,r.jsx)("div",{className:"mt-20"}),(0,r.jsx)(o.Z,{})]})}}},function(e){e.O(0,[3888,5660,9513,5884,9774,2888,179],(function(){return t=6350,e(e.s=t);var t}));var t=e.O();_N_E=t}]);