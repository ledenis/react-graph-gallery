(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5599],{4725:function(t,e,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/all",function(){return i(2238)}])},7262:function(t,e,i){"use strict";i.d(e,{Z:function(){return m}});var a=i(5893);i(7294);var r=i(5887),o=i(8843),l=i(1664),n=i.n(l);let s=o.c.filter(t=>"general"===t.family).map(t=>t.logo);function c(t){let{chartLogo:e,caption:i,link:o,isAvailable:l,size:c}=t,d=s.includes(e),h=l?"opacity-100":"opacity-20";return(0,a.jsx)(n(),{href:l?o:"subscribe",className:"no-underline",children:(0,a.jsxs)("div",{className:"flex flex-col items-center",children:[(0,a.jsxs)("div",{style:{width:c,height:c},className:"relative mr-2 rounded-full "+h+" "+(l?"cursor-pointer":"cursor-not-allowed"),children:[(0,a.jsx)("div",{className:"absolute",children:(0,a.jsx)(r.Z,{chartLogo:e,size:c})}),d?(0,a.jsx)("div",{className:"absolute opacity-0 hover:opacity-60 flex items-center justify-center w-full h-full z-30",children:(0,a.jsx)(p,{size:c})}):(0,a.jsx)("div",{style:{backgroundColor:"var(--react-gallery)"},className:"opacity-0 hover:opacity-60 flex items-center justify-center w-full h-full rounded-full  z-30",children:(0,a.jsx)("span",{className:"text-white text-4xl",children:"+"})})]}),(0,a.jsx)("p",{className:"font-light text-sm text-gray-600 "+h,children:i})]})})}let p=t=>{let{size:e}=t;return(0,a.jsx)("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:e,height:e,viewBox:"0 0 100 100",className:"fill-current text-purple-800",children:(0,a.jsx)("path",{d:"M50,0 L100,20 L100,80 L50,100 L0,80 L0,20 Z"})})};var d=i(4588);let h={distribution:"Distribution",correlation:"Correlation",ranking:"Ranking",partOfAWhole:"Part Of A Whole",evolution:"Evolution",map:"Map",flow:"Flow",general:"General Knowledge"};function m(t){let{chartFamily:e}=t,i=o.c.filter(t=>t.family===e).map((t,e)=>{let i=(0,d.y)(t.reactURL);return(0,a.jsx)("div",{className:"flex flex-col items-center justify-center",children:(0,a.jsx)(c,{link:i,chartLogo:t.logo,caption:t.label,isAvailable:t.isAvailable,size:129})},e)});return(0,a.jsxs)("div",{children:[(0,a.jsx)("p",{className:e+"  mt-4 text-md border-b mb-2 border-gray-100 tracking-wider",children:null==h?void 0:h[e]}),(0,a.jsx)("div",{className:"flex flex-row justify-start flex-wrap",children:i})]})}},153:function(t,e,i){"use strict";i.d(e,{A:function(){return h}});var a=i(5893),r=i(9700),o=i(3476),l=i(7294),n=i(3084),s=i.n(n);function c(){let[t,e]=(0,l.useState)([]),[i,r]=(0,l.useState)(0);return(0,l.useEffect)(()=>{let t=Array.from(document.querySelectorAll("h2"));e(t)},[]),(0,l.useEffect)(()=>{let e=()=>{let e=t.map(t=>t.offsetTop-t.scrollTop+t.clientTop),i=window.scrollY+150,a=e.reduce((t,e)=>Math.abs(e-i)<Math.abs(t-i)?e:t,0),o=e.findIndex(t=>t===a);r(-1===o?0:o)};return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)},[t]),(0,a.jsx)("div",{className:s().tableOfContent,children:t.map((e,r)=>(0,a.jsx)("p",{className:i===r?"".concat(s().tocItem," ").concat(s().tocItemActive):s().tocItem,onClick:e=>{e.preventDefault(),t[r].scrollIntoView({behavior:"smooth",block:"start",alignToTop:!0})},children:e.id.charAt(0).toUpperCase()+e.id.slice(1)},e.id))})}var p=i(7414),d=i(2594);let h=t=>{let{children:e,title:i,seoDescription:l}=t;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(p.A,{title:i,seoDescription:l}),(0,a.jsx)("div",{className:"wrapper",children:(0,a.jsx)(r.Z,{})}),(0,a.jsx)("div",{className:"wrapper",children:e}),(0,a.jsx)(d.Z,{}),(0,a.jsx)("div",{className:"wrapper",children:(0,a.jsx)(o.Z,{})}),(0,a.jsx)(c,{})]})}},6438:function(t,e,i){"use strict";i.d(e,{J:function(){return l}});var a=i(5893),r=i(1664),o=i.n(r);let l=t=>{let{children:e,href:i,isFilled:r,size:l="md",isFaded:n}=t,s=i.startsWith("www")||i.startsWith("http"),c="font-normal rounded mr-1 cursor-pointer border-reactGallery border ";r?c+=" bg-reactGallery hover:bg-reactGallery text-white ":c+=" bg-white hover:bg-reactGallery hover:text-white text-reactGallery ","sm"===l&&(c+="text-sm py-1 px-2 "),"md"===l&&(c+="text-md py-2 px-4 "),n&&(c+="opacity-60");let p=(0,a.jsx)("span",{className:c,children:e});return s?(0,a.jsx)("a",{href:i,target:"_blank",children:p}):(0,a.jsx)(o(),{href:i,passHref:!0,children:p})}},9965:function(t,e,i){"use strict";i.d(e,{Z:function(){return h}});var a=i(5893);i(7294);var r=i(8843),o=i(4588),l=i(1859),n=i(6438),s=i(1832),c=i.n(s);let p=t=>{let{direction:e,text:i,children:r}=t;return(0,a.jsx)("span",{className:c().tooltip+" "+c()[e],id:i,children:r})};var d=i(5887);function h(t){let{title:e,description:i,chartType:s,showSectionLink:c=!1,showInspirationLink:h=!0,showD3GalleryLink:m=!0}=t,g=r.c.find(t=>t.id===s);return g?(0,a.jsxs)("div",{className:"w-full pt-1 sm:pt-28 pb-20 ",children:[(0,a.jsxs)("div",{className:"flex justify-start items-center",children:[(0,a.jsx)("h1",{children:e}),(0,a.jsx)("div",{className:"w-20 ml-4",children:(0,a.jsx)(d.Z,{chartLogo:null==g?void 0:g.logo})})]}),(0,a.jsx)(l.r,{}),(0,a.jsx)("div",{className:"max-w-xxl  py-2",children:i}),s&&(0,a.jsx)("span",{className:"text-gray-400 text-sm font-light",children:"Useful links"}),s&&(0,a.jsxs)("div",{className:"flex flex-row flex-wrap",children:[c&&(0,a.jsx)(p,{text:"visit related section in the gallery",direction:"bottom",children:(0,a.jsx)(n.J,{href:(0,o.y)(g.reactURL),size:"sm",children:g.label+" section"})}),h&&(0,a.jsx)(p,{text:"Hundreds of stunning dataviz projects to gather inspiration",direction:"bottom",children:(0,a.jsx)(n.J,{href:"https://www.dataviz-inspiration.com/"+g.id,size:"sm",children:"inspiration"})}),m&&(0,a.jsx)(p,{text:"Pure d3 implementation, no React",direction:"bottom",children:(0,a.jsx)(n.J,{href:g.d3URL,size:"sm",children:"d3 gallery"})}),(0,a.jsx)(p,{text:"Dataviz theory about this chart",direction:"bottom",children:(0,a.jsx)(n.J,{href:g.dataToVizURL,isFilled:!0,size:"sm",children:"About this chart"})})]})]}):null}},9975:function(t,e,i){"use strict";i.d(e,{X:function(){return l}});var a=i(5893),r=i(6395),o=i.n(r);let l=t=>{let{img:e,title:i,description:r,link:l,alt:n}=t;return(0,a.jsxs)("figure",{className:o().container,children:[(0,a.jsx)("img",{src:"/chart/"+e,className:o().image,alt:n}),(0,a.jsxs)("figcaption",{children:[(0,a.jsx)("p",{className:o().title,children:(0,a.jsx)("b",{children:i})}),(0,a.jsx)("div",{className:"font-light",children:r}),(0,a.jsx)("a",{href:l})]})]})}},9942:function(t,e,i){"use strict";i.d(e,{E:function(){return r}});var a=i(5893);i(7294);let r=t=>{let{children:e}=t;return(0,a.jsx)("div",{className:"grid grid-cols-2 sm:grid-cols-3 gap-4",children:e})}},2238:function(t,e,i){"use strict";i.r(e),i.d(e,{default:function(){return m}});var a=i(5893);i(7294);var r=i(153),o=i(9965),l=i(7262),n=i(9942),s=i(9975),c=i(2050),p=i(1664),d=i.n(p);let h=(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("p",{children:["The ",(0,a.jsx)(d(),{href:"/",children:"react graph gallery"})," displays hundreds of graphs made with React, often with the help of"," ",(0,a.jsx)("a",{href:"https://www.d3-grapg-gallery.com",children:"d3.js"}),". This page provides an overview of all charts showcased in this gallery."]}),(0,a.jsxs)("p",{children:["Note that all chart types are presented on the"," ",(0,a.jsx)(d(),{href:"/",children:"welcome page"})," of the gallery. It is probably a more convenient way to browse this website if you know what you are looking for!"]})]});function m(){let t=c.F.map((t,e)=>(0,a.jsx)(s.X,{link:t.link,title:t.title,description:(0,a.jsx)("p",{children:t.description}),img:t.img,alt:t.alt},e));return(0,a.jsxs)(r.A,{title:"All graphs",seoDescription:"An overview of all the charts displayed in the react graph gallery, ready to be added in your web application.",children:[(0,a.jsx)(o.Z,{title:"All graphs",description:h,chartType:"all"}),(0,a.jsx)(n.E,{children:t}),(0,a.jsx)("div",{className:"full-bleed border-t h-0 bg-gray-100 mb-3 mt-24"}),(0,a.jsx)(l.Z,{chartFamily:"correlation"}),(0,a.jsx)("div",{className:"mt-20"})]})}},2050:function(t,e,i){"use strict";i.d(e,{F:function(){return a}});let a=[{link:"/scatter-plot#scales%20and%20axes",title:"Scales and axes",description:"How to map your data in a 2d space, and how to draw the axes",img:"axis-basic-demo.png",alt:"Picture of an empty chart area with X and Y axes"},{link:"/scatterplot",title:"Scatterplot Hover effect",description:"How to add a hover effect to highlight a group on a scatterplot",img:"scatterplotHoverEffect.gif",alt:"GIF of a scatterplot with hover effect"},{link:"/scatter-plot#circles",title:"Basic scatter plot",description:"Add circles to get a basic scatter plot",img:"scatterplot-most-basic.png",alt:"Most basic scatterplot made with react and d3"},{link:"/scatter-plot#tooltip",title:"Add tooltip",description:"Get more details about each datapoint by adding a tooltip on hover",img:"scatterplot-tooltip.png",alt:"Scatterplot with tooltip made with react and d3"},{link:"/scatter-plot#hover%20effect",title:"Add a hover effect",description:"Highlight a specific group on hover",img:"scatterplot-hover-effect.png",alt:"Scatterplot with hover effect made with react and d3"},{link:"/scatter-plot#real%20life",title:"Real life use-case",description:"Reproduction of a data wrapper chart representing countries CO2 data",img:"scatterplot-co2.png",alt:"Real life example of a scatterplot made with react and d3"},{link:"/heatmap",title:"Basic heatmap",description:"Most basic heatmap",img:"heatmapBasic.png",alt:"Picture of a simple heatmap made with react and d3.js"},{link:"/heatmap#tooltip",title:"Heatmap with tooltip",description:"Learn how to add a tooltip to a heatmap with react",img:"heatmapTooltip.png",alt:"Picture of a heatmap with a tooltip that appears on hover"},{link:"/heatmap#legend",title:"Continuous color scale",description:"How to add a color legend to your chart that uses a continuous color scale",img:"continuousColorLegend.png",alt:"Picture of a continuous color scale built with d3.js"},{link:"/heatmap#application",title:"Vaccination heatmap",description:"Reproduction of a famous vaccination heatmap using d3 and react",img:"heatmapVaccination.png",alt:"Picture of a heatmap showing the effect of vaccination, built with react and d3"},{link:"/correlogram",title:"Basic correlogram",description:"Learn how to build a correlogram with react and d3",img:"correlogramBasic.png",alt:"Picture of a correlogram built with react and d3"},{link:"/bubble-plot",title:"Bubble plot",description:"Learn how to build a bubble plot with react and d3.js",img:"bubble-plot-with-legend.png",alt:"Picture of a simple bubble plot with a legend made with react and d3.js"},{link:"/bubble-plot#transition",title:"Bubble plot data set transition",description:"How to smoothly animate the transition between dataset",img:"bubble-plot-dataset-transition.gif",alt:"GIF of a bubble plot smoothly transitioning data"},{link:"/2d-density-plot",title:"Hexbin chart",description:"A hexbin chart split the figure in hexagons to show a 2d density",img:"2d-density-plot.png",alt:"Picture of a hexbin chart made with React and d3.js"},{link:"/connected-scatter-plot",title:"Simple connected scatterplot",description:"A very simple connected scatter plot showing the evolution of 1 numeric variable",img:"connected-scatterplot-basic.png",alt:"Picture of a connected scatter plot made with React and d3.js"},{link:"/example/boxplot-jitter",title:"Boxplot with jitter",description:"Add individual data points using jitter on top of the boxplot",img:"boxplot-jitter.png",alt:"Picture of a boxplot with jitter built using react and d3.js"},{link:"/boxplot#box%20component",title:"Boxplot shape",description:"How to build a boxplot shape in SVG",img:"boxplotShape.png",alt:"Picture of a box component, allowing to build a boxplot later on"},{link:"/boxplot",title:"Basic boxplot",description:"How to build a basic boxplot with react",img:"boxplotBasic.png",alt:"Picture of a basic boxplot built with react and d3"},{link:"/histogram",title:"Histogram",description:"Learn how to build a histogram with react and d3.js",img:"histogram-basic.png",alt:"Picture of a simple histogram made with react and d3.js"},{link:"/histogram#transition",title:"Histogram dataset transition",description:"How to animate the transition between datasets",img:"histogram-dataset-transition.gif",alt:"GIF of a histogram with animated data transition"},{link:"/example/histogram-mirror",title:"Mirror histogram",description:"Create a mirror histogram to compare the distribution of 2 groups in a dataset",img:"histogram-mirror.png",alt:"picture of a mirror histogram made with react and d3.js"},{link:"/example/histogram-small-multiple",title:"Small multiple",description:"Create one panel per group to show its distribution separately",img:"histogram-small-multiple.png",alt:"Picture of a histogram with small multiple built with react and d3.js"},{link:"/example/histogram-with-several-groups",title:"Multiple groups",description:"A histogram with <b>multiple</b> groups displayed on the same axis.",img:"histogram-with-several-groups.png",alt:"Picture of a histogram with multiple groups built with react and d3.js"},{link:"/violin-plot",title:"Violin to Boxplot transition",description:"Using shape morphism to smoothly transition from a boxplot to a violin and reverse",img:"violinBoxplotTransition.png",alt:"gif of a violin plot smoothly transitioning to a boxplot using shape morphism"},{link:"/violin-plot#bucket%20size",title:"Bucket size effect",description:"Interactive example showing the bucket size effect on a violin chart",img:"violin-bucket-size-effect.gif",alt:"GIF showing a violin plot with varying bucket size"},{link:"/violin-plot#violin%20component",title:"Violin shape",description:"How to build the shape of a violin with SVG",img:"violinShape.png",alt:"Picture of a violin shape built with react and d3"},{link:"/violin-plot",title:"Boxplot to Violin plot",description:"Interactive example showing the difference between a boxplot and a violin",img:"boxplot-violin-transition.gif",alt:"GIF showing a mirror transition between a boxplot and a violin plot"},{link:"/violin-plot",title:"Basic violin plot",description:"Learn how to build a basic violin chart with d3 and react",img:"violinBasic.png",alt:"Picture of a basic violin chart built in react"},{link:"/violin-plot#bucket%20size",title:"Violin with variable bucket size",description:"A violin plot with a slider to change the bucket size in use",img:"violinBucketSize.png",alt:"Picture of a violin plot with variable bucket size"},{link:"/barplot",title:"Basic barplot",description:"Most basic barplot built with React and d3",img:"barplot-basic.png",alt:"Picture of a horizontal barplot made with React and d3"},{link:"/example/barplot-data-transition-animation",title:"Barplot dataset transition",description:"How to smoothly animate the transition between dataset",img:"barplotDatasetAnimation.gif",alt:"GIF of a data update on a React barplot"},{link:"/example/barplot-stacked-horizontal",title:"Horizontal Stacked Barplot",description:"Represent group and subgroup values by stacking the data",img:"barplot-stacked-horizontal.png",alt:"Picture of a stacked barchart made with react and d3"},{link:"/example/barplot-stacked-vertical",title:"Vertical Stacked Barplot",description:"Represent group and subgroup values by stacking the data",img:"barplot-stacked-vertical.png",alt:"Picture of a vertical stacked barchart made with react and d3"},{link:"/density-plot",title:"Basic density plot",description:"Most basic density plot built with React and d3",img:"densityBasic.png",alt:"Picture of a basic density plot built with React and d3"},{link:"/density-plot#variations",title:"Density plot with multiple groups",description:"How to add several groups on the same density plot",img:"densityMultipleGroups.png",alt:"Picture of a density plot with multiple groups"},{link:"/ridgeline",title:"Basic ridgeline chart",description:"Most basic version of a ridgeline plot",img:"ridgelineBasic.png",alt:"Picture of a basic ridgeline chart built with react and d3"},{link:"/line-chart#basic",title:"Most basic line chart",description:"The most basic line chart one can make using d3 and react",img:"line-chart-basic.png",alt:"Picture of a very simple line chart made with react and d3"},{link:"/line-chart#transition",title:"Line chart with dataset transition",description:"How to smoothly animate the transition between 2 dataset on a line chart",img:"line-chart-data-transition.gif",alt:"GIF of a line chart that animates between 2 dataset"},{link:"/area-plot",title:"Basic Area Chart",description:"Most basic version of an area chart made with react and d3.js",img:"area-chart-basic.png",alt:"Picture of a basic area chart made with React and D3"},{link:"/stacked-area-plot",title:"Basis stacked area chart",description:"Most basic version of a stacked area chart. Explains how to use the stack() function of d3.js",img:"stacked-area-plot-basic.png",alt:"picture of a basic stacked area plot made with react"},{link:"/streamchart",title:"Basic Streamgraph",description:"Most basic streamgraph one can build using d3 and react",img:"streamgraph-basic.png",alt:"Picture of a basic streamgraph made using Reacrt and d3.js"},{link:"/streamchart#hover&effect",title:"Streamgraph with hover effect",description:"How to add a hover effect on a streamgraph to highlight a group",img:"streamgraph-hover-effect.gif",alt:"GIF of a streamgraph react component that supports hover effect"},{link:"/streamchart#transition",title:"Offset and Smoothing transition",description:"An interactive streamgraph example showing how to animate transition between the chart stacking features.",img:"streamgraph-offset-type-transition.gif",alt:"GIF of a streamgraph"},{link:"/streamchart#application",title:"Streamgraph application",description:"Streamgraph with a slider to zoom on a time stamp and with interactive inline legends",img:"streamgraph-application.gif",alt:"GIF of a streamgraph with multiple interactive features"},{link:"/circular-packing",title:"Most basic circular packing chart",description:"The most basic circular packing chart one can make using d3.js and React.",img:"circle-pack-basic.png",alt:"Picture of a very basic circle packing chart"},{link:"/circular-packing",title:"Circular packing: 2 levels of hierarchy",description:"A simple circular packing chart with 2 levels of hierarchy built with React and d3.",img:"circle-pack-2-levels.png",alt:"Picture of a very basic circle packing chart with 2 levels of hierarchy"},{link:"/example/circle-packing-with-d3-force",title:"Circle Pack with d3-force",description:"Another approach to build a circle packing chart using physical forces to compute node positions.",img:"circle-pack-d3-force.png",alt:"Picture of a circle packing chart made using the d3-force plugin"},{link:"/example/arc-diagram-vertical",title:"Vertical arc diagram",description:"The vertical version of the arc diagram is more convenient to display labels",img:"vertical-arc-diagram.png",alt:"Picture of a vertical arc diagram"},{link:"/network-chart#rendering",title:"Most basic network chart",description:"Most basic network chart using the d3-force plugin to apply physical forces.",img:"network-chart-basic.png",alt:"Picture of a very simple network chart built with React and D3.js."},{link:"/network-chart#rendering",title:"Play with forces",description:"A playground to discover the effect of the various forces you can apply to your particles",img:"network-chart-force-playground.png",alt:"Picture of a playground allowing to play with the various d3 forces"},{link:"/example/network-diagram-with-colored-groups",title:"Force directed graph",description:"A force directed network chart showing character co-occurence in les miserables",img:"network-les-miserables.png",alt:"Picture of a force directed network chart showing character co-occurence in les miserables"}]},6395:function(t){t.exports={container:"graphLinkImage_container__vhwty",title:"graphLinkImage_title__zwMK0"}},1832:function(t){t.exports={tooltip:"tooltip_tooltip__b_kg5",right:"tooltip_right__zvLDU",left:"tooltip_left__mQ0Xf",bottom:"tooltip_bottom__MVFNa",top:"tooltip_top__kPfp4"}},3084:function(t){t.exports={tableOfContent:"table-of-content_tableOfContent__jj0Ai",tocItem:"table-of-content_tocItem__osS9X",tocItemActive:"table-of-content_tocItemActive__CGMTh"}}},function(t){t.O(0,[3996,645,9774,2888,179],function(){return t(t.s=4725)}),_N_E=t.O()}]);