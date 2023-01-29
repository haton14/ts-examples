import { readFile } from "node:fs/promises";

const p = readFile('unko.txt', 'utf-8');

type Dinner = {
    id: number;
    createdAt: number;
    updatedAt: number;
}

const wrap = <T>(task: Promise<Response>): Promise<T> => {
    return new Promise((resolve, reject) => {
        task.then((res) => {
            if (res.ok) {
                res.json().then((body) => {
                    resolve(body)
                }).catch((error) => {
                    reject(error)
                })
            } else {
                reject(res)
            }
        }).catch((error) => {
            reject(error)
        })
    })
}
const fetcher = <T = any>(
    input: RequestInfo,
    init?: RequestInit
): Promise<T> => {
    return wrap<T>(fetch(input, init))
}

p.then((data) => {
    console.log(data);
});
const res = fetcher<Dinner>('https://api.private.ohagi.link/dinners/1')
res.then((data) => {
    console.log(data)
})
