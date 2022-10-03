'use strict'
let grades = [
    {name: 'John', grade: 8, sex: 'M' },
    {name: 'Sarah', grade: 12, sex: 'F' },
    {name: 'Bob', grade: 16, sex: 'M' },
    {name: 'Johnny', grade: 2, sex: 'M' },
    {name: 'Cyrus', grade: 4, sex: 'M' },
    {name: 'Jeff', grade: 5, sex: 'm' },
    {name: 'Paula', grade: 18, sex: 'F' },
    {name: 'Jennifer', grade: 13, sex: 'F' },
    {name: 'Courtney', grade: 15, sex: 'F' },
    {name: 'Jane', grade: 9, sex: 'F' },
]

let isBoy = student => student.sex === "M",
let isGirl = student => student.sex === "F",

let getBoys = grades => (grades.filter(isBoy)),
let getGirls = grades => (grades.filter(isGirl)),







