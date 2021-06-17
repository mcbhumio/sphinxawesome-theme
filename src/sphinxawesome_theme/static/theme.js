/*! For license information please see theme.js.LICENSE.txt */
!function(){var e={152:function(e){var t;t=function(){return function(){var e={134:function(e,t,n){"use strict";n.d(t,{default:function(){return g}});var r=n(279),o=n.n(r),i=n(370),c=n.n(i),a=n(817),s=n.n(a);function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var f=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.resolveOptions(t),this.initSelection()}var t,n;return t=e,(n=[{key:"resolveOptions",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action=e.action,this.container=e.container,this.emitter=e.emitter,this.target=e.target,this.text=e.text,this.trigger=e.trigger,this.selectedText=""}},{key:"initSelection",value:function(){this.text?this.selectFake():this.target&&this.selectTarget()}},{key:"createFakeElement",value:function(){var e="rtl"===document.documentElement.getAttribute("dir");this.fakeElem=document.createElement("textarea"),this.fakeElem.style.fontSize="12pt",this.fakeElem.style.border="0",this.fakeElem.style.padding="0",this.fakeElem.style.margin="0",this.fakeElem.style.position="absolute",this.fakeElem.style[e?"right":"left"]="-9999px";var t=window.pageYOffset||document.documentElement.scrollTop;return this.fakeElem.style.top="".concat(t,"px"),this.fakeElem.setAttribute("readonly",""),this.fakeElem.value=this.text,this.fakeElem}},{key:"selectFake",value:function(){var e=this,t=this.createFakeElement();this.fakeHandlerCallback=function(){return e.removeFake()},this.fakeHandler=this.container.addEventListener("click",this.fakeHandlerCallback)||!0,this.container.appendChild(t),this.selectedText=s()(t),this.copyText(),this.removeFake()}},{key:"removeFake",value:function(){this.fakeHandler&&(this.container.removeEventListener("click",this.fakeHandlerCallback),this.fakeHandler=null,this.fakeHandlerCallback=null),this.fakeElem&&(this.container.removeChild(this.fakeElem),this.fakeElem=null)}},{key:"selectTarget",value:function(){this.selectedText=s()(this.target),this.copyText()}},{key:"copyText",value:function(){var e;try{e=document.execCommand(this.action)}catch(t){e=!1}this.handleResult(e)}},{key:"handleResult",value:function(e){this.emitter.emit(e?"success":"error",{action:this.action,text:this.selectedText,trigger:this.trigger,clearSelection:this.clearSelection.bind(this)})}},{key:"clearSelection",value:function(){this.trigger&&this.trigger.focus(),document.activeElement.blur(),window.getSelection().removeAllRanges()}},{key:"destroy",value:function(){this.removeFake()}},{key:"action",set:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"copy";if(this._action=e,"copy"!==this._action&&"cut"!==this._action)throw new Error('Invalid "action" value, use either "copy" or "cut"')},get:function(){return this._action}},{key:"target",set:function(e){if(void 0!==e){if(!e||"object"!==l(e)||1!==e.nodeType)throw new Error('Invalid "target" value, use a valid Element');if("copy"===this.action&&e.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if("cut"===this.action&&(e.hasAttribute("readonly")||e.hasAttribute("disabled")))throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');this._target=e}},get:function(){return this._target}}])&&u(t.prototype,n),e}();function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function y(e,t){return!t||"object"!==d(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function v(e,t){var n="data-clipboard-".concat(e);if(t.hasAttribute(n))return t.getAttribute(n)}var g=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(s,e);var t,n,r,o,i,a=(o=s,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=m(o);if(i){var n=m(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return y(this,e)});function s(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,s),(n=a.call(this)).resolveOptions(t),n.listenClick(e),n}return t=s,r=[{key:"isSupported",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["copy","cut"],t="string"==typeof e?[e]:e,n=!!document.queryCommandSupported;return t.forEach((function(e){n=n&&!!document.queryCommandSupported(e)})),n}}],(n=[{key:"resolveOptions",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action="function"==typeof e.action?e.action:this.defaultAction,this.target="function"==typeof e.target?e.target:this.defaultTarget,this.text="function"==typeof e.text?e.text:this.defaultText,this.container="object"===d(e.container)?e.container:document.body}},{key:"listenClick",value:function(e){var t=this;this.listener=c()(e,"click",(function(e){return t.onClick(e)}))}},{key:"onClick",value:function(e){var t=e.delegateTarget||e.currentTarget;this.clipboardAction&&(this.clipboardAction=null),this.clipboardAction=new f({action:this.action(t),target:this.target(t),text:this.text(t),container:this.container,trigger:t,emitter:this})}},{key:"defaultAction",value:function(e){return v("action",e)}},{key:"defaultTarget",value:function(e){var t=v("target",e);if(t)return document.querySelector(t)}},{key:"defaultText",value:function(e){return v("text",e)}},{key:"destroy",value:function(){this.listener.destroy(),this.clipboardAction&&(this.clipboardAction.destroy(),this.clipboardAction=null)}}])&&h(t.prototype,n),r&&h(t,r),s}(o())},828:function(e){if("undefined"!=typeof Element&&!Element.prototype.matches){var t=Element.prototype;t.matches=t.matchesSelector||t.mozMatchesSelector||t.msMatchesSelector||t.oMatchesSelector||t.webkitMatchesSelector}e.exports=function(e,t){for(;e&&9!==e.nodeType;){if("function"==typeof e.matches&&e.matches(t))return e;e=e.parentNode}}},438:function(e,t,n){var r=n(828);function o(e,t,n,r,o){var c=i.apply(this,arguments);return e.addEventListener(n,c,o),{destroy:function(){e.removeEventListener(n,c,o)}}}function i(e,t,n,o){return function(n){n.delegateTarget=r(n.target,t),n.delegateTarget&&o.call(e,n)}}e.exports=function(e,t,n,r,i){return"function"==typeof e.addEventListener?o.apply(null,arguments):"function"==typeof n?o.bind(null,document).apply(null,arguments):("string"==typeof e&&(e=document.querySelectorAll(e)),Array.prototype.map.call(e,(function(e){return o(e,t,n,r,i)})))}},879:function(e,t){t.node=function(e){return void 0!==e&&e instanceof HTMLElement&&1===e.nodeType},t.nodeList=function(e){var n=Object.prototype.toString.call(e);return void 0!==e&&("[object NodeList]"===n||"[object HTMLCollection]"===n)&&"length"in e&&(0===e.length||t.node(e[0]))},t.string=function(e){return"string"==typeof e||e instanceof String},t.fn=function(e){return"[object Function]"===Object.prototype.toString.call(e)}},370:function(e,t,n){var r=n(879),o=n(438);e.exports=function(e,t,n){if(!e&&!t&&!n)throw new Error("Missing required arguments");if(!r.string(t))throw new TypeError("Second argument must be a String");if(!r.fn(n))throw new TypeError("Third argument must be a Function");if(r.node(e))return function(e,t,n){return e.addEventListener(t,n),{destroy:function(){e.removeEventListener(t,n)}}}(e,t,n);if(r.nodeList(e))return function(e,t,n){return Array.prototype.forEach.call(e,(function(e){e.addEventListener(t,n)})),{destroy:function(){Array.prototype.forEach.call(e,(function(e){e.removeEventListener(t,n)}))}}}(e,t,n);if(r.string(e))return function(e,t,n){return o(document.body,e,t,n)}(e,t,n);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}},817:function(e){e.exports=function(e){var t;if("SELECT"===e.nodeName)e.focus(),t=e.value;else if("INPUT"===e.nodeName||"TEXTAREA"===e.nodeName){var n=e.hasAttribute("readonly");n||e.setAttribute("readonly",""),e.select(),e.setSelectionRange(0,e.value.length),n||e.removeAttribute("readonly"),t=e.value}else{e.hasAttribute("contenteditable")&&e.focus();var r=window.getSelection(),o=document.createRange();o.selectNodeContents(e),r.removeAllRanges(),r.addRange(o),t=r.toString()}return t}},279:function(e){function t(){}t.prototype={on:function(e,t,n){var r=this.e||(this.e={});return(r[e]||(r[e]=[])).push({fn:t,ctx:n}),this},once:function(e,t,n){var r=this;function o(){r.off(e,o),t.apply(n,arguments)}return o._=t,this.on(e,o,n)},emit:function(e){for(var t=[].slice.call(arguments,1),n=((this.e||(this.e={}))[e]||[]).slice(),r=0,o=n.length;r<o;r++)n[r].fn.apply(n[r].ctx,t);return this},off:function(e,t){var n=this.e||(this.e={}),r=n[e],o=[];if(r&&t)for(var i=0,c=r.length;i<c;i++)r[i].fn!==t&&r[i].fn._!==t&&o.push(r[i]);return o.length?n[e]=o:delete n[e],this}},e.exports=t,e.exports.TinyEmitter=t}},t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={exports:{}};return e[r](o,o.exports,n),o.exports}return n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,{a:t}),t},n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n(134)}().default},e.exports=t()}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return e[r].call(i.exports,i,i.exports,n),i.exports}n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,{a:t}),t},n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){"use strict";var e=n(152),t=n.n(e);function r(e){const t=e.trigger,n=t.getAttribute("aria-label");t.setAttribute("aria-label","Copied!"),setTimeout((()=>{t.setAttribute("aria-label",n)}),2500)}function o(e){e.classList.toggle("active");const t=e.querySelector("button.expand-more");e.classList.contains("active")?(t.setAttribute("aria-expanded","true"),t.setAttribute("aria-label","Collapse this section")):(t.setAttribute("aria-expanded","false"),t.setAttribute("aria-label","Expand this section"))}window.addEventListener("DOMContentLoaded",(()=>{!function(){const e=document.querySelector("#sidebar"),t=document.querySelector("#page"),n=document.querySelector("#screen"),r=document.querySelector("#openSidebar"),o=document.querySelector("#closeSidebar"),i="isShown";r&&(r.onclick=()=>{e.classList.add(i),t.classList.add(i),n.classList.add(i)}),o&&(o.onclick=()=>{e.classList.remove(i),t.classList.remove(i),n.classList.remove(i)}),n.onclick=()=>{e.classList.remove(i),t.classList.remove(i),n.classList.remove(i)},document.querySelectorAll(".nav-toc li.current a").forEach((r=>{r.onclick=()=>{e.classList.remove(i),t.classList.remove(i),n.classList.remove(i)}}))}(),function(){const e=document.querySelector("#search-pane"),t=document.querySelector("#openSearch"),n=document.querySelector("#closeSearch"),r="isShown";t&&(t.onclick=()=>{e.classList.add(r)}),n&&(n.onclick=()=>{e.classList.remove(r)})}(),setTimeout((()=>{const e=document.querySelector("#snackbar"),t=document.querySelectorAll(".highlighted"),n=document.querySelector("#search-input"),r="isShown";t.length&&(e.classList.add(r),e.onclick=()=>{e.classList.remove(r),Documentation.hideSearchWords(),n.value="";const t=window.location.origin+window.location.pathname;window.history.replaceState({},document.title,t)},n.value=t[0].textContent,n.onsearch=()=>{Documentation.hideSearchWords(),e.classList.remove(r)})}),500),function(){const e=document.querySelector("#searchbox"),t=document.querySelector("#search-input");e.onsubmit=e=>{t.value.length<1&&e.preventDefault()},window.addEventListener("keydown",(e=>{"Slash"===e.code&&(t.focus(),t.value="",e.preventDefault()),"Escape"===e.code&&(t.blur(),e.preventDefault())}))}(),new(t())(".headerlink",{text:e=>e.href}).on("success",r),document.querySelectorAll(".headerlink").forEach((e=>{e.onclick=e=>{e.preventDefault()}})),new(t())("button.copy",{target:e=>e.parentNode.nextElementSibling}).on("success",r),document.querySelectorAll(".expand").forEach((e=>{e.onclick=()=>{e.parentElement.parentElement.classList.toggle("expanded")}})),document.querySelectorAll(".nav-toc a").forEach((e=>{e.onfocus=e=>{document.querySelectorAll(".expand").forEach((t=>{const n=t.parentElement.parentElement;n.contains(e.target)?n.classList.add("expanded"):n.classList.contains("current")||n.classList.remove("expanded")}))}})),function(){const e=document.querySelectorAll("article section"),t={root:document.querySelector("main"),rootMargin:"0px 0px -95% 0px"},n=new IntersectionObserver((e=>{e.forEach((e=>{e.isIntersecting?(document.querySelector(`.nav-toc a[href*=${e.target.id}]`).classList.add("current"),console.log(`Section ${e.target.id} is intersecting`)):(document.querySelector(`.nav-toc a[href*=${e.target.id}]`).classList.remove("current"),console.log(`Section ${e.target.id} is not intersecting`))}))}),t);e.forEach((e=>{n.observe(e)}))}(),function(){const e=document.querySelector("#scrolltop");if(!e)return;const t=document.querySelector("main");t.onscroll=()=>{t.scrollTop>100?e.classList.add("isShown"):e.classList.remove("isShown")},e.onclick=()=>{t.scrollTop=0,e.blur()}}(),document.querySelectorAll(".accordion").forEach((e=>{e.onclick=e=>{o(e.target)}})),document.querySelectorAll(".accordion .expand-more").forEach((e=>{e.onclick=e=>{o(e.target.parentNode)}}))}))}()}();