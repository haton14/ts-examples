import { readFile } from "node:fs/promises";

const p = readFile('unko.txt', 'utf-8');

p.then((data) => {
    console.log(data);
});

const res = fetch('https://nodejs.org/api/documentation.json')
res
    .then((data) => {
        return data.json()
    })
    .then((body) => {
        console.log(body)
    })
