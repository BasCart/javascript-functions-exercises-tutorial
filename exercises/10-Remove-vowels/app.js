// Your code goes here
const rapid=(string)=>{
    let letter= string.toLowerCase()
    let resultado=""
    for(let i of letter){
        if(i == "a"){ null}
        else if(i == "e"){ null}
        else if(i == "i"){ null}
        else if(i == "o"){ null}
        else if(i == "u"){ null}
        else resultado+=i
    }
    return resultado.toUpperCase()
}

// Work above this line; do not change code below
let str = "John";
console.log(rapid(str));
