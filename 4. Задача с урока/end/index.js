const getMessagesForBestStudents = (allStudentsList, tudentsForRetake) =>
    allStudentsList.filter(name => !tudentsForRetake.includes(name))
        .map(name => ('Good job, ' + name));
