function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},s={},r=t.parcelRequire6a5d;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in s){var t=s[e];delete s[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){s[e]=t},t.parcelRequire6a5d=r),r("kyEFX").register(JSON.parse('{"hulRm":"index.571183d5.js","8OQ7p":"icons.bed00c8b.svg","3l6TX":"favorites-ingredients.3986ab6e.js"}'));var a,i=r("71tSV"),o=r("96UQg"),l=r("gkpqR");a=new URL(r("kyEFX").resolve("8OQ7p"),import.meta.url).toString();var c=r("kQOW8");const d=document.querySelector(".gallery__wrapper"),u=document.querySelector(".pagination__btn-next"),g=document.querySelector(".pagination__btn-prev"),m=document.querySelector(".pagination__items-wrapper"),h=document.querySelector(".pagination"),b=document.querySelector(".input"),v=JSON.parse(localStorage.getItem("SearchFromFavorites")),L=new(0,i.default),f=new(0,o.default),p=new(0,c.default);class _{numberOfItemsPerPage(){return this.screenWidth<768?this.paginationLimit=3:this.screenWidth>=768&&this.screenWidth<1280?this.paginationLimit=6:this.screenWidth>1280?this.paginationLimit=9:void 0}randomCoctails(){for(let e=0;e<this.paginationLimit;e+=1)this.promises.push(L.fetchRandomData());return this.promises}allPromises(e){return this.promises=Promise.all(e).catch((e=>console.log(e)))}clearGallery(){d.innerHTML=""}async getRandomData(){this.numberOfItemsPerPage(),this.randomCoctails();const e=(await this.allPromises(this.promises)).flatMap((e=>e));f.renderGallery(e)}async getDataByName(e){return await L.fetchDataByName(e)}async getDataByLetter(e){return await L.fetchDataByLetter(e)}setPaginationArrowsStatus(){1===this.currentPage?g.setAttribute("disabled",!0):g.removeAttribute("disabled"),this.pageCount===this.currentPage?u.setAttribute("disabled",!0):u.removeAttribute("disabled")}addPaginationHandler(){h.addEventListener("click",(e=>{const t=e.target,n=t.closest(".pagination__btn-prev"),s=t.closest(".pagination__btn-next"),r=t.closest(".num-btn");if(Number(null==r?void 0:r.textContent)!==this.currentPage){if((null==r?void 0:r.textContent)&&this.setCurrentPage(Number(r.textContent)),n){if(1===this.currentPage)return;this.setCurrentPage(this.currentPage-=1)}if(s){if(this.pageCount===this.currentPage)return;this.setCurrentPage(this.currentPage+=1)}}}))}renderPaginationList(){m.innerHTML="";let e="";for(let t=1;t<this.pageCount+1;t+=1){e+=`<li class="pagination__item">\n                    <button type="button" class="${t===this.currentPage?"pagination__btn num-btn pagination__btn--active":"pagination__btn num-btn"}">${t}</button>\n                  </li>`}m.insertAdjacentHTML("beforeend",e)}async setCurrentPage(e,t){if(t&&(this.currentData=t,this.addPaginationHandler()),this.currentData.length<=this.paginationLimit)return this.clearGallery(),f.renderGallery(t),void h.classList.add("is-hidden");this.currentPage=e;const n=(e-1)*this.paginationLimit,s=e*this.paginationLimit;this.setPaginationArrowsStatus(),this.pageCount=Math.ceil(this.currentData.length/this.paginationLimit);const r=this.currentData.slice(n,s);this.renderPaginationList(),h.classList.remove("is-hidden"),this.clearGallery(),f.renderGallery(r)}constructor(){this.currentData=[],this.promises=[],this.screenWidth=window.innerWidth,this.paginationLimit,this.currentPage=1,this.pageCount}}const y=new _;!async function(){if(v){y.clearGallery(),b.placeholder=v,y.numberOfItemsPerPage();const t=await y.getDataByName(v);y.setCurrentPage(1,t),localStorage.removeItem("SearchFromFavorites"),d.addEventListener("click",(t=>{const n=t.target,s=n.closest(".buttons__btn--add-to"),r=n.closest(".fav-buttons__btn--remove");n.classList.contains("buttons__btn--learn-more")&&(0,l.handleOpenCloseModal)(t),s&&(s.classList.remove("buttons__btn--add-to"),s.classList.add("fav-buttons__btn--remove"),s.innerHTML=`Remove<svg class="buttons__icon"><use href="${e(a)}#icon-heart_fill"></use></svg>`,p.addToFavorite(s)),r&&(console.log("removeBtn: ",r),r.classList.remove("fav-buttons__btn--remove"),r.classList.add("buttons__btn--add-to"),r.innerHTML=`Add to<svg class="buttons__icon"><use href="${e(a)}#heart"></use></>`,p.removeFromFavoriteFromGallery(r))}))}else y.getRandomData(),d.addEventListener("click",(t=>{const n=t.target,s=n.closest(".buttons__btn--add-to"),r=n.closest(".fav-buttons__btn--remove");n.classList.contains("buttons__btn--learn-more")&&(0,l.handleOpenCloseModal)(t),s&&(s.classList.remove("buttons__btn--add-to"),s.classList.add("fav-buttons__btn--remove"),s.innerHTML=`Remove<svg class="buttons__icon"><use href="${e(a)}#icon-heart_fill"></use></svg>`,p.addToFavorite(s)),r&&(console.log("removeBtn: ",r),r.classList.remove("fav-buttons__btn--remove"),r.classList.add("buttons__btn--add-to"),r.innerHTML=`Add to<svg class="buttons__icon"><use href="${e(a)}#heart"></use></>`,p.removeFromFavoriteFromGallery(r))}))}();const P=document.querySelector(".search-form"),S=document.querySelector(".search-form-mobile"),w=document.querySelector(".input"),M=new _;async function q(e){let t=w.value.trim();if(e.preventDefault(),M.clearGallery(),w.placeholder=t,t){M.numberOfItemsPerPage();const e=await M.getDataByName(t);M.setCurrentPage(1,e)}P.reset()}P.addEventListener("submit",q),S.addEventListener("submit",q),r("gQMrS"),r("8KhTo"),r("7qASq"),r("2zltZ");const T={letterBox:document.querySelector(".search-container"),gallery:document.querySelector(".gallery__wrapper"),openListLetter:document.querySelector(".open-list-letter"),selectLetterMb:document.querySelector(".select-letter-mb"),selectidLetterMbBox:document.querySelector(".selectid-letter-mb-box"),selectidLetterMb:document.querySelector(".selectid-letter-mb"),galleryTitle:document.querySelector(".gallery__title"),inputEl:document.querySelector(".input")},C=new _,x=`<div class="not-found">\n<h2 class="not-found__title">Sorry, we didn't find any cocktail for you</h2>\n<svg class="not-found__icon">\n  <use href="${e(a)}#icon-sorry"></use>\n</svg>\n</div>`;T.letterBox.addEventListener("click",(async function(e){if("search-box"!==e.target.classList.value)return;const t=document.querySelector(".search-box.is-active");t&&t.classList.remove("is-active");C.clearGallery();const n=e.target,s=e.target.textContent;C.numberOfItemsPerPage();const r=await C.getDataByLetter(s);console.log(T.galleryTitle),null===r?(T.galleryTitle.classList.add("is-hidden"),T.gallery.innerHTML=x):(C.setCurrentPage(1,r),T.galleryTitle.classList.remove("is-hidden"));n.classList.add("is-active")})),T.openListLetter.addEventListener("click",(function(){T.selectidLetterMbBox.classList.contains("selectid")&&T.selectidLetterMbBox.classList.remove("selectid");T.selectLetterMb.classList.toggle("hiden"),T.openListLetter.classList.toggle("open")})),T.selectLetterMb.addEventListener("click",(async function(e){if("search-box-mb"!==e.target.classList.value)return;const t=e.target.textContent;C.numberOfItemsPerPage();const n=await C.getDataByLetter(t);null===n?(T.galleryTitle.classList.add("is-hidden"),T.gallery.innerHTML=x):(C.setCurrentPage(1,n),T.galleryTitle.classList.remove("is-hidden"));s=t,T.selectidLetterMb.textContent=s,T.selectidLetterMbBox.classList.add("selectid"),T.selectLetterMb.classList.toggle("hiden");var s})),r("2zltZ"),r("gkpqR"),document.addEventListener("DOMContentLoaded",(function(){let e=document.querySelector("#toTop");window.addEventListener("scroll",(function(){pageYOffset>100?e.classList.add("show"):e.classList.remove("show")})),e.onclick=function(e){e.preventDefault(),function(e,t=700){const n=document.scrollingElement||document.documentElement,s=n.scrollTop,r=e-s,a=+new Date,i=function(){const o=+new Date-a;var l,c,d;n.scrollTop=parseInt((l=o,c=s,d=r,(l/=t/2)<1?d/2*l*l+c:-d/2*(--l*(l-2)-1)+c)),o<t?requestAnimationFrame(i):n.scrollTop=e};i()}(0,400)}})),r("dbg1n");
//# sourceMappingURL=index.571183d5.js.map
