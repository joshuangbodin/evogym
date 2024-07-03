export const text ={
    white:"#faedf2 ",
    white1:"#fcfcfc",
    darkred:"rgb(94, 2, 2)",
    simpletext : "rgb(58, 20, 26)"
}

export function pink(strength:1|2|3 , opacity?:number) {
    var color = "pink"
    if(strength === 3){
        color = `rgba(243, 73, 98 , ${opacity})`
    }
    else if(strength === 2){
        color = `rgba(255, 192, 203,${opacity})`
    }
    else{
        color = `rgba(252, 209, 216,${opacity})`
    }
    return color
}

export const randcol =()=>{
    const randint = Math.floor(Math.random()*6)
    var color
    if (randint == 0)
        color = pink(3,1)
    else if (randint == 1)
        color = "green"
     else if (randint == 2)
        color = "purple"
     else if (randint == 3)
        color = "gray"
     else if (randint == 4)
        color = "darkred"
     else if (randint == 5)
        color = "orange"
    else 
        color = "blue"


    return color
}