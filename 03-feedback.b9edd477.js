!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={};Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var i="Expected a function",o=/^\s+|\s+$/g,f=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,a=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,d="object"==typeof self&&self&&self.Object===Object&&self,s=c||d||Function("return this")(),v=Object.prototype.toString,m=Math.max,g=Math.min,p=function(){return s.Date.now()};function y(e,t,n){var r,o,f,u,a,l,c=0,d=!1,s=!1,v=!0;if("function"!=typeof e)throw new TypeError(i);function y(t){var n=r,i=o;return r=o=void 0,c=t,u=e.apply(i,n)}function S(e){return c=e,a=setTimeout(h,t),d?y(e):u}function O(e){var n=e-l;return void 0===l||n>=t||n<0||s&&e-c>=f}function h(){var e=p();if(O(e))return w(e);a=setTimeout(h,function(e){var n=t-(e-l);return s?g(n,f-(e-c)):n}(e))}function w(e){return a=void 0,v&&r?y(e):(r=o=void 0,u)}function T(){var e=p(),n=O(e);if(r=arguments,o=this,l=e,n){if(void 0===a)return S(l);if(s)return a=setTimeout(h,t),y(l)}return void 0===a&&(a=setTimeout(h,t)),u}return t=j(t)||0,b(n)&&(d=!!n.leading,f=(s="maxWait"in n)?m(j(n.maxWait)||0,t):f,v="trailing"in n?!!n.trailing:v),T.cancel=function(){void 0!==a&&clearTimeout(a),c=0,r=l=o=a=void 0},T.flush=function(){return void 0===a?u:w(p())},T}function b(t){var n=void 0===t?"undefined":e(r)(t);return!!t&&("object"==n||"function"==n)}function j(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(r)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==v.call(t)}(t))return NaN;if(b(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=b(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(o,"");var i=u.test(t);return i||a.test(t)?l(t.slice(2),i?2:8):f.test(t)?NaN:+t}t=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError(i);return b(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),y(e,t,{leading:r,maxWait:t,trailing:o})};var S="form-field",O={form:document.querySelector(".feedback-form")},h={};!function(){var e=JSON.parse(localStorage.getItem(S));if(e){var t=O.form.elements,n=t.email,r=t.message;n.value=e.email||"",r.value=e.message||"",h=e}}(),O.form.addEventListener("submit",(function(e){e.preventDefault(),localStorage.removeItem(S),e.target.reset()})),O.form.addEventListener("input",e(t)((function(e){var t=e.target,n=t.name,r=t.value;h[n]=r,dataString=JSON.stringify(h),localStorage.setItem(S,dataString)}),500))}();
//# sourceMappingURL=03-feedback.b9edd477.js.map
