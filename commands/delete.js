const {getFileData, getTaskData, writeFileData} = require('../util');

function deleteTask(taskId){
    
    if(!taskId || isNaN(taskId)){
        console.log('Please enter a valid taskId');
        return;
    }

    const data = getFileData();
    const taskData = getTaskData(taskId, data);
    
    if(data && taskData.id){
        const newData = data.filter(item=>item.id!==taskData.id);
        writeFileData(newData);
        console.log(`Task with description "${taskData.description}" deleted`);
    }
    else {
        console.log(`Task with ${taskId} doesn't exist`);
    }

}

module.exports = deleteTask;