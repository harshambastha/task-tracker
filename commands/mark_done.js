const fs = require('fs');
const path = require('path');

const getFileData = require('../util');
const pathToFile = path.join(__dirname, '../task-data.json');

function markDone(id){
    const data = getFileData();

    if(data && data[id]){
        const oldStatus = data[id].status;
        data[id].status = 'done';
        fs.writeFileSync(pathToFile, JSON.stringify(data));
        console.log(`Task with description ${data[id].description} moved from ${oldStatus} to ${data[id].status}`);
    }
}

module.exports = markDone;