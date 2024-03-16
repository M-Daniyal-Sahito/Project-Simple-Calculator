// making simple command prompt calculator

import inquirer from "inquirer";

const answer = await inquirer.prompt([
  { message: "first enter number", type: "number", name: "firstNumber" },
  { message: "seconde enter number", type: "number", name: "secondeNumber" },
  {
    message: "Select one of the operator to perform operation ",
    type: "list",
    name: "operator",
    choices: ["Addition", "Subtraction", "Multiplication", "Division"],
  },
]);
 // condition statement 
 if (answer.operator === "Addition"){
  console.log(answer.firstNumber + answer.secondeNumber);
}
else if (answer.operator === "Subtraction"){
  console.log(answer.firstNumber - answer.secondeNumber);
}
else if (answer.operator === "Multiplication"){
  console.log(answer.firstNumber * answer.secondeNumber);
}
else if (answer.operator === "Division"){
  console.log(answer.firstNumber / answer.secondeNumber);
}
else {
  console.log("Please Enter Valid Operation" );}



