(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[370],{9879:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/barplot",function(){return i(3308)}])},2450:function(e,t,i){"use strict";i.d(t,{Z:function(){return l}});var a=i(5893);i(7294);var n=i(2050),r=i(9975),o=i(9942);function l(e){let{images:t}=e,i=n.F.filter(e=>t.includes(e.img)).map((e,t)=>(0,a.jsx)(r.X,{link:e.link,title:e.title,description:(0,a.jsx)("p",{children:e.description}),img:e.img,alt:e.alt},t));return(0,a.jsx)(o.E,{children:i})}},505:function(e,t,i){"use strict";i.d(t,{r:function(){return c}});var a=i(5893),n=i(1664),r=i.n(n),o=i(8843),l=i(88),s=i(3572);let c=e=>{let{chartId:t}=e,i=o.c.filter(e=>e.id===t)[0].label;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("h2",{id:"responsiveness",children:"Responsive "+i+" with react"}),(0,a.jsxs)("p",{children:["The component above is not responsive. It expects 2 props called"," ",(0,a.jsx)("code",{children:"width"})," and ",(0,a.jsx)("code",{children:"height"})," and will render a ",i," of those dimensions."]}),(0,a.jsxs)("p",{children:["Making the ",i," responsive requires adding a ",(0,a.jsx)("b",{children:"wrapper"})," component that gets the dimension of the parent ",(0,a.jsx)("code",{children:"div"}),", and listening to a potential dimension change. This is possible thanks to a hook called"," ",(0,a.jsx)("code",{children:"useDimensions"})," that will do the job for us."]}),(0,a.jsx)(l.U,{startOpen:!1,title:(0,a.jsxs)("span",{children:[(0,a.jsx)("code",{children:"useDimensions"}),": a hook to make your viz responsive"]}),children:(0,a.jsx)(s.d,{code:d})}),(0,a.jsxs)("p",{children:["I'm in the process of writing a complete blog post on the topic."," ",(0,a.jsx)(r(),{href:"/subscribe",children:"Subscribe to the project"})," to know when it's ready."]}),(0,a.jsx)("br",{}),(0,a.jsx)("br",{}),(0,a.jsx)("br",{})]})},d='\nexport const useDimensions = (targetRef: React.RefObject<HTMLDivElement>) => {\n\n  const getDimensions = () => {\n    return {\n      width: targetRef.current ? targetRef.current.offsetWidth : 0,\n      height: targetRef.current ? targetRef.current.offsetHeight : 0\n    };\n  };\n\n  const [dimensions, setDimensions] = useState(getDimensions);\n\n  const handleResize = () => {\n    setDimensions(getDimensions());\n  };\n\n  useEffect(() => {\n    window.addEventListener("resize", handleResize);\n    return () => window.removeEventListener("resize", handleResize);\n  }, []);\n\n  useLayoutEffect(() => {\n    handleResize();\n  }, []);\n\n  return dimensions;\n}\n'.trim()},9975:function(e,t,i){"use strict";i.d(t,{X:function(){return o}});var a=i(5893),n=i(6395),r=i.n(n);let o=e=>{let{img:t,title:i,description:n,link:o,alt:l}=e;return(0,a.jsxs)("figure",{className:r().container,children:[(0,a.jsx)("img",{src:"/chart/"+t,className:r().image,alt:l}),(0,a.jsxs)("figcaption",{children:[(0,a.jsx)("p",{className:r().title,children:(0,a.jsx)("b",{children:i})}),(0,a.jsx)("div",{className:"font-light",children:n}),(0,a.jsx)("a",{href:o})]})]})}},9942:function(e,t,i){"use strict";i.d(t,{E:function(){return n}});var a=i(5893);i(7294);let n=e=>{let{children:t}=e;return(0,a.jsx)("div",{className:"grid grid-cols-2 sm:grid-cols-3 gap-4",children:t})}},3308:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return j}});var a=i(5893),n=i(7294),r=i(153),o=i(9965),l=i(7262),s=i(3572),c=i(1122),d=i(1664),h=i.n(d);let p=[{name:"Mark",value:90},{name:"Robert",value:12},{name:"Emily",value:34},{name:"Marion",value:53},{name:"Nicolas",value:98},{name:"M\xe9lanie",value:23},{name:"Gabriel",value:18},{name:"Jean",value:104},{name:"Paul",value:2}];var u=i(9410);let m={top:30,right:30,bottom:30,left:30},g=e=>{let{width:t,height:i,data:r}=e,o=t-m.right-m.left,l=i-m.top-m.bottom,s=r.sort((e,t)=>t.value-e.value).map(e=>e.name),c=(0,n.useMemo)(()=>u.tiA().domain(s).range([0,l]).padding(.3),[r,i]),d=(0,n.useMemo)(()=>{let[e,t]=u.Wem(r.map(e=>e.value));return u.BYU().domain([0,t||10]).range([0,o])},[r,t]),h=r.map((e,t)=>{let i=c(e.name);return void 0===i?null:(0,a.jsxs)("g",{children:[(0,a.jsx)("rect",{x:d(0),y:c(e.name),width:d(e.value),height:c.bandwidth(),opacity:.7,stroke:"#9d174d",fill:"#9d174d",fillOpacity:.3,strokeWidth:1,rx:1}),(0,a.jsx)("text",{x:d(e.value)-7,y:i+c.bandwidth()/2,textAnchor:"end",alignmentBaseline:"central",fontSize:12,opacity:d(e.value)>90?1:0,children:e.value}),(0,a.jsx)("text",{x:d(0)+7,y:i+c.bandwidth()/2,textAnchor:"start",alignmentBaseline:"central",fontSize:12,children:e.name})]},t)}),p=d.ticks(5).slice(1).map((e,t)=>(0,a.jsxs)("g",{children:[(0,a.jsx)("line",{x1:d(e),x2:d(e),y1:0,y2:l,stroke:"#808080",opacity:.2}),(0,a.jsx)("text",{x:d(e),y:l+10,textAnchor:"middle",alignmentBaseline:"central",fontSize:9,stroke:"#808080",opacity:.8,children:e})]},t));return(0,a.jsx)("div",{children:(0,a.jsx)("svg",{width:t,height:i,children:(0,a.jsxs)("g",{width:o,height:l,transform:"translate(".concat([m.left,m.top].join(","),")"),children:[p,h]})})})},b=e=>{let{width:t=700,height:i=400}=e;return(0,a.jsx)(g,{data:p,width:t,height:i})};var f=i(505),x=i(6228),w=i(2450);let v=(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("p",{children:["A ",(0,a.jsx)("a",{href:"https://www.data-to-viz.com/graph/barplot.html",children:"barplot"})," ","displays a numeric value for several groups of a dataset using rectangles. This page is a step-by-step guide on how to build your own barplot for the web, using ",(0,a.jsx)("a",{href:"https://reactjs.org/",children:"React"})," and"," ",(0,a.jsx)("a",{href:"https://d3-graph-gallery.com/barplot.html",children:"D3.js"}),"."]}),(0,a.jsxs)("p",{children:["It starts with very basic concepts like ",(0,a.jsx)("b",{children:"data structure"}),","," ",(0,a.jsx)("b",{children:"scales"})," and svg rectangle ",(0,a.jsx)("b",{children:"rendering"}),". It then shows how to add interactivity to the chart with ",(0,a.jsx)("b",{children:"hover effects"}),". Last but not least it explains how to build variations like the ",(0,a.jsx)("b",{children:"stacked barplot"}),"."]})]});function j(){return(0,a.jsxs)(r.A,{title:"Barplot with React",seoDescription:"How to build a barplot with React and D3.js. A set of re-usable components",children:[(0,a.jsx)(o.Z,{title:"Barplot",description:v,chartType:"barplot"}),(0,a.jsx)("h2",{id:"data",children:"The Data"})," ",(0,a.jsxs)("p",{children:["The dataset required to build a barplot is usually an array where each item is an object providing the ",(0,a.jsx)("code",{children:"name"})," and the"," ",(0,a.jsx)("code",{children:"value"})," of the group."]}),(0,a.jsx)("br",{}),(0,a.jsx)("p",{children:"Here is a minimal example"}),(0,a.jsx)(s.d,{code:k}),(0,a.jsxs)("p",{children:["Note: if your data is in ",(0,a.jsx)("code",{children:".csv"})," format, you can translate it thanks to the ",(0,a.jsx)("code",{children:"d3.csv()"})," function as suggested"," ",(0,a.jsx)("a",{href:"https://d3-graph-gallery.com/graph/barplot_horizontal.html",children:"here"}),"."]}),(0,a.jsx)("h2",{id:"skeleton",children:"Component skeleton"}),(0,a.jsxs)("p",{children:["The goal here is to create a ",(0,a.jsx)("code",{children:"Barplot"})," component that will be stored in a ",(0,a.jsx)("code",{children:"Barplot.tsx"})," file. This component requires 3 props to render: a ",(0,a.jsx)("code",{children:"width"}),", a ",(0,a.jsx)("code",{children:"height"}),", and some"," ",(0,a.jsx)("code",{children:"data"}),"."]}),(0,a.jsxs)("p",{children:["The shape of the ",(0,a.jsx)("code",{children:"data"})," is described above. The"," ",(0,a.jsx)("code",{children:"width"})," and ",(0,a.jsx)("code",{children:"height"})," will be used to rendering a"," ",(0,a.jsx)("code",{children:"svg"})," element in the DOM, in which we will insert the barplot."]}),(0,a.jsxs)("p",{children:["To put it in a nutshell, that's the skeleton of our ",(0,a.jsx)("code",{children:"Barplot"})," ","component:"]}),(0,a.jsx)(s.d,{code:y}),(0,a.jsxs)("p",{children:["It's fundamental to understand that with this code organization, d3.js will be used to prepare the svg ",(0,a.jsx)("code",{children:"circle"}),", but it's react that will render them in the ",(0,a.jsx)("code",{children:"return()"})," statement. We won't use d3 methods like ",(0,a.jsx)("code",{children:"append"})," that you can find in usual"," ",(0,a.jsx)("a",{href:"https://d3-graph-gallery.com/barplot.html",children:"d3.js examples"}),"."]}),(0,a.jsx)("h2",{id:"Scales",children:"Scales"}),(0,a.jsxs)("p",{children:["A ",(0,a.jsx)("b",{children:"scale"})," is a function that transforms a ",(0,a.jsx)("b",{children:"dimension"})," (like our ",(0,a.jsx)("code",{children:"value"})," or our group ",(0,a.jsx)("code",{children:"name"}),") in a"," ",(0,a.jsx)("b",{children:"position"})," in pixels."]}),(0,a.jsxs)("p",{children:["Building a barplot requires 2 scales of 2 kinds. The first will transform the group ",(0,a.jsx)("code",{children:"value"})," in a bar length. The second will transform the group ",(0,a.jsx)("code",{children:"name"})," in a position."]}),(0,a.jsx)("h3",{children:"→ Linear scale for the bar length"}),(0,a.jsxs)("p",{children:["D3.js comes with a handful set of"," ",(0,a.jsx)("a",{href:"https://github.com/d3/d3-scale",children:"predefined scales"}),"."," ",(0,a.jsx)("code",{children:"scaleLinear"})," is what we need for the bar length. Here is a quick overview on how to build and use a linear scale:"]}),(0,a.jsx)(s.d,{code:B}),(0,a.jsxs)("p",{children:["Since we are building a ",(0,a.jsx)("b",{children:"horizontal"})," barplot here, this scale will be used by the ",(0,a.jsx)("b",{children:"X"})," axis."]}),(0,a.jsxs)("p",{children:["To dig more into d3 scales, visit this"," ",(0,a.jsx)("a",{href:"https://d3-graph-gallery.com/graph/custom_axis.html",children:"dedicated page"}),". It's a crucial concept that will be used everywhere in this website."]}),(0,a.jsx)("h3",{children:"→ Band scale for the group position"}),(0,a.jsxs)("p",{children:["A ",(0,a.jsx)("a",{href:"https://github.com/d3/d3-scale#scaleBand",children:"band scale"})," will be used to control the position of each rectangle on the Y axis. It is computed with the ",(0,a.jsx)("code",{children:"scaleBand()"})," function of d3.js. It attributes a band of pixels to each group."]}),(0,a.jsxs)("p",{children:["For instance, calling the band scale with ",(0,a.jsx)("code",{children:'yScale("A")'})," will return ",(0,a.jsx)("code",{children:"0"}),", and ",(0,a.jsx)("code",{children:"yScale.bandwidth()"})," will return the width of the band (e.g. ",(0,a.jsx)("code",{children:"11px"}),")."]}),(0,a.jsxs)("p",{children:["Note: the ",(0,a.jsx)("code",{children:"padding"})," argument controls the space between bars."]}),(0,a.jsx)(s.d,{code:P}),(0,a.jsx)("h2",{id:"basic barplot",children:"Basic barplot"}),(0,a.jsxs)("p",{children:["We now have all the ingredients to build a basic barplot with react, all being pretty close to the"," ",(0,a.jsx)("a",{href:"https://d3-graph-gallery.com/barplot",children:"d3-only examples"}),"."]}),(0,a.jsxs)("p",{children:["For each item in the dataset, create a SVG ",(0,a.jsx)("code",{children:"rect"})," element. Its vertical position can be retrieved from the group ",(0,a.jsx)("code",{children:"name"})," ","thanks to the band scale. It's size is retrieved using the"," ",(0,a.jsx)("code",{children:"xScale"})," and its ",(0,a.jsx)("code",{children:"value"}),"."]}),(0,a.jsx)("p",{children:"Note that using the same amount of information it is straightforward to add a label for the name and one for the value."}),(0,a.jsx)(c.$,{vizName:"BarplotBasic",VizComponent:b,height:500,maxWidth:500,caption:"Most basic barplot built with d3.js for scales, and react for rendering"}),(0,a.jsx)(f.r,{chartId:"barplot"}),(0,a.jsx)("h2",{id:"transition",children:"Transition"}),(0,a.jsxs)("p",{children:["When the dataset updates, it adds a nice touch to"," ",(0,a.jsx)("b",{children:"smoothly animate"})," the transition. In the example below, changing the dataset will update the ",(0,a.jsx)("b",{children:"bar sizes"})," and their ",(0,a.jsx)("b",{children:"positions"})," ","on the Y axis to keep the ranking accurate."]}),(0,a.jsxs)("p",{children:["Animation is a complicated topic in dataviz. We have to deal with"," ",(0,a.jsx)("b",{children:"updates"})," (an element changes its features), ",(0,a.jsx)("b",{children:"enter"})," (a new element appears) and ",(0,a.jsx)("b",{children:"exit"})," (an element is not present anymore) patterns."]}),(0,a.jsxs)("p",{children:["I suggest to rely on the ",(0,a.jsx)("code",{children:"react-spring"})," library to help here. Please check this"," ",(0,a.jsx)(h(),{href:"example/barplot-data-transition-animation",children:"dedicated blogpost"})," ","to get explanations about the code of this example."]}),(0,a.jsx)(c.$,{vizName:"BarplotDatasetTransition",VizComponent:x.P,height:400,maxWidth:600,caption:"Most basic barplot built with d3.js for scales, and react for rendering"}),(0,a.jsx)("h2",{id:"stacking",children:"Stacking"}),(0,a.jsxs)("p",{children:["A ",(0,a.jsx)("b",{children:"stacked barplot"})," is a variation of a barplot where an"," ",(0,a.jsx)("b",{children:"additional level of grouping"})," is represented. Each bar represent the value of a ",(0,a.jsx)("code",{children:"group"}),", for instance how much each my friend spent in the last month. Each bar is then subdivided, each part representing the value of a ",(0,a.jsx)("code",{children:"subgroup"}),", for instance the category of expense."]}),(0,a.jsxs)("p",{children:["D3 comes with a very handy ",(0,a.jsx)("code",{children:"stack()"})," function. The 2 tutorials below explain how this function works, and how to use it to render a clean stacked barplot."]}),(0,a.jsx)(w.Z,{images:["barplot-stacked-horizontal.png","barplot-stacked-vertical.png"]}),(0,a.jsx)("h2",{id:"vertical",children:"Vertical barplot"})," ",(0,a.jsxs)("p",{children:["The vertical option is less common since it makes is much"," ",(0,a.jsx)("b",{children:"harder to read the labels"}),". But if you really need it, it is just a matter of swaping the X and Y axes of the previous example."]}),(0,a.jsxs)("p",{children:["This example will be publish soon, please"," ",(0,a.jsx)(h(),{href:"/subscribe",children:"subscribe"})," below if you want to be notified."]}),(0,a.jsx)("h2",{id:"hover effect",children:"Hover effect"})," ",(0,a.jsxs)("p",{children:["This example will be publish soon, please"," ",(0,a.jsx)(h(),{href:"subscribe",children:"subscribe"})," to the newsletter if you want to be notified."]}),(0,a.jsx)("div",{className:"full-bleed border-t h-0 bg-gray-100 mb-3 mt-24"}),(0,a.jsx)(l.Z,{chartFamily:"ranking"}),(0,a.jsx)("div",{className:"mt-20"})]})}let k='\nconst data = [\n  {name:"Mark", value: 90},\n  {name:"Robert", value: 12},\n  {name:"Emily", value: 34},\n  {name:"Marion", value: 53},\n  {name:"Nicolas", value: 98},\n]\n'.trim(),y='\nimport * as d3 from "d3"; // we will need d3.js\n\ntype BarplotProps = {\n  width: number;\n  height: number;\n  data: { name: string; y: number }[];\n};\n\nexport const Barplot = ({ width, height, data }: BarplotProps) => {\n\n  // read the data\n  // do some stuff with d3\n  // compute all the <rect>\n\n  return (\n    <div>\n      <svg width={width} height={height}>\n        // render all the <rect>\n      </svg>\n    </div>\n  );\n};\n'.trim(),B="\nconst scale = d3.scaleLinear()\n  .domain([0, 10]) // data goes from 0 to 10\n  .range([0, 200]); // axis goes from 0 to 200\n\nscale(0); // 0 -> item with a value of 0 will have a bar of length 0\nscale(5); // 100 -> bar of length 100\nscale(10); // 200 -> bar of length 200\n".trim(),P='\nconst yScale = d3\n    .scaleBand()\n    .range([0, boundsHeight])\n    .domain(allGroups)\n    .padding(0.01);\n\n// yScale("A") -> 0\n// yScale.bandwidth() -> 11\n'.trim()},2050:function(e,t,i){"use strict";i.d(t,{F:function(){return a}});let a=[{link:"/scatter-plot#scales%20and%20axes",title:"Scales and axes",description:"How to map your data in a 2d space, and how to draw the axes",img:"axis-basic-demo.png",alt:"Picture of an empty chart area with X and Y axes"},{link:"/scatterplot",title:"Scatterplot Hover effect",description:"How to add a hover effect to highlight a group on a scatterplot",img:"scatterplotHoverEffect.gif",alt:"GIF of a scatterplot with hover effect"},{link:"/scatter-plot#circles",title:"Basic scatter plot",description:"Add circles to get a basic scatter plot",img:"scatterplot-most-basic.png",alt:"Most basic scatterplot made with react and d3"},{link:"/scatter-plot#tooltip",title:"Add tooltip",description:"Get more details about each datapoint by adding a tooltip on hover",img:"scatterplot-tooltip.png",alt:"Scatterplot with tooltip made with react and d3"},{link:"/scatter-plot#hover%20effect",title:"Add a hover effect",description:"Highlight a specific group on hover",img:"scatterplot-hover-effect.png",alt:"Scatterplot with hover effect made with react and d3"},{link:"/scatter-plot#real%20life",title:"Real life use-case",description:"Reproduction of a data wrapper chart representing countries CO2 data",img:"scatterplot-co2.png",alt:"Real life example of a scatterplot made with react and d3"},{link:"/example/boxplot-jitter",title:"Boxplot with jitter",description:"Add individual data points using jitter on top of the boxplot",img:"boxplot-jitter.png",alt:"Picture of a boxplot with jitter built using react and d3.js"},{link:"/boxplot#box%20component",title:"Boxplot shape",description:"How to build a boxplot shape in SVG",img:"boxplotShape.png",alt:"Picture of a box component, allowing to build a boxplot later on"},{link:"/boxplot",title:"Basic boxplot",description:"How to build a basic boxplot with react",img:"boxplotBasic.png",alt:"Picture of a basic boxplot built with react and d3"},{link:"/bubble-plot",title:"Bubble plot",description:"Learn how to build a bubble plot with react and d3.js",img:"bubble-plot-with-legend.png",alt:"Picture of a simple bubble plot with a legend made with react and d3.js"},{link:"/bubble-plot#transition",title:"Bubble plot data set transition",description:"How to smoothly animate the transition between dataset",img:"bubble-plot-dataset-transition.gif",alt:"GIF of a bubble plot smoothly transitioning data"},{link:"/histogram",title:"Histogram",description:"Learn how to build a histogram with react and d3.js",img:"histogram-basic.png",alt:"Picture of a simple histogram made with react and d3.js"},{link:"/histogram#transition",title:"Histogram dataset transition",description:"How to animate the transition between datasets",img:"histogram-dataset-transition.gif",alt:"GIF of a histogram with animated data transition"},{link:"/violin-plot",title:"Violin to Boxplot transition",description:"Using shape morphism to smoothly transition from a boxplot to a violin and reverse",img:"violinBoxplotTransition.png",alt:"gif of a violin plot smoothly transitioning to a boxplot using shape morphism"},{link:"/violin-plot#bucket%20size",title:"Bucket size effect",description:"Interactive example showing the bucket size effect on a violin chart",img:"violin-bucket-size-effect.gif",alt:"GIF showing a violin plot with varying bucket size"},{link:"/violin-plot#violin%20component",title:"Violin shape",description:"How to build the shape of a violin with SVG",img:"violinShape.png",alt:"Picture of a violin shape built with react and d3"},{link:"/violin-plot",title:"Boxplot to Violin plot",description:"Interactive example showing the difference between a boxplot and a violin",img:"boxplot-violin-transition.gif",alt:"GIF showing a mirror transition between a boxplot and a violin plot"},{link:"/violin-plot",title:"Basic violin plot",description:"Learn how to build a basic violin chart with d3 and react",img:"violinBasic.png",alt:"Picture of a basic violin chart built in react"},{link:"/violin-plot#bucket%20size",title:"Violin with variable bucket size",description:"A violin plot with a slider to change the bucket size in use",img:"violinBucketSize.png",alt:"Picture of a violin plot with variable bucket size"},{link:"/heatmap",title:"Basic heatmap",description:"Most basic heatmap",img:"heatmapBasic.png",alt:"Picture of a simple heatmap made with react and d3.js"},{link:"/heatmap#tooltip",title:"Heatmap with tooltip",description:"Learn how to add a tooltip to a heatmap with react",img:"heatmapTooltip.png",alt:"Picture of a heatmap with a tooltip that appears on hover"},{link:"/heatmap#legend",title:"Continuous color scale",description:"How to add a color legend to your chart that uses a continuous color scale",img:"continuousColorLegend.png",alt:"Picture of a continuous color scale built with d3.js"},{link:"/heatmap#application",title:"Vaccination heatmap",description:"Reproduction of a famous vaccination heatmap using d3 and react",img:"heatmapVaccination.png",alt:"Picture of a heatmap showing the effect of vaccination, built with react and d3"},{link:"/correlogram",title:"Basic correlogram",description:"Learn how to build a correlogram with react and d3",img:"correlogramBasic.png",alt:"Picture of a correlogram built with react and d3"},{link:"/barplot",title:"Basic barplot",description:"Most basic barplot built with React and d3",img:"barplot-basic.png",alt:"Picture of a horizontal barplot made with React and d3"},{link:"/example/barplot-data-transition-animation",title:"Barplot dataset transition",description:"How to smoothly animate the transition between dataset",img:"barplotDatasetAnimation.gif",alt:"GIF of a data update on a React barplot"},{link:"/example/barplot-stacked-horizontal",title:"Horizontal Stacked Barplot",description:"Represent group and subgroup values by stacking the data",img:"barplot-stacked-horizontal.png",alt:"Picture of a stacked barchart made with react and d3"},{link:"/example/barplot-stacked-vertical",title:"Vertical Stacked Barplot",description:"Represent group and subgroup values by stacking the data",img:"barplot-stacked-vertical.png",alt:"Picture of a vertical stacked barchart made with react and d3"},{link:"/example/histogram-small-multiple",title:"Small multiple",description:"Create one panel per group to show its distribution separately",img:"histogram-small-multiple.png",alt:"Picture of a histogram with small multiple built with react and d3.js"},{link:"/example/histogram-with-several-groups",title:"Multiple groups",description:"A histogram with <b>multiple</b> groups displayed on the same axis.",img:"histogram-with-several-groups.png",alt:"Picture of a histogram with multiple groups built with react and d3.js"},{link:"/density-plot",title:"Basic density plot",description:"Most basic density plot built with React and d3",img:"densityBasic.png",alt:"Picture of a basic density plot built with React and d3"},{link:"/density-plot#variations",title:"Density plot with multiple groups",description:"How to add several groups on the same density plot",img:"densityMultipleGroups.png",alt:"Picture of a density plot with multiple groups"},{link:"/ridgeline",title:"Basic ridgeline chart",description:"Most basic version of a ridgeline plot",img:"ridgelineBasic.png",alt:"Picture of a basic ridgeline chart built with react and d3"},{link:"/line-chart#basic",title:"Most basic line chart",description:"The most basic line chart one can make using d3 and react",img:"line-chart-basic.png",alt:"Picture of a very simple line chart made with react and d3"},{link:"/line-chart#transition",title:"Line chart with dataset transition",description:"How to smoothly animate the transition between 2 dataset on a line chart",img:"line-chart-data-transition.gif",alt:"GIF of a line chart that animates between 2 dataset"},{link:"/area-plot",title:"Basic Area Chart",description:"Most basic version of an area chart made with react and d3.js",img:"area-chart-basic.png",alt:"Picture of a basic area chart made with React and D3"},{link:"/stacked-area-plot",title:"Basis stacked area chart",description:"Most basic version of a stacked area chart. Explains how to use the stack() function of d3.js",img:"stacked-area-plot-basic.png",alt:"picture of a basic stacked area plot made with react"},{link:"/streamchart",title:"Basic Streamgraph",description:"Most basic streamgraph one can build using d3 and react",img:"streamgraph-basic.png",alt:"Picture of a basic streamgraph made using Reacrt and d3.js"},{link:"/streamchart#hover&effect",title:"Streamgraph with hover effect",description:"How to add a hover effect on a streamgraph to highlight a group",img:"streamgraph-hover-effect.gif",alt:"GIF of a streamgraph react component that supports hover effect"},{link:"/streamchart#transition",title:"Offset and Smoothing transition",description:"An interactive streamgraph example showing how to animate transition between the chart stacking features.",img:"streamgraph-offset-type-transition.gif",alt:"GIF of a streamgraph"},{link:"/streamchart#application",title:"Streamgraph application",description:"Streamgraph with a slider to zoom on a time stamp and with interactive inline legends",img:"streamgraph-application.gif",alt:"GIF of a streamgraph with multiple interactive features"},{link:"/circular-packing",title:"Most basic circular packing chart",description:"The most basic circular packing chart one can make using d3.js and React.",img:"circle-pack-basic.png",alt:"Picture of a very basic circle packing chart"},{link:"/circular-packing",title:"Circular packing: 2 levels of hierarchy",description:"A simple circular packing chart with 2 levels of hierarchy built with React and d3.",img:"circle-pack-2-levels.png",alt:"Picture of a very basic circle packing chart with 2 levels of hierarchy"},{link:"/example/circle-packing-with-d3-force",title:"Circle Pack with d3-force",description:"Another approach to build a circle packing chart using physical forces to compute node positions.",img:"circle-pack-d3-force.png",alt:"Picture of a circle packing chart made using the d3-force plugin"},{link:"/example/arc-diagram-vertical",title:"Vertical arc diagram",description:"The vertical version of the arc diagram is more convenient to display labels",img:"vertical-arc-diagram.png",alt:"Picture of a vertical arc diagram"},{link:"/network-chart#rendering",title:"Most basic network chart",description:"Most basic network chart using the d3-force plugin to apply physical forces.",img:"network-chart-basic.png",alt:"Picture of a very simple network chart built with React and D3.js."},{link:"/network-chart#rendering",title:"Play with forces",description:"A playground to discover the effect of the various forces you can apply to your particles",img:"network-chart-force-playground.png",alt:"Picture of a playground allowing to play with the various d3 forces"},{link:"/example/network-diagram-with-colored-groups",title:"Force directed graph",description:"A force directed network chart showing character co-occurence in les miserables",img:"network-les-miserables.png",alt:"Picture of a force directed network chart showing character co-occurence in les miserables"}]},6228:function(e,t,i){"use strict";i.d(t,{P:function(){return m}});var a=i(5893),n=i(7294);let r=[{name:"Mark",value:90},{name:"Robert",value:12},{name:"Emily",value:34},{name:"Marion",value:53},{name:"Nicolas",value:98},{name:"M\xe9lanie",value:23},{name:"Gabriel",value:18},{name:"Jean",value:104},{name:"Paul",value:2}],o=[{name:"Mark",value:9},{name:"Robert",value:19},{name:"Emily",value:31},{name:"Marion",value:23},{name:"Nicolas",value:38},{name:"M\xe9lanie",value:123},{name:"Gabriel",value:4},{name:"Jean",value:23},{name:"Christophe",value:22}];var l=i(9410),s=i(2236);let c=e=>{var t,i,n,r;let{name:o,value:l,barHeight:c,barWidth:d,x:h,y:p}=e,u=(0,s.q_)({from:{value:0,barWidth:0,valueOpacity:0},to:{value:l,barWidth:d,valueOpacity:d>80?1:0,y:p},config:{friction:100}});return(0,a.jsxs)("g",{children:[(0,a.jsx)(s.q.rect,{x:h,y:u.y,width:u.barWidth,height:c,opacity:.7,stroke:"#9d174d",fill:"#9d174d",fillOpacity:.3,strokeWidth:1,rx:1}),(0,a.jsx)(s.q.text,{x:null===(t=u.barWidth)||void 0===t?void 0:t.to(e=>e-7),y:null===(i=u.y)||void 0===i?void 0:i.to(e=>e+c/2),textAnchor:"end",alignmentBaseline:"central",fontSize:12,opacity:u.valueOpacity,children:null===(n=u.value)||void 0===n?void 0:n.to(e=>e.toFixed(0))}),(0,a.jsx)(s.q.text,{x:h+7,y:null===(r=u.y)||void 0===r?void 0:r.to(e=>e+c/2),textAnchor:"start",alignmentBaseline:"central",fontSize:12,children:o})]})},d={top:30,right:30,bottom:30,left:30},h=e=>{let{width:t,height:i,data:r}=e,o=t-d.right-d.left,s=i-d.top-d.bottom,h=r.sort((e,t)=>t.value-e.value).map(e=>e.name),p=(0,n.useMemo)(()=>l.tiA().domain(h).range([0,s]).padding(.3),[r,i]),u=l.Fp7(r.map(e=>e.value)),m=l.BYU().domain([0,u]).range([0,o]),g=r.map(e=>(0,a.jsx)(c,{name:e.name,value:e.value,barHeight:p.bandwidth(),barWidth:m(e.value),x:m(0),y:p(e.name)},e.name));return(0,a.jsx)("div",{children:(0,a.jsx)("svg",{width:t,height:i,children:(0,a.jsx)("g",{width:o,height:s,transform:"translate(".concat([d.left,d.top].join(","),")"),children:g})})})},p={border:"1px solid #9a6fb0",borderRadius:"3px",padding:"4px 8px",margin:"10px 2px",fontSize:14,color:"#9a6fb0",opacity:.7},u=e=>{let{width:t,height:i}=e,[l,s]=(0,n.useState)(r);return(0,a.jsxs)("div",{children:[(0,a.jsxs)("div",{style:{height:50},children:[(0,a.jsx)("button",{style:p,onClick:()=>s(r),children:"Data 1"}),(0,a.jsx)("button",{style:p,onClick:()=>s(o),children:"Data 2"})]}),(0,a.jsx)(h,{width:t,height:i-50,data:l})]})},m=e=>{let{width:t=700,height:i=400}=e;return t&&i?(0,a.jsx)(u,{width:t,height:i}):null}},6395:function(e){e.exports={container:"graphLinkImage_container__6vbL1",title:"graphLinkImage_title__86b4Y"}}},function(e){e.O(0,[3996,9410,5660,2236,645,1188,9774,2888,179],function(){return e(e.s=9879)}),_N_E=e.O()}]);