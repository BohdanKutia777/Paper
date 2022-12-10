const servers = ['https://server.com/us/userId', 'https://server.com/eu/userId', 'https://server.com/au/'];

const getRandomNumber = (from, to) => 
    from + Math.random() * (to - from);

const request = url => new Promise(resolve => {
    const randomDelay = getRandomNumber(1000,3000);
    setTimeout(() => {
        resolve({
            userData: {
                name: "John",
                age: 17,
            },
            sourse: url,
        })
    }, randomDelay);
});

const getUserASAP = userId => {
    const userUrls = servers
    .map(serverUrl => `${serverUrl}/user/${userId}`);
    const requests = userUrls
    .map(userUrl => request(userUrl));
    return Promise.race(requests);
};

getUserASAP('user-id-7')
    .then(result => console.log(result));

