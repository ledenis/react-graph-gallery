(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[266],{7954:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/stacked-area-plot",function(){return s(8789)}])},8789:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return A}});var a=s(5893),r=s(7294),n=s(153),i=s(9965),o=s(7262),h=s(3572),d=s(1122),c=s(1664),l=s.n(c);let p=[{x:1,groupA:38,groupB:19,groupC:9,groupD:4},{x:2,groupA:16,groupB:14,groupC:96,groupD:40},{x:3,groupA:64,groupB:96,groupC:64,groupD:40},{x:4,groupA:32,groupB:48,groupC:64,groupD:40},{x:5,groupA:12,groupB:18,groupC:14,groupD:10}];var u=s(665);let x={top:30,right:30,bottom:50,left:50},j=e=>{let{width:t,height:s,data:n}=e,i=(0,r.useRef)(null),o=t-x.right-x.left,h=s-x.top-x.bottom,d=u.knu().keys(["groupA","groupB","groupC","groupD"]).order(u.Qxt).offset(u.HLf),c=d(n),l=(0,r.useMemo)(()=>u.BYU().domain([0,300]).range([h,0]),[n,s]),[p,j]=u.Wem(n,e=>e.x),f=(0,r.useMemo)(()=>u.BYU().domain([p||0,j||0]).range([0,o]),[n,t]);(0,r.useEffect)(()=>{let e=u.Ys(i.current);e.selectAll("*").remove();let t=u.LLu(f);e.append("g").attr("transform","translate(0,"+h+")").call(t);let s=u.y4O(l);e.append("g").call(s)},[f,l,h]);let m=u.SOn().x(e=>f(e.data.x)).y1(e=>l(e[1])).y0(e=>l(e[0])),g=c.map((e,t)=>{let s=m(e);return(0,a.jsx)("path",{d:s,opacity:1,stroke:"none",fill:"#9a6fb0",fillOpacity:t/10+.1},t)});return(0,a.jsx)("div",{children:(0,a.jsxs)("svg",{width:t,height:s,children:[(0,a.jsx)("g",{width:o,height:h,transform:"translate(".concat([x.left,x.top].join(","),")"),children:g}),(0,a.jsx)("g",{width:o,height:h,ref:i,transform:"translate(".concat([x.left,x.top].join(","),")")})]})})},f=e=>{let{width:t=700,height:s=400}=e;return(0,a.jsx)(j,{data:p,width:t,height:s})};var m=s(6820),g=s(88),b=s(8893),w=s(6438),k=s(505),y=s(5079);let v=(0,a.jsxs)("p",{children:["A"," ",(0,a.jsx)("a",{href:"https://www.data-to-viz.com/graph/area.html",children:"stacked area chart"})," ","is an evolution of an ",(0,a.jsx)(l(),{href:"area-plot",children:"area chart"})," used to display the evolution of several groups in a dataset. This section explains how to build it with ",(0,a.jsx)("code",{children:"d3.js"})," and ",(0,a.jsx)("code",{children:"react"}),". It focus on stacking, so make sure to read the ",(0,a.jsx)(l(),{href:"area-plot",children:"area chart"})," ","section first."]});function A(){return(0,a.jsxs)(n.A,{title:"Stacked Area charts with React",seoDescription:"How to build a stacked area chart with React and D3.js. A set of re-usable components",children:[(0,a.jsx)(i.Z,{title:"Stacked Area charts",description:v,chartType:"stackedArea"}),(0,a.jsx)("h2",{id:"data",children:"The Data"}),(0,a.jsxs)("p",{children:["Most of the time the input dataset is an ",(0,a.jsx)("b",{children:"array"})," where each item is an ",(0,a.jsx)("b",{children:"object"}),".",(0,a.jsx)("br",{}),"Each object provides information for a step on the X axis. It has a value like ",(0,a.jsx)("code",{children:"x"})," that provides the exact position on the X axis. It then has ",(0,a.jsx)("b",{children:"several"})," numeric values, one for each group of the dataset."]}),(0,a.jsx)("br",{}),(0,a.jsx)("p",{children:"Here is a minimal example:"}),(0,a.jsx)(h.d,{code:T}),(0,a.jsx)("h3",{children:"→ Wide and Long formats"}),(0,a.jsxs)("p",{children:["The format described above is often called the ",(0,a.jsx)("b",{children:"wide"})," format. Another common format is the ",(0,a.jsx)("b",{children:"long"})," format, where each object in the array provides information for 1 group only. (The array becomes way"," ",(0,a.jsx)("i",{children:"longer"})," \uD83D\uDE43)"]}),(0,a.jsxs)("p",{children:["If your dataset is formatted using the long format, you can transform it using the ",(0,a.jsx)("code",{children:"pivotWider"})," function below:"]}),(0,a.jsx)(g.U,{startOpen:!1,title:(0,a.jsx)("span",{children:"Pivot function"}),children:(0,a.jsx)(h.d,{code:E})}),(0,a.jsxs)("h3",{children:["→ ",(0,a.jsx)("code",{children:".csv"})," data"]}),(0,a.jsxs)("p",{children:["If your data is in ",(0,a.jsx)("code",{children:".csv"})," format, you can translate it thanks to the ",(0,a.jsx)("code",{children:"csvParse()"})," function of d3. I'll write a blogpost soon on how to deal with the csv format."," ",(0,a.jsx)(l(),{href:"/subscribe",children:"Subscribe"})," to the project to know when it is ready!"]}),(0,a.jsx)(b.H,{text:"Add some more hints on how to type those data objects"}),(0,a.jsx)("h2",{id:"skeleton",children:"Component skeleton"}),(0,a.jsxs)("p",{children:["The goal here is to create a ",(0,a.jsx)("code",{children:"StackedAreaGraph"})," component that will be stored in a ",(0,a.jsx)("code",{children:"StackedAreaGraph.tsx"})," file. This component requires 3 props to render: a ",(0,a.jsx)("code",{children:"width"}),", a"," ",(0,a.jsx)("code",{children:"height"}),", and some ",(0,a.jsx)("code",{children:"data"}),"."]}),(0,a.jsxs)("p",{children:["The shape of the ",(0,a.jsx)("code",{children:"data"})," is described above. The"," ",(0,a.jsx)("code",{children:"width"})," and ",(0,a.jsx)("code",{children:"height"})," will be used to render an"," ",(0,a.jsx)("code",{children:"svg"})," element in the DOM, in which we will insert the stacked area graph."]}),(0,a.jsxs)("p",{children:["To put it in a nutshell, that's the skeleton of our"," ",(0,a.jsx)("code",{children:"StackedAreaGraph"})," component:"]}),(0,a.jsx)(h.d,{code:B}),(0,a.jsxs)("p",{children:["It's fundamental to understand that with this code organization, d3.js will be used to prepare the SVG ",(0,a.jsx)("code",{children:"circle"}),", but it's React that will render them in the ",(0,a.jsx)("code",{children:"return()"})," statement. We won't use d3 methods like ",(0,a.jsx)("code",{children:"append"})," that you can find in usual"," ",(0,a.jsx)("a",{href:"https://www.d3-graph-gallery.com",children:"d3.js examples"}),"."]}),(0,a.jsx)("h2",{id:"stacking",children:"Stacking"}),(0,a.jsxs)("p",{children:["The trickiest part of a stacked area chart creation is probably the"," ",(0,a.jsx)("b",{children:"stacking"})," step."]}),(0,a.jsxs)("p",{children:[(0,a.jsx)("br",{}),"Series are displayed one on top of each other and you have to compute their positions on the Y axis. Fortunately ",(0,a.jsx)("code",{children:"d3.js"})," is here to the rescue with a ",(0,a.jsx)("code",{children:"d3.stack()"})," function. This is what you need to do to stack your data:"]}),(0,a.jsx)("h3",{children:"→ Build a stack generator"}),(0,a.jsxs)("p",{children:[(0,a.jsx)("code",{children:"d3.stack()"})," returns a ",(0,a.jsx)("b",{children:"stack generator"})," that we call"," ",(0,a.jsx)("code",{children:"stackSeries"})," here. ",(0,a.jsx)("code",{children:"d3.stack()"})," is a function that returns a function."]}),(0,a.jsxs)("p",{children:[(0,a.jsx)("code",{children:".keys()"})," is used to pass the list of groups that we want to stack on top of each other. Those keys are the ones used in the input dataset described in the ",(0,a.jsx)(l(),{href:"#data",children:"data section"}),"."]}),(0,a.jsx)(h.d,{code:S}),(0,a.jsx)("h3",{children:"→ Use the generator"}),(0,a.jsx)("p",{children:"Now that this stack generator is available, we just have to run it on our dataset to get the stacked values"}),(0,a.jsx)(h.d,{code:D}),(0,a.jsxs)("p",{children:["That's it. ",(0,a.jsx)("code",{children:"series"})," contains the ",(0,a.jsx)("b",{children:"stacked values"})," that we can transform in ",(0,a.jsx)("b",{children:"coordinates"})," for the shapes we need to draw."]}),(0,a.jsx)("h3",{children:"→ Output"}),(0,a.jsx)("p",{children:"The output has kind of an usual shape and it's important to understand how it's formatted since shapes will be drawn from it."}),(0,a.jsxs)("p",{children:["Our generated stacked ",(0,a.jsx)("code",{children:"series"})," object is an array. It has"," ",(0,a.jsx)("b",{children:"1 item per group"})," in the dataset. ",(0,a.jsx)("br",{}),"For each group, there are 3 things:"]}),(0,a.jsxs)("ul",{children:[(0,a.jsxs)("li",{children:["a ",(0,a.jsx)("code",{children:"key"})," prop that provides the group key"]}),(0,a.jsxs)("li",{children:["a ",(0,a.jsx)("code",{children:"index"})," prop that provides its index \uD83E\uDD37"]}),(0,a.jsxs)("li",{children:["Several arrays of length 2. Each array describes the position of the group for a ",(0,a.jsx)("b",{children:"timestamp"}),". First item in the array provides the"," ",(0,a.jsx)("b",{children:"bottom"}),"position, second item provides the ",(0,a.jsx)("b",{children:"top"}),"."]})]}),(0,a.jsx)(h.d,{code:I}),(0,a.jsx)("h2",{id:"basic",children:"Basic stacked area chart"}),(0,a.jsxs)("p",{children:["The ",(0,a.jsx)("code",{children:"series"})," object described above has all the information we need to draw a stacked area chart. We can ",(0,a.jsx)("b",{children:"loop"})," through it and draw a ",(0,a.jsx)("code",{children:"path"})," for each group, one by one."]}),(0,a.jsxs)("p",{children:["Note that for each group the ",(0,a.jsx)("code",{children:"area()"})," function of d3 is invoked. The usage of this function is deeply described in the"," ",(0,a.jsx)(l(),{href:"/area-plot",children:"area section"})," of the gallery."]}),(0,a.jsx)(w.J,{size:"sm",isFilled:!0,href:"/area-plot",children:"Area chart section"}),(0,a.jsx)("p",{children:(0,a.jsx)("br",{})}),(0,a.jsx)("p",{children:"Here is a minimal code example wrapping the whole process."}),(0,a.jsx)(d.$,{vizName:"StackedAreaChartBasic",VizComponent:f,height:400,maxWidth:600,caption:"basic stacked area chart with react and d3.js"}),(0,a.jsx)(k.r,{chartId:"stackedArea"}),(0,a.jsx)(m.Z,{chartId:"stackedArea"}),(0,a.jsx)("h2",{id:"Offset & curve",children:"Offset and Curve types"}),(0,a.jsxs)("p",{children:["Stacked area charts can easily be customized to use other ",(0,a.jsx)("b",{children:"offset"})," ","and ",(0,a.jsx)("b",{children:"smoothing"})," algorithm. This process can be used to create"," ",(0,a.jsx)(l(),{href:"/streamchart",children:"streamgraphs"})," which are a"," ",(0,a.jsx)("b",{children:"varation"})," of the stacked area graph."]}),(0,a.jsxs)("p",{children:["The ",(0,a.jsx)("b",{children:"offset type"})," controls how the data are stacked. You can read about the offset options available in the"," ",(0,a.jsx)("a",{href:"https://github.com/d3/d3-shape#stack-offsets",children:"official documentation"})," ","or play with the little example below."]}),(0,a.jsxs)("p",{children:["The ",(0,a.jsx)("b",{children:"curve type"})," controls how the ",(0,a.jsx)("b",{children:"smoothing"})," of each shape is made. There are a"," ",(0,a.jsx)("a",{href:"https://github.com/d3/d3-shape#curves",children:"myriad of options"})," ","described in the official documentation."]}),(0,a.jsx)(d.$,{vizName:"StreamGraphShapeTransition",VizComponent:y.v,height:400,maxWidth:600,caption:"Try d3.js various options to offset the data and smooth shapes. See a smooth transition between options."}),(0,a.jsxs)("p",{children:["The animation uses ",(0,a.jsx)("code",{children:"react-spring"})," to run. I'll publish a full blogpost on the topic soon!"]}),(0,a.jsx)(w.J,{href:"/subscribe",isFilled:!0,size:"sm",children:"Get notified"}),(0,a.jsx)("p",{children:(0,a.jsx)("br",{})}),(0,a.jsx)("div",{className:"full-bleed border-t h-0 bg-gray-100 my-3"}),(0,a.jsx)(o.Z,{chartFamily:"evolution"}),(0,a.jsx)("div",{className:"mt-20"})]})}let T="\nconst data = [\n  {\n    x: 1,\n    groupA: 38,\n    groupB: 19,\n  },\n  {\n    x: 2,\n    groupA: 16,\n    groupB: 14,\n  },\n  ...\n];\n".trim(),S='\nconst stackSeries = d3\n  .stack()\n  .keys(["groupA", "groupB"])\n\n// stackSeries is now a function that takes the kind of\n// dataset above and stack the series\n'.trim(),D="\nconst series = stackSeries(data);\n".trim(),E="\ntype LongDataItem = {\n  date: string;\n  group: string;\n  value: number;\n};\n\ntype WideDataItem = {\n  date: string;\n} & { [key: string]: number }\n\nconst pivotWider = (data: LongDataItem[]) => {\n  const result: WideDataItem[] = [];\n\n  data.forEach((item) => {\n      const existingEntry = result.find((entry) => entry.date === item.date);\n\n      if (existingEntry) {\n          existingEntry[item.group] = item.value;\n      } else {\n          const newEntry = { date: item.date };\n          newEntry[item.group] = item.value;\n          result.push(newEntry);\n      }\n  });\n\n  return result;\n}\n".trim(),I="\n[\n  // First group of the dataset: at the very bottom of the stack\n  [\n    [0, 38, data: {…}], // First timestamp of the dataset: shape goes from 0 to 38 on the Y axis\n    [0, 16, data: {…}], // Second timestamp: shape goes from 0 to 16\n    ...                 // 1 entry per timestamp\n    key: 'groupA',      // group name\n    index: 0            // index\n  ],\n\n   // Second group of the dataset on top of the first one\n  [[38, 57, data: {…}], ..., key: 'groupB', index: 1],\n\n  //Third group\n  [[57, 72, data: {…}], ..., key: 'groupC', index: 2],\n  ...\n]\n".trim(),B='\nimport * as d3 from "d3"; // we will need d3.js\n\ntype WideDataItem = {\n  date: string;\n} & { [key: string]: number }\n\ntype StackedAreaGraphProps = {\n  width: number;\n  height: number;\n  data: WideDataItem[];\n};\n\nexport const StackedAreaGraph = ({ width, height, data }: StackedAreaGraphProps) => {\n\n  // read the data\n  // find the list of groups to display\n  // stack the data\n  // build the shapes\n\n  return (\n    <div>\n      <svg width={width} height={height}>\n        // render all the shapes\n      </svg>\n    </div>\n  );\n};\n'.trim()}},function(e){e.O(0,[3996,665,5660,2236,7303,645,1188,3555,9774,2888,179],function(){return e(e.s=7954)}),_N_E=e.O()}]);