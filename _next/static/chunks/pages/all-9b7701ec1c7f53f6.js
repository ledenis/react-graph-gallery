(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5599],{4725:function(t,e,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/all",function(){return i(2238)}])},7262:function(t,e,i){"use strict";i.d(e,{Z:function(){return m}});var a=i(5893);i(7294);var o=i(5887),l=i(8843),r=i(1664),n=i.n(r);let s=l.c.filter(t=>"general"===t.family).map(t=>t.logo);function c(t){let{chartLogo:e,caption:i,link:l,isAvailable:r,size:c}=t,d=s.includes(e),h=r?"opacity-100":"opacity-20";return(0,a.jsx)(n(),{href:r?l:"subscribe",className:"no-underline",children:(0,a.jsxs)("div",{className:"flex flex-col items-center",children:[(0,a.jsxs)("div",{style:{width:c,height:c},className:"relative mr-2 rounded-full "+h+" "+(r?"cursor-pointer":"cursor-not-allowed"),children:[(0,a.jsx)("div",{className:"absolute",children:(0,a.jsx)(o.Z,{chartLogo:e})}),d?(0,a.jsx)("div",{className:"absolute opacity-0 hover:opacity-60 flex items-center justify-center w-full h-full z-30",children:(0,a.jsx)(p,{size:c})}):(0,a.jsx)("div",{style:{backgroundColor:"var(--react-gallery)"},className:"opacity-0 hover:opacity-60 flex items-center justify-center w-full h-full rounded-full  z-30",children:(0,a.jsx)("span",{className:"text-white text-4xl",children:"+"})})]}),(0,a.jsx)("p",{className:"font-light text-sm text-gray-600 "+h,children:i})]})})}let p=t=>{let{size:e}=t;return(0,a.jsx)("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:e,height:e,viewBox:"0 0 100 100",className:"fill-current text-purple-800",children:(0,a.jsx)("path",{d:"M50,0 L100,20 L100,80 L50,100 L0,80 L0,20 Z"})})};var d=i(4588);let h={distribution:"Distribution",correlation:"Correlation",ranking:"Ranking",partOfAWhole:"Part Of A Whole",evolution:"Evolution",map:"Map",flow:"Flow",general:"General Knowledge"};function m(t){let{chartFamily:e}=t,i=l.c.filter(t=>t.family===e).map((t,e)=>{let i=(0,d.y)(t.reactURL);return(0,a.jsx)("div",{className:"flex flex-col items-center justify-center",children:(0,a.jsx)(c,{link:i,chartLogo:t.logo,caption:t.label,isAvailable:t.isAvailable,size:129})},e)});return(0,a.jsxs)("div",{children:[(0,a.jsx)("p",{className:e+"  mt-4 text-md border-b mb-2 border-gray-100 tracking-wider",children:null==h?void 0:h[e]}),(0,a.jsx)("div",{className:"flex flex-row justify-start flex-wrap",children:i})]})}},153:function(t,e,i){"use strict";i.d(e,{A:function(){return h}});var a=i(5893),o=i(9700),l=i(3476),r=i(7294),n=i(3084),s=i.n(n);function c(){let[t,e]=(0,r.useState)([]),[i,o]=(0,r.useState)(0);return(0,r.useEffect)(()=>{let t=Array.from(document.querySelectorAll("h2"));e(t)},[]),(0,r.useEffect)(()=>{let e=()=>{let e=t.map(t=>t.offsetTop-t.scrollTop+t.clientTop),i=window.scrollY+150,a=e.reduce((t,e)=>Math.abs(e-i)<Math.abs(t-i)?e:t,0),l=e.findIndex(t=>t===a);o(-1===l?0:l)};return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)},[t]),(0,a.jsx)("div",{className:s().tableOfContent,children:t.map((e,o)=>(0,a.jsx)("p",{className:i===o?"".concat(s().tocItem," ").concat(s().tocItemActive):s().tocItem,onClick:e=>{e.preventDefault(),t[o].scrollIntoView({behavior:"smooth",block:"start",alignToTop:!0})},children:e.id.charAt(0).toUpperCase()+e.id.slice(1)},e.id))})}var p=i(7414),d=i(2594);let h=t=>{let{children:e,title:i,seoDescription:r}=t;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(p.A,{title:i,seoDescription:r}),(0,a.jsxs)("div",{className:"wrapper",children:[(0,a.jsx)(o.Z,{}),e]}),(0,a.jsx)(d.Z,{}),(0,a.jsx)("div",{className:"wrapper",children:(0,a.jsx)(l.Z,{})}),(0,a.jsx)(c,{})]})}},6438:function(t,e,i){"use strict";i.d(e,{J:function(){return r}});var a=i(5893),o=i(1664),l=i.n(o);let r=t=>{let{children:e,href:i,isFilled:o,size:r="md",isFaded:n}=t,s=i.startsWith("www")||i.startsWith("http"),c="font-normal rounded mr-1 cursor-pointer border-reactGallery border ";o?c+=" bg-reactGallery hover:bg-reactGallery text-white ":c+=" bg-white hover:bg-reactGallery hover:text-white text-reactGallery ","sm"===r&&(c+="text-sm py-1 px-2 "),"md"===r&&(c+="text-md py-2 px-4 "),n&&(c+="opacity-60");let p=(0,a.jsx)("span",{className:c,children:e});return s?(0,a.jsx)("a",{href:i,target:"_blank",children:p}):(0,a.jsx)(l(),{href:i,passHref:!0,children:p})}},9965:function(t,e,i){"use strict";i.d(e,{Z:function(){return h}});var a=i(5893);i(7294);var o=i(8843),l=i(4588),r=i(1859),n=i(6438),s=i(1832),c=i.n(s);let p=t=>{let{direction:e,text:i,children:o}=t;return(0,a.jsx)("span",{className:c().tooltip+" "+c()[e],id:i,children:o})};var d=i(5887);function h(t){let{title:e,description:i,chartType:s,showSectionLink:c=!1,showInspirationLink:h=!0,showD3GalleryLink:m=!0}=t,u=o.c.find(t=>t.id===s);return u?(0,a.jsxs)("div",{className:"w-full pt-1 sm:pt-28 pb-20 ",children:[(0,a.jsxs)("div",{className:"flex justify-start items-center",children:[(0,a.jsx)("h1",{children:e}),(0,a.jsx)("div",{className:"w-20 ml-4",children:(0,a.jsx)(d.Z,{chartLogo:null==u?void 0:u.logo})})]}),(0,a.jsx)(r.r,{}),(0,a.jsx)("div",{className:"max-w-xxl  py-2",children:i}),s&&(0,a.jsx)("span",{className:"text-gray-400 text-sm font-light",children:"Useful links"}),s&&(0,a.jsxs)("div",{className:"flex flex-row flex-wrap",children:[c&&(0,a.jsx)(p,{text:"visit related section in the gallery",direction:"bottom",children:(0,a.jsx)(n.J,{href:(0,l.y)(u.reactURL),size:"sm",children:u.label+" section"})}),h&&(0,a.jsx)(p,{text:"Hundreds of stunning dataviz projects to gather inspiration",direction:"bottom",children:(0,a.jsx)(n.J,{href:"https://www.dataviz-inspiration.com/"+u.id,size:"sm",children:"inspiration"})}),m&&(0,a.jsx)(p,{text:"Pure d3 implementation, no React",direction:"bottom",children:(0,a.jsx)(n.J,{href:u.d3URL,size:"sm",children:"d3 gallery"})}),(0,a.jsx)(p,{text:"Dataviz theory about this chart",direction:"bottom",children:(0,a.jsx)(n.J,{href:u.dataToVizURL,isFilled:!0,size:"sm",children:"About this chart"})})]})]}):null}},9975:function(t,e,i){"use strict";i.d(e,{X:function(){return r}});var a=i(5893),o=i(6395),l=i.n(o);let r=t=>{let{img:e,title:i,description:o,link:r,alt:n}=t;return(0,a.jsxs)("figure",{className:l().container,children:[(0,a.jsx)("img",{src:"/chart/"+e,className:l().image,alt:n}),(0,a.jsxs)("figcaption",{children:[(0,a.jsx)("p",{className:l().title,children:(0,a.jsx)("b",{children:i})}),(0,a.jsx)("div",{className:"font-light",children:o}),(0,a.jsx)("a",{href:r})]})]})}},9942:function(t,e,i){"use strict";i.d(e,{E:function(){return o}});var a=i(5893);i(7294);let o=t=>{let{children:e}=t;return(0,a.jsx)("div",{className:"grid grid-cols-2 sm:grid-cols-3 gap-4",children:e})}},2238:function(t,e,i){"use strict";i.r(e),i.d(e,{default:function(){return m}});var a=i(5893);i(7294);var o=i(153),l=i(9965),r=i(7262),n=i(9942),s=i(9975),c=i(2050),p=i(1664),d=i.n(p);let h=(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("p",{children:["The ",(0,a.jsx)(d(),{href:"/",children:"react graph gallery"})," displays hundreds of graphs made with React, often with the help of"," ",(0,a.jsx)("a",{href:"https://www.d3-grapg-gallery.com",children:"d3.js"}),". This page provides an overview of all charts showcased in this gallery."]}),(0,a.jsxs)("p",{children:["Note that all chart types are presented on the"," ",(0,a.jsx)(d(),{href:"/",children:"welcome page"})," of the gallery. It is probably a more convenient way to browse this website if you know what you are looking for!"]})]});function m(){let t=c.F.map((t,e)=>(0,a.jsx)(s.X,{link:t.link,title:t.title,description:(0,a.jsx)("p",{children:t.description}),img:t.img,alt:t.alt},e));return(0,a.jsxs)(o.A,{title:"All graphs",seoDescription:"An overview of all the charts displayed in the react graph gallery, ready to be added in your web application.",children:[(0,a.jsx)(l.Z,{title:"All graphs",description:h,chartType:"all"}),(0,a.jsx)(n.E,{children:t}),(0,a.jsx)("div",{className:"full-bleed border-t h-0 bg-gray-100 mb-3 mt-24"}),(0,a.jsx)(r.Z,{chartFamily:"correlation"}),(0,a.jsx)("div",{className:"mt-20"})]})}},2050:function(t,e,i){"use strict";i.d(e,{F:function(){return a}});let a=[{link:"/scatter-plot#scales%20and%20axes",title:"Scales and axes",description:"How to map your data in a 2d space, and how to draw the axes",img:"axis-basic-demo.png",alt:"Picture of an empty chart area with X and Y axes"},{link:"/scatter-plot#circles",title:"Basic scatter plot",description:"Add circles to get a basic scatter plot",img:"scatterplot-most-basic.png",alt:"Most basic scatterplot made with react and d3"},{link:"/scatter-plot#tooltip",title:"Add tooltip",description:"Get more details about each datapoint by adding a tooltip on hover",img:"scatterplot-tooltip.png",alt:"Scatterplot with tooltip made with react and d3"},{link:"/scatter-plot#hover%20effect",title:"Add a hover effect",description:"Highlight a specific group on hover",img:"scatterplot-hover-effect.png",alt:"Scatterplot with hover effect made with react and d3"},{link:"/scatter-plot#real%20life",title:"Real life use-case",description:"Reproduction of a data wrapper chart representing countries CO2 data",img:"scatterplot-co2.png",alt:"Real life example of a scatterplot made with react and d3"},{link:"/example/boxplot-jitter",title:"Boxplot with jitter",description:"Add individual data points using jitter on top of the boxplot",img:"boxplot-jitter.png",alt:"Picture of a boxplot with jitter built using react and d3.js"},{link:"/bubble-plot",title:"Bubble plot",description:"Learn how to build a bubble plot with react and d3.js",img:"bubble-plot-with-legend.png",alt:"Picture of a simple bubble plot with a legend made with react and d3.js"},{link:"/histogram",title:"Histogram",description:"Learn how to build a histogram with react and d3.js",img:"histogram-basic.png",alt:"Picture of a simple histogram made with react and d3.js"},{link:"/histogram#transition",title:"Histogram dataset transition",description:"How to animate the transition between datasets",img:"histogram-dataset-transition.gif",alt:"GIF of a histogram with animated data transition"},{link:"/violin-plot",title:"Violin to Boxplot transition",description:"Using shape morphism to smoothly transition from a boxplot to a violin and reverse",img:"violinBoxplotTransition.png",alt:"gif of a violin plot smoothly transitioning to a boxplot using shape morphism"},{link:"/heatmap",title:"Basic heatmap",description:"Most basic heatmap",img:"heatmapBasic.png",alt:"Picture of a simple heatmap made with react and d3.js"},{link:"/heatmap#tooltip",title:"Heatmap with tooltip",description:"Learn how to add a tooltip to a heatmap with react",img:"heatmapTooltip.png",alt:"Picture of a heatmap with a tooltip that appears on hover"},{link:"/heatmap#legend",title:"Continuous color scale",description:"How to add a color legend to your chart that uses a continuous color scale",img:"continuousColorLegend.png",alt:"Picture of a continuous color scale built with d3.js"},{link:"/heatmap#application",title:"Vaccination heatmap",description:"Reproduction of a famous vaccination heatmap using d3 and react",img:"heatmapVaccination.png",alt:"Picture of a heatmap showing the effect of vaccination, built with react and d3"},{link:"/violin-plot#bucket%20size",title:"Bucket size effect",description:"Interactive example showing the bucket size effect on a violin chart",img:"violin-bucket-size-effect.gif",alt:"GIF showing a violin plot with varying bucket size"},{link:"/correlogram",title:"Basic correlogram",description:"Learn how to build a correlogram with react and d3",img:"correlogramBasic.png",alt:"Picture of a correlogram built with react and d3"},{link:"/violin-plot#violin%20component",title:"Violin shape",description:"How to build the shape of a violin with SVG",img:"violinShape.png",alt:"Picture of a violin shape built with react and d3"},{link:"/violin-plot",title:"Boxplot to Violin plot",description:"Interactive example showing the difference between a boxplot and a violin",img:"boxplot-violin-transition.gif",alt:"GIF showing a mirror transition between a boxplot and a violin plot"},{link:"/barplot",title:"Basic barplot",description:"Most basic barplot built with React and d3",img:"barplot-basic.png",alt:"Picture of a horizontal barplot made with React and d3"},{link:"/violin-plot",title:"Basic violin plot",description:"Learn how to build a basic violin chart with d3 and react",img:"violinBasic.png",alt:"Picture of a basic violin chart built in react"},{link:"/violin-plot#bucket%20size",title:"Violin with variable bucket size",description:"A violin plot with a slider to change the bucket size in use",img:"violinBucketSize.png",alt:"Picture of a violin plot with variable bucket size"},{link:"/boxplot#box%20component",title:"Boxplot shape",description:"How to build a boxplot shape in SVG",img:"boxplotShape.png",alt:"Picture of a box component, allowing to build a boxplot later on"},{link:"/boxplot",title:"Basic boxplot",description:"How to build a basic boxplot with react",img:"boxplotBasic.png",alt:"Picture of a basic boxplot built with react and d3"},{link:"/example/histogram-small-multiple",title:"Small multiple",description:"Create one panel per group to show its distribution separately",img:"histogram-small-multiple.png",alt:"Picture of a histogram with small multiple built with react and d3.js"},{link:"/example/histogram-with-several-groups",title:"Multiple groups",description:"A histogram with <b>multiple</b> groups displayed on the same axis.",img:"histogram-with-several-groups.png",alt:"Picture of a histogram with multiple groups built with react and d3.js"},{link:"/density-plot",title:"Basic density plot",description:"Most basic density plot built with React and d3",img:"densityBasic.png",alt:"Picture of a basic density plot built with React and d3"},{link:"/density-plot#variations",title:"Density plot with multiple groups",description:"How to add several groups on the same density plot",img:"densityMultipleGroups.png",alt:"Picture of a density plot with multiple groups"},{link:"/ridgeline",title:"Basic ridgeline chart",description:"Most basic version of a ridgeline plot",img:"ridgelineBasic.png",alt:"Picture of a basic ridgeline chart built with react and d3"},{link:"/example/barplot-data-transition-animation",title:"Barplot dataset transition",description:"How to smoothly animate the transition between dataset",img:"barplotDatasetAnimation.gif",alt:"GIF of a data update on a React barplot"},{link:"/scatterplot",title:"Scatterplot Hover effect",description:"How to add a hover effect to highlight a group on a scatterplot",img:"scatterplotHoverEffect.gif",alt:"GIF of a scatterplot with hover effect"},{link:"/bubble-plot#transition",title:"Bubble plot data set transition",description:"How to smoothly animate the transition between dataset",img:"bubble-plot-dataset-transition.gif",alt:"GIF of a bubble plot smoothly transitioning data"},{link:"/example/barplot-stacked-horizontal",title:"Horizontal Stacked Barplot",description:"Represent group and subgroup values by stacking the data",img:"barplot-stacked-horizontal.png",alt:"Picture of a stacked barchart made with react and d3"},{link:"/example/barplot-stacked-vertical",title:"Vertical Stacked Barplot",description:"Represent group and subgroup values by stacking the data",img:"barplot-stacked-vertical.png",alt:"Picture of a vertical stacked barchart made with react and d3"}]},6395:function(t){t.exports={container:"graphLinkImage_container__6vbL1",title:"graphLinkImage_title__86b4Y"}},1832:function(t){t.exports={tooltip:"tooltip_tooltip__Fv96Y",right:"tooltip_right__lXq9G",left:"tooltip_left__hUc5l",bottom:"tooltip_bottom__Qzoh5",top:"tooltip_top__qDz28"}},3084:function(t){t.exports={tableOfContent:"table-of-content_tableOfContent__oi0XB",tocItem:"table-of-content_tocItem__fZBSX",tocItemActive:"table-of-content_tocItemActive__kiClt"}}},function(t){t.O(0,[3996,645,9774,2888,179],function(){return t(t.s=4725)}),_N_E=t.O()}]);