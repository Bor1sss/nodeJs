import {EventEmitter} from "events"
const eventEmitter = new EventEmitter();


console.log('Task1')

const handler1 = () => {
    console.log("Handler 1: Click event triggered!");
}
const handler2 = () => {
    console.log("Handler 2: Click event triggered!");
}
const handler3 = () => {
    console.log("Handler 3: Click event triggered!");
}
eventEmitter.on('click', handler1);
eventEmitter.on('click', handler2);
eventEmitter.on('click', handler3);

eventEmitter.emit('click');


console.log('TASK 2')


const errorHandler1 = () => {
    console.log("Error Handler 1: An error occurred!");
}
const errorHandler2 = () => {
    console.log("Error Handler 2: An error occurred!");
}
const errorHandler3 = () => {
    console.log("Error Handler 3: An error occurred!");
}

eventEmitter.on('error', errorHandler1);
eventEmitter.on('error', errorHandler2);
eventEmitter.on('error', errorHandler3);
eventEmitter.emit('error');

console.log('TASK2')

eventEmitter.off('error', errorHandler2);
eventEmitter.emit('error');





console.log('TASK 3')
class Dice extends EventEmitter {
    roll() {
        const result = Math.floor(Math.random() * 6) + 1;
        this.emit('rolled', result);
    }
}

const dice = new Dice();
dice.on('rolled', (result) => {
    console.log(`Roll of the dice: it landed on ${result}`);
});

dice.roll();
dice.roll();
dice.roll();



console.log('TASK 4')
class Logger extends EventEmitter {
    info(message) {
        this.emit('INFO', message);
    }

    warn(message) {
        this.emit('WARNING', message);
    }

    error(message) {
        this.emit('ERROR', message);
    }
}

const logger = new Logger();
logger.on('info', (message) => {
    console.log(`INFO: ${message}`);
});
logger.on('warn', (message) => {
    console.log(`WARNING: ${message}`);
});
logger.on('error', (message) => {
    console.log(`ERROR: ${message}`);
});

logger.info('informational message.');
logger.warn('warning message.');
logger.error('error message.');
