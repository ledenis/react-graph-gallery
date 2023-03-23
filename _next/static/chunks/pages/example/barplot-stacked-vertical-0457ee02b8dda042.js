(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3959],{1072:function(t,i,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/example/barplot-stacked-vertical",function(){return a(6934)}])},2450:function(t,i,a){"use strict";a.d(i,{Z:function(){return r}});var e=a(5893);a(7294);var o=a(2050),l=a(9975),n=a(9942);function r(t){let{images:i}=t,a=o.F.filter(t=>i.includes(t.img)).map((t,i)=>(0,e.jsx)(l.X,{link:t.link,title:t.title,description:(0,e.jsx)("p",{children:t.description}),img:t.img,alt:t.alt},i));return(0,e.jsx)(n.E,{children:a})}},9975:function(t,i,a){"use strict";a.d(i,{X:function(){return n}});var e=a(5893),o=a(6395),l=a.n(o);let n=t=>{let{img:i,title:a,description:o,link:n,alt:r}=t;return(0,e.jsxs)("figure",{className:l().container,children:[(0,e.jsx)("img",{src:"/chart/"+i,className:l().image,alt:r}),(0,e.jsxs)("figcaption",{children:[(0,e.jsx)("p",{className:l().title,children:(0,e.jsx)("b",{children:a})}),(0,e.jsx)("div",{className:"font-light",children:o}),(0,e.jsx)("a",{href:n})]})]})}},9942:function(t,i,a){"use strict";a.d(i,{E:function(){return o}});var e=a(5893);a(7294);let o=t=>{let{children:i}=t;return(0,e.jsx)("div",{className:"grid grid-cols-2 sm:grid-cols-3 gap-4",children:i})}},6934:function(t,i,a){"use strict";a.r(i),a.d(i,{default:function(){return u}});var e=a(5893);a(7294);var o=a(153),l=a(9965),n=a(7262),r=a(1122),s=a(1664),c=a.n(s),p=a(2450),d=a(7563);let h=(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)("p",{children:["This tutorial is a variation around the general"," ",(0,e.jsx)(c(),{href:"/barplot",children:"introduction to barplot with react"})," and d3.js. You should probably understand the concepts described there before digging into ",(0,e.jsx)("b",{children:"stacking"}),"."]}),(0,e.jsxs)("p",{children:["This example shows how to represent ",(0,e.jsx)("b",{children:"2 levels of grouping"})," in a barplot, resulting in a"," ",(0,e.jsx)("a",{href:"https://www.data-to-viz.com/graph/barplot.html",children:"stacked barplot"}),". The items of the dataset are divided in ",(0,e.jsx)("b",{children:"groups"})," (reprented as bars) and ",(0,e.jsx)("b",{children:"subgroups"})," (represented as sections in each bar)."]}),(0,e.jsx)("p",{children:"A code sandbox is provided for the final result, but explanations target what's different compared to an usual barplot."})]});function u(){return(0,e.jsxs)(o.A,{title:"Vertical stacked barplot.",seoDescription:"A step-by-step guide to build a vertical stacked barplot with React and d3.js. Comes with explanation, code sandboxes, and ready-to-use templates.",children:[(0,e.jsx)(l.Z,{title:(0,e.jsx)("h1",{children:"Vertical Stacked Barplot"}),description:h,chartType:"barplot"}),(0,e.jsx)("h2",{id:"plot",children:"Plot and code"}),(0,e.jsxs)("p",{children:["This is a ",(0,e.jsx)("b",{children:"vertical stacked barplot"})," built using React and d3.js. It is very similar to the horizontal version. So very little explanation is provided here. Enjoy the sandbox!"]}),(0,e.jsx)(r.$,{vizName:"BarplotStackedBasic",VizComponent:d.x,height:400,maxWidth:600,caption:"Most basic barplot built with d3.js for scales, and react for rendering"}),(0,e.jsx)("h2",{id:"variation",children:"Variation"}),(0,e.jsx)("p",{children:"Check those other barplot and stacked barplot that can interest you:"}),(0,e.jsx)(p.Z,{images:["barplot-basic.png","barplotDatasetAnimation.gif","barplot-stacked-horizontal.png"]}),(0,e.jsx)("div",{className:"full-bleed border-t h-0 bg-gray-100 mb-3 mt-24"}),(0,e.jsx)(n.Z,{chartFamily:"ranking"}),(0,e.jsx)("div",{className:"mt-20"})]})}},2050:function(t,i,a){"use strict";a.d(i,{F:function(){return e}});let e=[{link:"/scatter-plot#scales%20and%20axes",title:"Scales and axes",description:"How to map your data in a 2d space, and how to draw the axes",img:"axis-basic-demo.png",alt:"Picture of an empty chart area with X and Y axes"},{link:"/scatter-plot#circles",title:"Basic scatter plot",description:"Add circles to get a basic scatter plot",img:"scatterplot-most-basic.png",alt:"Most basic scatterplot made with react and d3"},{link:"/scatter-plot#tooltip",title:"Add tooltip",description:"Get more details about each datapoint by adding a tooltip on hover",img:"scatterplot-tooltip.png",alt:"Scatterplot with tooltip made with react and d3"},{link:"/scatter-plot#hover%20effect",title:"Add a hover effect",description:"Highlight a specific group on hover",img:"scatterplot-hover-effect.png",alt:"Scatterplot with hover effect made with react and d3"},{link:"/scatter-plot#real%20life",title:"Real life use-case",description:"Reproduction of a data wrapper chart representing countries CO2 data",img:"scatterplot-co2.png",alt:"Real life example of a scatterplot made with react and d3"},{link:"/example/boxplot-jitter",title:"Boxplot with jitter",description:"Add individual data points using jitter on top of the boxplot",img:"boxplot-jitter.png",alt:"Picture of a boxplot with jitter built using react and d3.js"},{link:"/bubble-plot",title:"Bubble plot",description:"Learn how to build a bubble plot with react and d3.js",img:"bubble-plot-with-legend.png",alt:"Picture of a simple bubble plot with a legend made with react and d3.js"},{link:"/histogram",title:"Histogram",description:"Learn how to build a histogram with react and d3.js",img:"histogram-basic.png",alt:"Picture of a simple histogram made with react and d3.js"},{link:"/histogram#transition",title:"Histogram dataset transition",description:"How to animate the transition between datasets",img:"histogram-dataset-transition.gif",alt:"GIF of a histogram with animated data transition"},{link:"/violin-plot",title:"Violin to Boxplot transition",description:"Using shape morphism to smoothly transition from a boxplot to a violin and reverse",img:"violinBoxplotTransition.png",alt:"gif of a violin plot smoothly transitioning to a boxplot using shape morphism"},{link:"/heatmap",title:"Basic heatmap",description:"Most basic heatmap",img:"heatmapBasic.png",alt:"Picture of a simple heatmap made with react and d3.js"},{link:"/heatmap#tooltip",title:"Heatmap with tooltip",description:"Learn how to add a tooltip to a heatmap with react",img:"heatmapTooltip.png",alt:"Picture of a heatmap with a tooltip that appears on hover"},{link:"/heatmap#legend",title:"Continuous color scale",description:"How to add a color legend to your chart that uses a continuous color scale",img:"continuousColorLegend.png",alt:"Picture of a continuous color scale built with d3.js"},{link:"/heatmap#application",title:"Vaccination heatmap",description:"Reproduction of a famous vaccination heatmap using d3 and react",img:"heatmapVaccination.png",alt:"Picture of a heatmap showing the effect of vaccination, built with react and d3"},{link:"/violin-plot#bucket%20size",title:"Bucket size effect",description:"Interactive example showing the bucket size effect on a violin chart",img:"violin-bucket-size-effect.gif",alt:"GIF showing a violin plot with varying bucket size"},{link:"/correlogram",title:"Basic correlogram",description:"Learn how to build a correlogram with react and d3",img:"correlogramBasic.png",alt:"Picture of a correlogram built with react and d3"},{link:"/violin-plot#violin%20component",title:"Violin shape",description:"How to build the shape of a violin with SVG",img:"violinShape.png",alt:"Picture of a violin shape built with react and d3"},{link:"/violin-plot",title:"Boxplot to Violin plot",description:"Interactive example showing the difference between a boxplot and a violin",img:"boxplot-violin-transition.gif",alt:"GIF showing a mirror transition between a boxplot and a violin plot"},{link:"/barplot",title:"Basic barplot",description:"Most basic barplot built with React and d3",img:"barplot-basic.png",alt:"Picture of a horizontal barplot made with React and d3"},{link:"/violin-plot",title:"Basic violin plot",description:"Learn how to build a basic violin chart with d3 and react",img:"violinBasic.png",alt:"Picture of a basic violin chart built in react"},{link:"/violin-plot#bucket%20size",title:"Violin with variable bucket size",description:"A violin plot with a slider to change the bucket size in use",img:"violinBucketSize.png",alt:"Picture of a violin plot with variable bucket size"},{link:"/boxplot#box%20component",title:"Boxplot shape",description:"How to build a boxplot shape in SVG",img:"boxplotShape.png",alt:"Picture of a box component, allowing to build a boxplot later on"},{link:"/boxplot",title:"Basic boxplot",description:"How to build a basic boxplot with react",img:"boxplotBasic.png",alt:"Picture of a basic boxplot built with react and d3"},{link:"/example/histogram-small-multiple",title:"Small multiple",description:"Create one panel per group to show its distribution separately",img:"histogram-small-multiple.png",alt:"Picture of a histogram with small multiple built with react and d3.js"},{link:"/example/histogram-with-several-groups",title:"Multiple groups",description:"A histogram with <b>multiple</b> groups displayed on the same axis.",img:"histogram-with-several-groups.png",alt:"Picture of a histogram with multiple groups built with react and d3.js"},{link:"/density-plot",title:"Basic density plot",description:"Most basic density plot built with React and d3",img:"densityBasic.png",alt:"Picture of a basic density plot built with React and d3"},{link:"/density-plot#variations",title:"Density plot with multiple groups",description:"How to add several groups on the same density plot",img:"densityMultipleGroups.png",alt:"Picture of a density plot with multiple groups"},{link:"/ridgeline",title:"Basic ridgeline chart",description:"Most basic version of a ridgeline plot",img:"ridgelineBasic.png",alt:"Picture of a basic ridgeline chart built with react and d3"},{link:"/example/barplot-data-transition-animation",title:"Barplot dataset transition",description:"How to smoothly animate the transition between dataset",img:"barplotDatasetAnimation.gif",alt:"GIF of a data update on a React barplot"},{link:"/scatterplot",title:"Scatterplot Hover effect",description:"How to add a hover effect to highlight a group on a scatterplot",img:"scatterplotHoverEffect.gif",alt:"GIF of a scatterplot with hover effect"},{link:"/bubble-plot#transition",title:"Bubble plot data set transition",description:"How to smoothly animate the transition between dataset",img:"bubble-plot-dataset-transition.gif",alt:"GIF of a bubble plot smoothly transitioning data"},{link:"/example/barplot-stacked-horizontal",title:"Horizontal Stacked Barplot",description:"Represent group and subgroup values by stacking the data",img:"barplot-stacked-horizontal.png",alt:"Picture of a stacked barchart made with react and d3"},{link:"/example/barplot-stacked-vertical",title:"Vertical Stacked Barplot",description:"Represent group and subgroup values by stacking the data",img:"barplot-stacked-vertical.png",alt:"Picture of a vertical stacked barchart made with react and d3"}]},6395:function(t){t.exports={container:"graphLinkImage_container__6vbL1",title:"graphLinkImage_title__86b4Y"}}},function(t){t.O(0,[3996,5250,645,7371,9774,2888,179],function(){return t(t.s=1072)}),_N_E=t.O()}]);