(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5405],{5301:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(2104)}])},7197:function(e,t,r){"use strict";r.d(t,{Z:function(){return d}});var n=r(5893),a=(r(7294),r(6761)),i=r(1878),l=r(1664),o=i.c.filter((function(e){return"general"===e.family})).map((function(e){return e.logo}));function s(e){var t=e.chartLogo,r=e.caption,i=e.link,s=e.isAvailable,u=e.size,f=o.includes(t),d=s?"opacity-100":"opacity-20",h=s?"cursor-pointer":"cursor-not-allowed";return(0,n.jsx)(l.default,{href:s?i:"subscribe",children:(0,n.jsxs)("div",{className:"flex flex-col items-center",children:[(0,n.jsxs)("div",{style:{width:u,height:u},className:"relative mr-2 rounded-full "+d+" "+h,children:[(0,n.jsx)("div",{className:"absolute",children:(0,n.jsx)(a.Z,{chartLogo:t})}),f?(0,n.jsx)("div",{className:"absolute opacity-0 hover:opacity-60 flex items-center justify-center w-full h-full z-30",children:(0,n.jsx)(c,{size:u})}):(0,n.jsx)("div",{className:"opacity-0 hover:opacity-60 flex items-center justify-center w-full h-full rounded-full bg-purple-800 z-30",children:(0,n.jsx)("p",{className:"text-white text-4xl",children:"+"})})]}),(0,n.jsx)("p",{className:"font-light text-sm text-gray-600 "+d,children:r})]})})}var c=function(e){var t=e.size;return(0,n.jsx)("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:t,height:t,viewBox:"0 0 100 100",className:"fill-current text-purple-800",children:(0,n.jsx)("path",{d:"M50,0 L100,20 L100,80 L50,100 L0,80 L0,20 Z"})})},u=r(3414),f={distribution:"Distribution",correlation:"Correlation",ranking:"Ranking",partOfAWhole:"Part Of A Whole",evolution:"Evolution",map:"Map",flow:"Flow",general:"General Knowledge"};function d(e){var t=e.chartFamily,r=i.c.filter((function(e){return e.family===t})).map((function(e,t){var r=(0,u.y)(e.reactURL);return(0,n.jsx)("div",{className:"flex flex-col items-center justify-center",children:(0,n.jsx)(s,{link:r,chartLogo:e.logo,caption:e.label,isAvailable:e.isAvailable,size:129})},t)}));return(0,n.jsxs)("div",{children:[(0,n.jsx)("p",{className:t+"  mt-4 text-md border-b mb-2 border-gray-100 tracking-wider",children:null===f||void 0===f?void 0:f[t]}),(0,n.jsx)("div",{className:"flex flex-row justify-start flex-wrap",children:r})]})}},8418:function(e,t,r){"use strict";function n(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=[],n=!0,a=!1,i=void 0;try{for(var l,o=e[Symbol.iterator]();!(n=(l=o.next()).done)&&(r.push(l.value),!t||r.length!==t);n=!0);}catch(s){a=!0,i=s}finally{try{n||null==o.return||o.return()}finally{if(a)throw i}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}t.default=void 0;var a,i=(a=r(7294))&&a.__esModule?a:{default:a},l=r(6273),o=r(387),s=r(7190);var c={};function u(e,t,r,n){if(e&&l.isLocalURL(t)){e.prefetch(t,r,n).catch((function(e){0}));var a=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;c[t+"%"+r+(a?"%"+a:"")]=!0}}var f=function(e){var t,r=!1!==e.prefetch,a=o.useRouter(),f=i.default.useMemo((function(){var t=n(l.resolveHref(a,e.href,!0),2),r=t[0],i=t[1];return{href:r,as:e.as?l.resolveHref(a,e.as):i||r}}),[a,e.href,e.as]),d=f.href,h=f.as,p=e.children,v=e.replace,y=e.shallow,x=e.scroll,m=e.locale;"string"===typeof p&&(p=i.default.createElement("a",null,p));var g=(t=i.default.Children.only(p))&&"object"===typeof t&&t.ref,j=n(s.useIntersection({rootMargin:"200px"}),2),w=j[0],b=j[1],L=i.default.useCallback((function(e){w(e),g&&("function"===typeof g?g(e):"object"===typeof g&&(g.current=e))}),[g,w]);i.default.useEffect((function(){var e=b&&r&&l.isLocalURL(d),t="undefined"!==typeof m?m:a&&a.locale,n=c[d+"%"+h+(t?"%"+t:"")];e&&!n&&u(a,d,h,{locale:t})}),[h,d,b,m,r,a]);var N={ref:L,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,r,n,a,i,o,s){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&l.isLocalURL(r))&&(e.preventDefault(),null==o&&n.indexOf("#")>=0&&(o=!1),t[a?"replace":"push"](r,n,{shallow:i,locale:s,scroll:o}))}(e,a,d,h,v,y,x,m)},onMouseEnter:function(e){l.isLocalURL(d)&&(t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),u(a,d,h,{priority:!0}))}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var k="undefined"!==typeof m?m:a&&a.locale,E=a&&a.isLocaleDomain&&l.getDomainLocale(h,k,a&&a.locales,a&&a.domainLocales);N.href=E||l.addBasePath(l.addLocale(h,k,a&&a.defaultLocale))}return i.default.cloneElement(t,N)};t.default=f},7190:function(e,t,r){"use strict";function n(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=[],n=!0,a=!1,i=void 0;try{for(var l,o=e[Symbol.iterator]();!(n=(l=o.next()).done)&&(r.push(l.value),!t||r.length!==t);n=!0);}catch(s){a=!0,i=s}finally{try{n||null==o.return||o.return()}finally{if(a)throw i}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,r=e.disabled||!l,s=a.useRef(),c=n(a.useState(!1),2),u=c[0],f=c[1],d=a.useCallback((function(e){s.current&&(s.current(),s.current=void 0),r||u||e&&e.tagName&&(s.current=function(e,t,r){var n=function(e){var t=e.rootMargin||"",r=o.get(t);if(r)return r;var n=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=n.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)}))}),e);return o.set(t,r={id:t,observer:a,elements:n}),r}(r),a=n.id,i=n.observer,l=n.elements;return l.set(e,t),i.observe(e),function(){l.delete(e),i.unobserve(e),0===l.size&&(i.disconnect(),o.delete(a))}}(e,(function(e){return e&&f(e)}),{rootMargin:t}))}),[r,t,u]);return a.useEffect((function(){if(!l&&!u){var e=i.requestIdleCallback((function(){return f(!0)}));return function(){return i.cancelIdleCallback(e)}}}),[u]),[d,u]};var a=r(7294),i=r(9311),l="undefined"!==typeof IntersectionObserver;var o=new Map},2104:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return f}});var n=r(5893),a=r(7294),i=r(9281),l=r(4386),o=r(7197),s=r(6978),c=["unique","performant","interactive","insightful"],u=function(){var e=(0,a.useRef)(null),t=0,r=0,i=function(){var n=c[r];(null===e||void 0===e?void 0:e.current)&&(t<n.length?(e.current.innerHTML+=n.charAt(t),t++,setTimeout(i,40)):setTimeout((function(){e.current.innerHTML="",t=0,r>=c.length-1?r=0:r+=1,i()}),2e3))};return(0,a.useEffect)((function(){i()})),(0,n.jsx)("span",{style:{width:250,display:"inline-block"},children:(0,n.jsx)("span",{ref:e,className:"gradient with-blinking-cursor",children:""})})};function f(){return(0,n.jsxs)(i.A,{title:"React Graph Gallery",seoDescription:"The React Graph Gallery displays hundreds of charts made with React, always with explanation and reproduciible code",children:[(0,n.jsx)(l.Z,{title:(0,n.jsxs)("span",{children:["Build ",(0,n.jsx)(u,{})," charts for the web"]}),description:(0,n.jsx)("p",{className:"text-gray-400",children:(0,n.jsxs)("i",{children:["The react graph gallery displays chart examples built with"," ",(0,n.jsx)("b",{children:"React"})," and ",(0,n.jsx)("b",{children:"d3.js"})]})})}),(0,n.jsxs)("p",{children:["Have you ever wanted to create your ",(0,n.jsx)("b",{children:"own chart"}),"?"]}),(0,n.jsxs)("p",{children:["Based on ",(0,n.jsx)("del",{children:"hundreds"})," (not yet) of graph examples, this gallery guides you through the basic concepts of ",(0,n.jsx)("b",{children:"data visualization"})," with"," ",(0,n.jsx)("a",{href:"https://reactjs.org",children:"React"})," and"," ",(0,n.jsx)("a",{href:"https://www.d3-graph-gallery.com",children:"D3.js"}),". It also provides ready-to-use ",(0,n.jsx)("b",{children:"templates"})," to get started quicker."]}),(0,n.jsxs)("p",{children:["Stop using pre-made dataviz components and ",(0,n.jsx)("b",{children:"imagination"})," will become the only boundary to your ",(0,n.jsx)("b",{children:"creativity"}),"."]}),(0,n.jsxs)("p",{className:"mt-8",children:["The gallery is organized by chart types following the"," ",(0,n.jsx)("a",{href:"https://www.data-to-viz.com",children:"data-to-viz"})," classification. What kind of graph are you interested in?"]}),(0,n.jsxs)("div",{className:"mb-20",children:[(0,n.jsx)(o.Z,{chartFamily:"distribution"}),(0,n.jsx)(o.Z,{chartFamily:"correlation"}),(0,n.jsx)(o.Z,{chartFamily:"ranking"}),(0,n.jsx)(o.Z,{chartFamily:"partOfAWhole"}),(0,n.jsx)(o.Z,{chartFamily:"evolution"}),(0,n.jsx)(o.Z,{chartFamily:"map"}),(0,n.jsx)(o.Z,{chartFamily:"flow"}),(0,n.jsx)(o.Z,{chartFamily:"general"})]}),(0,n.jsx)(s.Z,{})]})}},9008:function(e,t,r){e.exports=r(5443)},1664:function(e,t,r){e.exports=r(8418)}},function(e){e.O(0,[7045,9774,2888,179],(function(){return t=5301,e(e.s=t);var t}));var t=e.O();_N_E=t}]);