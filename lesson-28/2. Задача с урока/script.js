const pinger = (n, period) => {
    let counter = n;
    const interval = setInterval(()=> {
        if(--counter >= 0) {
            console.log("Ping");
        } else {
            clearInterval(interval);
        }
    },period);
};

pinger(5,1000);
