const {getFileData,getTaskData,writeFileData} = require('../util');

function markDone(taskId){

    if(!taskId || isNaN(taskId)){
        console.log('Please enter a valid task id');
        return;
    }

    const data = getFileData();
    const taskData = getTaskData(taskId, data);

    if(data && taskData.id){
        data.forEach(item=>{
            if(item.id==taskData.id){
                item.status='done';
                return;
            }
        });
        writeFileData(data);
        console.log(`Task with description "${taskData.description}" moved from ${taskData.status} to done`);
    }
}

module.exports = markDone;