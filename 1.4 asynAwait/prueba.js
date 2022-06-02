let getEmployee = (id) => {

    return new Promise((resolve, reject) => {
        let employeEncont = employees.find(employee => employee.id === id);

        if (!employeEncont){
            reject(`Sorry, an employee with this ${id} ID doesn't exist.`);
        } else {
            setTimeout(() =>{
                resolve(employeEncont);
            }, 2000);
            
        }

    })
}


async function funcionAsincroTime(){
    try{
    const idUserTime = await getEmployee(1);
    console.log(idUserTime);
    } catch (error){
        console.log(error);
    }
}

console.log(funcionAsincroTime());
