

{

    function validateKeys<T extends object>(obj: T, keys: (keyof T)[]): boolean{
        let trueFfalse  : boolean = true
   
        for(let i = 0 ; i < keys.length ; i++){
           trueFfalse = keys[i] in obj
        }
        return trueFfalse
   }

   const person  = { name: "Alice", age: 25, email: "alice@example.com" };
   console.log(validateKeys(person, ["age"  , 'name']));

}



