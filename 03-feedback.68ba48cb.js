!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){r[e]=t},t.parcelRequired7c6=o),o.register("hKHmD",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n;return e}}));var i={};Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){a.default(e,t,n[t])}))}return e};var u,a=(u=o("hKHmD"))&&u.__esModule?u:{default:u};var f,l={};Object.defineProperty(l,"__esModule",{value:!0}),l.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var c="Expected a function",d=/^\s+|\s+$/g,s=/^[-+]0x[0-9a-f]+$/i,v=/^0b[01]+$/i,p=/^0o[0-7]+$/i,m=parseInt,g="object"==typeof t&&t&&t.Object===Object&&t,b="object"==typeof self&&self&&self.Object===Object&&self,y=g||b||Function("return this")(),O=Object.prototype.toString,j=Math.max,w=Math.min,h=function(){return y.Date.now()};function x(e,t,n){var r,o,i,u,a,f,l=0,d=!1,s=!1,v=!0;if("function"!=typeof e)throw new TypeError(c);function p(t){var n=r,i=o;return r=o=void 0,l=t,u=e.apply(i,n)}function m(e){return l=e,a=setTimeout(b,t),d?p(e):u}function g(e){var n=e-f;return void 0===f||n>=t||n<0||s&&e-l>=i}function b(){var e=h();if(g(e))return y(e);a=setTimeout(b,function(e){var n=t-(e-f);return s?w(n,i-(e-l)):n}(e))}function y(e){return a=void 0,v&&r?p(e):(r=o=void 0,u)}function O(){var e=h(),n=g(e);if(r=arguments,o=this,f=e,n){if(void 0===a)return m(f);if(s)return a=setTimeout(b,t),p(f)}return void 0===a&&(a=setTimeout(b,t)),u}return t=_(t)||0,S(n)&&(d=!!n.leading,i=(s="maxWait"in n)?j(_(n.maxWait)||0,t):i,v="trailing"in n?!!n.trailing:v),O.cancel=function(){void 0!==a&&clearTimeout(a),l=0,r=f=o=a=void 0},O.flush=function(){return void 0===a?u:y(h())},O}function S(t){var n=void 0===t?"undefined":e(l)(t);return!!t&&("object"==n||"function"==n)}function _(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(l)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==O.call(t)}(t))return NaN;if(S(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=S(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(d,"");var r=v.test(t);return r||p.test(t)?m(t.slice(2),r?2:8):s.test(t)?NaN:+t}f=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError(c);return S(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),x(e,t,{leading:r,maxWait:t,trailing:o})};var T={form:document.querySelector(".feedback-form"),message:document.querySelector("textarea"),email:document.querySelector("input")};T.form.addEventListener("submit",(function(e){e.preventDefault(),e.target.reset(),localStorage.removeItem(M),console.log("Form accepted :)"),console.log(P)})),T.message.addEventListener("input",e(f)(q,500)),T.email.addEventListener("input",e(f)(q,500));var E,M="feedback-form-state",N=localStorage.getItem(M),D=JSON.parse(N),P=e(i)({},D);function q(e){P[e.target.name]=e.target.value,localStorage.setItem(M,JSON.stringify(P))}(E=localStorage.getItem(M))&&(T.message.value=E,T.email.value=E)}();
//# sourceMappingURL=03-feedback.68ba48cb.js.map
