(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5660],{5660:function(e,t,a){/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */var n,r,s=function(e){var t=/\blang(?:uage)?-([\w-]+)\b/i,a=0,n={},r={manual:e.Prism&&e.Prism.manual,disableWorkerMessageHandler:e.Prism&&e.Prism.disableWorkerMessageHandler,util:{encode:function e(t){return t instanceof s?new s(t.type,e(t.content),t.alias):Array.isArray(t)?t.map(e):t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).slice(8,-1)},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++a}),e.__id},clone:function e(t,a){var n,s;switch(a=a||{},r.util.type(t)){case"Object":if(a[s=r.util.objId(t)])return a[s];for(var i in n={},a[s]=n,t)t.hasOwnProperty(i)&&(n[i]=e(t[i],a));return n;case"Array":if(a[s=r.util.objId(t)])return a[s];return n=[],a[s]=n,t.forEach(function(t,r){n[r]=e(t,a)}),n;default:return t}},getLanguage:function(e){for(;e&&!t.test(e.className);)e=e.parentElement;return e?(e.className.match(t)||[,"none"])[1].toLowerCase():"none"},currentScript:function(){if("undefined"==typeof document)return null;if("currentScript"in document)return document.currentScript;try{throw Error()}catch(n){var e=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(n.stack)||[])[1];if(e){var t=document.getElementsByTagName("script");for(var a in t)if(t[a].src==e)return t[a]}return null}},isActive:function(e,t,a){for(var n="no-"+t;e;){var r=e.classList;if(r.contains(t))return!0;if(r.contains(n))return!1;e=e.parentElement}return!!a}},languages:{plain:n,plaintext:n,text:n,txt:n,extend:function(e,t){var a=r.util.clone(r.languages[e]);for(var n in t)a[n]=t[n];return a},insertBefore:function(e,t,a,n){var s=(n=n||r.languages)[e],i={};for(var l in s)if(s.hasOwnProperty(l)){if(l==t)for(var o in a)a.hasOwnProperty(o)&&(i[o]=a[o]);a.hasOwnProperty(l)||(i[l]=s[l])}var u=n[e];return n[e]=i,r.languages.DFS(r.languages,function(t,a){a===u&&t!=e&&(this[t]=i)}),i},DFS:function e(t,a,n,s){s=s||{};var i=r.util.objId;for(var l in t)if(t.hasOwnProperty(l)){a.call(t,l,t[l],n||l);var o=t[l],u=r.util.type(o);"Object"!==u||s[i(o)]?"Array"!==u||s[i(o)]||(s[i(o)]=!0,e(o,a,l,s)):(s[i(o)]=!0,e(o,a,null,s))}}},plugins:{},highlightAll:function(e,t){r.highlightAllUnder(document,e,t)},highlightAllUnder:function(e,t,a){var n={callback:a,container:e,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};r.hooks.run("before-highlightall",n),n.elements=Array.prototype.slice.apply(n.container.querySelectorAll(n.selector)),r.hooks.run("before-all-elements-highlight",n);for(var s,i=0;s=n.elements[i++];)r.highlightElement(s,!0===t,n.callback)},highlightElement:function(a,n,s){var i=r.util.getLanguage(a),l=r.languages[i];a.className=a.className.replace(t,"").replace(/\s+/g," ")+" language-"+i;var o=a.parentElement;o&&"pre"===o.nodeName.toLowerCase()&&(o.className=o.className.replace(t,"").replace(/\s+/g," ")+" language-"+i);var u=a.textContent,c={element:a,language:i,grammar:l,code:u};function g(e){c.highlightedCode=e,r.hooks.run("before-insert",c),c.element.innerHTML=c.highlightedCode,r.hooks.run("after-highlight",c),r.hooks.run("complete",c),s&&s.call(c.element)}if(r.hooks.run("before-sanity-check",c),(o=c.element.parentElement)&&"pre"===o.nodeName.toLowerCase()&&!o.hasAttribute("tabindex")&&o.setAttribute("tabindex","0"),!c.code){r.hooks.run("complete",c),s&&s.call(c.element);return}if(r.hooks.run("before-highlight",c),!c.grammar){g(r.util.encode(c.code));return}if(n&&e.Worker){var d=new Worker(r.filename);d.onmessage=function(e){g(e.data)},d.postMessage(JSON.stringify({language:c.language,code:c.code,immediateClose:!0}))}else g(r.highlight(c.code,c.grammar,c.language))},highlight:function(e,t,a){var n={code:e,grammar:t,language:a};return r.hooks.run("before-tokenize",n),n.tokens=r.tokenize(n.code,n.grammar),r.hooks.run("after-tokenize",n),s.stringify(r.util.encode(n.tokens),n.language)},tokenize:function(e,t){var a=t.rest;if(a){for(var n in a)t[n]=a[n];delete t.rest}var u=new l;return o(u,u.head,e),function e(t,a,n,l,u,c){for(var g in n)if(n.hasOwnProperty(g)&&n[g]){var d=n[g];d=Array.isArray(d)?d:[d];for(var p=0;p<d.length;++p){if(c&&c.cause==g+","+p)return;var h=d[p],f=h.inside,m=!!h.lookbehind,v=!!h.greedy,b=h.alias;if(v&&!h.pattern.global){var y=h.pattern.toString().match(/[imsuy]*$/)[0];h.pattern=RegExp(h.pattern.source,y+"g")}for(var k=h.pattern||h,F=l.next,x=u;F!==a.tail&&(!c||!(x>=c.reach));x+=F.value.length,F=F.next){var w,A=F.value;if(a.length>t.length)return;if(!(A instanceof s)){var $=1;if(v){if(!(w=i(k,x,t,m)))break;var S=w.index,E=w.index+w[0].length,_=x;for(_+=F.value.length;S>=_;)_+=(F=F.next).value.length;if(_-=F.value.length,x=_,F.value instanceof s)continue;for(var j=F;j!==a.tail&&(_<E||"string"==typeof j.value);j=j.next)$++,_+=j.value.length;$--,A=t.slice(x,_),w.index-=x}else if(!(w=i(k,0,A,m)))continue;var S=w.index,C=w[0],O=A.slice(0,S),P=A.slice(S+C.length),z=x+A.length;c&&z>c.reach&&(c.reach=z);var N=F.prev;O&&(N=o(a,N,O),x+=O.length),function(e,t,a){for(var n=t.next,r=0;r<a&&n!==e.tail;r++)n=n.next;t.next=n,n.prev=t,e.length-=r}(a,N,$);var T=new s(g,f?r.tokenize(C,f):C,b,C);if(F=o(a,N,T),P&&o(a,F,P),$>1){var L={cause:g+","+p,reach:z};e(t,a,n,F.prev,x,L),c&&L.reach>c.reach&&(c.reach=L.reach)}}}}}}(e,u,t,u.head,0),function(e){for(var t=[],a=e.head.next;a!==e.tail;)t.push(a.value),a=a.next;return t}(u)},hooks:{all:{},add:function(e,t){var a=r.hooks.all;a[e]=a[e]||[],a[e].push(t)},run:function(e,t){var a=r.hooks.all[e];if(a&&a.length)for(var n,s=0;n=a[s++];)n(t)}},Token:s};function s(e,t,a,n){this.type=e,this.content=t,this.alias=a,this.length=0|(n||"").length}function i(e,t,a,n){e.lastIndex=t;var r=e.exec(a);if(r&&n&&r[1]){var s=r[1].length;r.index+=s,r[0]=r[0].slice(s)}return r}function l(){var e={value:null,prev:null,next:null},t={value:null,prev:e,next:null};e.next=t,this.head=e,this.tail=t,this.length=0}function o(e,t,a){var n=t.next,r={value:a,prev:t,next:n};return t.next=r,n.prev=r,e.length++,r}if(e.Prism=r,s.stringify=function e(t,a){if("string"==typeof t)return t;if(Array.isArray(t)){var n="";return t.forEach(function(t){n+=e(t,a)}),n}var s={type:t.type,content:e(t.content,a),tag:"span",classes:["token",t.type],attributes:{},language:a},i=t.alias;i&&(Array.isArray(i)?Array.prototype.push.apply(s.classes,i):s.classes.push(i)),r.hooks.run("wrap",s);var l="";for(var o in s.attributes)l+=" "+o+'="'+(s.attributes[o]||"").replace(/"/g,"&quot;")+'"';return"<"+s.tag+' class="'+s.classes.join(" ")+'"'+l+">"+s.content+"</"+s.tag+">"},!e.document)return e.addEventListener&&(r.disableWorkerMessageHandler||e.addEventListener("message",function(t){var a=JSON.parse(t.data),n=a.language,s=a.code,i=a.immediateClose;e.postMessage(r.highlight(s,r.languages[n],n)),i&&e.close()},!1)),r;var u=r.util.currentScript();function c(){r.manual||r.highlightAll()}if(u&&(r.filename=u.src,u.hasAttribute("data-manual")&&(r.manual=!0)),!r.manual){var g=document.readyState;"loading"===g||"interactive"===g&&u&&u.defer?document.addEventListener("DOMContentLoaded",c):window.requestAnimationFrame?window.requestAnimationFrame(c):window.setTimeout(c,16)}return r}("undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{});e.exports&&(e.exports=s),void 0!==a.g&&(a.g.Prism=s),s.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},s.languages.markup.tag.inside["attr-value"].inside.entity=s.languages.markup.entity,s.languages.markup.doctype.inside["internal-subset"].inside=s.languages.markup,s.hooks.add("wrap",function(e){"entity"===e.type&&(e.attributes.title=e.content.replace(/&amp;/,"&"))}),Object.defineProperty(s.languages.markup.tag,"addInlined",{value:function(e,t){var a={};a["language-"+t]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:s.languages[t]},a.cdata=/^<!\[CDATA\[|\]\]>$/i;var n={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:a}};n["language-"+t]={pattern:/[\s\S]+/,inside:s.languages[t]};var r={};r[e]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return e}),"i"),lookbehind:!0,greedy:!0,inside:n},s.languages.insertBefore("markup","cdata",r)}}),Object.defineProperty(s.languages.markup.tag,"addAttribute",{value:function(e,t){s.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+e+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[t,"language-"+t],inside:s.languages[t]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),s.languages.html=s.languages.markup,s.languages.mathml=s.languages.markup,s.languages.svg=s.languages.markup,s.languages.xml=s.languages.extend("markup",{}),s.languages.ssml=s.languages.xml,s.languages.atom=s.languages.xml,s.languages.rss=s.languages.xml,n=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/,s.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/,inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+n.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+n.source+"$"),alias:"url"}}},selector:{pattern:RegExp("(^|[{}\\s])[^{}\\s](?:[^{};\"'\\s]|\\s+(?![\\s{])|"+n.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:n,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},s.languages.css.atrule.inside.rest=s.languages.css,(r=s.languages.markup)&&(r.tag.addInlined("style","css"),r.tag.addAttribute("style","css")),s.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|interface|extends|implements|trait|instanceof|new)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,boolean:/\b(?:true|false)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},s.languages.javascript=s.languages.extend("clike",{"class-name":[s.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:prototype|constructor))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:/\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),s.languages.javascript["class-name"][0].pattern=/(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/,s.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:s.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:s.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:s.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:s.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:s.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),s.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:s.languages.javascript}},string:/[\s\S]+/}}}),s.languages.markup&&(s.languages.markup.tag.addInlined("script","javascript"),s.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),s.languages.js=s.languages.javascript,function(){if(void 0!==s&&"undefined"!=typeof document){Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var e={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},t="data-src-status",a="loading",n="loaded",r="pre[data-src]:not(["+t+'="'+n+'"]):not(['+t+'="'+a+'"])',i=/\blang(?:uage)?-([\w-]+)\b/i;s.hooks.add("before-highlightall",function(e){e.selector+=", "+r}),s.hooks.add("before-sanity-check",function(i){var l=i.element;if(l.matches(r)){i.code="",l.setAttribute(t,a);var u=l.appendChild(document.createElement("CODE"));u.textContent="Loading…";var c=l.getAttribute("data-src"),g=i.language;if("none"===g){var d=(/\.(\w+)$/.exec(c)||[,"none"])[1];g=e[d]||d}o(u,g),o(l,g);var p=s.plugins.autoloader;p&&p.loadLanguages(g);var h=new XMLHttpRequest;h.open("GET",c,!0),h.onreadystatechange=function(){4==h.readyState&&(h.status<400&&h.responseText?(l.setAttribute(t,n),u.textContent=h.responseText,s.highlightElement(u)):(l.setAttribute(t,"failed"),h.status>=400)?u.textContent="✖ Error "+h.status+" while fetching file: "+h.statusText:u.textContent="✖ Error: File does not exist or is empty")},h.send(null)}}),s.plugins.fileHighlight={highlight:function(e){for(var t,a=(e||document).querySelectorAll(r),n=0;t=a[n++];)s.highlightElement(t)}};var l=!1;s.fileHighlight=function(){l||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),l=!0),s.plugins.fileHighlight.highlight.apply(this,arguments)}}function o(e,t){var a=e.className;a=a.replace(i," ")+" language-"+t,e.className=a.replace(/\s+/g," ").trim()}}()}}]);