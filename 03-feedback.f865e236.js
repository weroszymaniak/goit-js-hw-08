!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i="Expected a function",r=NaN,o="[object Symbol]",a=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,l=/^0o[0-7]+$/i,c=parseInt,s="object"==typeof n&&n&&n.Object===Object&&n,d="object"==typeof self&&self&&self.Object===Object&&self,m=s||d||Function("return this")(),v=Object.prototype.toString,g=Math.max,p=Math.min,y=function(){return m.Date.now()};function b(e,t,n){var r,o,a,u,f,l,c=0,s=!1,d=!1,m=!0;if("function"!=typeof e)throw new TypeError(i);function v(t){var n=r,i=o;return r=o=void 0,c=t,u=e.apply(i,n)}function b(e){var n=e-l;return void 0===l||n>=t||n<0||d&&e-c>=a}function h(){var e=y();if(b(e))return w(e);f=setTimeout(h,function(e){var n=t-(e-l);return d?p(n,a-(e-c)):n}(e))}function w(e){return f=void 0,m&&r?v(e):(r=o=void 0,u)}function O(){var e=y(),n=b(e);if(r=arguments,o=this,l=e,n){if(void 0===f)return function(e){return c=e,f=setTimeout(h,t),s?v(e):u}(l);if(d)return f=setTimeout(h,t),v(l)}return void 0===f&&(f=setTimeout(h,t)),u}return t=T(t)||0,j(n)&&(s=!!n.leading,a=(d="maxWait"in n)?g(T(n.maxWait)||0,t):a,m="trailing"in n?!!n.trailing:m),O.cancel=function(){void 0!==f&&clearTimeout(f),c=0,r=l=o=f=void 0},O.flush=function(){return void 0===f?u:w(y())},O}function j(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function T(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&v.call(e)==o}(e))return r;if(j(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=j(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(a,"");var n=f.test(e);return n||l.test(e)?c(e.slice(2),n?2:8):u.test(e)?r:+e}t=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError(i);return j(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),b(e,t,{leading:r,maxWait:t,trailing:o})};const h="feedback-form-state",w=document.querySelector(".feedback-form");let O={email:"",message:""};w.addEventListener("submit",(function(e){O&&(e.preventDefault(),console.log(O),localStorage.removeItem(h),e.currentTarget.reset())})),w.addEventListener("input",e(t)((function(e){O[e.target.name]=e.target.value,localStorage.setItem(h,JSON.stringify(O))}),500)),function(){const e=localStorage.getItem(h),t=JSON.parse(e);if(t)return n=t,O.email=n.email,O.message=n.message,w.elements.email.value=O.email,void(w.elements.message.value=O.message);var n}()}();
//# sourceMappingURL=03-feedback.f865e236.js.map
