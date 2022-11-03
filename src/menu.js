export function menu() {
    const content = document.querySelector('#content');
    content.replaceChildren();

    const banana = document.createElement('div');
    const bananaImg = document.createElement('img');
    const bananaDes = document.createElement('h2');
    bananaImg.src = "../src/images/banana.jpg"
    bananaDes.textContent = "Banana Pancakes";
    banana.appendChild(bananaImg);
    banana.appendChild(bananaDes);
    content.appendChild(banana);
    
    const blueberry = document.createElement('div');
    const blueberryImg = document.createElement('img');
    const blueberryDes = document.createElement('h2');
    blueberryImg.src = "../src/images/blueberry.jpg"
    blueberryDes.textContent = "Blueberry Pancakes";
    blueberry.appendChild(blueberryImg);
    blueberry.appendChild(blueberryDes);
    content.appendChild(blueberry);
    
    const raspberry = document.createElement('div');
    const raspberryImg = document.createElement('img');
    const raspberryDes = document.createElement('h2');
    raspberryImg.src = "../src/images/raspberry.jpg"
    raspberryDes.textContent = "Raspberry Pancakes";
    raspberry.appendChild(raspberryImg);
    raspberry.appendChild(raspberryDes);
    content.appendChild(raspberry);
    
    const walnut = document.createElement('div');
    const walnutImg = document.createElement('img');
    const walnutDes = document.createElement('h2');
    walnutImg.src = "../src/images/walnut.jpg"
    walnutDes.textContent = "Walnut Pancakes";
    walnut.appendChild(walnutImg);
    walnut.appendChild(walnutDes);
    content.appendChild(walnut);

};