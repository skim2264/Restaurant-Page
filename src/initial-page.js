export function initialPage(){
    const content = document.querySelector('#content');

    const title = document.createElement('h1');
    title.textContent = "Pancake Palooza";
    content.appendChild(title);

    const mainImg = document.createElement('img');
    mainImg.src = "https://images.unsplash.com/photo-1544726982-b414d58fabaa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
    content.appendChild(mainImg);

    const description = document.createElement('p');
    description.textContent = "Circa 1998. Home of the best pancakes in Canada.";
    content.appendChild(description);
}