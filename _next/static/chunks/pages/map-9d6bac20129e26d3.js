(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9538],{5078:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/map",function(){return i(1057)}])},1057:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return y}});var n=i(5893);i(7294);var s=i(153),a=i(9965),r=i(7262),h=i(3572),o=i(1122),d=i(1011),c=i(2068),l=i(6820),x=i(505),p=i(615),u=i(5178),m=i(9975),g=i(9942),j=i(1664),b=i.n(j),w=i(88);let f=(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("p",{children:["This section is dedicated to"," ",(0,n.jsx)("a",{href:"https://www.data-to-viz.com/graph/map.html",children:"background maps"}),". It is the fundation required to build more interesting"," ",(0,n.jsx)("b",{children:"dataviz-related maps"}),"like ",(0,n.jsx)(b(),{href:"bubble-map",children:"bubble maps"}),","," ",(0,n.jsx)(b(),{href:"choropleth-map",children:"choropleth maps"})," and more."]}),(0,n.jsxs)("p",{children:["The interactive sandboxes and explanation below explain how to read a"," ",(0,n.jsx)("code",{children:"geoJson"})," file and draw its content using ",(0,n.jsx)("code",{children:"React"}),". It also show how useful the"," ",(0,n.jsx)("a",{href:"https://github.com/d3/d3-geo",target:"_blank",children:"d3-geo module"})," ","can be to deal with this format, notably to control the various existing projections."]}),(0,n.jsxs)("p",{children:["Last but not least, this document also briefly explains how"," ",(0,n.jsx)("code",{children:"Leaflet"})," can be used in a React environment to display interactive maps."]})]});function y(){return(0,n.jsxs)(s.A,{title:"How to build a histogram with React and D3.",seoDescription:"A step-by-step guide to build your very own histogram from scratch. Comes with explanations, code sandboxes, and ready-to-use templates.",children:[(0,n.jsx)(a.Z,{title:"Background Map",description:f,chartType:"map"}),(0,n.jsx)("h2",{id:"data",children:"The Data"}),(0,n.jsxs)("p",{children:["Building a histogram only requires a set of ",(0,n.jsx)("b",{children:"numeric values"}),"."]}),(0,n.jsxs)("p",{children:["As a result, the dataset is pretty simple: an ",(0,n.jsx)("code",{children:"array"})," of"," ","numbers."]}),(0,n.jsx)("br",{}),(0,n.jsx)("p",{children:"Here is a minimal example of the data structure:"}),(0,n.jsx)(h.d,{code:k}),(0,n.jsx)("h2",{id:"skeleton",children:"Component skeleton"}),(0,n.jsxs)("p",{children:["The goal here is to create a ",(0,n.jsx)("code",{children:"Histogram"})," component that will be stored in a ",(0,n.jsx)("code",{children:"Histogram.tsx"})," file. This component requires 3 props to render: a ",(0,n.jsx)("code",{children:"width"}),", a ",(0,n.jsx)("code",{children:"height"}),", and some"," ",(0,n.jsx)("code",{children:"data"}),"."]}),(0,n.jsxs)("p",{children:["The shape of the ",(0,n.jsx)("code",{children:"data"})," is described above. The"," ",(0,n.jsx)("code",{children:"width"})," and ",(0,n.jsx)("code",{children:"height"})," will be used to render an"," ",(0,n.jsx)("code",{children:"svg"})," element in the DOM, in which we will insert the histogram."]}),(0,n.jsxs)("p",{children:["To put it in a nutshell, that's the skeleton of our"," ",(0,n.jsx)("code",{children:"Histogram"})," component:"]}),(0,n.jsx)(h.d,{code:v}),(0,n.jsxs)("p",{children:["It's fundamental to understand that with this code organization, d3.js will be used to prepare the SVG ",(0,n.jsx)("code",{children:"circle"}),", but it's React that will render them in the ",(0,n.jsx)("code",{children:"return()"})," statement. We won't use d3 methods like ",(0,n.jsx)("code",{children:"append"})," that you can find in usual"," ",(0,n.jsx)("a",{href:"https://www.d3-graph-gallery.com",children:"d3.js examples"}),"."]}),(0,n.jsx)("h2",{id:"binning",children:"Computing the histogram buckets"}),(0,n.jsx)("h3",{children:"→ What is a bin / bucket?"}),(0,n.jsxs)("p",{children:["To build a histogram we have to split the data values into a set of"," ",(0,n.jsx)("b",{children:"buckets"}),". For each bucket, we will count the number of items in it."]}),(0,n.jsxs)("p",{children:["This process is called ",(0,n.jsx)("b",{children:"binning"}),". Binning groups discrete samples into a smaller number of consecutive, non-overlapping intervals."]}),(0,n.jsxs)("div",{className:"flex flex-col items-center mt-8 mb-12",children:[(0,n.jsx)("img",{src:"/img/binning-process.png",style:{maxWidth:700},alt:"schema explaining how histogram buckets are created from the original dataset"}),(0,n.jsx)(p.Y,{children:"Binning is the process of dividing the range of values in a dataset into intervals, and then counting the number of values that fall into each interval."})]}),(0,n.jsx)("h3",{children:"→ The bin generator"}),(0,n.jsxs)("p",{children:["Fortunately, d3.js has a handy ",(0,n.jsx)("code",{children:"bin()"})," function for this task. (See the ",(0,n.jsx)("a",{href:"https://github.com/d3/d3-array#bin",children:"doc"}),".)"]}),(0,n.jsxs)("p",{children:["The ",(0,n.jsx)("code",{children:"bin()"})," function returns a ",(0,n.jsx)("b",{children:"function"})," that is a bin generator. Example:"]}),(0,n.jsx)(h.d,{code:T}),(0,n.jsxs)("p",{children:["3 arguments are passed to the ",(0,n.jsx)("code",{children:"bin()"})," function:"]}),(0,n.jsxs)("ul",{children:[(0,n.jsxs)("li",{children:[(0,n.jsx)("code",{children:"value"})," is the accessor function. For each item of the array, we will pass to the ",(0,n.jsx)("code",{children:"bucketGenerator"}),", this is how to get the numeric value of interest."]}),(0,n.jsxs)("li",{children:[(0,n.jsx)("code",{children:"domain"})," is the lower and upper bounds of the histogram."]}),(0,n.jsxs)("li",{children:[(0,n.jsx)("code",{children:"thresholds"})," is an array with the limits of each bucket. Note that it can be easily computed from a usual"," ",(0,n.jsx)("code",{children:"scaleLinear"}),"."]})]}),(0,n.jsx)("h3",{children:"→ Bucket format"}),(0,n.jsxs)("p",{children:["The ",(0,n.jsx)("code",{children:"bucketGenerator"})," can be applied to our dummy dataset:"]}),(0,n.jsx)(h.d,{code:S}),(0,n.jsxs)("p",{children:["The result is an array of arrays. Each item represents a bucket. Each bucket is composed of all the values assigned to this bucket. Its"," ",(0,n.jsx)("code",{children:"length"})," is the bucket size, i.e. the future bar height."]}),(0,n.jsxs)("p",{children:["Each bin has two additional attributes: ",(0,n.jsx)("code",{children:"x0"})," and"," ",(0,n.jsx)("code",{children:"x1"})," being the lower (inclusive) and upper (exclusive) bounds of the bin."]}),(0,n.jsx)(h.d,{code:I}),(0,n.jsx)("p",{children:"Let's transform those buckets in bars \uD83D\uDE47‍♂️!"}),(0,n.jsx)("h2",{id:"Scales",children:"Scales"}),(0,n.jsx)("p",{children:"The data wrangling part is done, but we're not ready to draw our bars yet \uD83D\uDE22."}),(0,n.jsxs)("p",{children:["Building a histogram requires transforming ",(0,n.jsx)("b",{children:"dimensions"})," (the number of items per bucket and the bucket limits) in ",(0,n.jsx)("b",{children:"positions in pixels"}),". This is done using a fundamental dataviz concept called ",(0,n.jsx)("b",{children:"scale"}),"."]}),(0,n.jsxs)("p",{children:["D3.js comes with a handful set of"," ",(0,n.jsx)("a",{href:"https://github.com/d3/d3-scale",children:"predefined scales"}),"."," ",(0,n.jsx)("code",{children:"scaleLinear"})," is what we need for the X and Y axis."]}),(0,n.jsx)("h3",{children:"→ X Scale"}),(0,n.jsxs)("p",{children:["The X scale is displayed ",(0,n.jsx)("b",{children:"horizontally"}),". It covers the"," ",(0,n.jsx)("code",{children:"width"})," of the ",(0,n.jsx)("code",{children:"svg"})," container, and its domain goes from the ",(0,n.jsx)("code",{children:"min"})," to the ",(0,n.jsx)("code",{children:"max"})," of the dataset."]}),(0,n.jsx)(h.d,{code:z}),(0,n.jsx)("h3",{children:"→ Y Scale"}),(0,n.jsxs)("p",{children:["The Y scale is displayed ",(0,n.jsx)("b",{children:"vertically"}),". It shows how many items are available in each bin. To compute it you need to find the bucket with the highest number of items. Something like:"]}),(0,n.jsx)(h.d,{code:D}),(0,n.jsx)("h2",{id:"bars",children:"Drawing the bars"}),(0,n.jsx)("p",{children:"Finally! ✨"}),(0,n.jsxs)("p",{children:["We can now ",(0,n.jsx)("code",{children:"map"})," through the bucket object and draw a"," ",(0,n.jsx)("b",{children:"rectangle"})," per bucket thanks to the scales computed above."]}),(0,n.jsx)("p",{children:"The code looks like this:"}),(0,n.jsx)(h.d,{code:P}),(0,n.jsxs)("p",{children:["Remember that the ",(0,n.jsx)("code",{children:"x"})," and ",(0,n.jsx)("code",{children:"y"})," attributes of the svg ",(0,n.jsx)("code",{children:"rect"})," element provide the x and y position of the top left corner of the rectangle (see"," ",(0,n.jsx)("a",{href:"https://developer.mozilla.org/en-US/docs/Web/SVG/Element/rect",children:"doc"}),"). This is why the rectangle ",(0,n.jsx)("code",{children:"height"})," is computed by subtracting ",(0,n.jsx)("code",{children:"yScale(bucket.length)"})," from the total"," ",(0,n.jsx)("code",{children:"height"}),"."]}),(0,n.jsx)("br",{}),(0,n.jsx)(o.$,{VizComponent:c.P,vizName:"HistogramBasic",maxWidth:600,height:300,caption:"Values of the dataset as distributed into bins. Bins are represented as rectangles. Data wrangling is made with d3.js, rendering with react."}),(0,n.jsx)("h2",{id:"axes",children:"Axes"}),(0,n.jsxs)("p",{children:["The last step to get a decent chart is to add 2 ",(0,n.jsx)("b",{children:"axes"}),". Otherwise, the bucket bounds are not available, removing all potential insight into the chart."]}),(0,n.jsxs)("p",{children:["There are 2 main strategies to add axes to a react chart made with d3.js. This process is extensively described in the"," ",(0,n.jsx)("a",{href:"https://www.react-graph-gallery.com/build-axis-with-react",children:"axis section"}),"."]}),(0,n.jsx)("p",{children:"In the example below, I chose to use the d3 way to render both axes. Note also that a real dataset is used this time, showing the distribution of AirBnB prices on the french riviera."}),(0,n.jsx)("br",{}),(0,n.jsx)(o.$,{VizComponent:d.I,vizName:"HistogramWithAxis",maxWidth:900,height:300,caption:"Adding a X axis with d3 makes the chart much more insightful."}),(0,n.jsx)(x.r,{chartId:"histogram"}),(0,n.jsx)(l.Z,{chartId:"histogram"}),(0,n.jsx)("h2",{id:"variations",children:"Variations"}),(0,n.jsxs)("p",{children:["Once you've understood how to build a basic histogram with d3 and react, it opens an infinite world of ",(0,n.jsx)("b",{children:"customization"}),". Here are a few examples showing how to add"," ",(0,n.jsx)(b(),{href:"example/histogram-with-several-groups",children:"several groups"})," ","on the same axis or how to use"," ",(0,n.jsx)(b(),{href:"example/histogram-small-multiple",children:"small multiple"})," with histograms to compare distributions."]}),(0,n.jsx)("p",{children:"Click on the overview below to get details and code."}),(0,n.jsx)("br",{}),(0,n.jsxs)(g.E,{children:[(0,n.jsx)(m.X,{link:"example/histogram-with-several-groups",title:"Multiple groups",description:(0,n.jsxs)("p",{children:["A histogram with ",(0,n.jsx)("b",{children:"multiple"})," groups displayed on the same axis."]}),img:"histogram-with-several-groups.png",alt:"Picture of a histogram with multiple groups built with react and d3.js"}),(0,n.jsx)(m.X,{link:"example/histogram-small-multiple",title:"Small multiple",description:(0,n.jsx)("p",{children:"Create one panel per group to show its distribution separately"}),img:"histogram-small-multiple.png",alt:"Picture of a histogram with small multiple built with react and d3.js"})]}),(0,n.jsx)("h2",{id:"transition",children:"Dataset transition"}),(0,n.jsxs)("p",{children:["The last step needed for a powerful histogram React component is a proper way to transition between various datasets. When the"," ",(0,n.jsx)("code",{children:"data"})," prop updates, we need a stunning way to transition to the new values."]}),(0,n.jsxs)("p",{children:["There are many different strategies to approach this problem. I suggest to rely on the ",(0,n.jsx)("a",{href:"https://react-spring.dev/",children:"react-spring"})," ","library that has everything we need to compute"," ",(0,n.jsx)("a",{href:"https://www.joshwcomeau.com/animation/a-friendly-introduction-to-spring-physics/",children:"spring animations"}),"."]}),(0,n.jsxs)("p",{children:["Instead of rendering usual ",(0,n.jsx)("code",{children:"rect"})," elements, the library provides a ",(0,n.jsx)("code",{children:"animated.rect"})," element, that is linked to a"," ",(0,n.jsx)("code",{children:"useSpring"}),"hook."]}),(0,n.jsx)(o.$,{VizComponent:u.O,vizName:"HistogramDatasetTransition",maxWidth:900,height:400,caption:"Adding a X axis with d3 makes the chart much more insightful."}),(0,n.jsxs)("p",{children:["This is how the ",(0,n.jsx)("code",{children:"Rectangle"})," component I use looks like:"]}),(0,n.jsx)(w.U,{startOpen:!1,title:(0,n.jsxs)("span",{children:[(0,n.jsx)("code",{children:"Rectangle"}),": a component that animates the transition of a ",(0,n.jsx)("code",{children:"rect"})]}),children:(0,n.jsx)(h.d,{code:E})}),(0,n.jsxs)("p",{children:[(0,n.jsx)("b",{children:"Animation"})," in dataviz using React is a ",(0,n.jsx)("b",{children:"big"})," topic. It's impossible to go in depth here! I will publish a dedicated blog post on the topic soon. Please ",(0,n.jsx)(b(),{href:"subscribe",children:"subscribe"})," to the newsletter if you want to be notified."]}),(0,n.jsx)("div",{className:"full-bleed border-t h-0 bg-gray-100 mb-3 mt-24"}),(0,n.jsx)(r.Z,{chartFamily:"distribution"}),(0,n.jsx)("div",{className:"mt-20"})]})}let k="\nconst data = [1, 2, 2, 2, 3, 4, 5, 6, 6, 6, 9]\n".trim(),v='\nimport * as d3 from "d3"; // we will need d3.js\n\ntype HistogramProps = {\n  width: number;\n  height: number;\n  data: number[];\n};\n\nexport const Histogram = ({ width, height, data }: HistogramProps) => {\n\n  // read the data\n  // build buckets from the dataset\n  // build the scales\n  // build the rectangles\n\n  return (\n    <div>\n      <svg width={width} height={height}>\n        // render all the <rect>\n      </svg>\n    </div>\n  );\n};\n'.trim(),T="\nconst bucketGenerator = d3\n  .bin()\n  .value((d) => d)\n  .domain([0, 10])\n  .thresholds([0, 2, 4, 6, 8, 10]);\n".trim(),S="\nbucketGenerator(data)\n".trim(),I="\n[\n  [x0: 0, x1: 2],\n  [2, 2, 2, 3, x0: 2, x1: 4],\n  [4, 5, x0: 4, x1: 6],\n  [6, 6, 6, x0: 6, x1: 8],\n  [x0: 8, x1: 10],\n  [x0: 10, x1: 10],\n]\n".trim(),z="\nconst xScale = d3\n  .scaleLinear()\n  .domain([0, 10])\n  .range([0, width]);\n\n// xScale(0) -> 0 (the left hand side position of the first bin)\n// xScale(10) -> width (the right hand side position of the last bin)\n".trim(),D="\nconst yScale = useMemo(() => {\n\n  const max = Math.max(...buckets.map((bucket) => bucket?.length));\n\n  return d3.scaleLinear()\n    .range([height, 0])\n    .domain([0, max]);\n\n  }, [data, height]);\n".trim(),P='\nconst allRects = buckets.map((bucket, i) => {\n  return (\n    <rect\n      key={i}\n      fill="#69b3a2"\n      stroke="black"\n      x={xScale(bucket.x0)}\n      width={xScale(bucket.x1) - xScale(bucket.x0)}\n      y={yScale(bucket.length)}\n      height={height - yScale(bucket.length)}\n    />\n  );\n});\n'.trim(),E='\nimport { useSpring, animated } from "@react-spring/web";\n\ntype RectangleProps = {\n  width: number;\n  height: number;\n  x: number;\n  y: number;\n};\n\nexport const Rectangle = (props: RectangleProps) => {\n  const { x, y, width, height } = props;\n\n  const springProps = useSpring({\n    to: { x, y, width, height },\n    config: {\n      friction: 30,\n    },\n    delay: x,\n  });\n\n  if (y === undefined) {\n    return null;\n  }\n\n  return (\n    <animated.rect\n      x={springProps.x}\n      y={springProps.y}\n      width={springProps.width}\n      height={springProps.height}\n      opacity={0.7}\n      stroke="#9d174d"\n      fill="#9d174d"\n      fillOpacity={0.3}\n      strokeWidth={1}\n      rx={1}\n    />\n  );\n};\n'.trim()}},function(e){e.O(0,[3996,9410,5660,2236,645,1188,4388,9774,2888,179],function(){return e(e.s=5078)}),_N_E=e.O()}]);