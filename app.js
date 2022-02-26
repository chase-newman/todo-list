//This first prompt sets userInput
let userInput = prompt("What would you like to do?");
const todoArr = [];

//userInput is then passed through this while loop
//checking it against the conditionals
while(userInput !== "quit") {
    if(userInput === "new") {
        const newTodo = prompt("Enter a new todo");
        todoArr.push(newTodo);
    }
    else if(userInput === "list") {
        for(let i=0; i<todoArr.length; i++) {
            console.log(`${i}: ${todoArr[i]}`);
        }
        console.log("*************");
    }
    else if(userInput === "delete") {
        let num = parseInt(prompt("Which todo would you like to delete? (please enter an index)"));
        if(num >= 0 && num < todoArr.length) {
            const deleted = todoArr.splice(num, 1);
            console.log(`Ok, you deleted ${deleted}`);
        }
        else {
          console.log("Invalid index. Please enter a new command");
        }
    }
    else {
        userInput = prompt("That was not a valid command. Please try again");
    }
    userInput = prompt("What would you like to do next?");
}