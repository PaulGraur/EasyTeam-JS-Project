function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},o={},i=n.parcelRequire6a5d;null==i&&((i=function(e){if(e in r)return r[e].exports;if(e in o){var t=o[e];delete o[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},n.parcelRequire6a5d=i),i.register("kyEFX",(function(t,n){var r,o;e(t.exports,"register",(function(){return r}),(function(e){return r=e})),e(t.exports,"resolve",(function(){return o}),(function(e){return o=e}));var i={};r=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)i[t[n]]=e[t[n]]},o=function(e){var t=i[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),i("kyEFX").register(JSON.parse('{"5LAB1":"favorites-ingredients.b64f0dfb.js","8OQ7p":"icons.bed00c8b.svg","3l6TX":"favorites-ingredients.af32df9a.js","6fQJJ":"favorites-ingredients.f0fc6649.js"}')),i("beetx"),i("gQMrS"),i("7qASq"),i("2zltZ"),i("gkpqR"),i("4jO1e"),i("brsC6"),i("8KhTo"),i("beetx");var a,s=i("71tSV");a=new URL(i("kyEFX").resolve("8OQ7p"),import.meta.url).toString();var l=i("7aX81");const c=document.querySelector(".fav-ing-wrapper"),u=new(0,s.default);function d(e){const n=e.map((e=>`\n            <li class="favorite" id="${e.idIngredient}">\n                <h3 class="favorite__title">${e.strIngredient}</h3>\n                <p class="favorite__text">${e.strType}</p>\n                <div class="button">\n                    <button type="button" class="button__btn button__btn--learn-more js-learn-more-ing">Learn more</button>\n                    <button type="button" class="button__btn button__btn--add-to js-remove-ing-card">Remove\n                        <svg class="button__icon">\n                            <use class="icon-heart" href="${t(a)}#icon-heart_fill"></use>\n                        </svg>\n                 </button>\n                </div>\n            </li>\n            `)).join("");c.innerHTML=n,c.addEventListener("click",(e=>{const t=e.target;t.classList.contains("js-learn-more-ing")&&(0,l.handleOpenModalIngridientsFav)(e),t.classList.contains("js-remove-ing-card")&&function(e){const t=JSON.parse(localStorage.getItem("Fav-Ingredients"));let n=e.target.closest(".favorite").id;const r=t.filter((e=>e!==n));localStorage.setItem("Fav-Ingredients",JSON.stringify(r)),f()}(e)}))}async function f(){const e=JSON.parse(localStorage.getItem("Fav-Ingredients")).reduce(((e,t)=>(e.push(u.fetchDataByIdIngr(t)),e)),[]);d((await async function(e){return Promise.all(e).catch((e=>console.log(e)))}(e)).flatMap((e=>e)))}f(),i("aKeBF"),i("dbg1n");
//# sourceMappingURL=favorites-ingredients.b64f0dfb.js.map