interface Profile {
    name: string
    age:number
    email: string
}

const  updateProfile  = (user : Profile , obj: Partial<Profile>) =>{
    return {...user , ...obj}

}

const myProfile = { name: "Alice", age: 25, email: "alice@example.com" };
console.log(updateProfile(myProfile, { age: 26 }));

