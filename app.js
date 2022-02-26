//This first prompt sets userInput
let userInput = prompt("What would you like to do?");
const todoArr = [];

console.log(userInput);
//userInput is then passed through this while loop
//checking it against the conditionals
while(userInput !== "quit") {
    // userInput = prompt("What would you like to do?");
    
    if(userInput === "new") {
        console.log("new")
        // todoArr.push(userInput);
    }
    if(userInput === "list") {
        // console.log(todoArr);
        console.log("list");
    }
    if(userInput === "delete") {
        console.log("delete");
    }
}