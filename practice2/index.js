import { Logger } from './Logger.js';

const __filename = import.meta.filename;

const __dirname = import.meta.dirname;

const logger = new Logger(__dirname);

logger.info('Асинхронная задача выполнена');
logger.warn('Файл может быть поврежден асинхронно');
logger.error('Файл поврежден асинхронно');

logger.infoSync('Синхронная задача выполнена');
logger.warnSync('Файл может быть поврежден синхронно');
logger.errorSync('Файл поврежден синхронно');


console.log(logger.readLogSync());

console.log(logger.readLog());

logger.log();