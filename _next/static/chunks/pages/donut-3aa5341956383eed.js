(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6387],{9086:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/donut",function(){return n(4908)}])},4908:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return I}});var a=n(5893),i=n(7294),s=n(1884),r=n(8807),o=n(6978),c=n(33),l=n(7197),d=n(3485),h=n(8193),u=[{name:"Mark",value:90},{name:"Robert",value:12},{name:"Emily",value:34},{name:"Marion",value:53},{name:"Nicolas",value:98}],g=n(8875),f=["#e0ac2b","#e85252","#6689c6","#9a6fb0","#a53253","#69b3a2"],p=function(e){var t=e.width,n=e.height,s=e.data,r=Math.min(t,n)/2-30,o=(0,i.useMemo)((function(){return g.ve8().value((function(e){return e.value}))(s)}),[s]),c=(0,i.useMemo)((function(){var e=g.Nb1();return o.map((function(t){return e({innerRadius:70,outerRadius:r,startAngle:t.startAngle,endAngle:t.endAngle})}))}),[r,o]);return(0,a.jsx)("svg",{width:t,height:n,style:{display:"inline-block"},children:(0,a.jsx)("g",{transform:"translate(".concat(t/2,", ").concat(n/2,")"),children:c.map((function(e,t){return(0,a.jsx)("path",{d:e,fill:f[t]},t)}))})})},x=function(e){var t=e.width,n=void 0===t?700:t,i=e.height,s=void 0===i?400:i;return(0,a.jsx)(p,{data:u,width:n,height:s})},m=n(1664),v=[{name:"Mark",value:90},{name:"Robert",value:12},{name:"Emily",value:34},{name:"Marion",value:53},{name:"Nicolas",value:58}],j=["#e0ac2b","#e85252","#6689c6","#9a6fb0","#a53253","#69b3a2"],b=function(e){var t=e.width,n=e.height,s=e.data,r=Math.min(t-300,n-100)/2,o=r/2,c=(0,i.useMemo)((function(){return g.ve8().value((function(e){return e.value}))(s)}),[s]),l=g.Nb1(),d=c.map((function(e,t){var n={innerRadius:o,outerRadius:r,startAngle:e.startAngle,endAngle:e.endAngle},i=l.centroid(n),s=l(n),c={innerRadius:r+20,outerRadius:r+20,startAngle:e.startAngle,endAngle:e.endAngle},d=l.centroid(c),h=d[0]>0,u=d[0]+50*(h?1:-1),g=h?"start":"end",f=e.data.name+" ("+e.value+")";return(0,a.jsxs)("g",{children:[(0,a.jsx)("path",{d:s,fill:j[t]}),(0,a.jsx)("circle",{cx:i[0],cy:i[1],r:2}),(0,a.jsx)("line",{x1:i[0],y1:i[1],x2:d[0],y2:d[1],stroke:"black",fill:"black"}),(0,a.jsx)("line",{x1:d[0],y1:d[1],x2:u,y2:d[1],stroke:"black",fill:"black"}),(0,a.jsx)("text",{x:u+(h?2:-2),y:d[1],textAnchor:g,dominantBaseline:"middle",fontSize:14,children:f})]},t)}));return(0,a.jsx)("svg",{width:t,height:n,style:{display:"inline-block"},children:(0,a.jsx)("g",{transform:"translate(".concat(t/2,", ").concat(n/2,")"),children:d})})},y=function(e){var t=e.width,n=void 0===t?700:t,i=e.height,s=void 0===i?400:i;return(0,a.jsx)(b,{data:v,width:n,height:s})},w=n(7814),A=n(6974),k=(0,a.jsxs)("p",{children:["The ",(0,a.jsx)("a",{href:"https://www.data-to-viz.com/graph/donut.html",children:"donut chart"})," ","is a very common yet"," ",(0,a.jsx)("a",{href:"https://www.data-to-viz.com/caveat/pie.html",children:"criticized"})," way to represent the value of a few groups in a dataset. This page explains how to build one using d3.js and react. It starts with a basic example and then focus on customization like legends, hover effect and dataset transition."]}),M='\nconst data = [\n  {name:"Mark", value: 90},\n  {name:"Robert", value: 12},\n  {name:"Emily", value: 34},\n  {name:"Marion", value: 53},\n  {name:"Nicolas", value: 98},\n]\n'.trim(),R="\nconst pieGenerator = d3.pie().value((d) => d.value);\nconst pie = pieGenerator(data);\n".trim(),T="\nconst arcPathGenerator = d3.arc();\nconst arcs pie.map((p) =>\n      arcPathGenerator({\n        innerRadius: 50, // makes a donut instead of a pie\n        outerRadius: radius,\n        startAngle: p.startAngle,\n        endAngle: p.endAngle,\n      })\n    );\n".trim(),_="\nconst sliceInfo = {\n  innerRadius,\n  outerRadius: radius,\n  startAngle: start,\n  endAngle: end,\n};\nconst centroid = arcGenerator.centroid(sliceInfo); // [x,y] position of the centroid\nconst slicePath = arcGenerator(sliceInfo); // string: the path of the slice\n".trim(),N="\nonMouseEnter={() => {\n  if (ref.current) {\n    ref.current.classList.add(hasHighlight);\n  }\n}}\n".trim(),z="\n.container .slice {\n  transition-duration: 0.3s;\n  transition-property: filter, opacity;\n  filter: saturate(100%);\n  opacity: 1;\n}\n\n.container.hasHighlight .slice {\n  filter: saturate(50%);\n  opacity: 0.2;\n}\n\n.container.hasHighlight .slice:hover {\n  filter: saturate(100%);\n  opacity: 1;\n}\n".trim();function I(){return(0,a.jsxs)(s.A,{title:"Donut chart with React",seoDescription:"How to build a donuu chart with React and D3.js. A set of re-usable components",children:[(0,a.jsx)(r.Z,{title:"Donut chart",description:k,chartType:"donut"}),(0,a.jsxs)(d.U,{title:"Dataset",startOpen:!0,children:[(0,a.jsxs)("p",{children:["The dataset required to build a donut chart is an array where each item represents a group. Each item is an object with 2 properties. They provide the group name (",(0,a.jsx)("code",{children:"name"}),") and its value (",(0,a.jsx)("code",{children:"value"}),")."]}),(0,a.jsx)("br",{}),(0,a.jsx)("p",{children:"For instance, here is the dataset used for the simple donut chart below:"}),(0,a.jsx)(h.d,{code:M})]}),(0,a.jsxs)(d.U,{title:"Most basic donut chart",startOpen:!0,children:[(0,a.jsxs)("p",{children:["The process to build a donut chart is highly similar as the process to build a ",(0,a.jsx)(m.default,{href:"pie",children:"pie chart"}),". It is extensively descibed"," ",(0,a.jsx)(m.default,{href:"pie",children:"here"}),"."]}),(0,a.jsx)("br",{}),(0,a.jsxs)("p",{children:["Basically, the ",(0,a.jsx)("code",{children:"pie()"})," function of d3 is used to compute the start and end angles of each group."]}),(0,a.jsx)(h.d,{code:R}),(0,a.jsx)("br",{}),(0,a.jsxs)("p",{children:["This allows to compute arcs thanks to the ",(0,a.jsx)("code",{children:"arc()"})," function of d3. This function expects a ",(0,a.jsx)("code",{children:"innerRadius"})," argument that controls the size of the inner circle of the donut chart. The only difference between a pie and a donut is this inner radius."]}),(0,a.jsx)(h.d,{code:T}),(0,a.jsx)("br",{}),(0,a.jsx)("p",{children:"And that's it. This array of path can be renderer using react using a map as shown in the example below."}),(0,a.jsx)("br",{}),(0,a.jsx)("br",{}),(0,a.jsx)(c.$,{vizName:"DonutChartBasic",VizComponent:x,maxWidth:400,height:400,caption:"basic donut chart with react and d3.js"})]}),(0,a.jsxs)(d.U,{title:"Legend",startOpen:!0,children:[(0,a.jsx)("p",{children:"The minimal donut chart above is completely useless as long as it does not display the group names. Adding a side legend would be straightforward but that's a bad practice. It's indeed very annoying for the reader to continuously switch between the legend and the chart."}),(0,a.jsx)("p",{children:"Instead I suggest to add clean inline legends. A little dot will be located on each slice centroid. From there a first segment will go out of the donut, followed by a second horizontal segment that goes to the label."}),(0,a.jsx)("p",{children:"The difficulty here is to get the position of the slice centroid and of the line inflexion point."}),(0,a.jsxs)("p",{children:["The ",(0,a.jsx)("code",{children:"centroid()"})," function of d3 is all we need for that. It gives the ",(0,a.jsx)("code",{children:"x"})," and ",(0,a.jsx)("code",{}),"y positions of the centroid of an ",(0,a.jsx)("code",{children:"arc"}),", arc that we used to build the donut slice anyway."]}),(0,a.jsx)(h.d,{code:_}),(0,a.jsx)("p",{children:"The exact same techniique is used to get the position of the inflexion point. An additional arc is computed, located out of the donut area, and with a thickness of 0. Its centroid is the inflexion point."}),(0,a.jsx)(c.$,{vizName:"DonutChartLegend",VizComponent:y,maxWidth:800,height:400,caption:"A donut chart with clean inline legends, built thanks to the centroid function of d3.js."}),(0,a.jsx)("p",{children:"This approach is a good start when it comes to add legend on a donut chart. It has some limitations though."}),(0,a.jsx)("p",{children:"If many groups are available, we will likely get some overlaps between labels, resulting in a messy figure. This could be avoided but would require a good amount of additional code. It is thus ignored here."})]}),(0,a.jsxs)(d.U,{title:"Hover effect",startOpen:!0,children:[(0,a.jsx)("p",{children:"A nice interactive touch for a donut chart is to add a hover effect. On the graph below, hovering over a slice will highlight it."}),(0,a.jsxs)("p",{children:["Several approaches are available to trigger that king of interaction. They are extensively described in this"," ",(0,a.jsx)(m.default,{href:"add-hover-interaction-to-graph",children:"specific post"}),"."]}),(0,a.jsx)("p",{children:"For a donut chart I suggest to slightly dim the groups that are not hovered over. This can be done by toogling a class on the donut svg container and using css selectors smartly."}),(0,a.jsxs)("p",{children:["Adding a ",(0,a.jsx)("code",{children:"hasHighlight"})," class can be done using the"," ",(0,a.jsx)("code",{children:"onMouseEnter"})," attribute of any svg element. The opposite can then be done using ",(0,a.jsx)("code",{children:"onMouseLeave"})," and the"," ",(0,a.jsx)("code",{children:"remove()"})," function."]}),(0,a.jsx)(h.d,{code:N}),(0,a.jsx)("p",{children:"Then, this is how the css should look like to keep a strong opacity on the hovered group only:"}),(0,a.jsx)(h.d,{code:z}),(0,a.jsx)(c.$,{vizName:"DonutChartHover",VizComponent:w.W,maxWidth:800,height:400,caption:"A donut chart with clean inline legends, built thanks to the centroid function of d3.js."})]}),(0,a.jsx)(c.$,{vizName:"DonutDatasetTransition",VizComponent:A.M,maxWidth:800,height:400,caption:"A donut chart with clean inline legends, built thanks to the centroid function of d3.js."}),(0,a.jsx)("div",{className:"full-bleed border-t h-0 bg-gray-100 my-3"}),(0,a.jsx)(l.Z,{chartFamily:"partOfAWhole"}),(0,a.jsx)("div",{className:"mt-20"}),(0,a.jsx)(o.Z,{})]})}},7814:function(e,t,n){"use strict";n.d(t,{W:function(){return h}});var a=n(5893),i=[{name:"Mark",value:90},{name:"Robert",value:12},{name:"Emily",value:34},{name:"Marion",value:53},{name:"Nicolas",value:58}],s=n(7294),r=n(8875),o=n(1790),c=n.n(o),l=["#e0ac2b","#e85252","#6689c6","#9a6fb0","#a53253","#69b3a2"],d=function(e){var t=e.width,n=e.height,i=e.data,o=(0,s.useRef)(null),d=Math.min(t-300,n-100)/2,h=d/2,u=(0,s.useMemo)((function(){return r.ve8().value((function(e){return e.value}))(i)}),[i]),g=r.Nb1(),f=u.map((function(e,t){var n={innerRadius:h,outerRadius:d,startAngle:e.startAngle,endAngle:e.endAngle},i=g.centroid(n),s=g(n),r={innerRadius:d+20,outerRadius:d+20,startAngle:e.startAngle,endAngle:e.endAngle},u=g.centroid(r),f=u[0]>0,p=u[0]+50*(f?1:-1),x=f?"start":"end",m=e.data.name+" ("+e.value+")";return(0,a.jsxs)("g",{className:c().slice,onMouseEnter:function(){o.current&&o.current.classList.add(c().hasHighlight)},onMouseLeave:function(){o.current&&o.current.classList.remove(c().hasHighlight)},children:[(0,a.jsx)("path",{d:s,fill:l[t]}),(0,a.jsx)("circle",{cx:i[0],cy:i[1],r:2}),(0,a.jsx)("line",{x1:i[0],y1:i[1],x2:u[0],y2:u[1],stroke:"black",fill:"black"}),(0,a.jsx)("line",{x1:u[0],y1:u[1],x2:p,y2:u[1],stroke:"black",fill:"black"}),(0,a.jsx)("text",{x:p+(f?2:-2),y:u[1],textAnchor:x,dominantBaseline:"middle",fontSize:14,children:m})]},t)}));return(0,a.jsx)("svg",{width:t,height:n,style:{display:"inline-block"},children:(0,a.jsx)("g",{transform:"translate(".concat(t/2,", ").concat(n/2,")"),className:c().container,ref:o,children:f})})},h=function(e){var t=e.width,n=void 0===t?700:t,s=e.height,r=void 0===s?400:s;return(0,a.jsx)(d,{data:i,width:n,height:r})}},1790:function(e){e.exports={container:"donut-chart_container__a42jO",slice:"donut-chart_slice__VlYyf",hasHighlight:"donut-chart_hasHighlight__MRvya"}}},function(e){e.O(0,[8109,5660,7524,358,4525,9774,2888,179],(function(){return t=9086,e(e.s=t);var t}));var t=e.O();_N_E=t}]);