(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9441],{338:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/violin-plot",function(){return i(2637)}])},4974:function(e,t,i){"use strict";i.d(t,{b:function(){return a}});var n=i(5893),a=function(e){var t=e.children;return(0,n.jsx)("span",{className:"font-semibol bg-purple-100 p-1",children:t})}},2637:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return f}});var n=i(5893),a=(i(7294),i(1884)),s=i(8807),o=i(7197),r=i(6978),l=i(3485),h=i(8193),d=i(33),c=i(4974),u=i(1664),p=i(5657),b=i(2105),x=i(3440),j=(0,n.jsxs)("p",{children:["A ",(0,n.jsx)("a",{href:"https://www.data-to-viz.com/graph/violin.html",children:"violin chart"})," ","displays the distribution of a numeric variable, often for several groups of a dataset. D3.js is used to compute a histogram with the ",(0,n.jsx)("code",{children:"bin()"})," ","function. It then adds smoothing to it with ",(0,n.jsx)("code",{children:"curve()"}),". React is finally used to render the ",(0,n.jsx)("code",{children:"path"}),"."]}),v='\nconst data = [\n  { name: "A", value: 10.7577 },\n  { name: "A", value: 19.9273 },\n  { name: "B", value: 13.8917 },\n  { name: "B", value: 0.5102 },\n  { name: "C", value: 10.5524 },\n  ...\n]\n'.trim(),m="\n// data is something like [12, 4, 7, 9, ....]\nconst binBuilder = d3\n  .bin()\n  .domain([min, max])\n  .thresholds(yScale.ticks(14)) // how many bins we want?\n  .value((d) => d); // accessor function, just return the value since we're dealing with an array of number\nconst bins = binBuilder(data);\n".trim(),w="\nconst areaBuilder = d3\n  .area()\n  .x0((d) => wScale(-d.length))\n  .x1((d) => wScale(d.length))\n  .y((d) => yScale(d.x0))\n  .curve(d3.curveBumpY);\nconst area = areaBuilder(bins);\n".trim();function f(){return(0,n.jsxs)(a.A,{title:"Violin plot with React",seoDescription:"How to build a violin plot with React and D3.js. A set of re-usable components",children:[(0,n.jsx)(s.Z,{title:"Violin plot",description:j,chartType:"violin"}),(0,n.jsx)("h2",{children:"\ud83d\ude80 Quick start"}),(0,n.jsx)("p",{children:"A violin chart allows to visualize the distribution of one or several groups. Here, groups are spread on the X axis, when the Y axis represents the numeric value."}),(0,n.jsx)("br",{}),(0,n.jsxs)("p",{children:["If you're in a hurry and don't want to read the explanations and additional example below, just click on the ",(0,n.jsx)("code",{children:"show code"})," ","button to get the full reproducible example!"]}),(0,n.jsx)(d.$,{vizName:"ViolinBasic",VizComponent:p.N,maxWidth:600,height:400,caption:"A violin plot built with React and d3.js. Click on the button below to get an interactive sandbox with reproducible code."}),(0,n.jsxs)(l.U,{title:"The data",startOpen:!0,children:[(0,n.jsxs)("p",{children:["The dataset used to build a violin chart is usually an array of object. For each object, a ",(0,n.jsx)("code",{children:"name"})," property provides the group name, and a ",(0,n.jsx)("code",{children:"value"})," property provides the numeric value. It basically looks like this:"]}),(0,n.jsx)(h.d,{code:v}),(0,n.jsxs)("p",{children:[(0,n.jsx)("u",{children:"Note"}),": violin plots are useful for big datasets. If you have less than ~100 data points, you probably better have to build a"," ",(0,n.jsx)("a",{href:"https://www.data-to-viz.com/caveat/boxplot.html#boxplotjitter",children:"boxplot"})," ","with individual points on top."]})]}),(0,n.jsxs)(l.U,{title:"Building a violin shape with d3.js",startOpen:!0,children:[(0,n.jsxs)("p",{children:["The process to build a violin chart with d3.js is described in depth in the"," ",(0,n.jsx)("a",{href:"https://www.d3-graph-gallery.com/violin",children:"d3 graph gallery"}),". Let's remind the most important steps:"]}),(0,n.jsxs)("h3",{children:["\u2192 slice the data with ",(0,n.jsx)("code",{children:"d3.bin()"})]}),(0,n.jsxs)("p",{children:["Each violin represents the distribution of an array of numerical values. The first step to get there is to split the values in several bins and count how many values are in each bin. This is possible thanks to the ",(0,n.jsx)("code",{children:"bin()"})," function:"]}),(0,n.jsx)(h.d,{code:m}),(0,n.jsxs)("p",{children:["The result (",(0,n.jsx)("code",{children:"bins"}),") in an array. Each item is an array that represents a bin and contains all the values inside this bins. It also have 2 additional properties x0 and x1 that are the bin boundaries."]}),(0,n.jsxs)("h3",{children:["\u2192 build the svg path with ",(0,n.jsx)("code",{children:"d3.area()"})," and"," ",(0,n.jsx)("code",{children:"curve()"})]}),(0,n.jsxs)("p",{children:["The bins object is all we need to draw an histogram since the"," ",(0,n.jsx)("code",{children:"length"}),"of each bin is the actual size of the bar. This is possible thanks to the ",(0,n.jsx)("code",{children:"area()"})," function that can be called as follow. Last but not leas the curve() call adds some smoothing to the shape, transforming the histogram in a smooth density:"]}),(0,n.jsx)(h.d,{code:w}),(0,n.jsx)("br",{}),(0,n.jsx)(c.b,{children:"We now have the logic to build a svg path for a violin from an array of values. Let's render it with react."})]}),(0,n.jsxs)(l.U,{title:"Rendering a basic violin chart with React",startOpen:!0,children:[(0,n.jsxs)("p",{children:["There is nothing special to notice concerning the rendering. Each violin svg path built is passed to a svg ",(0,n.jsx)("code",{children:"path"})," element in its ",(0,n.jsx)("code",{children:"d"})," attribute."]}),(0,n.jsx)("p",{children:"Note that in the example below I'm using d3 to render the axes, not react. This will be discussed more in depth in a blogpost."}),(0,n.jsx)(d.$,{vizName:"ViolinBasic",VizComponent:p.N,maxWidth:600,height:400})]}),(0,n.jsx)(x.Z,{chartId:"violin"}),(0,n.jsxs)(l.U,{title:"Variation: violin to boxplot transition",startOpen:!0,children:[(0,n.jsxs)("p",{children:["The react graph gallery has a"," ",(0,n.jsx)(u.default,{href:"/shape-morphism-for-dataviz-with-react",children:"dedicated blog post"})," ","on shape morphism that showcases a boxplot to violin plot transition. Here is the final result, but you should probably read it to understand how it works!"]}),(0,n.jsx)("br",{}),(0,n.jsx)(d.$,{vizName:"BoxplotToViolinTransition",VizComponent:b.L,maxWidth:600,height:300,caption:"How to smoothly transition between a boxplot and a violin plot. Math by d3.js, rendering using react, animation using react-spring and interpolation using flubber."})]}),(0,n.jsx)(l.U,{title:"Variation: violin plot with jitter",startOpen:!1,children:(0,n.jsx)("p",{children:"Oh no! This chart isn't available yet!"})}),(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),(0,n.jsx)("div",{className:"full-bleed border-t h-0 bg-gray-100 my-3"}),(0,n.jsx)(o.Z,{chartFamily:"distribution"}),(0,n.jsx)("div",{className:"mt-20"}),(0,n.jsx)(r.Z,{})]})}}},function(e){e.O(0,[3888,5660,7524,5334,358,5443,7399,5657,9774,2888,179],(function(){return t=338,e(e.s=t);var t}));var t=e.O();_N_E=t}]);