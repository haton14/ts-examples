import { readFile } from "node:fs/promises";

const p = readFile('unko.txt', 'utf-8');

p.then((data) => {
    console.log(data);
});
