const fs = require('fs');
const path = require('path');

const getFileData = require('../util');
const pathToFile = path.join(__dirname, '../task-data.json');

function markInProgress(taskId) {
    const data = getFileData();
    
    if (data && data[taskId]) {
        const oldStatus = data[taskId].status;
        data[taskId].status = 'in-progress';
        fs.writeFileSync(pathToFile, JSON.stringify(data));
        console.log(`Task with description ${data[taskId].description} moved from ${oldStatus} to ${data[taskId].status}`);
    }
    else {
        console.log('Please enter a valid task id');
    }
}

module.exports = markInProgress;