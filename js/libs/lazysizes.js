!function(t,e){var i=function(t,e){"use strict";if(e.getElementsByClassName){var i,n,a=e.documentElement,r=t.Date,s=t.HTMLPictureElement,o=t.addEventListener,l=t.setTimeout,d=t.requestAnimationFrame||l,u=t.requestIdleCallback,c=/^picture$/i,f=["load","error","lazyincluded","_lazyloaded"],g={},m=Array.prototype.forEach,v=function(t,e){return g[e]||(g[e]=new RegExp("(\\s|^)"+e+"(\\s|$)")),g[e].test(t.getAttribute("class")||"")&&g[e]},z=function(t,e){v(t,e)||t.setAttribute("class",(t.getAttribute("class")||"").trim()+" "+e)},y=function(t,e){var i;(i=v(t,e))&&t.setAttribute("class",(t.getAttribute("class")||"").replace(i," "))},h=function(t,e,i){var n=i?"addEventListener":"removeEventListener";i&&h(t,e),f.forEach(function(i){t[n](i,e)})},b=function(t,n,a,r,s){var o=e.createEvent("Event");return a||(a={}),a.instance=i,o.initEvent(n,!r,!s),o.detail=a,t.dispatchEvent(o),o},p=function(e,i){var a;!s&&(a=t.picturefill||n.pf)?(i&&i.src&&!e.getAttribute("srcset")&&e.setAttribute("srcset",i.src),a({reevaluate:!0,elements:[e]})):i&&i.src&&(e.src=i.src)},A=function(t,e){return(getComputedStyle(t,null)||{})[e]},C=function(t,e,i){for(i=i||t.offsetWidth;i<n.minSize&&e&&!t._lazysizesWidth;)i=e.offsetWidth,e=e.parentNode;return i},E=function(){var t,i,n=[],a=[],r=n,s=function(){var e=r;for(r=n.length?a:n,t=!0,i=!1;e.length;)e.shift()();t=!1},o=function(n,a){t&&!a?n.apply(this,arguments):(r.push(n),i||(i=!0,(e.hidden?l:d)(s)))};return o._lsFlush=s,o}(),w=function(t,e){return e?function(){E(t)}:function(){var e=this,i=arguments;E(function(){t.apply(e,i)})}},M=function(t){var e,i=0,a=n.throttleDelay,s=n.ricTimeout,o=function(){e=!1,i=r.now(),t()},d=u&&s>49?function(){u(o,{timeout:s}),s!==n.ricTimeout&&(s=n.ricTimeout)}:w(function(){l(o)},!0);return function(t){var n;(t=!0===t)&&(s=33),e||(e=!0,n=a-(r.now()-i),n<0&&(n=0),t||n<9?d():l(d,n))}},N=function(t){var e,i,n=function(){e=null,t()},a=function(){var t=r.now()-i;t<99?l(a,99-t):(u||n)(n)};return function(){i=r.now(),e||(e=l(a,99))}};!function(){var e,i={lazyClass:"lazyload",loadedClass:"lazyloaded",loadingClass:"lazyloading",preloadClass:"lazypreload",errorClass:"lazyerror",autosizesClass:"lazyautosizes",srcAttr:"data-src",srcsetAttr:"data-srcset",sizesAttr:"data-sizes",minSize:40,customMedia:{},init:!0,expFactor:1.5,hFac:.8,loadMode:2,loadHidden:!0,ricTimeout:0,throttleDelay:125};n=t.lazySizesConfig||t.lazysizesConfig||{};for(e in i)e in n||(n[e]=i[e]);t.lazySizesConfig=n,l(function(){n.init&&W()})}();var _=function(){var s,d,u,f,g,C,_,W,x,T,B,F,S,R,k=/^img$/i,D=/^iframe$/i,H="onscroll"in t&&!/(gle|ing)bot/.test(navigator.userAgent),O=0,P=0,$=-1,I=function(t){P--,t&&t.target&&h(t.target,I),(!t||P<0||!t.target)&&(P=0)},q=function(t,i){var n,r=t,s="hidden"==A(e.body,"visibility")||"hidden"!=A(t.parentNode,"visibility")&&"hidden"!=A(t,"visibility");for(W-=i,B+=i,x-=i,T+=i;s&&(r=r.offsetParent)&&r!=e.body&&r!=a;)(s=(A(r,"opacity")||1)>0)&&"visible"!=A(r,"overflow")&&(n=r.getBoundingClientRect(),s=T>n.left&&x<n.right&&B>n.top-1&&W<n.bottom+1);return s},j=function(){var t,r,o,l,u,c,g,m,v,z=i.elements;if((f=n.loadMode)&&P<8&&(t=z.length)){r=0,$++,null==S&&("expand"in n||(n.expand=a.clientHeight>500&&a.clientWidth>500?500:370),F=n.expand,S=F*n.expFactor),O<S&&P<1&&$>2&&f>2&&!e.hidden?(O=S,$=0):O=f>1&&$>1&&P<6?F:0;for(;r<t;r++)if(z[r]&&!z[r]._lazyRace)if(H)if((m=z[r].getAttribute("data-expand"))&&(c=1*m)||(c=O),v!==c&&(C=innerWidth+c*R,_=innerHeight+c,g=-1*c,v=c),o=z[r].getBoundingClientRect(),(B=o.bottom)>=g&&(W=o.top)<=_&&(T=o.right)>=g*R&&(x=o.left)<=C&&(B||T||x||W)&&(n.loadHidden||"hidden"!=A(z[r],"visibility"))&&(d&&P<3&&!m&&(f<3||$<4)||q(z[r],c))){if(Y(z[r]),u=!0,P>9)break}else!u&&d&&!l&&P<4&&$<4&&f>2&&(s[0]||n.preloadAfterLoad)&&(s[0]||!m&&(B||T||x||W||"auto"!=z[r].getAttribute(n.sizesAttr)))&&(l=s[0]||z[r]);else Y(z[r]);l&&!u&&Y(l)}},G=M(j),J=function(t){z(t.target,n.loadedClass),y(t.target,n.loadingClass),h(t.target,Q),b(t.target,"lazyloaded")},K=w(J),Q=function(t){K({target:t.target})},U=function(t,e){try{t.contentWindow.location.replace(e)}catch(i){t.src=e}},V=function(t){var e,i=t.getAttribute(n.srcsetAttr);(e=n.customMedia[t.getAttribute("data-media")||t.getAttribute("media")])&&t.setAttribute("media",e),i&&t.setAttribute("srcset",i)},X=w(function(t,e,i,a,r){var s,o,d,f,g,v;(g=b(t,"lazybeforeunveil",e)).defaultPrevented||(a&&(i?z(t,n.autosizesClass):t.setAttribute("sizes",a)),o=t.getAttribute(n.srcsetAttr),s=t.getAttribute(n.srcAttr),r&&(d=t.parentNode,f=d&&c.test(d.nodeName||"")),v=e.firesLoad||"src"in t&&(o||s||f),g={target:t},v&&(h(t,I,!0),clearTimeout(u),u=l(I,2500),z(t,n.loadingClass),h(t,Q,!0)),f&&m.call(d.getElementsByTagName("source"),V),o?t.setAttribute("srcset",o):s&&!f&&(D.test(t.nodeName)?U(t,s):t.src=s),r&&(o||f)&&p(t,{src:s})),t._lazyRace&&delete t._lazyRace,y(t,n.lazyClass),E(function(){(!v||t.complete&&t.naturalWidth>1)&&(v?I(g):P--,J(g))},!0)}),Y=function(t){var e,i=k.test(t.nodeName),a=i&&(t.getAttribute(n.sizesAttr)||t.getAttribute("sizes")),r="auto"==a;(!r&&d||!i||!t.getAttribute("src")&&!t.srcset||t.complete||v(t,n.errorClass)||!v(t,n.lazyClass))&&(e=b(t,"lazyunveilread").detail,r&&L.updateElem(t,!0,t.offsetWidth),t._lazyRace=!0,P++,X(t,e,r,a,i))},Z=function(){if(!d){if(r.now()-g<999)return void l(Z,999);var t=N(function(){n.loadMode=3,G()});d=!0,n.loadMode=3,G(),o("scroll",function(){3==n.loadMode&&(n.loadMode=2),t()},!0)}};return{_:function(){g=r.now(),i.elements=e.getElementsByClassName(n.lazyClass),s=e.getElementsByClassName(n.lazyClass+" "+n.preloadClass),R=n.hFac,o("scroll",G,!0),o("resize",G,!0),t.MutationObserver?new MutationObserver(G).observe(a,{childList:!0,subtree:!0,attributes:!0}):(a.addEventListener("DOMNodeInserted",G,!0),a.addEventListener("DOMAttrModified",G,!0),setInterval(G,999)),o("hashchange",G,!0),["focus","mouseover","click","load","transitionend","animationend","webkitAnimationEnd"].forEach(function(t){e.addEventListener(t,G,!0)}),/d$|^c/.test(e.readyState)?Z():(o("load",Z),e.addEventListener("DOMContentLoaded",G),l(Z,2e4)),i.elements.length?(j(),E._lsFlush()):G()},checkElems:G,unveil:Y}}(),L=function(){var t,i=w(function(t,e,i,n){var a,r,s;if(t._lazysizesWidth=n,n+="px",t.setAttribute("sizes",n),c.test(e.nodeName||""))for(a=e.getElementsByTagName("source"),r=0,s=a.length;r<s;r++)a[r].setAttribute("sizes",n);i.detail.dataAttr||p(t,i.detail)}),a=function(t,e,n){var a,r=t.parentNode;r&&(n=C(t,r,n),a=b(t,"lazybeforesizes",{width:n,dataAttr:!!e}),a.defaultPrevented||(n=a.detail.width)&&n!==t._lazysizesWidth&&i(t,r,a,n))},r=function(){var e,i=t.length;if(i)for(e=0;e<i;e++)a(t[e])},s=N(r);return{_:function(){t=e.getElementsByClassName(n.autosizesClass),o("resize",s)},checkElems:s,updateElem:a}}(),W=function(){W.i||(W.i=!0,L._(),_._())};return i={cfg:n,autoSizer:L,loader:_,init:W,uP:p,aC:z,rC:y,hC:v,fire:b,gW:C,rAF:E}}}(t,t.document);t.lazySizes=i,"object"==typeof module&&module.exports&&(module.exports=i)}(window);