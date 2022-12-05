
localStorage.setItem('name', JSON.stringify('Tom'));
localStorage.setItem('name1', JSON.stringify('Adel'));
localStorage.setItem('name2', JSON.stringify('Lux'));
localStorage.setItem('car', JSON.stringify({car: 'Lada'}));
localStorage.setItem('number', JSON.stringify([12,13,123,1231,23123,123,123,123]));


const getLocalStorageData = () => Object.entries(localStorage)
    .reduce((acc, [key,value]) => {
        return  {
            ...acc,
            [key]: JSON.parse(value),
        }
    },{});


console.log(getLocalStorageData());