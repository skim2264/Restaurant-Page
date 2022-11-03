export function contact() {
    const content = document.querySelector('#content');
    content.replaceChildren();

    const number = document.createElement('p');
    number.textContent = 'You can contact us at 1-800-123-1234.';
    content.appendChild(number);

    const address = document.createElement('p');
    address.textContent= 'You can find us located at 1800 Prince Edward Street.';
    content.appendChild(address);
};