#! /usr/bin/env node

const addTask = require('./commands/add');
const printTask = require('./commands/list');
const markInProgress = require('./commands/mark_in_progress');
const markDone = require('./commands/mark_done');
const deleteTask = require('./commands/delete');
const updateTask = require('./commands/update');

const command = process.argv;
const arg1 = command[2];
const arg2 = command[3];
const arg3 = command[4];

switch (arg1) {
    case 'add':
        addTask(arg2);
        break;
    case 'list':
        printTask(arg2);
        break;
    case 'mark-in-progress':
        markInProgress(arg2);
        break;
    case 'mark-done':
        markDone(arg2);
        break;
    case 'delete':
        deleteTask(arg2);
        break;
    case 'update':
        updateTask(arg2, arg3);
        break;
    default:
        console.log('Not a valid command');
}