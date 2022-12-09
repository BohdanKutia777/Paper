const requestUserData = userId => {

    const p = new Promise((resolve, reject) => {
        if(userId === 'broken') {
            setTimeout(() => {
                reject(new Error('User not found'))
            }, 500);
        } else {
        setTimeout(() => {
            resolve ({
                name: 'John', 
                age: 17,
                userId: 'userid777',
                email: 'userid777@example.com',
            });
        }, 1000);
    }});


    return p;

}


requestUserData('user-1')
    .then(data => console.log(data))
    .catch(error => new Error(error));


requestUserData('broken')
    .then(data => console.log(data))
    .catch(error => console.log(error));  