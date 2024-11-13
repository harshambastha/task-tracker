const fs = require('fs');
const path = require('path');

const getFileData = require('../util');
const pathToFile = path.join(__dirname, '../task-data.json');

function markDone(taskId){
    const data = getFileData();

    if(data && data[taskId]){
        const oldStatus = data[taskId].status;
        data[taskId].status = 'done';
        fs.writeFileSync(pathToFile, JSON.stringify(data));
        console.log(`Task with description ${data[taskId].description} moved from ${oldStatus} to ${data[taskId].status}`);
    }
}

module.exports = markDone;