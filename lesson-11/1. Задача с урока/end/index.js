const getAdults = obj => Object.entries(obj)
    .filter(([_, age]) => age >= 18)
    .map(([name]) => name);
