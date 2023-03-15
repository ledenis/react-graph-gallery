(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5764],{3820:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/lollipop-plot",function(){return n(2828)}])},2173:function(e,t,n){"use strict";n.d(t,{r:function(){return s}});var i=n(5893),a=n(1664),r=n(1878),o=n(3359),l=n(8193),s=function(e){var t=e.chartId,n=r.c.filter((function(e){return e.id===t}))[0].label;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("h2",{id:"responsiveness",children:"Responsive "+n+" with react"}),(0,i.jsxs)("p",{children:["The component above is not responsive. It expects 2 props called"," ",(0,i.jsx)("code",{children:"width"})," and ",(0,i.jsx)("code",{children:"height"})," and will render a ",n," of those dimensions."]}),(0,i.jsxs)("p",{children:["Making the ",n," responsive requires adding a ",(0,i.jsx)("b",{children:"wrapper"})," component that gets the dimension of the parent ",(0,i.jsx)("code",{children:"div"}),", and listening to a potential dimension change. This is possible thanks to a hook called"," ",(0,i.jsx)("code",{children:"useDimensions"})," that will do the job for us."]}),(0,i.jsx)(o.U,{startOpen:!1,title:(0,i.jsxs)("span",{children:[(0,i.jsx)("code",{children:"useDimensions"}),": a hook to make your viz responsive"]}),children:(0,i.jsx)(l.d,{code:c})}),(0,i.jsxs)("p",{children:["I'm in the process of writing a complete blog post on the topic."," ",(0,i.jsx)(a.default,{href:"/subscribe",children:"Subscribe to the project"})," to know when it's ready."]}),(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),(0,i.jsx)("br",{})]})},c='\nexport const useDimensions = (targetRef: React.RefObject<HTMLDivElement>) => {\n\n  const getDimensions = () => {\n    return {\n      width: targetRef.current ? targetRef.current.offsetWidth : 0,\n      height: targetRef.current ? targetRef.current.offsetHeight : 0\n    };\n  };\n\n  const [dimensions, setDimensions] = useState(getDimensions);\n\n  const handleResize = () => {\n    setDimensions(getDimensions());\n  };\n\n  useEffect(() => {\n    window.addEventListener("resize", handleResize);\n    return () => window.removeEventListener("resize", handleResize);\n  }, []);\n\n  useLayoutEffect(() => {\n    handleResize();\n  }, []);\n\n  return dimensions;\n}\n'.trim()},3359:function(e,t,n){"use strict";n.d(t,{U:function(){return a}});var i=n(5893),a=function(e){e.startOpen;var t=e.title,n=e.children;return(0,i.jsxs)("details",{className:"bg-gray-50 py-2 px-4 rounded-md my-2",children:[(0,i.jsx)("summary",{className:"cursor-pointer",children:t}),n]})}},2828:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return P}});var i=n(5893),a=n(7294),r=n(1884),o=n(8807),l=n(7197),s=n(8193),c=n(33),h=n(1664),d=n(3440),u=[{name:"Mark",value:90},{name:"Robert",value:12},{name:"Emily",value:34},{name:"Marion",value:53},{name:"Nicolas",value:98},{name:"M\xe9lanie",value:23},{name:"Gabriel",value:18},{name:"Jean",value:104},{name:"Paul",value:2}],p=n(5250);function m(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],i=!0,a=!1,r=void 0;try{for(var o,l=e[Symbol.iterator]();!(i=(o=l.next()).done)&&(n.push(o.value),!t||n.length!==t);i=!0);}catch(s){a=!0,r=s}finally{try{i||null==l.return||l.return()}finally{if(a)throw r}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var x={top:30,right:30,bottom:30,left:80},v=function(e){var t=e.width,n=e.height,r=e.data,o=t-x.right-x.left,l=n-x.top-x.bottom,s=r.sort((function(e,t){return t.value-e.value})).map((function(e){return e.name})),c=(0,a.useMemo)((function(){return p.tiA().domain(s).range([0,l])}),[r,n]),h=(0,a.useMemo)((function(){var e=m(p.Wem(r.map((function(e){return e.value}))),2),t=(e[0],e[1]);return p.BYU().domain([0,t||10]).range([0,o])}),[r,t]),d=r.map((function(e,t){var n=c(e.name)+c.bandwidth()/2;return(0,i.jsxs)("g",{children:[(0,i.jsx)("line",{x1:h(0),y1:n,y2:n,x2:h(e.value),opacity:.7,stroke:"#9d174d",strokeWidth:1}),(0,i.jsx)("circle",{cy:n,cx:h(e.value),opacity:.7,stroke:"#9d174d",fill:"#9d174d",strokeWidth:1,r:3}),(0,i.jsx)("text",{x:h(0)-7,y:n,textAnchor:"end",alignmentBaseline:"central",fontSize:12,children:e.name})]},t)})),u=h.ticks(5).slice(1).map((function(e,t){return(0,i.jsxs)("g",{children:[(0,i.jsx)("line",{x1:h(e),x2:h(e),y1:0,y2:l,stroke:"#808080",opacity:.2}),(0,i.jsx)("text",{x:h(e),y:l+10,textAnchor:"middle",alignmentBaseline:"central",fontSize:9,stroke:"#808080",opacity:.8,children:e})]},t)}));return(0,i.jsx)("div",{children:(0,i.jsx)("svg",{width:t,height:n,children:(0,i.jsxs)("g",{width:o,height:l,transform:"translate(".concat([x.left,x.top].join(","),")"),children:[u,d]})})})},f=function(e){var t=e.width,n=void 0===t?700:t,a=e.height,r=void 0===a?400:a;return(0,i.jsx)(v,{data:u,width:n,height:r})},j=n(2173),g=[{name:"Mark",value1:90,value2:72},{name:"Robert",value1:12,value2:10},{name:"Emily",value1:34,value2:14},{name:"Marion",value1:53,value2:24},{name:"Nicolas",value1:98,value2:58},{name:"M\xe9lanie",value1:23,value2:20},{name:"Gabriel",value1:18,value2:10},{name:"Jean",value1:104,value2:70},{name:"Paul",value1:2,value2:1}];function b(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],i=!0,a=!1,r=void 0;try{for(var o,l=e[Symbol.iterator]();!(i=(o=l.next()).done)&&(n.push(o.value),!t||n.length!==t);i=!0);}catch(s){a=!0,r=s}finally{try{i||null==l.return||l.return()}finally{if(a)throw r}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var w={top:30,right:30,bottom:30,left:80},y=function(e){var t=e.width,n=e.height,r=e.data,o=t-w.right-w.left,l=n-w.top-w.bottom,s=r.sort((function(e,t){return t.value1-e.value1})).map((function(e){return e.name})),c=(0,a.useMemo)((function(){return p.tiA().domain(s).range([0,l])}),[r,n]),h=(0,a.useMemo)((function(){var e=b(p.Wem(r.map((function(e){return e.value1}))),2),t=(e[0],e[1]);return p.BYU().domain([0,t||10]).range([0,o])}),[r,t]),d=r.map((function(e,t){var n=c(e.name)+c.bandwidth()/2;return(0,i.jsxs)("g",{children:[(0,i.jsx)("line",{x1:h(e.value1),y1:n,y2:n,x2:h(e.value2),opacity:.7,stroke:"grey",strokeWidth:1}),(0,i.jsx)("circle",{cy:n,cx:h(e.value1),opacity:.7,stroke:"#69b3a2",fill:"#69b3a2",strokeWidth:1,r:5}),(0,i.jsx)("circle",{cy:n,cx:h(e.value2),opacity:.7,stroke:"#9d174d",fill:"#9d174d",strokeWidth:1,r:5}),(0,i.jsx)("text",{x:h(0)-7,y:n,textAnchor:"end",alignmentBaseline:"central",fontSize:12,children:e.name})]},t)})),u=h.ticks(5).slice(1).map((function(e,t){return(0,i.jsxs)("g",{children:[(0,i.jsx)("line",{x1:h(e),x2:h(e),y1:0,y2:l,stroke:"#808080",opacity:.2}),(0,i.jsx)("text",{x:h(e),y:l+10,textAnchor:"middle",alignmentBaseline:"central",fontSize:9,stroke:"#808080",opacity:.8,children:e})]},t)}));return(0,i.jsx)("div",{children:(0,i.jsx)("svg",{width:t,height:n,children:(0,i.jsxs)("g",{width:o,height:l,transform:"translate(".concat([w.left,w.top].join(","),")"),children:[u,d]})})})},k=function(e){var t=e.width,n=void 0===t?700:t,a=e.height,r=void 0===a?400:a;return(0,i.jsx)(y,{data:g,width:n,height:r})},T=[{name:"Mark",value1:87,value2:90},{name:"Robert",value1:10,value2:12},{name:"Emily",value1:67,value2:34},{name:"Marion",value1:34,value2:53},{name:"Nicolas",value1:87,value2:98},{name:"M\xe9lanie",value1:12,value2:23},{name:"Gabriel",value1:8,value2:18},{name:"Jean",value1:79,value2:104},{name:"Paul",value1:10,value2:80}],z=[{name:"Mark",value1:1,value2:9},{name:"Robert",value1:18,value2:19},{name:"Emily",value1:12,value2:31},{name:"Marion",value1:54,value2:23},{name:"Nicolas",value1:14,value2:38},{name:"M\xe9lanie",value1:87,value2:123},{name:"Gabriel",value1:2,value2:4},{name:"Jean",value1:12,value2:23},{name:"Christophe",value1:18,value2:22}],M=n(1472),A=function(e){var t=e.name,n=e.xValue1,a=e.xValue2,r=e.y,o=(0,M.useSpring)({from:{xValue1:0,xValue2:0,valueOpacity:0},to:{xValue1:n,xValue2:a,valueOpacity:1,y:r},config:{friction:100}});return(0,i.jsxs)("g",{children:[(0,i.jsx)(M.q.line,{x1:o.xValue1,y1:o.y,y2:o.y,x2:o.xValue2,opacity:.7,stroke:"grey",strokeWidth:1}),(0,i.jsx)(M.q.circle,{cy:o.y,cx:o.xValue1,opacity:.7,stroke:"#69b3a2",fill:"#69b3a2",strokeWidth:1,r:5}),(0,i.jsx)(M.q.circle,{cy:o.y,cx:o.xValue2,opacity:.7,stroke:"#9d174d",fill:"#9d174d",strokeWidth:1,r:5}),(0,i.jsx)(M.q.text,{x:-7,y:o.y,textAnchor:"end",alignmentBaseline:"central",fontSize:12,children:t})]})},R={top:30,right:30,bottom:30,left:70},I=function(e){var t=e.width,n=e.height,r=e.data,o=t-R.right-R.left,l=n-R.top-R.bottom,s=r.map((function(e){return e.name})).sort(),c=(0,a.useMemo)((function(){return p.tiA().domain(s).range([0,l])}),[r,n]),h=(0,a.useMemo)((function(){return p.BYU().domain([0,120]).range([0,o])}),[r,t]),d=r.map((function(e){return(0,i.jsx)(A,{name:e.name,xValue1:h(e.value1),xValue2:h(e.value2),y:c(e.name)},e.name)})),u=h.ticks(5).slice(1).map((function(e,t){return(0,i.jsxs)("g",{children:[(0,i.jsx)("line",{x1:h(e),x2:h(e),y1:0,y2:l,stroke:"#808080",opacity:.2}),(0,i.jsx)("text",{x:h(e),y:l+10,textAnchor:"middle",alignmentBaseline:"central",fontSize:9,stroke:"#808080",opacity:.8,children:e})]},t)}));return(0,i.jsx)("div",{children:(0,i.jsx)("svg",{width:t,height:n,children:(0,i.jsxs)("g",{width:o,height:l,transform:"translate(".concat([R.left,R.top].join(","),")"),children:[u,d]})})})},N={border:"1px solid #9a6fb0",borderRadius:"3px",padding:"4px 8px",margin:"10px 2px",fontSize:14,color:"#9a6fb0",opacity:.7},S=function(e){var t=e.width,n=e.height,r=(0,a.useState)(T),o=r[0],l=r[1];return(0,i.jsxs)("div",{children:[(0,i.jsxs)("div",{style:{height:50},children:[(0,i.jsx)("button",{style:N,onClick:function(){return l(T)},children:"Data 1"}),(0,i.jsx)("button",{style:N,onClick:function(){return l(z)},children:"Data 2"})]}),(0,i.jsx)(I,{width:t,height:n-50,data:o})]})},W=function(e){var t=e.width,n=void 0===t?700:t,a=e.height,r=void 0===a?400:a;return n&&r?(0,i.jsx)(S,{width:n,height:r}):null},_=[{name:"Mark",value1:90,value2:72},{name:"Robert",value1:12,value2:10},{name:"Emily",value1:34,value2:14},{name:"Marion",value1:53,value2:24},{name:"Nicolas",value1:98,value2:58},{name:"M\xe9lanie",value1:23,value2:20},{name:"Gabriel",value1:18,value2:10},{name:"Jean",value1:104,value2:70},{name:"Paul",value1:2,value2:1}],E=n(3082),D=n.n(E);function C(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],i=!0,a=!1,r=void 0;try{for(var o,l=e[Symbol.iterator]();!(i=(o=l.next()).done)&&(n.push(o.value),!t||n.length!==t);i=!0);}catch(s){a=!0,r=s}finally{try{i||null==l.return||l.return()}finally{if(a)throw r}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var L={top:30,right:30,bottom:30,left:80},V=function(e){var t=e.width,n=e.height,r=e.data,o=t-L.right-L.left,l=n-L.top-L.bottom,s=r.sort((function(e,t){return t.value1-e.value1})).map((function(e){return e.name})),c=(0,a.useMemo)((function(){return p.tiA().domain(s).range([0,l])}),[r,n]),h=(0,a.useMemo)((function(){var e=C(p.Wem(r.map((function(e){return e.value1}))),2),t=(e[0],e[1]);return p.BYU().domain([0,t||10]).range([0,o])}),[r,t]),d=r.map((function(e,n){var a=c(e.name);if(!a)return null;var r=a+c.bandwidth()/2;return(0,i.jsxs)("g",{className:D().row,children:[(0,i.jsx)("rect",{width:t,height:c.bandwidth(),x:0,y:r,fill:"transparent"}),(0,i.jsx)("rect",{width:t,height:c.bandwidth()-6,x:-L.left,y:a+3,fill:"grey",rx:5,className:D().highlightRect}),(0,i.jsx)("line",{x1:h(e.value1),y1:r,y2:r,x2:h(e.value2),opacity:.7,stroke:"grey",strokeWidth:1}),(0,i.jsx)("circle",{cy:r,cx:h(e.value1),opacity:.7,stroke:"#69b3a2",fill:"#69b3a2",strokeWidth:1,r:5}),(0,i.jsx)("circle",{cy:r,cx:h(e.value2),opacity:.7,stroke:"#9d174d",fill:"#9d174d",strokeWidth:1,r:5}),(0,i.jsx)("text",{x:h(0)-7,y:r,textAnchor:"end",alignmentBaseline:"central",fontSize:12,children:e.name})]},n)})),u=h.ticks(5).slice(1).map((function(e,t){return(0,i.jsxs)("g",{children:[(0,i.jsx)("line",{x1:h(e),x2:h(e),y1:0,y2:l,stroke:"#808080",opacity:.2}),(0,i.jsx)("text",{x:h(e),y:l+10,textAnchor:"middle",alignmentBaseline:"central",fontSize:9,stroke:"#808080",opacity:.8,children:e})]},t)}));return(0,i.jsx)("div",{children:(0,i.jsx)("svg",{width:t,height:n,children:(0,i.jsxs)("g",{width:o,height:l,transform:"translate(".concat([L.left,L.top].join(","),")"),children:[u,(0,i.jsx)("g",{className:D().rowsContainer,children:d})]})})})},B=function(e){var t=e.width,n=void 0===t?700:t,a=e.height,r=void 0===a?400:a;return(0,i.jsx)(V,{data:_,width:n,height:r})},q=(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("p",{children:["A"," ",(0,i.jsx)("a",{href:"https://www.data-to-viz.com/graph/lollipop.html",children:"lollipop plot"})," ","is a variation of the more common ",(0,i.jsx)(h.default,{href:"barplot",children:"barplot"}),". This page is a step-by-step guide on how to build your own lollipop for the web, using ",(0,i.jsx)("a",{href:"https://reactjs.org/",children:"React"})," and"," ",(0,i.jsx)("a",{href:"https://d3-graph-gallery.com/histogram",children:"D3.js"}),"."]}),(0,i.jsxs)("p",{children:["It starts by describing how the ",(0,i.jsx)("b",{children:"data"})," should be organized and how to initialize the ",(0,i.jsx)("b",{children:"lollipop component"}),". It explains how to build the"," ",(0,i.jsx)("b",{children:"scales"})," and ",(0,i.jsx)("b",{children:"axes"})," and how to add the shapes. A few variations are described and a focus is made on the ",(0,i.jsx)("b",{children:"hover interaction"}),". \ud83d\ude47\u200d\u2642\ufe0f."]})]});function P(){return(0,i.jsxs)(r.A,{title:"Lollipop plot with React",seoDescription:"How to build a lollipop plot with React and D3.js. A set of re-usable components",children:[(0,i.jsx)(o.Z,{title:"Lollipop plot",description:q,chartType:"lollipop"}),(0,i.jsx)("h2",{id:"data",children:"The Data"}),(0,i.jsxs)("p",{children:["The dataset required to build a lollipop is usually an array where each item is an object providing the ",(0,i.jsx)("code",{children:"name"})," and the"," ",(0,i.jsx)("code",{children:"value"})," of the group."]}),(0,i.jsx)("br",{}),(0,i.jsx)("p",{children:"Here is a minimal example:"}),(0,i.jsx)(s.d,{code:O}),(0,i.jsxs)("p",{children:["Note: if your data is in ",(0,i.jsx)("code",{children:".csv"})," format, you can translate it thanks to the ",(0,i.jsx)("code",{children:"d3.csv()"})," function as suggested"," ",(0,i.jsx)("a",{href:"https://d3-graph-gallery.com/graph/barplot_horizontal.html",children:"here"}),"."]}),(0,i.jsx)("h2",{id:"skeleton",children:"Component skeleton"}),(0,i.jsxs)("p",{children:["The goal here is to create a ",(0,i.jsx)("code",{children:"Lollipop"})," component that will be stored in a ",(0,i.jsx)("code",{children:"Lollipop.tsx"})," file. This component requires 3 props to render: a ",(0,i.jsx)("code",{children:"width"}),", a ",(0,i.jsx)("code",{children:"height"}),", and some"," ",(0,i.jsx)("code",{children:"data"}),"."]}),(0,i.jsxs)("p",{children:["The shape of the ",(0,i.jsx)("code",{children:"data"})," is described above. The"," ",(0,i.jsx)("code",{children:"width"})," and ",(0,i.jsx)("code",{children:"height"})," will be used to render an"," ",(0,i.jsx)("code",{children:"svg"})," element in the DOM, in which we will insert the histogram."]}),(0,i.jsxs)("p",{children:["To put it in a nutshell, that's the skeleton of our"," ",(0,i.jsx)("code",{children:"Lollipop"})," component:"]}),(0,i.jsx)(s.d,{code:H}),(0,i.jsxs)("p",{children:["It's fundamental to understand that with this code organization, d3.js will be used to prepare the SVG ",(0,i.jsx)("code",{children:"circle"}),", but it's React that will render them in the ",(0,i.jsx)("code",{children:"return()"})," statement. We won't use d3 methods like ",(0,i.jsx)("code",{children:"append"})," that you can find in usual"," ",(0,i.jsx)("a",{href:"https://www.d3-graph-gallery.com",children:"d3.js examples"}),"."]}),(0,i.jsx)("h2",{id:"basic",children:"Most basic lollipop"}),(0,i.jsxs)("p",{children:["A lollipop chart is a variation of the better known"," ",(0,i.jsx)(h.default,{href:"barplot",children:"barplot"}),". The implementation of a barplot with react is extensively described in the"," ",(0,i.jsx)(h.default,{href:"barplot",children:"barplot section"})," of the gallery. So I will just provide a quick recap here."]}),(0,i.jsxs)("p",{children:["To put it in a nutshell, ",(0,i.jsx)("b",{children:"2 scales"})," must be created. The x axis transforms a numeric value in a position in pixel: it is a linear scale built with the ",(0,i.jsx)("code",{children:"scaleLinear()"})," function of d3. The y axis transforms a group name in a position in pixel: it is a band scale built with ",(0,i.jsx)("code",{children:"scaleBand()"}),"."]}),(0,i.jsxs)("p",{children:["Once the scales are available, ",(0,i.jsx)("b",{children:"loop"})," through each item of the dataset. Instead of drawing a rectangle for each item, draw a line and a circle. Instead of adding a proper X and Y axes, I suggest to create a grid manually and to draw labels at an arbitrary position."]}),(0,i.jsx)(c.$,{vizName:"LollipopBasic",VizComponent:f,height:400,maxWidth:600,caption:"Most basic Lollipop built with d3.js for scales, and react for rendering"}),(0,i.jsx)(j.r,{chartId:"lollipop"}),(0,i.jsx)(d.Z,{chartId:"lollipop"}),(0,i.jsx)("h2",{id:"dumbbell",children:"Dumbbel plot"}),(0,i.jsxs)("p",{children:["A"," ",(0,i.jsx)("a",{href:"https://www.data-to-viz.com/graph/lollipop.html",children:"dumbbell plot"}),", also known as a cleveland plot or a connected dot plot, is a visual representation of the ",(0,i.jsx)("b",{children:"difference"})," or ",(0,i.jsx)("b",{children:"change"})," between two related variables. It consists of two endpoints, represented by circles or dots, connected by a horizontal line, which represents the magnitude of the difference or change."," "]}),(0,i.jsxs)("p",{children:["This type of plot is commonly used in scientific research to display the effect of an intervention or treatment on a particular outcome, or to compare two different groups or time periods. The plot allows for"," ",(0,i.jsx)("b",{children:"easy comparison"})," of the magnitude and direction of change between the two variables."]}),(0,i.jsxs)("p",{children:["The implementation is very close to the"," ",(0,i.jsx)("a",{href:"#basic",children:"basic lollipop"})," chart described above. The dataset provides 2 data points for each item in the dataset: ",(0,i.jsx)("code",{children:"value1"})," ","and ",(0,i.jsx)("code",{children:"value2"}),". The scales and axes are exactly the same. Instead of drawing 1 line and 1 circle, 2 circles are joined by the line."]}),(0,i.jsx)(c.$,{vizName:"LollipopDumbbell",VizComponent:k,height:400,maxWidth:600,caption:"A basic yet clean dumbbell plot built with d3.js and React"}),(0,i.jsx)("h2",{id:"hover effect",children:"Hover effect"}),(0,i.jsxs)("p",{children:["The circles can be quite ",(0,i.jsx)("b",{children:"far from their label"})," for the biggest values on the chart (see Mark below). Adding an ",(0,i.jsx)("b",{children:"hover interaction"})," ","on the lollipop charts allows to ",(0,i.jsx)("b",{children:"highlight a specific row"}),". As a result, the label/data point connection becomes more obvious."]}),(0,i.jsxs)("p",{children:["There are various strategies to implement such an hover effect. Here, I suggest to do everything in ",(0,i.jsx)("b",{children:"css"})," using"," ",(0,i.jsx)("a",{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes",children:"pseudo classes"}),", and targetting svg elements only."]}),(0,i.jsx)("p",{children:"Two different things happen when a row is hovered:"}),(0,i.jsxs)("ul",{children:[(0,i.jsxs)("li",{children:["All other rows are ",(0,i.jsx)("b",{children:"faded out"}),". Their ",(0,i.jsx)("code",{children:"opacity"})," is lowered to ",(0,i.jsx)("code",{children:".3"})]}),(0,i.jsxs)("li",{children:["A ",(0,i.jsx)("b",{children:"grey rectangle"})," that wraps the row is drawn."]})]}),(0,i.jsxs)("p",{children:["\u2192 For the first effect, a ",(0,i.jsx)("code",{children:"rowsContainer"})," class is added to the element that wraps all rows. When it is hovered hover (",(0,i.jsx)("code",{children:"rowsContainer:hover"}),"), everything that's inside it has a lower opacity. But a specific rule is added at the hovered row level to keep it with a strong opacity. To put it in a nutshell, css looks like:"]}),(0,i.jsx)(s.d,{code:U}),(0,i.jsxs)("p",{children:["\u2192 For the second effect, ",(0,i.jsx)("b",{children:"2 svg rectangles"})," must be drawn. The first one fills the ",(0,i.jsx)("b",{children:"full"})," width and height of the row. It is the one that triggers the mouse event. (It is important to remember that a svg ",(0,i.jsx)("code",{children:"g"})," element does ",(0,i.jsx)("b",{children:"not"})," trigger mouse events. Only what is drawn inside it does). The second rectangle is the one that we see. We can add some ",(0,i.jsx)("b",{children:"vertical padding"})," to it since it is not use for mouse detection."]}),(0,i.jsx)(c.$,{vizName:"LollipopHoverEffect",VizComponent:B,height:400,maxWidth:600,caption:"Try to hover a row in the lollipop above to reveal the hover interaction."}),(0,i.jsx)("h2",{id:"data transition",children:"Data transition"}),(0,i.jsxs)("p",{children:["It is very common to deal with ",(0,i.jsx)("b",{children:"various variables"})," and compare the behaviour of some data items for them. It adds a nice touch to the graph to smoothly transition between 2 states using a quick ",(0,i.jsx)("b",{children:"animation"}),"."]}),(0,i.jsxs)("p",{children:["For the example below I rely on the"," ",(0,i.jsx)("a",{href:"https://react-spring.dev/",children:"react-spring"})," library. This lib allows to quickly create spring animations using javascript. It results in a very a ",(0,i.jsx)("b",{children:"natural transition"})," that can be ",(0,i.jsx)("b",{children:"interrupted"})," ","without restarting from 0. (try to toggle between datasets quickly)."]}),(0,i.jsxs)("p",{children:["It would be too long to explain the code here. Instead, I'm currently writing a set of dedicated tutorials. Please"," ",(0,i.jsx)("a",{href:"https://datavizuniverse.substack.com/",children:"subscribe to the newsletter"})," ","to know when this will be released."]}),(0,i.jsx)(c.$,{vizName:"LollipopDatasetTransition",VizComponent:W,height:400,maxWidth:600,caption:"A lollipop chart with smooth transition between dataset."}),(0,i.jsx)("br",{}),(0,i.jsx)("div",{className:"full-bleed border-t h-0 bg-gray-100 mb-3 mt-24"}),(0,i.jsx)(l.Z,{chartFamily:"ranking"}),(0,i.jsx)("div",{className:"mt-20"})]})}var O='\nconst data = [\n  {name:"Mark", value: 90},\n  {name:"Robert", value: 12},\n  {name:"Emily", value: 34},\n  {name:"Marion", value: 53},\n  {name:"Nicolas", value: 98},\n]\n'.trim(),H='\nimport * as d3 from "d3"; // we will need d3.js\n\ntype LollipopProps = {\n  width: number;\n  height: number;\n  data: number[];\n};\n\nexport const Lollipop = ({ width, height, data }: LollipopProps) => {\n\n  // read the data\n  // build the scales\n  // build the lines and circles\n\n  return (\n    <div>\n      <svg width={width} height={height}>\n        // render axes\n        // render all the lines and rects\n      </svg>\n    </div>\n  );\n};\n'.trim(),U="\n/* Row has an opacity of 1 by default */\n.row {\n  opacity: 1;\n  cursor: pointer;\n}\n\n/* But if the container is hovered somewhere, opacity is decreased to .3 */\n.rowsContainer:hover .row {\n  opacity: 0.3;\n}\n\n/* Except for the specific row that is hovered hover that keeps its opacity to 1 */\n.rowsContainer .row:hover {\n  opacity: 1;\n}\n".trim()},3082:function(e){e.exports={row:"dumbbell_row__QpX5s",rowsContainer:"dumbbell_rowsContainer__PbeSS",highlightRect:"dumbbell_highlightRect___4gZV"}}},function(e){e.O(0,[503,5660,1472,358,5443,9774,2888,179],(function(){return t=3820,e(e.s=t);var t}));var t=e.O();_N_E=t}]);