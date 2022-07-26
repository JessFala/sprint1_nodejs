


let dades = [];

const prova = (num) =>{
    let time = 5000 * Math.random()
    return new Promise ((res, rej)=>{
        setTimeout(()=> {
            res({num, time});
        }, time);
    });
};

for(let i=1; i<= 10; i++) {
    const insertarFuncio = async() => {
        dades [i] = console.log (await prova(i))
    }
    insertarFuncio()
};