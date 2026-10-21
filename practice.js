
const welcomeButton = document.querySelector("#welcome-button");
const welcomeMessage = document.querySelector("#welcome-message");
let nameInput = ''

function greetVisitor(){
    nameInput = document.querySelector("#name-input").value;
    if (nameInput === ""){
        welcomeMessage.textContent = "Enter your name first!";
    } else{
        welcomeMessage.textContent = "Welcome, " + nameInput + "!";
    }
}

welcomeButton.addEventListener("click", greetVisitor)