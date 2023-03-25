//whiteboarding

/* going to need a few variables - clicked / operator / operate by value / outcome value
function to clear
function to do the operation
forloop for event listeners? 

// psudocode
look into jquerry $(event.currentTarget)
for loop for event listeners
look up keyup / keydown

// duck

I need to be able to capture values from button clicks and save them inline (187) 
identify the operator
record the operator by value
pass them to the function to actually do the math
record the value
pass it to the gui
clear function as needed

*/
let screenDisplay = document.getElementById("calc-display") 
let clear = true

$(document).ready(function(){
    $("button").click(function(event){
        let operandOne = ""
        if (this.id === "reset"){
            screenDisplay.innerText = ""
        }else if (this.id !== "=" && clear === true) {
            console.log(this.id)
            screenDisplay.innerText += this.id
        }else if (this.id !== "=" && clear === false) {
            screenDisplay.innerText = ""
            console.log(this.id)
            screenDisplay.innerText += this.id
            clear = true
        }else if (this.id !== "=") {
            console.log(this.id)
            screenDisplay.innerText += this.id
        }else if (this.id === "=" ) {
            screenDisplay.innerText = eval
            (screenDisplay.innerText)
            clear = false
        }

    });  
  });