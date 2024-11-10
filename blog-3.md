  Headline : Why are Type Guards Necessary? Discuss Various Types of Type Guards and Their Use Cases.


  This is important to check what type of data we are getting and accordind to that data we can make action for that we need type guard. Lets say when we have to give user access according to role we need to check is she/he is admin or normal user accoording to this we have to give specific pages or data to admin not for normal user. Thats why its neccessary to use  in our code. It will reduce the error and unwanted bugs.
  
  
  Lets discuss various Type Guard and Their Use Cases : 
  
  Lets check a example to understand this :


This is a  example also in guard type guard (in guard Type Guard)
  // in guard

  type User = {
    name: string;
  };

  type Admin = {
    name: string;
    role: string;
  };

  const getUser = (user: User | Admin) => {
    if ("role" in user) {
      console.log(`My name is ${user.name} and role is ${user.role}`);
    } else {
      console.log(`My name is ${user.name} `);
    }
  };

  const result2 = getUser({ name: "asdfad" });


Here we are checking if the user have the key role if have then we will give him the access.


Not only this we can also check the data type line string , number etc (typeOf Type Guard)

lets understand this with a example

 //   tyoeof
  type Alphaumaric = string | number;

  const add = (param1: Alphaumaric, param2: Alphaumaric): Alphaumaric => {
    if (typeof param1 === "number" && typeof param2 === "number") {
      return param1 + param2;
    } else {
      return param1.toString() + param2.toString();
    }
  };

  const result1 = add("2", "3");
     console.log(result1);

     here we are checking the data type of param1 and param2 according to this we are executing our actions


So we are learning typescript so lets understand this with interface also 



// Type guard using instance of
  //   interface of guard

  class Animal {
    name: string;
    species: string;
    constructor(name: string, species: string) {
      this.name = name;
      this.species = species;
    }

    makeSound() {
      console.log("making sound");
    }
  }

  class Dog extends Animal {
    constructor(name: string, species: string) {
      super(name, species);
    }
    makeBark() {
      console.log("making sound bhau");
    }
  }
  class Cat extends Animal {
    constructor(name: string, species: string) {
      super(name, species);
    }
    makeMeau() {
      console.log("making sound meaw");
    }
  }

  //  smart way to handle we can use function

  const isDog = (animal: Animal): animal is Dog => {
    return animal instanceof Dog;
  };

  //   if (animal instanceof Dog) if we pass just the function it will not able to understund what animal is comming so it will not work beacuse its just returning true or false we have to do( animal is Dog)

  const getAnimal = (animal: Animal) => {
    if (animal instanceof Dog) {
      animal.makeBark();
    } else if (animal instanceof Cat) {
      animal.makeMeau();
    } else {
      animal.makeSound();
    }
  };

  const dog = new Dog("Dog bhai", "dog");
  const cat = new Cat("Cat bhai", "cat");
  getAnimal(cat);


  here in getAnimal  function we are checking is it dog or cat according to this it will reeturning the sound. This is the way you can use type guard in typescript.
  