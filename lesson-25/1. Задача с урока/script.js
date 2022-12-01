const week = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'St', 'Su'];


const getDayOfWeek = (date, days) => {
    const day = new Date(date).getDate();
    const dataInFuture = new Date(date).setDate(day + days);
    return week[new Date(dataInFuture).getDay()];
}

const result = getDayOfWeek(new Date(2019,0,7), 15);
console.log(result);