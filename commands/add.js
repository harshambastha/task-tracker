const fs = require('fs');
const path = require('path');

const pathToFile = path.join(__dirname, '../task-data.json');
const {getFileData, writeFileData} = require('../util');

function addTask(task){

    if(!task) {
        console.log('Please enter the task');
        return;
    }

    const data = getFileData();

    const newData = {
        id: Date.now(),
        description: task,
        status: 'todo',
        createdAt: new Date(),
        updatedAt: new Date(),
    };

    if(data){
        data.push(newData);
        writeFileData(data);
    }
    else {
        fs.writeFileSync(pathToFile, JSON.stringify([newData]));
    }
}

module.exports = addTask;