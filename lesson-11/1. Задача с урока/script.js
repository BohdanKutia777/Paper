const getAdults = obj => Object.entries(obj)
    .filter(name => name[1] >= 18)
    .map(name => name[0]);
    

console.log(getAdults({ 'John Doe': 19, 'Tom': 17, 'Bob': 18 }));