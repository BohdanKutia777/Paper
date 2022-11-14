const sortContacts = (arr, boll) => {
    if (!Array.isArray(arr) ) {
        return null;
    }
    const result = arr.sort((a, b) => {
        if(boll) {
            return a.phoneNumber.localeCompare(b.phoneNumber);
        } else {
            return b.phoneNumber.localeCompare(a.phoneNumber);
        }
    });
    return result;
} 

console.log(sortContacts([{ name: 'Tom', phoneNumber: '717-77-77' },{ name: 'Jon', phoneNumber: '712-77-77' },{ name: 'Tommi', phoneNumber: '999-77-77' }],false))