function navFija(){const e=document.querySelector(".header");new IntersectionObserver((function(t){t[0].isIntersecting?e.classList.remove("fijo"):e.classList.add("fijo")})).observe(document.querySelector(".sobre-festival"))}function scrollView(){document.querySelectorAll(".navegacion-principal a").forEach((function(e){e.addEventListener("click",(function(e){e.preventDefault();document.querySelector(e.target.attributes.href.value).scrollIntoView({behavior:"smooth"})}))}))}function crearGaleria(){for(let e=1;e<=12;e++){const t=document.querySelector(".galeria-imagenes"),n=document.createElement("LI");image=document.createElement("IMG"),image.src=`build/img/thumb/${e}.webp`,image.dataset.imageId=e,image.onclick=imageViewer,n.appendChild(image),t.appendChild(n)}}function imageViewer(e){const t=parseInt(e.target.dataset.imageId),n=document.querySelector("body"),a=document.createElement("DIV"),o=document.createElement("IMG"),c=document.createElement("P");a.classList.add("overlay"),o.src=`build/img/grande/${t}.webp`,c.textContent="X",c.classList.add("close"),c.onclick=closeImageViewer,a.onclick=closeImageViewer,a.appendChild(o),a.appendChild(c),n.appendChild(a),n.classList.add("fijar-body")}function closeImageViewer(){const e=document.querySelector("body");document.querySelector(".overlay").remove(),e.classList.remove("fijar-body")}document.addEventListener("DOMContentLoaded",(function(){scrollView(),navFija()})),document.addEventListener("DOMContentLoaded",(function(){crearGaleria()}));
//# sourceMappingURL=bundle.js.map