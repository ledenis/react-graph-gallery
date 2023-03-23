(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[738],{2388:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/line-chart",function(){return s(1706)}])},6260:function(e,t,s){"use strict";s.d(t,{U:function(){return n}});var i=s(5893),r=s(7294);let n=e=>{let{startOpen:t,title:s,children:n,toc:a}=e,[l,h]=(0,r.useState)(t);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("h2",{className:"cursor-pointer",onClick:()=>h(!l),id:a,children:[l?(0,i.jsx)("span",{className:"text-purple-700 w-4 mr-2 hover:text-purple-900 inline-block",children:"-"}):(0,i.jsx)("span",{className:"text-purple-700 w-4 mr-2 hover:text-purple-900 inline-block",children:"+"}),s]}),(0,i.jsx)("div",{className:"transition-max-height ease-in duration-300  "+(l?"max-h-full":"max-h-0")+" "+(l?"overflow-visible":"overflow-hidden"),children:n})]})}},1706:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return v}});var i=s(5893),r=s(7294),n=s(153),a=s(9965),l=s(7262),h=s(2594),o=s(6260),c=s(3572),d=s(1122),x=s(1664),u=s.n(x);let p=[{x:1,y:90},{x:2,y:12},{x:3,y:34},{x:4,y:53},{x:5,y:52},{x:6,y:9},{x:7,y:18},{x:8,y:78},{x:9,y:28},{x:10,y:34}];var m=s(5250);let j={top:30,right:30,bottom:50,left:50},f=e=>{let{width:t,height:s,data:n}=e,a=(0,r.useRef)(null),l=t-j.right-j.left,h=s-j.top-j.bottom,[o,c]=m.Wem(n,e=>e.y),d=(0,r.useMemo)(()=>m.BYU().domain([0,c||0]).range([h,0]),[n,s]),[x,u]=m.Wem(n,e=>e.x),p=(0,r.useMemo)(()=>m.BYU().domain([0,u||0]).range([0,l]),[n,t]);(0,r.useLayoutEffect)(()=>{let e=m.Ys(a.current);e.selectAll("*").remove();let t=m.LLu(p);e.append("g").attr("transform","translate(0,"+h+")").call(t);let s=m.y4O(d);e.append("g").call(s)},[p,d,h]);let f=m.jvg().x(e=>p(e.x)).y(e=>d(e.y)),g=f(n);return g?(0,i.jsx)("div",{children:(0,i.jsxs)("svg",{width:t,height:s,children:[(0,i.jsx)("g",{width:l,height:h,transform:"translate(".concat([j.left,j.top].join(","),")"),children:(0,i.jsx)("path",{d:g,opacity:1,stroke:"#9a6fb0",fill:"none",strokeWidth:2})}),(0,i.jsx)("g",{width:l,height:h,ref:a,transform:"translate(".concat([j.left,j.top].join(","),")")})]})}):null},g=e=>{let{width:t=700,height:s=400}=e;return(0,i.jsx)(f,{data:p,width:t,height:s})};var b=s(6820);let y=(0,i.jsxs)("p",{children:["A ",(0,i.jsx)("a",{href:"https://www.data-to-viz.com/graph/line.html",children:"line chart"})," or line graph displays the evolution of one or several numeric variables. This section describes how to build line charts on the web with"," ",(0,i.jsx)("code",{children:"d3.js"})," and ",(0,i.jsx)("code",{children:"react"}),". It starts very basic and then explains how to add more complex features like brushing, adding hover effects and more."]}),w="\nconst data = [\n  {x:1, y: 90},\n  {x: 2, y: 12},\n  {x: 3, , y: 34},\n  {x: 4, , y: 53},\n  {x: 5, , y: 98},\n]\n".trim();function v(){return(0,i.jsxs)(n.A,{title:"Line charts with React",seoDescription:"How to build a line chart with React and D3.js. A set of re-usable components",children:[(0,i.jsx)(a.Z,{title:"Line charts",description:y,chartType:"line"}),(0,i.jsxs)(o.U,{title:"Dataset",startOpen:!0,children:[(0,i.jsxs)("p",{children:["The dataset required to build a line chart is usually an array where each item is an object providing the ",(0,i.jsx)("code",{children:"x"})," and the"," ",(0,i.jsx)("code",{children:"x"})," values of the data point."]}),(0,i.jsx)("br",{}),(0,i.jsx)("p",{children:"Here is a minimal example:"}),(0,i.jsx)(c.d,{code:w}),(0,i.jsxs)("p",{children:["Note: if your data is in ",(0,i.jsx)("code",{children:".csv"})," format, you can translate it thanks to the ",(0,i.jsx)("code",{children:"d3.csv()"})," function as suggested"," ",(0,i.jsx)("a",{href:"https://d3-graph-gallery.com/graph/line_basic.html",children:"here"}),"."]})]}),(0,i.jsxs)(o.U,{title:"Most basic line chart",startOpen:!0,children:[(0,i.jsxs)("p",{children:["There is nothing really tricky when it comes to build a basic barplot with react, all is pretty close to the"," ",(0,i.jsx)("a",{href:"https://d3-graph-gallery.com/graph/line_basic.html",children:"d3-only examples"}),"."]}),(0,i.jsxs)("p",{children:["First of all you probably want to add some margins around the dimensions provided in the component properties as described"," ",(0,i.jsx)(u(),{href:"/build-axis-with-react",children:"here"}),"."]}),(0,i.jsxs)("p",{children:["Both the X and Y axis are using a numeric scale thanks to the"," ",(0,i.jsx)("code",{children:"scaleLinear()"})," function here. Note that a usual struggle is to deal with the date format but this is described in the timeseries section."]}),(0,i.jsx)(d.$,{vizName:"LineChartBasic",VizComponent:g,height:400,maxWidth:600,caption:"most basic line chart with react and d3.js"})]}),(0,i.jsx)(b.Z,{chartId:"line"}),(0,i.jsx)(o.U,{title:"Multiple groups",startOpen:!0,children:(0,i.jsx)("p",{children:"Todo, same thing but with several groups"})}),(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),(0,i.jsx)("div",{className:"full-bleed border-t h-0 bg-gray-100 my-3"}),(0,i.jsx)(l.Z,{chartFamily:"evolution"}),(0,i.jsx)("div",{className:"mt-20"}),(0,i.jsx)(h.Z,{})]})}}},function(e){e.O(0,[3996,5250,5660,645,7934,9774,2888,179],function(){return e(e.s=2388)}),_N_E=e.O()}]);