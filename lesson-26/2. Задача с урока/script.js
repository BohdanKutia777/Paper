const conterElem = document.querySelector('.counter');
const counterValueElem = document.querySelector('.counter__value');

const onCounterChange = e => {
    const isButton = e.target.classList.contains('counter__button');

    if(!isButton) {
        return;
    }
    const oldValue = Number(counterValueElem.textContent);
    const action = e.target.dataset.action;
    const newValue = action !== 'increase'
        ? oldValue - 1
        : oldValue + 1;
    counterValueElem.textContent = newValue;
    localStorage.setItem('counterValue', newValue);
};



conterElem.addEventListener('click', onCounterChange);

const onStorageChange = e => {
    counterValueElem.textContent = e.newValue;
};

window.addEventListener('storage', onStorageChange);

const onDocumentLoad = () => {
    counterValueElem.textContent = localStorage.getItem('counterValue') || 0;
};

document.addEventListener('DOMContentLoaded', onDocumentLoad);


