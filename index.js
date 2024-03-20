// function funcname():string{
//     let name="Daniyal"
//     return(name)
// }
// let nmae:string=funcname()
// console.log(nmae);
// function with if and else statement
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
//Example2 
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
// result=isCommon("orange")
// console.log(result);
//  function checkFruit(fruit: string): string | undefined {
//     if (fruit === "apple" || fruit === "banana" || fruit === "orange") {
//         return `Yes, ${fruit} is a common fruit.`;
//      } else {         return `No, ${fruit} is not a common fruit.`;     }
//  }
//  let result: string | undefined = checkFruit("banana");
// console.log(result);
//  result = checkFruit("pine");
//  console.log(result);
//  function isCommon(fruit:string):string | undefined{
//      if (fruit === "apple" || fruit === "mango" || fruit === "orange") {
//          return `Yes ${fruit} is common.`;
//      } else { return `No, ${fruit } is not common`}
//  }
//  let result:string | undefined= isCommon("apple")
//  console.log(result);
//  result= isCommon("ana")
//  console.log(result);
//Example-3
function isPass(marks) {
    if (marks >= 90 || marks >= 80 || marks >= 70 || marks >= 60) {
        return "The marks is ".concat(marks, " so student is pass");
    }
    else {
        return "the marks is ".concat(marks, " so student is fail ");
    }
}
var result = isPass(60);
console.log(result);
result = isPass(40);
console.log(result);
