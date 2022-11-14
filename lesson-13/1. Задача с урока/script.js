const splitText = (text, len = 10) => {

    if(typeof text !== "string") {
        return null;
    }
    let counter = 0;
    let strArr = [];

    while (true) {
        let chuk = text.substr(counter, len);
        counter += len;
        if( chuk.length === 0) {
            break;
        }
        strArr.push(chuk[0].toUpperCase() + chuk.slice(1));
    }
    return strArr.join('\n');
}




console.log(splitText('abcd efgh', 4));

console.log(splitText('abcd sdasdasdasdasdasdasdasdefgh'));