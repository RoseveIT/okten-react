// interface IUser<T,G>{
//     name:string,
//     age:number,
//     id?:number,
//     // address:IAddress
//     arr:T[]
//     arr2:G[]
// }
//
// interface IAddress{
//     street: string,
//     house: number
// }
//
// const user:IUser<string,number> = {name:'Max',age:22, arr:['1','2'], arr2:[333]}
//
// console.log(user);
//
// type StateType = [string, (a:number,b:number)=>number]
//
// const useState:StateType = ["ssss", (a, b) => {
//     return a+b
// }]
// let [first, second] = useState;
//
// console.log(first);
// console.log(second(3,4));


// class User{
//     constructor(private name: string, private age: number, private id: number) {
//         this.name = name;
//         this.age = age;
//         this.id = id;
//     }
//
//     getId():number{
//         return this.id
//     }
//     setId(newId:number):void{
//         this.id = newId
//     }
// }
//
// const user:User = {name:'Max', age:5}
//
//
//
// let user1 = new User("Kira", 22, 1);
// user1.getId()


interface IShapeActions{
    area:()=>number;
    perimeter:()=>number;
}

class Triangle implements IShapeActions{
    constructor(private a:number, private b:number, private c:number) {
    }
    area(): number {
        return this.a*this.b*this.c;
    }

    perimeter(): number {
        return this.a+this.b+this.c;
    }

}

class Figure implements IShapeActions{
    constructor(private a:number, private b:number) {
    }
    area(): number {
        return this.a*this.b;
    }

    perimeter(): number {
        return this.a+this.b;
    }

}


const shapes:IShapeActions[]=[new Triangle(1,2,3), new Figure(1,2), new Triangle(2,3,4)]

for (let shape of shapes) {
    console.log(shape.area());
    console.log(shape.perimeter());
}