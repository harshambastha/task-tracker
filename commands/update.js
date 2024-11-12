const fs = require('fs');
const path = require('path');

const getFileData = require('../util');
const pathToFile = path.join(__dirname, '../task-data.json');

function updateTask(taskId, newDescription){
    const data=getFileData();

    if(!newDescription || newDescription.length ===0){
        console.log('Please enter a valid description');
        return;
    }

    if(data && data[taskId]){
        const oldDescription = data[taskId].description;
        data[taskId].description = newDescription;
        fs.writeFileSync(pathToFile, JSON.stringify(data));
        console.log(`Updated the description of the Task from ${oldDescription} to ${data[taskId].description}`);
    }
    else {
        console.log('Please enter a valid task id');
    }
}

module.exports = updateTask

//update id params to taskId in other commands