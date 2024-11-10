type Person = {
    name:string
    age: number
}

const getProperty = <X , Y extends keyof X> (obj : X , Key : Y)  =>{
   return obj[Key];
}

const person = { name: "Alice", age: 30 };
console.log(getProperty(person, "name"));