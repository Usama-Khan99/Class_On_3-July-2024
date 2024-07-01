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


