export const text ={
    white:"#faedf2 ",
    white1:"#fcfcfc",
    darkred:"rgb(94, 2, 2)",
    simpletext : "rgb(58, 20, 26)"
}

export function pink(strength:1|2|3|4 , opacity?:number) {
    var color = "pink"
    if(strength === 4){
        color = `#db4b61`
    }
    else if(strength === 3){
        color = `rgba(243, 83, 108 , ${opacity})`
    }
    else if(strength === 2){
        color = `#f9a9b6`
    }
    else{
        color = `#fbcbd3`
    }
    return color
}

export const randcol =()=>{
    const randint = Math.floor(Math.random()*6)
    var color
    if (randint == 0)
        color = pink(3,1)
    else if (randint == 1)
        color = `rgba(243, 73, 98 , 1)`
     else if (randint == 2)
        color = `rgba(233, 73, 98 , 1)`
     else if (randint == 3)
        color = `rgba(243, 83, 98 , 1)`
     else if (randint == 4)
        color = `rgba(253, 73, 98 , 1)`
     else if (randint == 5)
        color = `rgba(243, 73, 68 , 1)`
    else 
        color = `rgba(223, 73, 98 , 1)`


    return color
}