(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9216],{9643:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/stacked-barplot-with-negative-values",function(){return s(1284)}])},6260:function(e,t,s){"use strict";s.d(t,{U:function(){return i}});var r=s(5893),a=s(7294);let i=e=>{let{startOpen:t,title:s,children:i,toc:o}=e,[n,l]=(0,a.useState)(t),h=n?"max-h-full":"max-h-0",p=n?"overflow-visible":"overflow-hidden";return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("h2",{className:"cursor-pointer",onClick:()=>l(!n),id:o,children:[n?(0,r.jsx)("span",{className:"text-purple-700 w-4 mr-2 hover:text-purple-900 inline-block",children:"-"}):(0,r.jsx)("span",{className:"text-purple-700 w-4 mr-2 hover:text-purple-900 inline-block",children:"+"}),s]}),(0,r.jsx)("div",{className:"transition-max-height ease-in duration-300  "+h+" "+p,children:i})]})}},1284:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return A}});var r=s(5893),a=s(7294),i=s(153),o=s(9965),n=s(2594),l=s(7262),h=s(6260),p=s(615),d=s(1122),c=s(1664),g=s.n(c),u=s(7563);let x=[{x:"Jan",groupA:12,groupB:19,groupC:-9,groupD:2},{x:"Feb",groupA:16,groupB:21,groupC:-13,groupD:8},{x:"Mar",groupA:23,groupB:21,groupC:-24,groupD:9},{x:"Apr",groupA:38,groupB:34,groupC:25,groupD:23},{x:"May",groupA:42,groupB:46,groupC:34,groupD:26},{x:"Jun",groupA:34,groupB:42,groupC:32,groupD:26},{x:"Jul",groupA:2,groupB:34,groupC:21,groupD:27},{x:"Aug",groupA:21,groupB:32,groupC:-16,groupD:18},{x:"Sept",groupA:18,groupB:31,groupC:-18,groupD:12},{x:"Oct",groupA:12,groupB:21,groupC:-14,groupD:10},{x:"Nov",groupA:12,groupB:18,groupC:-14,groupD:10},{x:"Dec",groupA:2,groupB:8,groupC:4,groupD:10}];var m=s(7875);let j={top:30,right:30,bottom:50,left:50},v=e=>{let{width:t,height:s,data:i}=e,o=(0,a.useRef)(null),n=t-j.right-j.left,l=s-j.top-j.bottom,h=i.map(e=>String(e.x)),p=m.knu().keys(["groupA","groupB","groupC","groupD"]).order(m.Qxt).offset(m.W$j),d=p(i),c=(0,a.useMemo)(()=>m.BYU().domain([-50,200]).range([l,0]),[i,s]),g=(0,a.useMemo)(()=>m.tiA().domain(h).range([0,n]).padding(.05),[i,t]);var u=m.PKp().domain(h).range(["#e0ac2b","#e85252","#6689c6","#9a6fb0","#a53253"]);(0,a.useEffect)(()=>{let e=m.Ys(o.current);e.selectAll("*").remove();let t=m.LLu(g);e.append("g").attr("transform","translate(0,"+l+")").call(t);let s=m.y4O(c);e.append("g").call(s)},[g,c,l]);let x=d.map((e,t)=>(0,r.jsx)("g",{children:e.map((t,s)=>(0,r.jsx)("rect",{x:g(t.data.x),y:c(t[1]),height:c(t[0])-c(t[1]),width:g.bandwidth(),fill:u(e.key),opacity:1},s))},t));return(0,r.jsx)("div",{children:(0,r.jsxs)("svg",{width:t,height:s,children:[(0,r.jsx)("g",{width:n,height:l,transform:"translate(".concat([j.left,j.top].join(","),")"),children:x}),(0,r.jsx)("g",{width:n,height:l,ref:o,transform:"translate(".concat([j.left,j.top].join(","),")")})]})})},f=e=>{let{width:t=700,height:s=400}=e;return(0,r.jsx)(v,{data:x,width:t,height:s})},b=[{x:"Jan",groupA:12,groupB:19,groupC:-9,groupD:2},{x:"Feb",groupA:16,groupB:21,groupC:-13,groupD:8},{x:"Mar",groupA:23,groupB:21,groupC:-24,groupD:9},{x:"Apr",groupA:38,groupB:34,groupC:25,groupD:23},{x:"May",groupA:42,groupB:46,groupC:34,groupD:26},{x:"Jun",groupA:34,groupB:42,groupC:32,groupD:26},{x:"Jul",groupA:2,groupB:34,groupC:21,groupD:27},{x:"Aug",groupA:21,groupB:32,groupC:-16,groupD:18},{x:"Sept",groupA:18,groupB:31,groupC:-18,groupD:12},{x:"Oct",groupA:12,groupB:21,groupC:-14,groupD:10},{x:"Nov",groupA:12,groupB:18,groupC:-14,groupD:10},{x:"Dec",groupA:2,groupB:8,groupC:4,groupD:10}],w={top:30,right:30,bottom:50,left:50},y=e=>{let{width:t,height:s,data:i}=e,o=(0,a.useRef)(null),n=t-w.right-w.left,l=s-w.top-w.bottom,h=i.map(e=>String(e.x)),p=m.knu().keys(["groupA","groupB","groupC","groupD"]).order(m.Qxt),d=p(i),c=(0,a.useMemo)(()=>m.BYU().domain([-50,200]).range([l,0]),[i,s]),g=(0,a.useMemo)(()=>m.tiA().domain(h).range([0,n]).padding(.2),[i,t]);var u=m.PKp().domain(h).range(["#e0ac2b","#e85252","#6689c6","#9a6fb0","#a53253"]);(0,a.useEffect)(()=>{let e=m.Ys(o.current);e.selectAll("*").remove();let t=m.LLu(g);e.append("g").attr("transform","translate(0,"+l+")").call(t);let s=m.y4O(c);e.append("g").call(s)},[g,c,l]);let x=d.map((e,t)=>(0,r.jsx)("g",{children:e.map((t,s)=>{let a=t[0]>t[1];return(0,r.jsx)("rect",{x:g(t.data.x),y:a?c(t[0]):c(t[1]),height:a?c(t[1])-c(t[0]):c(t[0])-c(t[1]),width:g.bandwidth(),fill:u(e.key),opacity:1},s)})},t));return(0,r.jsx)("div",{children:(0,r.jsxs)("svg",{width:t,height:s,children:[(0,r.jsx)("g",{width:n,height:l,transform:"translate(".concat([w.left,w.top].join(","),")"),children:x}),(0,r.jsx)("g",{width:n,height:l,ref:o,transform:"translate(".concat([w.left,w.top].join(","),")")})]})})},k=e=>{let{width:t=700,height:s=400}=e;return(0,r.jsx)(y,{data:b,width:t,height:s})},D=(0,r.jsxs)("p",{children:["Drawing a"," ",(0,r.jsx)("a",{href:"https://www.data-to-viz.com/graph/barplot.html",children:"stacked barplot"})," ","sounds like pretty basic task for somebody into dataviz. But it gets surprisingly tricky once the dataset includes ",(0,r.jsx)("b",{children:"negative values"}),". This post explains how to deal with it, suggesting several options coming together with some reproducible code examples."]});function A(){return(0,r.jsxs)(i.A,{title:"Dealing with negative values on a stacked barplot",seoDescription:"How to deal with negative values on stacked barplot. A post describing the pros and cons of the 2 main options, together with some examples with d3.js code.",children:[(0,r.jsx)(o.Z,{title:"Dealing with negative values on a stacked barplot",description:D}),(0,r.jsxs)(h.U,{title:"\uD83C\uDF54 Easy life: stacked barplot with positive values",startOpen:!0,children:[(0,r.jsxs)("div",{className:"grid grid-cols-1 sm:grid-cols-6 gap-8",children:[(0,r.jsxs)("div",{className:"col-span-4",children:[(0,r.jsxs)("p",{children:["Let's consider a company that has 3 employees: ",(0,r.jsx)("code",{children:"a"}),","," ",(0,r.jsx)("code",{children:"b"})," and ",(0,r.jsx)("code",{children:"c"}),". Each month those employees sell umbrellas and make money."]}),(0,r.jsx)("p",{children:"In January, they made 1, 1 and 2 dollars respectively. It's pretty easy to represent those sales as a stacked barplot!"}),(0,r.jsx)("p",{children:"There is even a bonus! The total height of those bars is 4. So is the value of the stack on the Y axis. We now know what's the total revenue of the company \uD83C\uDF89!"})]}),(0,r.jsxs)("div",{className:"col-span-2 flex flex-col items-center justify-center",children:[(0,r.jsx)("img",{src:"/img/stacked-barplot-explanation-1.png"}),(0,r.jsx)(p.Y,{children:"Stacking positive values is straightforward"})]})]}),(0,r.jsx)("br",{}),(0,r.jsxs)("p",{children:["Now let's follow the same process for the 12 months of the year. That makes a stacked area barplot built with ",(0,r.jsx)("code",{children:"react"})," and"," ",(0,r.jsx)("code",{children:"d3.js"}),". If you need explanations for the code, please refer to the"," ",(0,r.jsx)("a",{href:"https://d3-graph-gallery.com/graph/barplot_stacked_basicWide.html",children:"d3.js gallery"})," ","or to the ",(0,r.jsx)(g(),{href:"barplot",children:"barplot section"})," of the react gallery."]}),(0,r.jsx)("br",{}),(0,r.jsx)(d.$,{vizName:"BarplotStackedBasic",VizComponent:u.x,height:400,maxWidth:600,caption:"A stacked area chart with positive values only. Built with react and d3.js"}),(0,r.jsx)("br",{}),(0,r.jsx)("p",{children:"That's the end of the easy part. Now, let's say that sometimes employees spend more money than what they make. We now have some negative values in the dataset \uD83D\uDE33. How can we deal with it?"})]}),(0,r.jsxs)(h.U,{title:"1️⃣ Stacked barplot with negative values: the diverging strategy",startOpen:!0,children:[(0,r.jsxs)("div",{className:"grid grid-cols-1 sm:grid-cols-6 gap-8",children:[(0,r.jsxs)("div",{className:"col-span-4",children:[(0,r.jsxs)("p",{children:["We are in January but this time, employee ",(0,r.jsx)("code",{children:"A"})," lost 1$! \uD83D\uDE25"]}),(0,r.jsx)("p",{children:"To represent this on the stack, we can add all the positive values on top of the chart, and all the negative ones below the 0 axis."}),(0,r.jsx)("p",{children:"It is still very easy to see how much each employee made in a glimpse!"}),(0,r.jsxs)("p",{children:["However, it is now ",(0,r.jsx)("b",{children:"impossible"})," to know what's the company revenue! Indeed, the total height of the bars is ",(0,r.jsx)("code",{children:"4"}),", the value on the y axis is ",(0,r.jsx)("code",{children:"3"}),", but the real revenue is 1 + 2 - 1 = ",(0,r.jsx)("code",{children:"2"}),"!"]})]}),(0,r.jsxs)("div",{className:"col-span-2 flex flex-col items-center justify-center",children:[(0,r.jsx)("img",{src:"/img/stacked-barplot-explanation-2.png"}),(0,r.jsx)(p.Y,{children:"Stacking with negative values with all negative values below the 0 axis"})]})]}),(0,r.jsx)("br",{}),(0,r.jsxs)("p",{children:["Using almost the same code we can build the stacked barplot including those negative values. Note that when stacking the data with the"," ",(0,r.jsx)("code",{children:"stack()"})," function of d3, the specific"," ",(0,r.jsx)("code",{children:"stackOffsetDiverging"})," offset parameter must be passed, handling all the work for us (",(0,r.jsx)("a",{href:"https://github.com/d3/d3-shape#stack-offsets",children:"doc"}),")."]}),(0,r.jsx)("br",{}),(0,r.jsx)(d.$,{vizName:"BarplotStackedNegativeDivergingBasic",VizComponent:f,height:400,maxWidth:700,caption:"With the diverging strategy, all negative values are located under the 0 baseline."}),(0,r.jsx)("br",{}),(0,r.jsx)("p",{children:"Let's recap the pros and cons of this diverging option:"}),(0,r.jsxs)("div",{className:"",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("p",{className:"px-2 bg-green-400 rounded-md text-white w-16 text-md",children:"Pros"}),(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:"Easy to read the value of each item"}),(0,r.jsx)("li",{children:"Obvious what's negative and what's positive"})]})]}),(0,r.jsx)("br",{}),(0,r.jsxs)("div",{children:[(0,r.jsx)("p",{className:"px-2 bg-red-400 rounded-md text-white w-16 text-md",children:"Cons"}),(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:"Impossible to know the total value of each stack"}),(0,r.jsx)("li",{children:"A series can jump from the bottom to the top of the chart and is thus hard to follow"})]})]})]})]}),(0,r.jsxs)(h.U,{title:"2️⃣ Stacked barplot with negative values: the overlapping strategy",startOpen:!0,children:[(0,r.jsxs)("div",{className:"col-span-4",children:[(0,r.jsx)("p",{children:"Another strategy can be applied to stack the items including negative values."}),(0,r.jsx)("p",{children:"Items can be added one by one, with rectangles going up when values are positive and going down when values are negative."})]}),(0,r.jsxs)("div",{className:"col-span-2 flex flex-col items-center justify-center",children:[(0,r.jsx)("img",{src:"/img/stacked-barplot-explanation-4.png"}),(0,r.jsx)(p.Y,{children:"Stacking items by overlapping the items on top of each other."})]}),(0,r.jsx)("br",{}),(0,r.jsx)("p",{children:"It's important to understand that here, the item order is important. We will get very different results depending on the order since not all groups are visible."}),(0,r.jsx)("br",{}),(0,r.jsx)(d.$,{vizName:"BarplotStackedNegativeOverlappingDemo",VizComponent:k,height:400,maxWidth:700,caption:"With the overlapping strategy items are drawn successively, going up and down and overlapping if necessary"}),(0,r.jsx)("br",{}),(0,r.jsx)("p",{children:"Let's recap the pros and cons of this diverging option:"}),(0,r.jsxs)("div",{className:"",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("p",{className:"px-2 bg-green-400 rounded-md text-white w-16 text-md",children:"Pros"}),(0,r.jsx)("ul",{children:(0,r.jsx)("li",{children:"Depending on the group order, the Y value can reflect the sum of the items. But it's not guarantee."})})]}),(0,r.jsx)("br",{}),(0,r.jsxs)("div",{children:[(0,r.jsx)("p",{className:"px-2 bg-red-400 rounded-md text-white w-16 text-md",children:"Cons"}),(0,r.jsx)("ul",{children:(0,r.jsx)("li",{children:"Groups overlap each other. Information is hidden. Chart is unreadable"})})]})]})]}),(0,r.jsxs)(h.U,{title:"Conclusion",startOpen:!0,children:[(0,r.jsxs)("p",{children:["In my opinion the first option (",(0,r.jsx)("b",{children:"diverging"}),") makes much more sense than the second one (",(0,r.jsx)("b",{children:"overlapping"}),"). The cons are very limited:"]}),(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:"It is true that the net total value is not available. But if that's what interests you, you don't have to split the dataset by subgroups, just create a line chart with a single line!"}),(0,r.jsx)("li",{children:"Having a group flipping from top to bottom is indeed annoying. However, the hover effect that is included allows to quickly see what happens for a specific group."})]}),(0,r.jsx)("br",{}),(0,r.jsx)("p",{children:"It's also important to note that most dataviz tools choosed this approach. Here is an example using the same dataset using the ggplot2 library."}),(0,r.jsx)("br",{}),(0,r.jsxs)("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-8 ",children:[(0,r.jsx)("img",{src:"/img/stacked-barchart-ggplot2.png"}),(0,r.jsx)("img",{src:"/img/stacked-barchart-datawrapper.png"})]}),(0,r.jsx)("div",{className:"w-100 flex flex-row justify-center",children:(0,r.jsx)(p.Y,{children:"Same dataset that includes negative values plotted with ggplot2 (left) and data wrapper (right)"})}),(0,r.jsx)("br",{}),(0,r.jsx)("p",{children:"Last but not least, I really like this example by chartio that fix the non available total issue by adding a line on top of the stacked barchart to show the total:"}),(0,r.jsx)("br",{}),(0,r.jsx)("img",{src:"/img/stacked-barchart-chartio.png"}),(0,r.jsx)("div",{className:"w-100 flex flex-row justify-center",children:(0,r.jsx)(p.Y,{children:"Chartio displays the total of each timestamp using a line chart on top of the stacked items."})})]}),(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),(0,r.jsx)("hr",{className:"full-bleed  bord er bg-gray-200 mb-3 mt-10"}),(0,r.jsx)(l.Z,{chartFamily:"ranking"}),(0,r.jsx)("div",{className:"mt-20"}),(0,r.jsx)(n.Z,{})]})}}},function(e){e.O(0,[3996,7875,645,7371,9774,2888,179],function(){return e(e.s=9643)}),_N_E=e.O()}]);