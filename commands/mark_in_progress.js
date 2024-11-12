const fs = require('fs');
const path = require('path');

const getFileData = require('../util');
const pathToFile = path.join(__dirname, '../task-data.json');

function markInProgress(id) {
    const data = getFileData();
    
    if (data && data[id]) {
        const oldStatus = data[id].status;
        data[id].status = 'in-progress';
        fs.writeFileSync(pathToFile, JSON.stringify(data));
        console.log(`Task with description ${data[id].description} moved from ${oldStatus} to ${data[id].status}`);
    }
    else {
        console.log('Please enter a valid task id');
    }
}

module.exports = markInProgress;