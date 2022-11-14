const splitText = (str, len = 10) => {
    if (typeof str !== 'string') {
        return null;
    }

    let start = 0;
    const result = [];

    while (true) {
        let chunk = str.substr(start, len);

        if (chunk.length === 0) {
            break;
        }

        result.push(chunk[0].toUpperCase() + chunk.slice(1));  
        start += len; 
    }

    return result.join('\n');
};