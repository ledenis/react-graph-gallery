(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2972],{1941:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/fix-canvas-blurry-dataviz",function(){return n(9711)}])},3485:function(e,t,n){"use strict";n.d(t,{U:function(){return s}});var i=n(5893),r=n(7294),s=function(e){var t=e.startOpen,n=e.title,s=e.children,a=e.toc,o=(0,r.useState)(t),l=o[0],c=o[1],d=l?"max-h-full":"max-h-0",h=l?"overflow-visible":"overflow-hidden";return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("h2",{className:"cursor-pointer",onClick:function(){return c(!l)},id:a,children:[l?(0,i.jsx)("span",{className:"text-purple-700 w-4 mr-2 hover:text-purple-900 inline-block",children:"-"}):(0,i.jsx)("span",{className:"text-purple-700 w-4 mr-2 hover:text-purple-900 inline-block",children:"+"}),n]}),(0,i.jsx)("div",{className:"transition-max-height ease-in duration-300  "+d+" "+h,children:s})]})}},7197:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var i=n(5893),r=(n(7294),n(6761)),s=n(1878),a=n(1664),o=s.c.filter((function(e){return"general"===e.family})).map((function(e){return e.logo}));function l(e){var t=e.chartLogo,n=e.caption,s=e.link,l=e.isAvailable,d=e.size,h=o.includes(t),u=l?"opacity-100":"opacity-20",f=l?"cursor-pointer":"cursor-not-allowed";return(0,i.jsx)(a.default,{href:l?s:"subscribe",children:(0,i.jsxs)("div",{className:"flex flex-col items-center",children:[(0,i.jsxs)("div",{style:{width:d,height:d},className:"relative mr-2 rounded-full "+u+" "+f,children:[(0,i.jsx)("div",{className:"absolute",children:(0,i.jsx)(r.Z,{chartLogo:t})}),h?(0,i.jsx)("div",{className:"absolute opacity-0 hover:opacity-60 flex items-center justify-center w-full h-full z-30",children:(0,i.jsx)(c,{size:d})}):(0,i.jsx)("div",{style:{backgroundColor:"var(--react-gallery)"},className:"opacity-0 hover:opacity-60 flex items-center justify-center w-full h-full rounded-full z-30",children:(0,i.jsx)("span",{className:"text-white text-4xl",children:"+"})})]}),(0,i.jsx)("p",{className:"font-light text-sm text-gray-600 "+u,children:n})]})})}var c=function(e){var t=e.size;return(0,i.jsx)("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:t,height:t,viewBox:"0 0 100 100",className:"fill-current text-purple-800",children:(0,i.jsx)("path",{d:"M50,0 L100,20 L100,80 L50,100 L0,80 L0,20 Z"})})},d=n(3414),h={distribution:"Distribution",correlation:"Correlation",ranking:"Ranking",partOfAWhole:"Part Of A Whole",evolution:"Evolution",map:"Map",flow:"Flow",general:"General Knowledge"};function u(e){var t=e.chartFamily,n=s.c.filter((function(e){return e.family===t})).map((function(e,t){var n=(0,d.y)(e.reactURL);return(0,i.jsx)("div",{className:"flex flex-col items-center justify-center",children:(0,i.jsx)(l,{link:n,chartLogo:e.logo,caption:e.label,isAvailable:e.isAvailable,size:129})},t)}));return(0,i.jsxs)("div",{children:[(0,i.jsx)("p",{className:t+"  mt-4 text-md border-b mb-2 border-gray-100 tracking-wider",children:null===h||void 0===h?void 0:h[t]}),(0,i.jsx)("div",{className:"flex flex-row justify-start flex-wrap",children:n})]})}},7975:function(e,t,n){"use strict";n.d(t,{X:function(){return r}});var i=n(5893),r=(n(7294),function(e){var t="https://codesandbox.io/embed/github/holtzy/react-graph-gallery/tree/main/viz/"+e.vizName+"?fontsize=14&hidenavigation=1&theme=dark&expanddevtools=0";return(0,i.jsx)("iframe",{src:t,style:{width:"100%",height:"500px",border:"solid",borderWidth:2,borderRadius:"4px",overflow:"hidden"},allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"})})},1884:function(e,t,n){"use strict";n.d(t,{A:function(){return u}});var i=n(5893),r=n(3185),s=n(1261),a=n(7294),o=n(3924),l=n.n(o);function c(){var e=(0,a.useState)([]),t=e[0],n=e[1],r=(0,a.useState)(0),s=r[0],o=r[1];return(0,a.useEffect)((function(){var e=Array.from(document.querySelectorAll("h2"));n(e)}),[]),(0,a.useEffect)((function(){var e=function(){var e=t.map((function(e){return e.offsetTop-e.scrollTop+e.clientTop})),n=window.scrollY+150,i=e.reduce((function(e,t){return Math.abs(t-n)<Math.abs(e-n)?t:e}),0),r=e.findIndex((function(e){return e===i}));o(-1===r?0:r)};return window.addEventListener("scroll",e),function(){return window.removeEventListener("scroll",e)}}),[t]),(0,i.jsx)("div",{className:l().tableOfContent,children:t.map((function(e,n){return(0,i.jsx)("p",{className:s===n?"".concat(l().tocItem," ").concat(l().tocItemActive):l().tocItem,onClick:function(e){e.preventDefault(),t[n].scrollIntoView({behavior:"smooth",block:"start",alignToTop:!0})},children:e.id.charAt(0).toUpperCase()+e.id.slice(1)},e.id)}))})}var d=n(8171),h=n(6978),u=function(e){var t=e.children,n=e.title,a=e.seoDescription;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(d.A,{title:n,seoDescription:a}),(0,i.jsxs)("div",{className:"wrapper",children:[(0,i.jsx)(r.Z,{}),t]}),(0,i.jsx)(h.Z,{}),(0,i.jsx)("div",{className:"wrapper",children:(0,i.jsx)(s.Z,{})}),(0,i.jsx)(c,{})]})}},1687:function(e,t,n){"use strict";n.d(t,{J:function(){return s}});var i=n(5893),r=n(1664),s=function(e){var t=e.children,n=e.href,s=e.isFilled,a=e.size,o=void 0===a?"md":a,l=e.isFaded,c=n.startsWith("www")||n.startsWith("http"),d="font-normal rounded mr-1 cursor-pointer border-reactGallery border ";d+=s?" bg-reactGallery hover:bg-reactGallery text-white ":" bg-white hover:bg-reactGallery hover:text-white text-reactGallery ","sm"===o&&(d+="text-sm py-1 px-2 "),"md"===o&&(d+="text-md py-2 px-4 "),l&&(d+="opacity-60");var h=(0,i.jsx)("span",{className:d,children:t});return c?(0,i.jsx)("a",{href:n,target:"_blank",children:h}):(0,i.jsx)(r.default,{href:n,passHref:!0,children:(0,i.jsx)("a",{children:h})})}},8807:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var i=n(5893),r=(n(7294),n(1878)),s=n(3414),a=n(3919),o=n(1687),l=n(3187),c=n.n(l),d=function(e){var t=e.direction,n=e.text,r=e.children;return(0,i.jsx)("span",{className:c().tooltip+" "+c()[t],id:n,children:r})},h=n(6761);function u(e){var t=e.title,n=e.description,l=e.chartType,c=e.showSectionLink,u=void 0!==c&&c,f=e.showInspirationLink,x=void 0===f||f,p=e.showD3GalleryLink,v=void 0===p||p,m=r.c.find((function(e){return e.id===l}));return m?(0,i.jsxs)("div",{className:"w-full pt-1 sm:pt-28 pb-20 ",children:[(0,i.jsxs)("div",{className:"flex justify-start items-center",children:[(0,i.jsx)("h1",{children:t}),(0,i.jsx)("div",{className:"w-20 ml-4",children:(0,i.jsx)(h.Z,{chartLogo:null===m||void 0===m?void 0:m.logo})})]}),(0,i.jsx)(a.r,{}),(0,i.jsx)("div",{className:"max-w-xxl py-2",children:n}),l&&(0,i.jsx)("span",{className:"text-gray-400 text-sm font-light",children:"Useful links"}),l&&(0,i.jsxs)("div",{className:"flex flex-row flex-wrap",children:[u&&(0,i.jsx)(d,{text:"kkkk",direction:"bottom",children:(0,i.jsx)(o.J,{href:(0,s.y)(m.reactURL),size:"sm",children:m.label+" section"})}),x&&(0,i.jsx)(d,{text:"Hundreds of stunning dataviz projects to gather inspiration",direction:"bottom",children:(0,i.jsx)(o.J,{href:"https://www.dataviz-inspiration.com/"+m.id,size:"sm",children:"inspiration"})}),v&&(0,i.jsx)(d,{text:"Pure d3 implementation, no React",direction:"bottom",children:(0,i.jsx)(o.J,{href:m.d3URL,size:"sm",children:"d3 gallery"})}),(0,i.jsx)(d,{text:"Dataviz theory about this chart",direction:"bottom",children:(0,i.jsx)(o.J,{href:m.dataToVizURL,isFilled:!0,size:"sm",children:"About this chart"})})]})]}):null}},4893:function(e,t,n){"use strict";n.d(t,{z:function(){return r}});var i=n(5893),r=function(e){var t=e.children,n=e.onClick,r=e.isFilled,s=e.size,a=void 0===s?"md":s,o="rounded m-1 cursor-pointer border-reactGallery border ";return"sm"===a&&(o+="text-sm py-1 px-2"),"md"===a&&(o+="text-md py-2 px-4"),o+=r?" bg-reactGallery hover:bg-reactGallery text-white":" bg-white hover:bg-reactGallery hover:text-white text-reactGallery",(0,i.jsx)("button",{className:o,onClick:n,children:t})}},5380:function(e,t,n){"use strict";n.d(t,{Y:function(){return r}});var i=n(5893),r=function(e){var t=e.children;return(0,i.jsx)("p",{className:"text-sm text-gray-500 max-w-xs italic text-center mt-4 font-light",children:t})}},8193:function(e,t,n){"use strict";n.d(t,{d:function(){return o}});var i=n(5893),r=n(4725),s=n.n(r),a=n(7294),o=function(e){var t=e.code,n=(0,a.useRef)(null);return(0,a.useEffect)((function(){n.current&&s().highlightElement(n.current)}),[n,t]),(0,i.jsx)("div",{className:"mb-6",children:(0,i.jsx)("pre",{className:"rounded-md line-numbers",children:(0,i.jsx)("code",{ref:n,className:"p-0 language-js",children:t})})})}},8418:function(e,t,n){"use strict";function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],i=!0,r=!1,s=void 0;try{for(var a,o=e[Symbol.iterator]();!(i=(a=o.next()).done)&&(n.push(a.value),!t||n.length!==t);i=!0);}catch(l){r=!0,s=l}finally{try{i||null==o.return||o.return()}finally{if(r)throw s}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}t.default=void 0;var r,s=(r=n(7294))&&r.__esModule?r:{default:r},a=n(6273),o=n(387),l=n(7190);var c={};function d(e,t,n,i){if(e&&a.isLocalURL(t)){e.prefetch(t,n,i).catch((function(e){0}));var r=i&&"undefined"!==typeof i.locale?i.locale:e&&e.locale;c[t+"%"+n+(r?"%"+r:"")]=!0}}var h=function(e){var t,n=!1!==e.prefetch,r=o.useRouter(),h=s.default.useMemo((function(){var t=i(a.resolveHref(r,e.href,!0),2),n=t[0],s=t[1];return{href:n,as:e.as?a.resolveHref(r,e.as):s||n}}),[r,e.href,e.as]),u=h.href,f=h.as,x=e.children,p=e.replace,v=e.shallow,m=e.scroll,g=e.locale;"string"===typeof x&&(x=s.default.createElement("a",null,x));var j=(t=s.default.Children.only(x))&&"object"===typeof t&&t.ref,w=i(l.useIntersection({rootMargin:"200px"}),2),b=w[0],y=w[1],N=s.default.useCallback((function(e){b(e),j&&("function"===typeof j?j(e):"object"===typeof j&&(j.current=e))}),[j,b]);s.default.useEffect((function(){var e=y&&n&&a.isLocalURL(u),t="undefined"!==typeof g?g:r&&r.locale,i=c[u+"%"+f+(t?"%"+t:"")];e&&!i&&d(r,u,f,{locale:t})}),[f,u,y,g,n,r]);var k={ref:N,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,n,i,r,s,o,l){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&a.isLocalURL(n))&&(e.preventDefault(),null==o&&i.indexOf("#")>=0&&(o=!1),t[r?"replace":"push"](n,i,{shallow:s,locale:l,scroll:o}))}(e,r,u,f,p,v,m,g)},onMouseEnter:function(e){a.isLocalURL(u)&&(t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),d(r,u,f,{priority:!0}))}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var z="undefined"!==typeof g?g:r&&r.locale,T=r&&r.isLocaleDomain&&a.getDomainLocale(f,z,r&&r.locales,r&&r.domainLocales);k.href=T||a.addBasePath(a.addLocale(f,z,r&&r.defaultLocale))}return s.default.cloneElement(t,k)};t.default=h},7190:function(e,t,n){"use strict";function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],i=!0,r=!1,s=void 0;try{for(var a,o=e[Symbol.iterator]();!(i=(a=o.next()).done)&&(n.push(a.value),!t||n.length!==t);i=!0);}catch(l){r=!0,s=l}finally{try{i||null==o.return||o.return()}finally{if(r)throw s}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!a,l=r.useRef(),c=i(r.useState(!1),2),d=c[0],h=c[1],u=r.useCallback((function(e){l.current&&(l.current(),l.current=void 0),n||d||e&&e.tagName&&(l.current=function(e,t,n){var i=function(e){var t=e.rootMargin||"",n=o.get(t);if(n)return n;var i=new Map,r=new IntersectionObserver((function(e){e.forEach((function(e){var t=i.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return o.set(t,n={id:t,observer:r,elements:i}),n}(n),r=i.id,s=i.observer,a=i.elements;return a.set(e,t),s.observe(e),function(){a.delete(e),s.unobserve(e),0===a.size&&(s.disconnect(),o.delete(r))}}(e,(function(e){return e&&h(e)}),{rootMargin:t}))}),[n,t,d]);return r.useEffect((function(){if(!a&&!d){var e=s.requestIdleCallback((function(){return h(!0)}));return function(){return s.cancelIdleCallback(e)}}}),[d]),[u,d]};var r=n(7294),s=n(9311),a="undefined"!==typeof IntersectionObserver;var o=new Map},9711:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return N}});var i=n(5893),r=n(7294),s=n(1884),a=n(8807),o=n(6978),l=n(7197),c=n(3485),d=n(8193),h=n(5380),u=function(e){var t=e.width,n=e.height,s=window.devicePixelRatio,a=(0,r.useRef)(null);return(0,r.useEffect)((function(){var e=a.current;null===e||void 0===e||e.setAttribute("width","".concat(t*s,"px")),null===e||void 0===e||e.setAttribute("height","".concat(n*s,"px"));var i=null===e||void 0===e?void 0:e.getContext("2d");i&&(i.scale(s,s),i.lineWidth=15,i.beginPath(),i.moveTo(t/2,20),i.lineTo(t-20,n/2),i.lineTo(t/2,n-20),i.lineTo(20,n/2),i.lineTo(t/2,n/2),i.stroke())}),[t,n,s]),(0,i.jsx)("div",{children:(0,i.jsx)("canvas",{ref:a,style:{width:t,height:n,backgroundColor:"#afb8c133"}})})},f=function(e){var t=e.width,n=e.height,s=(0,r.useRef)(null);return(0,r.useEffect)((function(){var e=s.current,i=null===e||void 0===e?void 0:e.getContext("2d");i&&(i.lineWidth=15,i.beginPath(),i.moveTo(t/2,20),i.lineTo(t-20,n/2),i.lineTo(t/2,n-20),i.lineTo(20,n/2),i.lineTo(t/2,n/2),i.stroke())}),[t,n]),(0,i.jsx)("div",{children:(0,i.jsx)("canvas",{ref:s,style:{width:t,height:n,backgroundColor:"#afb8c133"},width:t,height:n})})},x=n(4893),p=n(7975);function v(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],i=!0,r=!1,s=void 0;try{for(var a,o=e[Symbol.iterator]();!(i=(a=o.next()).done)&&(n.push(a.value),!t||n.length!==t);i=!0);}catch(l){r=!0,s=l}finally{try{i||null==o.return||o.return()}finally{if(r)throw s}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function m(e){var t=e.vizName,n=e.label,s=v(r.useState(!1),2),a=s[0],o=s[1];return(0,i.jsxs)(i.Fragment,{children:[!a&&(0,i.jsx)(x.z,{size:"sm",onClick:function(){return o(!0)},children:n}),a&&(0,i.jsx)(x.z,{size:"sm",onClick:function(){return o(!1)},children:"Hide Sandbox"}),a&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),(0,i.jsx)("div",{className:"",children:(0,i.jsx)(p.X,{vizName:t})})]})]})}var g=(0,i.jsxs)("p",{children:["Drawing a chart on a ",(0,i.jsx)("code",{children:"canvas"})," element instead of using"," ",(0,i.jsx)("code",{children:"svg"})," elements can be a huge performance boost. However, it leads to a blurry and unreadable viz on retina screens if the resolution is not taken into account. ",(0,i.jsx)("b",{children:"Here is how to fix"}),"."]}),j=function(e){var t=document.getElementById(e).getContext("2d");t&&(t.beginPath(),t.moveTo(0,0),t.lineTo(100,100),t.stroke())},w='\n<canvas style="width:200px; height:200px;" width="100px" height="100px">\n'.trim(),b='\n<canvas style="width:300px; height:300px;" width="100px" height="100px">\n'.trim(),y='\n<canvas style="width:100px; height:100px;" width="200px" height="200px">\n'.trim();"\nreturn(\n  <div ref={chartRef}>\n    <MyChartComponent\n      height={chartSize.height}\n      width={chartSize.width}\n  </div>\n)\n".trim();function N(){return(0,r.useEffect)((function(){j("canvas1"),j("canvas2")}),[]),(0,i.jsxs)(s.A,{title:"Fixing the blurry canvas on retina screens",seoDescription:"Building a viz with canvas results in a blurry chart on retina screens. Here is why and how to fix it.",children:[(0,i.jsx)(a.Z,{title:"Fixing the blurry canvas on retina screens",description:g}),(0,i.jsxs)(c.U,{title:"\u2b1c Pixel, Resolution and DPI",startOpen:!0,children:[(0,i.jsxs)("p",{children:["To understand why a ",(0,i.jsx)("code",{children:"canvas"})," can get blurry on a retina screen, you first need to have some basic knowledge about how an image is displayed on a screen."]}),(0,i.jsxs)("p",{children:["Screens are made up of thousands of tiny dots all bunched together called ",(0,i.jsx)("b",{children:"pixels"}),". Each pixel has the ability to"," ",(0,i.jsx)("a",{href:"https://www.youtube.com/watch?v=3BJU2drrtCM&t=450s",children:"change its color"}),". The total number of pixels on a screen differs from one monitor to another, we call it the screen ",(0,i.jsx)("b",{children:"resolution"}),". If the screen has 1,024 pixels horizontally, and 768 vertically it has a 'resolution' of 1,024 x 768."]}),(0,i.jsxs)("div",{className:"flex flex-col items-center",children:[(0,i.jsx)("img",{src:"./img/screen_mockup.png",style:{maxWidth:600}}),(0,i.jsxs)(h.Y,{children:["When you watch"," ",(0,i.jsx)("a",{href:"https://www.dataviz-inspiration.com",children:"dataviz-inspiration.com"})," ","on your screen, you actually watch thousands of pixels."]})]}),(0,i.jsxs)("p",{children:["It's important to understand that 2 screens with the same"," ",(0,i.jsx)("b",{children:"physical size"})," (let's say 30 inches) can have very different amount of pixels. The density of pixels on a screen is called"," ",(0,i.jsx)("b",{children:"DPI"})," for ",(0,i.jsx)("b",{children:"dots per inch"})," or ppi for pixels per inch."]}),(0,i.jsxs)("p",{children:[(0,i.jsx)("b",{children:"Retina"})," screens have a very high DPI, and it is where our troubbles begin"]})]}),(0,i.jsxs)(c.U,{title:"\u2195\ufe0f Physical vs CSS resolution",startOpen:!0,children:[(0,i.jsxs)("p",{children:["Let's say that you create a html element and give it a"," ",(0,i.jsx)("code",{children:"width"})," of 100px using css. This is the ",(0,i.jsx)("b",{children:"css width"}),". If you use a screen that has a very high resolution, pixels are very very small. As a result, your element of 100px would appear very small too on the screen."]}),(0,i.jsxs)("p",{children:["To avoid this, each monitor applies a ",(0,i.jsx)("b",{children:"pixel ratio"}),". On a retina screen this ratio equals 2. When you ask the monitor to draw an element of 100px, it will actually draw it with a length of 200px. This is the ",(0,i.jsx)("b",{children:"physical width"}),"."]}),(0,i.jsxs)("p",{children:["In javascript, you can access this ratio with"," ",(0,i.jsx)("code",{children:"window.devicePixelRatio"})," and here is the"," ",(0,i.jsx)("a",{href:"https://developer.mozilla.org/en-US/docs/Web/API/Window/devicePixelRatio",children:"complete doc"})," ","about it."]})]}),(0,i.jsxs)(c.U,{title:"\ud83d\udc1b Canvas, High-DPI and the bug",startOpen:!0,children:[(0,i.jsxs)("p",{children:["Let's add a ",(0,i.jsx)("code",{children:"canvas"})," element in our DOM, with a width of 100px. It is the equivalent of building an image, 100px wide, that we insert in the DOM."]}),(0,i.jsxs)("p",{children:["If we display the result on a retina screen with a"," ",(0,i.jsx)("code",{children:"devicePixelRatio"})," of 2, the image will be scaled up to 200px wide. The browser will interpolate pixels to make the image bigger, and it ",(0,i.jsx)("b",{children:"results in a blurry output"}),"."]}),(0,i.jsx)("p",{children:"To avoid this issue, we the canvas we're creating must be twice bigger on retina screen"}),(0,i.jsxs)("div",{className:"flex flex-col items-center",children:[(0,i.jsx)("img",{src:"/img/pixel-tiger.png",style:{maxWidth:500}}),(0,i.jsx)(h.Y,{children:"A small img or canvas on a retina screen will be scaled up, resulting in a pixelated / blurry output."})]})]}),(0,i.jsxs)(c.U,{title:"\ud83e\udd26\u200d\u2642\ufe0f The 2 dimensions of the canvas element",startOpen:!0,children:[(0,i.jsxs)("p",{children:["There are 2 different ways to control the dimension of a"," ",(0,i.jsx)("code",{children:"canvas"})," element."]}),(0,i.jsxs)("ul",{children:[(0,i.jsxs)("li",{children:[(0,i.jsx)("b",{children:"width and height attributes"}),": They control the size of the image that is created and inserted in the DOM.",(0,i.jsx)("br",{}),"Default to 300px and 150px so always specify them."]}),(0,i.jsxs)("li",{children:[(0,i.jsx)("b",{children:"css style"}),": the canvas element can be styled using CSS. As a result we can also pass a ",(0,i.jsx)("code",{children:"width"})," and a"," ",(0,i.jsx)("code",{children:"height"})," here. It controls the size of the element on the screen."]})]}),(0,i.jsx)("br",{}),(0,i.jsx)("p",{children:"Here is a html code snippet illustrating this concept:"}),(0,i.jsx)(d.d,{code:w}),(0,i.jsx)("p",{children:"Now, let's play with those 2 values to see what happens. In the examples below, a segment going from 0,0 (top left) to 100,100 is drawn."}),(0,i.jsx)("h3",{children:"\u2192 Small image, big output"}),(0,i.jsx)("p",{children:"If I create a small image with my canvas (100x100) and output it in big (300x300), the browser has to scale it up to display it, resulting in a blurry output"}),(0,i.jsx)(d.d,{code:b}),(0,i.jsx)("p",{children:"This is exactly what happens when you display a canvas on a retina screen \ud83d\ude40."}),(0,i.jsx)("canvas",{style:{border:"1px solid",width:300,height:300},id:"canvas1",width:"100px",height:"100px"}),(0,i.jsx)("h3",{children:"\u2192 Big image, small output"}),(0,i.jsx)("p",{children:"Now I create a big image with my canvas (200x200) and output it in small (100x100), the browser has to scale it down to display it, \u2192 crispy output!"}),(0,i.jsx)(d.d,{code:y}),(0,i.jsxs)("p",{children:["Much better. But my diagonal is now wrong since it goes to 100,100, which is half way to 200,200. Fortunately javascript is here to the rescue. I will just have to use the"," ",(0,i.jsx)("a",{href:"https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/scales",children:"scale function"})," ","to automatically correct those coordinates."]}),(0,i.jsx)("canvas",{style:{border:"1px solid",width:100,height:100},id:"canvas2",width:"200px",height:"200px"})]}),(0,i.jsxs)(c.U,{title:"\ud83d\udd28 Fixing the Canvas and Retina screens issue",startOpen:!0,children:[(0,i.jsx)("p",{children:"To finally fix the retina bug, we need to:"}),(0,i.jsxs)("ul",{children:[(0,i.jsxs)("li",{children:["Control the size of the canvas output using the ",(0,i.jsx)("b",{children:"css dimension"})]}),(0,i.jsxs)("li",{children:["Find the device pixel ratio using"," ",(0,i.jsx)("code",{children:"window.devicePixelRatio"})]}),(0,i.jsxs)("li",{children:["Create a bigger canvas image if the pixel ratio is over 1. This is done thanks to the ",(0,i.jsx)("code",{children:"width"})," and ",(0,i.jsx)("code",{children:"height"})," ","attributes."]}),(0,i.jsxs)("li",{children:["Use the ",(0,i.jsx)("code",{children:"scale()"})," function in our canvas context to correct our coordinates"]})]}),(0,i.jsx)("br",{}),(0,i.jsx)("p",{children:"Here are 2 examples. The first one does not apply the correction (left). The second does the correction (right)"}),(0,i.jsxs)("div",{className:"flex flex-col items-center",children:[(0,i.jsxs)("div",{className:"flex justify-center gap-x-4",children:[(0,i.jsx)(f,{width:300,height:300}),(0,i.jsx)(u,{width:300,height:300})]}),(0,i.jsx)(h.Y,{children:"On retina screens, the left shape is blurry when the right one is not."})]}),(0,i.jsx)("p",{children:"To see the full code of those 2 examples, click the buttons below."}),(0,i.jsx)(m,{label:"code with bug",vizName:"CanvasShapeBug"}),(0,i.jsx)(m,{label:"code with fix",vizName:"CanvasShapeFix"})]}),(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),(0,i.jsx)("hr",{className:"full-bleed bord er bg-gray-200 mb-3 mt-10"}),(0,i.jsx)(l.Z,{chartFamily:"general"}),(0,i.jsx)("div",{className:"mt-20"}),(0,i.jsx)(o.Z,{})]})}},3187:function(e){e.exports={tooltip:"tooltip_tooltip__Fv96Y",right:"tooltip_right__lXq9G",left:"tooltip_left__hUc5l",bottom:"tooltip_bottom__Qzoh5",top:"tooltip_top__qDz28"}},3924:function(e){e.exports={tableOfContent:"table-of-content_tableOfContent__oi0XB",tocItem:"table-of-content_tocItem__fZBSX",tocItemActive:"table-of-content_tocItemActive__kiClt"}},9008:function(e,t,n){e.exports=n(5443)},1664:function(e,t,n){e.exports=n(8418)}},function(e){e.O(0,[5660,358,9774,2888,179],(function(){return t=1941,e(e.s=t);var t}));var t=e.O();_N_E=t}]);