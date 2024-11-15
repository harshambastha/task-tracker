const {getFileData, getTaskData, writeFileData} = require('../util');

function updateTask(taskId, newDescription){

    const data=getFileData();
    const taskData = getTaskData(taskId,data);
    
    if(!taskId || typeof +taskId!=='number') {
        console.log('Please enter a valid task id');
        return;
    }

    if(!newDescription || newDescription.length ===0){
        console.log('Please enter a valid description');
        return;
    }

    if(data && taskData){
        data.forEach(item=>{
            if(item.id==taskData.id){
                item.description=newDescription;
                return;
            }
        });
        writeFileData(data);
        console.log(`Updated the description of the Task from ${taskData.description} to ${newDescription}`);
    }
}

module.exports = updateTask