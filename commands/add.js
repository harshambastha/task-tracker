const fs = require('fs');
const path = require('path');

const pathToFile = path.join(__dirname, '../task-data.json');

function addTask(task){

    const data = {
        id: 0,
        description: task,
        status: 'todo',
        createdAt: new Date(),
        updatedAt: new Date(),
    };

    if(!fs.existsSync(pathToFile)){
        // file doesn't exist, create the file
        fs.writeFileSync(pathToFile, JSON.stringify([data]));
    }
    else {
        const dataFromJSON = JSON.parse(fs.readFileSync(pathToFile, 'utf-8'));
        data.id = dataFromJSON.length;
        dataFromJSON.push(data);
        fs.writeFileSync(pathToFile, JSON.stringify(dataFromJSON));
        console.log(dataFromJSON);
    }
}

module.exports = addTask;