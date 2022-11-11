const getMessagesForBestStudents = (allStudent, failStudent) => {
    return allStudent.filter(name => !failStudent.includes(name))
    .map(name => 'Good job: ' + name);


}
const allStudent = ['Tom', 'Anna', 'Alina', 'Ron', 'Diana'];
const failStudent = ['Anna', 'Alina'];
console.log(getMessagesForBestStudents(allStudent,failStudent));
console.log(allStudent);
console.log(failStudent);