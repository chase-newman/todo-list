//This first prompt sets userInput
let userInput = prompt("What would you like to do?");
let todoArr = [];

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
        num = parseInt(prompt("Which todo would you like to delete? (please enter an num)"));
        // if(num !== NaN) {
        //     todoArr.slice(num);    
        // }
        if(num >= 0 && num < todoArr.length) {
            console.log(todoArr.slice(num));
            todoArr = todoArr.slice(num);
        }
        else {
            num = parseInt(prompt("That was not a valid number. Please try again"));
        }
        userInput = prompt("What would you like to do next?");
    }
    else {
        userInput = prompt("That was not a valid command. Please try again");
    }
}