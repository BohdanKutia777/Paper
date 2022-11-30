const generateNumberRahge = (from, to) => {
    const result = [];
    for (let i = from; i <=to; i++) {
        result.push(i);
    }
    return result;
}; 

const getLineSeats = () =>  generateNumberRahge(1,10)
    .map(number => `
    <div
        class="sector__seat"
        data-sector-number="${number}"
        ></div>
        
    `).join('');

const getSectorLines = () => {
const seatsString = getLineSeats();
    return generateNumberRahge(1,10)
    .map(lineNumbers => `
    <div
        class="sector__line"
        data-sector-number="${lineNumbers}"
        >${seatsString}</div>
        
    `).join('');
}
const arenaElem = document.querySelector('.arena');

const renderArena = () => {
    const linesString = getSectorLines();
    const sectorString = generateNumberRahge(1,3)
    .map(sectorNumber => `
    <div
        class="sector"
        data-sector-number="${sectorNumber}"
        >${linesString}</div>
        
    `).join('');

    arenaElem.innerHTML = sectorString;
};


const onSeatSelect = event => {
    const isSeat = event.target.classList.contains('sector__seat')
    if(!isSeat) {
        return;
    }
    const seatNumber = event.target.getAttribute('data-seat-number');
    console.log(seatNumber);
    const lineNumber = event.target.closest('.sector__line').getAttribute('data-line-number');
    const sectorNumber = event.target.closest('.sector').getAttribute('data-sector-number');
    console.log(sectorNumber);
    const selectedSeatElem = document.querySelector('.board__selected-seat');
    selectedSeatElem.textContent = `S ${sectorNumber} L - ${lineNumber} S - ${seatNumber} `
}

const initHandlers = () => {
    const arenaElem = document.querySelector('.arena');

    arenaElem.addEventListener('click', onSeatSelect);
};

document.addEventListener('DOMContentLoaded', () => {
    renderArena();
    initHandlers();
});
