const readline = require('node:readline');

const addTask = require('./commands/add');
const printTask = require('./commands/list');
const markInProgress = require('./commands/mark_in_progress');
const markDone = require('./commands/mark_done');
const deleteTask = require('./commands/delete');
const updateTask = require('./commands/update');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});


rl.on('line', (input)=>{
    const splitInputArray = input.split(' ');
    const command = splitInputArray[0];
    const argument = splitInputArray[1];
    const argument1 = splitInputArray[2];

    switch(command){
        case 'add':
            addTask(argument);
            break;
        case 'list':
            printTask(argument);
            break;
        case 'mark-in-progress':``
            markInProgress(argument);
            break;
        case 'mark-done':
            markDone(argument);
            break;
        case 'delete':
            deleteTask(argument);
            break;
        case 'update':
            updateTask(argument,argument1);
            break;
        case 'exit':
            console.log('Bye, Have a nice day');
            rl.close();
            break;
        default:
            console.log('Not a valid command');
    }
})