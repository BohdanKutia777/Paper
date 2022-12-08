const printing = () => {
    console.log(1);
    setTimeout(function() { console.log(5); }, 1000);
    console.log(2);
    setTimeout(function() { console.log(4); }, 0);
    console.log(3);
    setTimeout(function() { console.log(6); }, 1500);
    setTimeout(function() { console.log(7); }, 2000);
    setTimeout(function() { console.log(8); }, 2300);
};

printing()