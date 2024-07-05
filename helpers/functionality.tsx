export function calculateBMI(age:number ,height:number , weight:number ){
        height = height/100 
        return weight/height*height
}

export function calculateIBW(gender:'Female'|'Male' , height:number){
    if (gender.toLowerCase() == 'male'){
        return 50+(0.1 * height - 152.4)
    }
    else{
        return 45+(0.1 * height - 152.4)
    }
}