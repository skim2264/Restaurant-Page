import pancakesImg from "./images/pancakes.jpg";

export function home(){
    //navigation bar
    const navbar = document.querySelector('#navbar');
    navbar.replaceChildren();
    //home tab
    const homeLink = document.createElement('button');
    homeLink.type = 'button';
    homeLink.textContent = "Home";
    homeLink.setAttribute('id', 'hometab');
    //menu tab
    const menuLink = document.createElement('button');
    menuLink.textContent = "Menu";
    menuLink.type = 'button';
    menuLink.setAttribute('id', 'menutab');
    //contact tab
    const contactLink = document.createElement('button');
    contactLink.textContent = "Contact";
    contactLink.type = 'button';
    contactLink.setAttribute('id', 'contacttab');
    navbar.appendChild(homeLink);
    navbar.appendChild(menuLink);
    navbar.appendChild(contactLink);


    const content = document.querySelector('#content');
    content.replaceChildren();
    //home title
    const title = document.createElement('h1');
    title.textContent = "Pancake Palooza";
    content.appendChild(title);

    //main image
    const mainImg = document.createElement('img');
    mainImg.src = pancakesImg;
    content.appendChild(mainImg);

    //description
    const description = document.createElement('p');
    description.textContent = "Circa 1998. Home of the best pancakes in Canada.";
    content.appendChild(description);
};
