const sumArray =  (arrayOfnumbers : number[]) : number =>{
    let sumOfNumbers : number = 0
    for(let i =0 ; i< arrayOfnumbers.length ; i++){
       sumOfNumbers = arrayOfnumbers[i] + sumOfNumbers
    }
    return sumOfNumbers
}

console.log(sumArray([1, 2, 3, 4, 5]))