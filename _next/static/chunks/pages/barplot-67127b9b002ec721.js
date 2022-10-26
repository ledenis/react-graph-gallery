(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[370],{4142:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/barplot",function(){return n(3946)}])},3485:function(e,t,n){"use strict";n.d(t,{U:function(){return i}});var a=n(5893),r=n(7294),i=function(e){var t=e.startOpen,n=e.title,i=e.children,s=e.toc,o=(0,r.useState)(t),l=o[0],c=o[1],d=l?"max-h-full":"max-h-0",h=l?"overflow-visible":"overflow-hidden";return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("h2",{className:"cursor-pointer",onClick:function(){return c(!l)},id:s,children:[l?(0,a.jsx)("span",{className:"text-purple-700 w-4 mr-2 hover:text-purple-900 inline-block",children:"-"}):(0,a.jsx)("span",{className:"text-purple-700 w-4 mr-2 hover:text-purple-900 inline-block",children:"+"}),n]}),(0,a.jsx)("div",{className:"transition-max-height ease-in duration-300  "+d+" "+h,children:i})]})}},3946:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return y}});var a=n(5893),r=n(7294),i=n(1884),s=n(8807),o=n(7197),l=n(6978),c=n(3485),d=n(8193),h=n(33),u=n(1664),m=[{name:"Mark",value:90},{name:"Robert",value:12},{name:"Emily",value:34},{name:"Marion",value:53},{name:"Nicolas",value:98},{name:"M\xe9lanie",value:23},{name:"Gabriel",value:18},{name:"Jean",value:104},{name:"Paul",value:2}],p=n(2535);function x(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],a=!0,r=!1,i=void 0;try{for(var s,o=e[Symbol.iterator]();!(a=(s=o.next()).done)&&(n.push(s.value),!t||n.length!==t);a=!0);}catch(l){r=!0,i=l}finally{try{a||null==o.return||o.return()}finally{if(r)throw i}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var f={top:30,right:30,bottom:30,left:30},b=function(e){var t=e.width,n=e.height,i=e.data,s=t-f.right-f.left,o=n-f.top-f.bottom,l=i.sort((function(e,t){return t.value-e.value})).map((function(e){return e.name})),c=(0,r.useMemo)((function(){return p.tiA().domain(l).range([0,o]).padding(.3)}),[i,n]),d=(0,r.useMemo)((function(){var e=x(p.Wem(i.map((function(e){return e.value}))),2),t=(e[0],e[1]);return p.BYU().domain([0,t||10]).range([0,s])}),[i,t]),h=i.map((function(e,t){return(0,a.jsxs)("g",{children:[(0,a.jsx)("rect",{x:d(0),y:c(e.name),width:d(e.value),height:c.bandwidth(),opacity:.7,stroke:"#9d174d",fill:"#9d174d",fillOpacity:.3,strokeWidth:1,rx:1}),(0,a.jsx)("text",{x:d(e.value)-7,y:c(e.name)+c.bandwidth()/2,textAnchor:"end",alignmentBaseline:"central",fontSize:12,children:e.value}),(0,a.jsx)("text",{x:d(0)+7,y:c(e.name)+c.bandwidth()/2,textAnchor:"start",alignmentBaseline:"central",fontSize:12,children:e.name})]},t)})),u=d.ticks(5).slice(1).map((function(e,t){return(0,a.jsxs)("g",{children:[(0,a.jsx)("line",{x1:d(e),x2:d(e),y1:0,y2:o,stroke:"#808080",opacity:.2}),(0,a.jsx)("text",{x:d(e),y:o+10,textAnchor:"middle",alignmentBaseline:"central",fontSize:9,stroke:"#808080",opacity:.8,children:e})]},t)}));return(0,a.jsx)("div",{children:(0,a.jsx)("svg",{width:t,height:n,children:(0,a.jsxs)("g",{width:s,height:o,transform:"translate(".concat([f.left,f.top].join(","),")"),children:[u,h]})})})},v=function(e){var t=e.width,n=void 0===t?700:t,r=e.height,i=void 0===r?400:r;return(0,a.jsx)(b,{data:m,width:n,height:i})},j=n(3440),w=(0,a.jsxs)("p",{children:["A ",(0,a.jsx)("a",{href:"https://www.data-to-viz.com/graph/barplot.html",children:"barplot"})," ","displays a numeric value for several groups of a dataset using rectangles. This section describes how to build barplots on the web in a react context. It starts very basic and then explain how to add more complex features like windowing, dark mode and more."]}),g='\nconst data = [\n  {name:"Mark", value: 90},\n  {name:"Robert", value: 12},\n  {name:"Emily", value: 34},\n  {name:"Marion", value: 53},\n  {name:"Nicolas", value: 98},\n]\n'.trim();"\n// data is something like [12, 4, 7, 9, ....]\nconst binBuilder = d3\n  .bin()\n  .domain([min, max])\n  .thresholds(yScale.ticks(14)) // how many bins we want?\n  .value((d) => d); // accessor function, just return the value since we're dealing with an array of number\nconst bins = binBuilder(data);\n".trim(),"\nconst areaBuilder = d3\n  .area()\n  .x0((d) => wScale(-d.length))\n  .x1((d) => wScale(d.length))\n  .y((d) => yScale(d.x0))\n  .curve(d3.curveBumpY);\nconst area = areaBuilder(bins);\n".trim();function y(){return(0,a.jsxs)(i.A,{title:"Barplot with React",seoDescription:"How to build a barplot with React and D3.js. A set of re-usable components",children:[(0,a.jsx)(s.Z,{title:"Barplot",description:w,chartType:"barplot"}),(0,a.jsxs)(c.U,{title:"Dataset",startOpen:!0,children:[(0,a.jsxs)("p",{children:["The dataset required to build a barplot is usually an array where each item is an object providing the ",(0,a.jsx)("code",{children:"name"})," and the"," ",(0,a.jsx)("code",{children:"value"})," of the group."]}),(0,a.jsx)("br",{}),(0,a.jsx)("p",{children:"Here is a minimal example"}),(0,a.jsx)(d.d,{code:g}),(0,a.jsxs)("p",{children:["Note: if your data is in ",(0,a.jsx)("code",{children:".csv"})," formart, you can translate it thanks to the ",(0,a.jsx)("code",{children:"d3.csv()"})," function as suggested"," ",(0,a.jsx)("a",{href:"https://d3-graph-gallery.com/graph/barplot_horizontal.html",children:"here"}),"."]})]}),(0,a.jsxs)(c.U,{title:"Most basic barplot",startOpen:!0,children:[(0,a.jsxs)("p",{children:["There is nothing really tricky when it comes to build a basic barplot with react, all is pretty close to the"," ",(0,a.jsx)("a",{href:"https://d3-graph-gallery.com/barplot",children:"d3-only examples"}),"."]}),(0,a.jsxs)("p",{children:["First of all you probably want to add some margins around the dimensions provided in the component properties as described"," ",(0,a.jsx)(u.default,{href:"/build-axis-with-react",children:"here"}),"."]}),(0,a.jsxs)("p",{children:["Then, since we're building a horizontal barchart here the Y axis is showing groups. It means we can build it using the handy"," ",(0,a.jsx)("code",{children:"d3.scaleBand()"})," function. Don't forget to pass a"," ",(0,a.jsx)("code",{children:"padding"})," to it to have some space between bars. Note that it makes sense to wrap the axis creation in a ",(0,a.jsx)("code",{children:"useMemo"})," ","hook. You don't want to recompute this axis if only the"," ",(0,a.jsx)("code",{children:"width"})," changes (like if the window is resized for instance)"]}),(0,a.jsx)(h.$,{vizName:"BarplotBasic",VizComponent:v,height:400,maxWidth:600,caption:"Most basic barplot built with d3.js for scales, and react for rendering"})]}),(0,a.jsx)(j.Z,{chartId:"barplot"}),(0,a.jsx)(c.U,{title:"Vertical barplot",startOpen:!0,children:(0,a.jsx)("p",{children:"The vertical option is less common since it makes is much harder to read the labels. But if you really need it, it is just a matter of swaping the X and Y axes of the previous example. Here is a working version."})}),(0,a.jsx)("br",{}),(0,a.jsx)("br",{}),(0,a.jsx)("br",{}),(0,a.jsx)("div",{className:"full-bleed border-t h-0 bg-gray-100 my-3"}),(0,a.jsx)(o.Z,{chartFamily:"partOfAWhole"}),(0,a.jsx)("div",{className:"mt-20"}),(0,a.jsx)(l.Z,{})]})}}},function(e){e.O(0,[3888,5660,358,5443,9774,2888,179],(function(){return t=4142,e(e.s=t);var t}));var t=e.O();_N_E=t}]);