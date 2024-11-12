const fs = require('fs');
const path = require('path');

const pathToFile = path.join(__dirname,'./task-data.json');


function getFileData(){
    if(fs.existsSync(pathToFile)){
        return JSON.parse(fs.readFileSync(pathToFile,'utf-8'));
    }
}

module.exports = getFileData;