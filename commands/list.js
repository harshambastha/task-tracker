const getFileData = require('../util');

const allowedStatus = ['done', 'todo', 'in-progress'];

function printTasks(status) {
    const fileData = getFileData();

    const printData = (data) => {
        data.forEach(({ id, description, status }) => console.table({ id: id, description: description, status: status }));
    }

    if (status) {
        if (allowedStatus.includes(status)) {
            const getTaskByStatusData = fileData.filter(item => item.status == status);
            printData(getTaskByStatusData);
        }
        else {
            console.log('Please enter relevant status for tasks');
        }
    }
    else {
        printData(fileData);
    }


}

module.exports = printTasks;