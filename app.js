const readline = require('node:readline');

const addTask = require('./commands/add');
const printTask = require('./commands/list');
const markInProgress = require('./commands/mark_in_progress');
const markDone = require('./commands/mark_done');
const deleteTask = require('./commands/delete');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});


rl.on('line', (input)=>{
    const splitInputArray = input.split(' ');
    const command = splitInputArray[0];
    const argument = splitInputArray[1];

    switch(command){
        case 'add':
            addTask(argument);
            break;
        case 'list':
            printTask(argument);
            break;
        case 'mark-in-progress':
            markInProgress(argument);
            break;
        case 'mark-done':
            markDone(argument);
            break;
        case 'delete':
            deleteTask(argument);
            break;
        default:
            console.log('error');
    }
    rl.close();
})