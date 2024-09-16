import path from 'node:path';
import fs from 'node:fs/promises';

const __filename = import.meta.filename;

const __dirname = import.meta.dirname;

const pathToFolder = path.join(__dirname, 'folder');
const pathToFile = path.join(pathToFolder, 'text.txt');

console.log(pathToFolder);
console.log(pathToFile);

const buff = Buffer.from('Node js');

const createFolderIfNotExists = async (folderPath) => {
    await fs.mkdir(folderPath);
};

const writeFile = async (filePath, buffer) => {
    await fs.writeFile(filePath, buffer);
    console.log('Success');
};

const readFile = async (filePath) => {
    const data = await fs.readFile(filePath, 'utf-8');
    console.log(data);
};

await createFolderIfNotExists(pathToFolder);
await writeFile(pathToFile, buff);
await readFile(pathToFile);
