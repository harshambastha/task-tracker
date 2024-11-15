const fs = require('fs');
const path = require('path');

const pathToFile = path.join(__dirname,'./task-data.json');


function getFileData(){
    if(fs.existsSync(pathToFile)){
        return JSON.parse(fs.readFileSync(pathToFile,'utf-8'));
    }
}

function getTaskData(taskId, data){
    return {...data.filter(item=>item.id==taskId)[0]};
}

function writeFileData(data){
    fs.writeFileSync(pathToFile, JSON.stringify(data));
}

module.exports = {
    getFileData: getFileData,
    getTaskData: getTaskData,
    writeFileData: writeFileData
};