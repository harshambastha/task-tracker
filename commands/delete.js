const fs = require('fs');
const path = require('path');

const getFileData = require('../util');
const pathToFile = path.join(__dirname, '../task-data.json');

function deleteTask(id){
    const data = getFileData();
    
    if(data && data[id]){
        var oldTask;
        const newData = data.filter(task=>{
            if(task.id!==(+id)) return true;
            else {
                oldTask = task;
                return false;
            }
        });
        fs.writeFileSync(pathToFile, JSON.stringify(newData));
        console.log(`Task with description ${oldTask.description} deleted`);
    }
    else {
        console.log(`Task with ${id} doesn't exist`);
    }

}

module.exports = deleteTask;