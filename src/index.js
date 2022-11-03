import { home } from "./home";
import { menu } from "./menu";
import { contact } from "./contact";
import './style.css';

home();

let tabSwitchingModule = (function() {
    const homeTab = document.querySelector('#hometab');
    homeTab.addEventListener('click', home);

    const menuTab = document.querySelector('#menutab');
    menuTab.addEventListener('click', menu);

    const contactTab = document.querySelector('#contacttab');
    contactTab.addEventListener('click', contact);
})();