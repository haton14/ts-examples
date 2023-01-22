type User = { name: string; age: number };
const userList: User[] = [
    { name: 'unko', age: 1 },
    { name: 'unkounko', age: 18 }
];
console.log(userList);
const nameList = userList.map((u: User): string => u.name);
console.log(nameList);
