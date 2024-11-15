const {getFileData, getTaskData, writeFileData} = require('../util');

function markInProgress(taskId) {

    if(!taskId || isNaN(taskId)){
        console.log('Please enter a valid taskId');
        return;
    }

    const data = getFileData();
    let taskData = getTaskData(taskId, data);

    if (data && taskData.id) {
        data.forEach(item=>{
            if(item.id==taskData.id){
                item.status='in-progress';
                return;
            }
        });
        writeFileData(data);
        console.log(`Task with description "${taskData.description}" moved from "${taskData.status}" to in-progress`);
    }
    else {
        console.log(`Task with id ${taskId} doesn't exist`);
    }
}

module.exports = markInProgress;