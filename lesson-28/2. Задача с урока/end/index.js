export const pinger = (count, period) => {
    console.log('Ping');
    
    const interval = setInterval(() => {
        console.log('Ping');
    }, period);

    setTimeout(() => clearInterval(interval), (count - 1) * period);
};
