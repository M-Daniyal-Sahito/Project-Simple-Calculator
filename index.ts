// example1
// function funcname():string{
//     let name="Daniyal"
//     return(name)
// }
// let nmae:string=funcname()
// console.log(nmae);
// function with if and else statement
//example 2
// function canEat(age: number): string {
//     if(age>=20){
//         return "yes, You can eat this"
//     }
//     else if (age>15){
//         return "No, You can'nt eat this"
//     }
//     else {
//         return "When you are 20 so you can eat this"
//     }
// }
// let old:string=canEat(0)
// console.log(old);
//Example3 
// function isCommon(fruit:string): string | undefined{
//     if (fruit==="apple" || fruit==="banana"){
//         return `Yes, ${fruit} is a common fruit.`;
//     }
//     else {
//         `No, ${fruit} is not common`;
//     }
// }
// let result:string |undefined =isCommon("banana");
// // console.log(result);
//exmaple4//  function checkFruit(fruit: string): string | undefined {
//     if (fruit === "apple" || fruit === "banana" || fruit === "orange") {
//         return `Yes, ${fruit} is a common fruit.`;
//      } else {         return `No, ${fruit} is not a common fruit.`;     }
//  }
//  let result: string | undefined = checkFruit("banana");
// console.log(result);
// example 5
function isPass(marks:number):string | undefined {
    if (marks >= 90 || marks >= 80 || marks >=70 || marks >= 60 ){return `The marks is ${marks} so student is pass`
}
else{return `the marks is ${marks} so student is fail `}
}
let result:string | undefined=isPass(60)
console.log(result);
result= isPass(40)
console.log(result);

