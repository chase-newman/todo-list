//This first prompt sets userInput
let userInput = prompt("What would you like to do?");
const todoArr = [];

//userInput is then passed through this while loop
//checking it against the conditionals
while(userInput !== "quit") {
    if(userInput === "new") {
        let newTodo = prompt("Enter a new todo");
        todoArr.push(newTodo);
        userInput = prompt("What would you like to do next?");
    }
    else if(userInput === "list") {
        for(let i=0; i<todoArr.length; i++) {
            console.log(`${i}: ${todoArr[i]}`);
        }
        console.log("*************");
        userInput = prompt("What would you like to do next?");
    }
    else if(userInput === "delete") {
        console.log("delete");
        userInput = prompt("What would you like to do next?");
    }
    else {
        userInput = promt("That was not a valid command. Please try again");
    }
}