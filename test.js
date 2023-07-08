const logEvents =require('./eventLog');
const event = require('events');

const eventEmitter =new event.EventEmitter();

eventEmitter.on('log', ()=>console.log('scream!!'));
eventEmitter.emit('log');