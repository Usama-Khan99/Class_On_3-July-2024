// Difference between enum and type literals
// Difference between enum and const enum

// Exam Material

// Github repo (10 steps till tuples)
// Slides must watch
// Raman coding night must watch
// 45 Assignments


// These two interfaces are completely 
// transferable in a structural type system



// Fresh/ Stale/ Dynamic Objects 

let myType = {name: 'usama', id:1}

myType = {id:2, name: 'usama'}

// Fresh object in structural typing 

// fresh object (is m same structure banana parhta h jou variable banaty wqt rakhty h)
// same stucture follow karna parhta h jou assign hota h
myType = {id:2, name: 'usama', age:25}

// Stale object in structral typing

let testType = {id:2, name: 'usama', age:25}

myType = testType;


// Must practice fresh and stale object 

// Index signature

// jbb ye naa pta ho k hamary form m kitni keys hongi or kitni values tou
// index signature use karygy

type dynamicForm = {
    [key:string]: string | number;
}

let feedBackForm : dynamicForm = {
name:'Usama Khan',
email: 'usama@gmail.com',
feedback: "I'm happy with service.",
};

let studentInfo: dynamicForm ={
    name:'Usama khan',
    email:'usama@gmail.com',
    nic:'1234918356826',
    education:'Bsc',
};


// Modules
// (import and export)
// alag alag name ki files banaty h phr usy 
// need k hisaab sy main file m import export karty h 

// is topic ka alag folder bana dya h modules k name sy 

function printMessage(message: string | number){
    if(typeof message === 'string'){
        message.toUpperCase();
    }
    if (typeof message === "number"){
        message.toFixed(2);
    }
}



// Difference between javascript object and JSON


// what is the actual difference between primitive and non primitive data types


