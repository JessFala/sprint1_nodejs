/*Nivell 2
- Exercici 3
Invoca la primera funció getEmployee() i després getSalary() 
niant l'execució de les dues promises de manera que 
es retorni per la consola el nom de l'empleat i el seu salari.*/

let employees = [{
    id: 1,
    name: 'Linux Torvalds'
}, {
    id: 2,
    name: 'Bill Gates'
},{
    id: 3,
    name: 'Jeff Bezos'
}];
 
let salaries = [{
    id: 1,
    salary: 4000
}, {
    id: 2,
    salary: 1000
}, {
    id: 3,
    salary: 2000
}];

let getEmployee = id => {
    return new Promise((resolve, reject) =>{   // 'Promise' afegida a una funció
        let foundEmployee= employees.find(employee =>employee.id===id);
        if(foundEmployee) { 
            resolve(foundEmployee.name);
        } else {
            reject(`The employee ${id} doesn't exist`);
        }
    });
}

getEmployee(1)
.then(res => {
    console.log(`The employee's name is ${res}.`);
})
.catch(error => {
    console.log(error);
});

let id = 2;

getEmployee(id)
.then(name => {
   console.log(`Employee with ID ${id} found. Employee name is ${name}.`);
    return getSalary(id);
})
.then(salary => {
    console.log(`Monthly salary of employee is ${salary}.`);
})