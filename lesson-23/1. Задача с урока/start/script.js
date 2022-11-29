// all variables for task
const bthClear = document.querySelector('.clear-btn');
const bthRemove = document.querySelector('.remove-handlers-btn');
const bthAttach = document.querySelector('.attach-handlers-btn');
const eventsListElem = document.querySelector('.events-list');

const elemDiv = document.querySelector('.rect_div');
const elemP = document.querySelector('.rect_p');
const elemSpan = document.querySelector('.rect_span');

// adding functionality for bth attach and remove
const attachHandlers = () => {
    elemDiv.addEventListener('click', logGreenDiv, true);
    elemDiv.addEventListener('click', logGrayDiv);
    elemP.addEventListener('click', logGreenP, true);
    elemP.addEventListener('click', logGrayP);
    elemSpan.addEventListener('click', logGreenSpan, true);
    elemSpan.addEventListener('click', logGraySpan);
};
bthAttach.addEventListener('click', attachHandlers);

const removeHandlers = () => {
    elemDiv.removeEventListener('click', logGreenDiv, true);
    elemDiv.removeEventListener('click', logGrayDiv);
    elemP.removeEventListener('click', logGreenP, true);
    elemP.removeEventListener('click', logGrayP);
    elemSpan.removeEventListener('click', logGreenSpan, true);
    elemSpan.removeEventListener('click', logGraySpan);
};
bthRemove.addEventListener('click', removeHandlers);


// add div p span and span p div

const logTarget = (text, color) => {
    eventsListElem.innerHTML += `<span style = "color: ${color}; margin-left: 8px">${text}</span>`;
}
const logGreenDiv = logTarget.bind(null, 'DIV', 'green');
const logGreenP = logTarget.bind(null, 'P', 'green');
const logGreenSpan = logTarget.bind(null, 'Span', 'green');

const logGrayDiv = logTarget.bind(null, 'DIV', 'gray');
const logGrayP = logTarget.bind(null, 'P', 'gray');
const logGraySpan = logTarget.bind(null, 'SPAN', 'gray');


elemDiv.addEventListener('click', logGreenDiv, true);
elemDiv.addEventListener('click', logGrayDiv);


elemP.addEventListener('click', logGreenP, true);
elemP.addEventListener('click', logGrayP);


elemSpan.addEventListener('click', logGreenSpan, true);
elemSpan.addEventListener('click', logGraySpan);

// functionality for cleansing bord
const clearBord = () => {
    eventsListElem.innerHTML = "";
}
bthClear.addEventListener('click', clearBord);