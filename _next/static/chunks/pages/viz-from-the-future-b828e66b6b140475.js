(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[406],{5924:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/viz-from-the-future",function(){return n(8069)}])},3485:function(e,t,n){"use strict";n.d(t,{U:function(){return o}});var r=n(5893),i=n(7294),o=function(e){var t=e.startOpen,n=e.title,o=e.children,s=(0,i.useState)(t),a=s[0],c=s[1],l=a?"max-h-full":"max-h-0",u=a?"overflow-visible":"overflow-hidden";return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("h2",{className:"cursor-pointer",onClick:function(){return c(!a)},children:[a?(0,r.jsx)("span",{className:"text-purple-700 w-4 mr-2 hover:text-purple-900 inline-block",children:"-"}):(0,r.jsx)("span",{className:"text-purple-700 w-4 mr-2 hover:text-purple-900 inline-block",children:"+"}),n]}),(0,r.jsx)("div",{className:"transition-max-height ease-in duration-300  "+l+" "+u,children:o})]})}},2729:function(e,t,n){"use strict";n.d(t,{z:function(){return i}});var r=n(5893),i=function(e){var t=e.children,n=e.onClick,i=e.isFilled,o=e.size,s=void 0===o?"md":o,a="rounded m-1 cursor-pointer border-purple-700 border ";return"sm"===s&&(a+="text-sm py-1 px-2"),"md"===s&&(a+="text-md py-2 px-4"),a+=i?" bg-purple-500 hover:bg-purple-700 text-white":" bg-white hover:bg-purple-700 hover:text-white text-purple-700",(0,r.jsx)("button",{className:a,onClick:n,children:t})}},6158:function(e,t,n){"use strict";n.d(t,{Y:function(){return i}});var r=n(5893),i=function(e){var t=e.children;return(0,r.jsx)("p",{className:"text-sm text-gray-500 max-w-xs italic text-center mt-4 font-light",children:t})}},33:function(e,t,n){"use strict";n.d(t,{$:function(){return l}});var r=n(5893),i=n(7294),o=n(217),s=n(2729),a=n(6158),c=n(7975),l=function(e){var t=e.VizComponent,n=e.vizName,l=e.height,u=void 0===l?400:l,f=e.maxWidth,d=void 0===f?800:f,h=e.caption,p=(0,i.useState)(!1),v=p[0],m=p[1],x=(0,i.useRef)(null),w=(0,o.B)(x);return(0,r.jsx)("div",{style:{marginLeft:"-50vw",left:"50%"},className:"my-4 py-4 w-screen relative",children:v?(0,r.jsxs)("div",{className:"flex flex-col items-center justify-center w-full",children:[(0,r.jsx)("div",{style:{maxWidth:2e3},className:"w-full",children:(0,r.jsx)(c.X,{vizName:n})}),(0,r.jsx)("div",{className:"flex justify-center mt-2",children:(0,r.jsx)(s.z,{size:"sm",onClick:function(){return m(!v)},children:"Hide Sandbox"})})]}):(0,r.jsxs)("div",{className:"flex flex-col items-center justify-center",children:[(0,r.jsx)("div",{className:"bg-gray-50 w-screen flex justify-center",children:(0,r.jsx)("div",{style:{height:u,width:"100%",maxWidth:d},ref:x,children:(0,r.jsx)(t,{height:u,width:w.width})})}),(0,r.jsx)(a.Y,{children:h}),(0,r.jsx)("div",{className:"flex justify-center",children:(0,r.jsx)(s.z,{size:"sm",onClick:function(){return m(!v)},children:"Show code"})})]})})}},7975:function(e,t,n){"use strict";n.d(t,{X:function(){return i}});var r=n(5893),i=(n(7294),function(e){var t="https://codesandbox.io/embed/github/holtzy/react-graph-gallery/tree/main/viz/"+e.vizName+"?fontsize=14&hidenavigation=1&theme=dark&expanddevtools=0";return(0,r.jsx)("iframe",{src:t,style:{width:"100%",height:"500px",border:"solid",borderWidth:2,borderRadius:"4px",overflow:"hidden"},allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"})})},217:function(e,t,n){"use strict";n.d(t,{B:function(){return i}});var r=n(7294),i=function(e){var t=function(){return{width:e.current?e.current.offsetWidth:0,height:e.current?e.current.offsetHeight:0}},n=(0,r.useState)(t),i=n[0],o=n[1],s=function(){o(t())};return(0,r.useEffect)((function(){return window.addEventListener("resize",s),function(){return window.removeEventListener("resize",s)}}),[]),(0,r.useLayoutEffect)((function(){s()}),[]),i}},8418:function(e,t,n){"use strict";function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,i=!1,o=void 0;try{for(var s,a=e[Symbol.iterator]();!(r=(s=a.next()).done)&&(n.push(s.value),!t||n.length!==t);r=!0);}catch(c){i=!0,o=c}finally{try{r||null==a.return||a.return()}finally{if(i)throw o}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}t.default=void 0;var i,o=(i=n(7294))&&i.__esModule?i:{default:i},s=n(6273),a=n(387),c=n(7190);var l={};function u(e,t,n,r){if(e&&s.isLocalURL(t)){e.prefetch(t,n,r).catch((function(e){0}));var i=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;l[t+"%"+n+(i?"%"+i:"")]=!0}}var f=function(e){var t,n=!1!==e.prefetch,i=a.useRouter(),f=o.default.useMemo((function(){var t=r(s.resolveHref(i,e.href,!0),2),n=t[0],o=t[1];return{href:n,as:e.as?s.resolveHref(i,e.as):o||n}}),[i,e.href,e.as]),d=f.href,h=f.as,p=e.children,v=e.replace,m=e.shallow,x=e.scroll,w=e.locale;"string"===typeof p&&(p=o.default.createElement("a",null,p));var g=(t=o.default.Children.only(p))&&"object"===typeof t&&t.ref,y=r(c.useIntersection({rootMargin:"200px"}),2),j=y[0],b=y[1],N=o.default.useCallback((function(e){j(e),g&&("function"===typeof g?g(e):"object"===typeof g&&(g.current=e))}),[g,j]);o.default.useEffect((function(){var e=b&&n&&s.isLocalURL(d),t="undefined"!==typeof w?w:i&&i.locale,r=l[d+"%"+h+(t?"%"+t:"")];e&&!r&&u(i,d,h,{locale:t})}),[h,d,b,w,n,i]);var _={ref:N,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,n,r,i,o,a,c){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&s.isLocalURL(n))&&(e.preventDefault(),null==a&&r.indexOf("#")>=0&&(a=!1),t[i?"replace":"push"](n,r,{shallow:o,locale:c,scroll:a}))}(e,i,d,h,v,m,x,w)},onMouseEnter:function(e){s.isLocalURL(d)&&(t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),u(i,d,h,{priority:!0}))}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var k="undefined"!==typeof w?w:i&&i.locale,C=i&&i.isLocaleDomain&&s.getDomainLocale(h,k,i&&i.locales,i&&i.domainLocales);_.href=C||s.addBasePath(s.addLocale(h,k,i&&i.defaultLocale))}return o.default.cloneElement(t,_)};t.default=f},7190:function(e,t,n){"use strict";function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,i=!1,o=void 0;try{for(var s,a=e[Symbol.iterator]();!(r=(s=a.next()).done)&&(n.push(s.value),!t||n.length!==t);r=!0);}catch(c){i=!0,o=c}finally{try{r||null==a.return||a.return()}finally{if(i)throw o}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!s,c=i.useRef(),l=r(i.useState(!1),2),u=l[0],f=l[1],d=i.useCallback((function(e){c.current&&(c.current(),c.current=void 0),n||u||e&&e.tagName&&(c.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=a.get(t);if(n)return n;var r=new Map,i=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return a.set(t,n={id:t,observer:i,elements:r}),n}(n),i=r.id,o=r.observer,s=r.elements;return s.set(e,t),o.observe(e),function(){s.delete(e),o.unobserve(e),0===s.size&&(o.disconnect(),a.delete(i))}}(e,(function(e){return e&&f(e)}),{rootMargin:t}))}),[n,t,u]);return i.useEffect((function(){if(!s&&!u){var e=o.requestIdleCallback((function(){return f(!0)}));return function(){return o.cancelIdleCallback(e)}}}),[u]),[d,u]};var i=n(7294),o=n(9311),s="undefined"!==typeof IntersectionObserver;var a=new Map},8069:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return v}});var r=n(5893),i=(n(7294),n(6184)),o=n(6193),s=n(6978),a=n(33),c=n(7197),l=n(3485),u=n(7639),f=n.n(u),d=function(e){var t=e.width,n=e.height;return(0,r.jsx)("div",{style:{width:t,height:n},className:f().container,children:(0,r.jsx)("div",{className:f().glowCircle})})},h=function(e){var t=e.width,n=void 0===t?700:t,i=e.height,o=void 0===i?400:i;return(0,r.jsx)(d,{width:n,height:o})},p=(0,r.jsx)("p",{children:"Building a viz from the future?"});"\nexport const useDimensions = (targetRef: React.RefObject<HTMLDivElement>) => {\n\n  const getDimensions = () => {\n    return {\n      width: targetRef.current ? targetRef.current.offsetWidth : 0,\n      height: targetRef.current ? targetRef.current.offsetHeight : 0\n    };\n\n}\n".trim();function v(){return(0,r.jsxs)(i.A,{title:"How to build a responsive chart with React and d3.js",seoDescription:"How to build a responsive chart with React and d3.js",children:[(0,r.jsx)(o.Z,{title:"A viz from the future",description:p}),(0,r.jsxs)(l.U,{title:"What is a viz from the future?",startOpen:!0,children:[(0,r.jsx)("p",{children:"You know minority report?"}),(0,r.jsxs)("p",{children:[(0,r.jsx)("a",{href:"https://www.behance.net/gallery/92170213/FUI-HUD-Screens",children:"This video"})," ","is what I mean"]}),(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:"Dark mode"}),(0,r.jsx)("li",{children:"Flashy, Neon color"}),(0,r.jsx)("li",{children:"Glowing shapes"}),(0,r.jsx)("li",{children:"Gradient"}),(0,r.jsx)("li",{children:"Animation"})]})]}),(0,r.jsxs)(l.U,{title:"Glowing",startOpen:!0,children:[(0,r.jsxs)("p",{children:["Can be done with overlapping ",(0,r.jsx)("code",{children:"box-shadow"}),". How to do it in svg? In canvas?"]}),(0,r.jsx)(a.$,{vizName:"FuturisticColor",VizComponent:h,maxWidth:600,height:400})]}),(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),(0,r.jsx)("hr",{className:"full-bleed bord er bg-gray-200 mb-3 mt-10"}),(0,r.jsx)(c.Z,{chartFamily:"general"}),(0,r.jsx)("div",{className:"mt-20"}),(0,r.jsx)(s.Z,{})]})}},7639:function(e){e.exports={container:"shapes_container__kWKGI",glowCircle:"shapes_glowCircle__E0Ci_"}},9008:function(e,t,n){e.exports=n(5443)},1664:function(e,t,n){e.exports=n(8418)}},function(e){e.O(0,[702,774,888,179],(function(){return t=5924,e(e.s=t);var t}));var t=e.O();_N_E=t}]);