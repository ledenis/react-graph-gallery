(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5503],{7591:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/streamchart",function(){return r(2030)}])},2030:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return X}});var i=r(5893),s=r(7294),n=r(153),a=r(9965),o=r(7262),h=r(3572),l=r(1122),d=r(1664),c=r.n(d),p=r(6820);let u=[{x:1,groupA:38,groupB:19,groupC:9,groupD:4},{x:2,groupA:16,groupB:14,groupC:96,groupD:40},{x:3,groupA:64,groupB:96,groupC:64,groupD:40},{x:4,groupA:32,groupB:48,groupC:64,groupD:40},{x:5,groupA:12,groupB:18,groupC:14,groupD:10}];var x=r(665);let g={top:30,right:30,bottom:50,left:50},m=e=>{let{width:t,height:r,data:n}=e,a=t-g.right-g.left,o=r-g.top-g.bottom,h=["groupA","groupB","groupC","groupD"],l=x.knu().keys(h).order(x.Qxt).offset(x.KuJ),d=l(n),c=(0,s.useMemo)(()=>x.BYU().domain([-200,200]).range([o,0]),[n,r]),[p,u]=x.Wem(n,e=>e.x),m=(0,s.useMemo)(()=>x.BYU().domain([p||0,u||0]).range([0,a]),[n,t]),f=x.PKp().domain(h).range(["#e0ac2b","#e85252","#6689c6","#9a6fb0","#a53253"]),j=x.SOn().x(e=>m(e.data.x)).y1(e=>c(e[1])).y0(e=>c(e[0])).curve(x.zgE),b=d.map((e,t)=>{let r=j(e);return(0,i.jsx)("path",{d:r,opacity:1,stroke:"grey",fill:f(e.key),fillOpacity:.8},t)}),y=m.ticks(5).map((e,t)=>(0,i.jsxs)("g",{children:[(0,i.jsx)("line",{x1:m(e),x2:m(e),y1:0,y2:o,stroke:"#808080",opacity:.2}),(0,i.jsx)("text",{x:m(e),y:o+10,textAnchor:"middle",alignmentBaseline:"central",fontSize:9,stroke:"#808080",opacity:.8,children:e})]},t));return(0,i.jsx)("div",{children:(0,i.jsx)("svg",{width:t,height:r,children:(0,i.jsxs)("g",{width:a,height:o,transform:"translate(".concat([g.left,g.top].join(","),")"),children:[y,b]})})})},f=e=>{let{width:t=700,height:r=400}=e;return(0,i.jsx)(m,{data:u,width:t,height:r})};var j=r(505);let b=e=>{let t=[];return e.forEach(e=>{let r=t.find(t=>t.date===e.date);if(r)r[e.group]=e.value;else{let r={date:e.date};r[e.group]=e.value,t.push(r)}}),t},y=x.i$Z("%B %Y"),v=e=>{let{xScale:t,height:r}=e,s=t.ticks(5).map((e,s)=>(0,i.jsxs)("g",{children:[(0,i.jsx)("line",{x1:t(e),x2:t(e),y1:0,y2:r,stroke:"#808080",opacity:.2}),(0,i.jsx)("text",{x:t(e),y:r+10,textAnchor:"middle",alignmentBaseline:"central",fontSize:9,stroke:"#808080",fill:"none",opacity:.8,children:y(e)})]},s));return(0,i.jsx)(i.Fragment,{children:s})};var w=r(2236);let k=e=>{let{labelInfos:t,xStart:r,xEnd:s,biggestValue:n}=e,a=x.BYU().domain([0,n]).range([r+30,s-20]),o=t.map((e,t)=>{let s=Math.floor(e.value/1e6);return(0,i.jsxs)("g",{children:[(0,i.jsx)("line",{x1:r+2,x2:r+30-2,y1:e.position,y2:e.position,stroke:"#808080",opacity:.9,"stroke-dasharray":2}),(0,i.jsx)(S,{color:e.color,x:a(0),y:e.position-10,width:a(e.value)-a(0)}),(0,i.jsx)("text",{x:r+30+2,y:e.position,textAnchor:"start",alignmentBaseline:"central",fontSize:12,stroke:"#808080",fill:"none",children:e.name+" | "+s+"M"})]},t)});return(0,i.jsx)(i.Fragment,{children:o})},S=e=>{let{color:t,x:r,y:s,width:n}=e,a=(0,w.q_)({to:{width:n},config:{friction:10,bounce:0}});return(0,i.jsx)(w.q.rect,{x:r,y:s,width:a.width,height:20,opacity:.7,stroke:t,fill:t,fillOpacity:.3,strokeWidth:1,rx:1})},B=e=>{let{x:t,height:r}=e;return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("line",{x1:t,x2:t,y1:0,y2:r,stroke:"black",strokeWidth:1})})};var T=r(1833),D=r.n(T);let A={top:10,right:250,bottom:90,left:0},I=x.Z1g("%Y-%m-%d"),C=e=>{let{width:t,height:r,data:n,startDate:a}=e,[o,h]=(0,s.useState)(null),l=t-A.right-A.left,d=r-A.top-A.bottom,c=n.filter(e=>I(e.date)>a),p=x.Fp7(c.map(e=>e.value)),u=[...new Set(n.map(e=>e.group))],g=b(c),m=x.knu().keys(u).order(x.Qxt).offset(x.KuJ),f=m(g),j=f.flatMap(e=>e.map(e=>e[1])),y=f.flatMap(e=>e.map(e=>e[0])),w=x.BYU().domain([Math.min(...y),Math.max(...j)]).range([d,0]),S=x.Wem(c.map(e=>I(e.date))),T=x.Xf().domain(S).range([0,l]),C=x.PKp().domain(u).range(["#e0ac2b","#e85252","#6689c6","#9a6fb0","#a53253"]),_=x.SOn().x(e=>T(I(e.data.date))).y1(e=>w(e[1])).y0(e=>w(e[0])).curve(x.zgE),z=f.map((e,t)=>{let r=_(e);return(0,i.jsx)("path",{className:D().shape,d:r,opacity:1,stroke:"grey",fill:C(e.key),fillOpacity:.8},t)}),M=f.map(e=>{let t=e[e.length-1],r=o?o[e.key]:t[1]-t[0];return{name:e.key,color:C(e.key),value:r,position:w((t[0]+t[1])/2)}}),E=e=>{let t=T.invert(e),r=1/0,i=null;for(let e of g){var s;let n=null===(s=I(e.date))||void 0===s?void 0:s.getTime();if(!n)return null;let a=Math.abs(n-t.getTime());a<r&&(r=a,i=e)}return i},W=e=>{let t=e.currentTarget.getBoundingClientRect(),r=e.clientX-t.left,i=E(r);h(i)};return(0,i.jsx)("div",{children:(0,i.jsx)("svg",{width:t,height:r,children:(0,i.jsxs)("g",{width:l,height:d,transform:"translate(".concat([A.left,A.top].join(","),")"),onMouseMove:W,onMouseLeave:()=>h(null),children:[(0,i.jsx)("rect",{x:0,y:0,width:l,height:d,onMouseMove:W,onMouseLeave:()=>h(null),visibility:"hidden",pointerEvents:"all",cursor:"pointer"}),(0,i.jsx)(v,{xScale:T,height:d}),(0,i.jsx)(k,{labelInfos:M,xStart:T.range()[1],xEnd:t,biggestValue:p}),(0,i.jsx)("g",{className:D().container,children:z}),o&&(0,i.jsx)(B,{height:d,x:T(I(o.date)),biggestValue:p})]})})})},_=x.i$Z("%B %Y"),z=e=>{var t,r;let{width:n,height:a}=e,[o,h]=(0,s.useState)(),[l,d]=(0,s.useState)(I("2015-01-01"));return((0,s.useEffect)(()=>{let e=async()=>{let e=await fetch("https://raw.githubusercontent.com/holtzy/react-graph-gallery/main/data/data_page_views.csv"),t=await e.text(),r=(0,x.ueB)(t);h(r)};e()},[]),o&&l)?(0,i.jsxs)("div",{children:[(0,i.jsxs)("div",{style:{height:150},children:[(0,i.jsx)("p",{style:{fontSize:17,paddingTop:40,marginBottom:0},children:(0,i.jsx)("b",{children:"Chat-GPT hasn't impacted tech websites traffic significantly (yet)"})}),(0,i.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[(0,i.jsxs)("p",{style:{fontSize:12,width:155,paddingTop:11},children:["Data since ",(0,i.jsx)("b",{children:_(l)})]}),(0,i.jsx)("input",{type:"range",min:null===(t=I("2015-01-01"))||void 0===t?void 0:t.getTime(),max:null===(r=I("2022-09-01"))||void 0===r?void 0:r.getTime(),value:l.getTime(),step:1e4,onChange:e=>d(new Date(Number(e.target.value))),style:{height:1,opacity:.5,width:80}})]})]}),(0,i.jsx)(C,{width:n,height:a-150,data:o,startDate:l})]}):null},M=e=>{let{width:t=700,height:r=400}=e;return(0,i.jsx)(z,{width:t,height:r})};var E=r(88),W=r(6438);let N=[{x:1,groupA:38,groupB:19,groupC:9,groupD:4},{x:2,groupA:16,groupB:14,groupC:96,groupD:40},{x:3,groupA:164,groupB:96,groupC:64,groupD:40},{x:4,groupA:32,groupB:65,groupC:64,groupD:40},{x:5,groupA:12,groupB:80,groupC:14,groupD:10},{x:6,groupA:12,groupB:180,groupC:14,groupD:10},{x:7,groupA:12,groupB:70,groupC:14,groupD:10},{x:8,groupA:12,groupB:30,groupC:24,groupD:10},{x:9,groupA:190,groupB:18,groupC:34,groupD:10},{x:10,groupA:10,groupB:18,groupC:4,groupD:10}];var O=r(7518),G=r.n(O);let P={top:30,right:30,bottom:50,left:50},Y=e=>{let{width:t,height:r,data:n}=e,a=t-P.right-P.left,o=r-P.top-P.bottom,h=["groupA","groupB","groupC","groupD"],l=x.knu().keys(h).order(x.Qxt).offset(x.KuJ),d=l(n),c=d.flatMap(e=>e.map(e=>e[1])),p=Math.max(...c),u=d.flatMap(e=>e.map(e=>e[0])),g=Math.min(...u),m=(0,s.useMemo)(()=>x.BYU().domain([g,p]).range([o,0]),[n,r]),[f,j]=x.Wem(n,e=>e.x),b=(0,s.useMemo)(()=>x.BYU().domain([f||0,j||0]).range([0,a]),[n,t]),y=x.PKp().domain(h).range(["#e0ac2b","#e85252","#6689c6","#9a6fb0","#a53253"]),v=x.SOn().x(e=>b(e.data.x)).y1(e=>m(e[1])).y0(e=>m(e[0])).curve(x.zgE),w=d.map((e,t)=>{let r=v(e);return(0,i.jsx)("path",{className:G().shape,d:r,opacity:1,stroke:"grey",fill:y(e.key),fillOpacity:.8,cursor:"pointer"},t)}),k=b.ticks(5).map((e,t)=>(0,i.jsxs)("g",{children:[(0,i.jsx)("line",{x1:b(e),x2:b(e),y1:0,y2:o,stroke:"#808080",opacity:.2}),(0,i.jsx)("text",{x:b(e),y:o+10,textAnchor:"middle",alignmentBaseline:"central",fontSize:9,stroke:"#808080",opacity:.8,children:e})]},t));return(0,i.jsx)("div",{children:(0,i.jsx)("svg",{width:t,height:r,children:(0,i.jsxs)("g",{width:a,height:o,transform:"translate(".concat([P.left,P.top].join(","),")"),children:[k,(0,i.jsx)("g",{className:G().container,children:w})]})})})},F=e=>{let{width:t=700,height:r=400}=e;return(0,i.jsx)(Y,{data:N,width:t,height:r})};var U=r(5079),H=r(8893);let V=(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("p",{children:["A"," ",(0,i.jsx)("a",{href:"https://www.data-to-viz.com/graph/streamgraph.html",children:"streamgraph"})," ","is a variation of the more common"," ",(0,i.jsx)(c(),{href:"stacked-area-plot",children:"stacked area chart"}),". It rounds edges and displays areas around the central axis which gives a nice impression of flow."]}),(0,i.jsxs)("p",{children:["This section explains how to ",(0,i.jsx)("b",{children:"stack"})," and ",(0,i.jsx)("b",{children:"smooth"})," the data with"," ",(0,i.jsx)("code",{children:"d3.js"}),", and render the shapes with ",(0,i.jsx)("code",{children:"react"}),". It starts from the basic and goes until necessary customization like"," ",(0,i.jsx)("b",{children:"tooltips"}),", ",(0,i.jsx)("b",{children:"hover effect"}),", legend and ",(0,i.jsx)("b",{children:"annotation"}),". Examples always come with editable sandboxes."]})]});function X(){return(0,i.jsxs)(n.A,{title:"Streamchart with React",seoDescription:"How to build a stream chart with React and D3.js. A set of re-usable components",children:[(0,i.jsx)(a.Z,{title:"Streamchart",description:V,chartType:"stream"}),(0,i.jsx)("h2",{id:"data",children:"The Data"})," ",(0,i.jsxs)("p",{children:["Most of the time the input dataset is an ",(0,i.jsx)("b",{children:"array"})," where each item is an ",(0,i.jsx)("b",{children:"object"}),"."]}),(0,i.jsxs)("p",{children:["Each object provides information for a step on the X axis. It has a value like ",(0,i.jsx)("code",{children:"x"})," or ",(0,i.jsx)("code",{children:"date"})," that provides the exact position on the X axis. Then it has several numeric values, one for"," ",(0,i.jsx)("b",{children:"each group"})," of the dataset."]}),(0,i.jsx)("p",{children:"Here is a minimal example:"}),(0,i.jsx)(h.d,{code:K}),(0,i.jsx)("h3",{children:"→ Wide and Long formats"}),(0,i.jsxs)("p",{children:["The format described above is often called the ",(0,i.jsx)("b",{children:"wide"})," format. Another common format is the ",(0,i.jsx)("b",{children:"long"})," format, where each object in the array provides information for 1 group only. (The array becomes way"," ",(0,i.jsx)("i",{children:"longer"})," \uD83D\uDE43)"]}),(0,i.jsxs)("p",{children:["If your dataset is formatted using the long format, you can transform it using the ",(0,i.jsx)("code",{children:"pivotWider"})," function below:"]}),(0,i.jsx)(E.U,{startOpen:!1,title:(0,i.jsx)("span",{children:"Pivot function"}),children:(0,i.jsx)(h.d,{code:q})}),(0,i.jsxs)("h3",{children:["→ ",(0,i.jsx)("code",{children:".csv"})," data"]}),(0,i.jsxs)("p",{children:["If your data is in ",(0,i.jsx)("code",{children:".csv"})," format, you can translate it thanks to the ",(0,i.jsx)("code",{children:"csvParse()"})," function of d3. I'll write a blogpost soon on how to deal with the csv format."," ",(0,i.jsx)(c(),{href:"/subscribe",children:"Subscribe"})," to the project to know when it is ready!"]}),(0,i.jsx)(H.H,{text:"Add some more hints on how to type those data objects"}),(0,i.jsx)("h2",{id:"skeleton",children:"Component skeleton"}),(0,i.jsxs)("p",{children:["The goal here is to create a ",(0,i.jsx)("code",{children:"StreamGraph"})," component that will be stored in a ",(0,i.jsx)("code",{children:"StreamGraph.tsx"})," file. This component requires 3 props to render: a ",(0,i.jsx)("code",{children:"width"}),", a ",(0,i.jsx)("code",{children:"height"}),", and some ",(0,i.jsx)("code",{children:"data"}),"."]}),(0,i.jsxs)("p",{children:["The shape of the ",(0,i.jsx)("code",{children:"data"})," is described above. The"," ",(0,i.jsx)("code",{children:"width"})," and ",(0,i.jsx)("code",{children:"height"})," will be used to render an"," ",(0,i.jsx)("code",{children:"svg"})," element in the DOM, in which we will insert the graph."]}),(0,i.jsxs)("p",{children:["To put it in a nutshell, that's the skeleton of our"," ",(0,i.jsx)("code",{children:"StreamGraph"})," component:"]}),(0,i.jsx)(h.d,{code:J}),(0,i.jsxs)("p",{children:["It's fundamental to understand that with this code organization, d3.js will be used to prepare the SVG ",(0,i.jsx)("code",{children:"circle"}),", but it's React that will render them in the ",(0,i.jsx)("code",{children:"return()"})," statement. We won't use d3 methods like ",(0,i.jsx)("code",{children:"append"})," that you can find in usual"," ",(0,i.jsx)("a",{href:"https://www.d3-graph-gallery.com",children:"d3.js examples"}),"."]}),(0,i.jsx)("h2",{id:"Stacking",children:"Stacking series"}),(0,i.jsxs)("p",{children:["Building a stream chart requires to ",(0,i.jsx)("b",{children:"stack"})," the data. Series are displayed one on top of each other and you have to compute their positions on the Y axis."]}),(0,i.jsxs)("p",{children:["Fortunately, ",(0,i.jsx)("code",{children:"D3.js"})," has a handy ",(0,i.jsx)("code",{children:"stack()"})," ","function that does exactly that. The process is deeply explained in the"," ",(0,i.jsx)(c(),{href:"stacked-area-plot",children:"stacked area chart"})," section of the gallery."]}),(0,i.jsx)(W.J,{href:"stacked-area-plot",isFilled:!0,size:"sm",children:"Stacking explanation"}),(0,i.jsxs)("p",{className:"mt-10",children:["The only variation required here is to use the"," ",(0,i.jsx)("code",{children:"d3.stackOffsetSilhouette"})," offset option. Instead of stacking everything ",(0,i.jsx)("b",{children:"above"})," the 0 baseline, it will put groups on both parts of it."]}),(0,i.jsx)("p",{children:"Computing the position of the chart series should look something like:"}),(0,i.jsx)(h.d,{code:R}),(0,i.jsx)("h2",{id:"basic example",children:"Basic streamgraph example"})," ",(0,i.jsxs)("p",{children:["Once more, the process to render the shape is very close to the"," ",(0,i.jsx)(c(),{href:"stacked-area-plot",children:"stacked area chart"}),". A few variations are required though."]}),(0,i.jsx)("h3",{children:"→ Smoothing"}),(0,i.jsxs)("p",{children:["We need to smooth the area shape to get the good-looking organic flow. Once more d3 is here to the rescue with a"," ",(0,i.jsx)("a",{href:"https://github.com/d3/d3-shape#curves",children:"curve"})," function that does all the work for us."]}),(0,i.jsxs)("p",{children:["This is how to call the ",(0,i.jsx)("code",{children:"curve"})," function and the end of the"," ",(0,i.jsx)("code",{children:"area"})," function call:"]}),(0,i.jsx)(h.d,{code:Z}),(0,i.jsx)("h3",{children:"→ Axis"}),(0,i.jsxs)("p",{children:[(0,i.jsx)(c(),{href:"build-axis-with-react",children:"Usual axes"})," do not work for streamgraphs. The Y axis would make no sense since shapes are on both side of the 0 baseline. It is commonly"," ",(0,i.jsx)("a",{href:"https://www.dataviz-inspiration.com/stream",children:"removed"}),". The X axis would feel lost alone at the very bottom of the chart."]}),(0,i.jsxs)("p",{children:["Here I suggest to replace the X axis with ",(0,i.jsx)("b",{children:"vertical ablines"})," and remove the Y axis completely."]}),(0,i.jsx)(l.$,{vizName:"StreamGraphBasic",VizComponent:f,height:400,maxWidth:600,caption:"Most basic streamgraph with react and d3.js"}),(0,i.jsx)(j.r,{chartId:"stream"}),(0,i.jsx)("h2",{id:"hover effect",children:"Hover effect"}),(0,i.jsxs)("p",{children:["It is pretty hard to follow the evolution of a ",(0,i.jsx)("b",{children:"specific group"})," on a streamgraph."]}),(0,i.jsxs)("p",{children:["It is common to add an hover effect to the figure: hovering over a group will ",(0,i.jsx)("b",{children:"highlight"})," it, making it easier to follow its evolution. Try it on the graph below:"]}),(0,i.jsx)(l.$,{vizName:"StreamGraphHoverEffect",VizComponent:F,height:400,maxWidth:600,caption:"StreamGraph with hover effect that highlights a specific series"}),(0,i.jsx)("p",{children:"There are various strategies to implement such an hover effect."}),(0,i.jsxs)("p",{children:["Here, I suggest to do everything in ",(0,i.jsx)("b",{children:"css"})," using"," ",(0,i.jsx)("a",{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes",children:"pseudo classes"}),", and targetting svg elements only. Basically, everything in the svg container will be ",(0,i.jsx)("b",{children:"dimmed"})," (lower ",(0,i.jsx)("b",{children:"opacity"})," and"," ",(0,i.jsx)("b",{children:"saturation"}),") when the mouse goes over the chart. But the specific shape that is hovered over will keep its full opacity thanks to a more"," ",(0,i.jsx)("b",{children:"specific"})," css selector."]}),(0,i.jsx)("p",{children:"Hover effect is a big topic and I will post more about it soon!"}),(0,i.jsx)(W.J,{href:"/subscribe",isFilled:!0,size:"sm",children:"Know when"}),(0,i.jsx)(p.Z,{chartId:"stream"}),(0,i.jsx)("h2",{id:"transition",children:"Streamgraph algorithm with transition"}),(0,i.jsxs)("p",{children:["Our streamgraph is renderer using a set of ",(0,i.jsx)("code",{children:"path"}),". The"," ",(0,i.jsx)("code",{children:"d"})," attribute of those paths provides the boundary"," ",(0,i.jsx)("b",{children:"coordinates"})," of those paths."]}),(0,i.jsxs)("p",{children:["When a prop of the ",(0,i.jsx)("code",{children:"StreamGraph"})," component updates, we might want to update the paths to represent the latest state of our application. It can be an update of the ",(0,i.jsx)("b",{children:"dataset"}),", or an update of the function used to ",(0,i.jsx)("b",{children:"stack"})," the data or ",(0,i.jsx)("b",{children:"smooth"})," the area as below."]}),(0,i.jsxs)("p",{children:["It is possible to smoothly animate this transition thanks to"," ",(0,i.jsx)("code",{children:"react-spring"}),"."]}),(0,i.jsx)(l.$,{vizName:"StreamGraphShapeTransition",VizComponent:U.v,height:400,maxWidth:600,caption:"Try d3.js various options to offset the data and smooth shapes. See a smooth transition between options."}),(0,i.jsxs)("p",{children:["The animation suggested above is a bit tricky to implement. Indeed, we need to transition from paths that ",(0,i.jsx)("b",{children:"do not have the same number"})," of edges. It is possible thanks to a library called ",(0,i.jsx)("code",{children:"flubber"})," ","but definitely deserves its own blogpost."]}),(0,i.jsx)("p",{children:"I'll publish a full blogpost on the topic soon!"}),(0,i.jsx)(W.J,{href:"/subscribe",isFilled:!0,size:"sm",children:"Get notified"}),(0,i.jsx)(H.H,{text:"find why flubber does some weird interpolation in some cases"}),(0,i.jsx)("h2",{id:"application",children:"Application"})," ",(0,i.jsxs)("p",{children:["The following chart is a real-life application of a ",(0,i.jsx)("b",{children:"streamgraph"}),". It shows the evolution if the ",(0,i.jsx)("b",{children:"number of page-views"})," for 5 tech websites in the last 7 years. My goal was to assess if the rise of"," ",(0,i.jsx)("a",{href:"https://openai.com/blog/chatgpt",children:"chat-GPT"})," had an impact on it."]}),(0,i.jsxs)("p",{children:["This ",(0,i.jsx)("b",{children:"interactive"})," chart has several interesting features:"]}),(0,i.jsxs)("ul",{children:[(0,i.jsxs)("li",{children:[(0,i.jsx)("b",{children:"slider"}),": you can control the displayed time-frame thanks to a slider."]}),(0,i.jsxs)("li",{children:[(0,i.jsx)("b",{children:"inline legend"}),": label of each series are written inline. A background proportional to their value provides additional insight."]}),(0,i.jsxs)("li",{children:[(0,i.jsx)("b",{children:"hover effect"}),": legend will be updated with precise values at the hovered timestamp."]})]}),(0,i.jsx)(l.$,{vizName:"StreamGraphPageViews",VizComponent:M,height:600,maxWidth:900,caption:"A customized streamgraph built with React and D3.js. It has inline legends, slider to control timeframe, hover effect and more."}),(0,i.jsx)("div",{className:"full-bleed border-t h-0 bg-gray-100 my-3"}),(0,i.jsx)(o.Z,{chartFamily:"evolution"}),(0,i.jsx)("div",{className:"mt-20"})]})}let K="\nconst data = [\n  {\n    x: 1,\n    groupA: 38,\n    groupB: 19,\n  },\n  {\n    x: 2,\n    groupA: 16,\n    groupB: 14,\n  },\n  ...\n];\n".trim(),R="\nconst stackSeries = d3\n  .stack()\n  .keys(groups)\n  .order(d3.stackOrderNone)\n  .offset(d3.stackOffsetSilhouette);\nconst series = stackSeries(data);\n".trim(),q="\ntype LongDataItem = {\n  date: string;\n  group: string;\n  value: number;\n};\n\ntype WideDataItem = {\n  date: string;\n} & { [key: string]: number }\n\nconst pivotWider = (data: LongDataItem[]) => {\n  const result: WideDataItem[] = [];\n\n  data.forEach((item) => {\n      const existingEntry = result.find((entry) => entry.date === item.date);\n\n      if (existingEntry) {\n          existingEntry[item.group] = item.value;\n      } else {\n          const newEntry = { date: item.date };\n          newEntry[item.group] = item.value;\n          result.push(newEntry);\n      }\n  });\n\n  return result;\n}\n".trim(),J='\nimport * as d3 from "d3"; // we will need d3.js\n\ntype WideDataItem = {\n  date: string;\n} & { [key: string]: number }\n\ntype StreamGraphProps = {\n  width: number;\n  height: number;\n  data: WideDataItem[];\n};\n\nexport const StreamGraph = ({ width, height, data }: StreamGraphProps) => {\n\n  // read the data\n  // find the list of groups to display\n  // stack the data\n  // build the shapes\n\n  return (\n    <div>\n      <svg width={width} height={height}>\n        // render all the shapes\n      </svg>\n    </div>\n  );\n};\n'.trim(),Z="\nconst areaBuilder = d3\n  .area()\n  .x(d => xScale(x))\n  .y1(d => yScale(d[1]))\n  .y0(d => yScale(d[0]))\n  .curve(curveCatmullRom);\n".trim()},7518:function(e){e.exports={container:"streamgraph_container__P5I08",shape:"streamgraph_shape__6RSMs"}},1833:function(e){e.exports={container:"streamgraph_container__5eu_b",shape:"streamgraph_shape__0T4iU"}}},function(e){e.O(0,[3996,665,5660,2236,7303,645,1188,3555,9774,2888,179],function(){return e(e.s=7591)}),_N_E=e.O()}]);