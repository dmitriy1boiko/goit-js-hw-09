!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},r=n.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var r={id:e,exports:{}};return t[e]=r,n.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){o[e]=n},n.parcelRequired7c6=r);var i=r("6JpON");function u(e,n){return new Promise((function(t,o){var r=Math.random()>.3;setTimeout((function(){r?t({position:e,delay:n}):o({position:e,delay:n})}),n)}))}document.querySelector(".form").addEventListener("submit",(function(n){n.preventDefault();for(var t=Number(n.currentTarget.delay.value),o=n.currentTarget,r=o.step,a=o.amount,l=1;l<=Number(a.value);l++)u(l,t).then((function(n){e(i).Notify.success("Fulfilled promise ".concat(n.position," in ").concat(n.delay,"ms."))})).catch((function(n){e(i).Notify.failure("Rejected promise ".concat(n.position," in ").concat(n.delay,"ms."))})),t+=Number(r.value)}))}();
//# sourceMappingURL=03-promises.f3ecd7e9.js.map
