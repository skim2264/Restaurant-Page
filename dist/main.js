(()=>{"use strict";function e(){const e=document.querySelector("#navbar");e.replaceChildren();const t=document.createElement("button");t.type="button",t.textContent="Home",t.setAttribute("id","hometab");const n=document.createElement("button");n.textContent="Menu",n.type="button",n.setAttribute("id","menutab");const c=document.createElement("button");c.textContent="Contact",c.type="button",c.setAttribute("id","contacttab"),e.appendChild(t),e.appendChild(n),e.appendChild(c);const a=document.querySelector("#content");a.replaceChildren();const d=document.createElement("h1");d.textContent="Pancake Palooza",a.appendChild(d);const o=document.createElement("img");o.src="../src/images/pancakes.jpg",a.appendChild(o);const r=document.createElement("p");r.textContent="Circa 1998. Home of the best pancakes in Canada.",a.appendChild(r)}function t(){const e=document.querySelector("#content");e.replaceChildren();const t=document.createElement("div"),n=document.createElement("img"),c=document.createElement("h2");n.src="../src/images/banana.jpg",c.textContent="Banana Pancakes",t.appendChild(n),t.appendChild(c),e.appendChild(t);const a=document.createElement("div"),d=document.createElement("img"),o=document.createElement("h2");d.src="../src/images/blueberry.jpg",o.textContent="Blueberry Pancakes",a.appendChild(d),a.appendChild(o),e.appendChild(a);const r=document.createElement("div"),l=document.createElement("img"),m=document.createElement("h2");l.src="../src/images/raspberry.jpg",m.textContent="Raspberry Pancakes",r.appendChild(l),r.appendChild(m),e.appendChild(r);const p=document.createElement("div"),i=document.createElement("img"),u=document.createElement("h2");i.src="../src/images/walnut.jpg",u.textContent="Walnut Pancakes",p.appendChild(i),p.appendChild(u),e.appendChild(p)}function n(){const e=document.querySelector("#content");e.replaceChildren();const t=document.createElement("p");t.textContent="You can contact us at 1-800-123-1234.",e.appendChild(t);const n=document.createElement("p");n.textContent="You can find us located at 1800 Prince Edward Street.",e.appendChild(n)}e(),document.querySelector("#hometab").addEventListener("click",e),document.querySelector("#menutab").addEventListener("click",t),document.querySelector("#contacttab").addEventListener("click",n)})();