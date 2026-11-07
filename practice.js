
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


let records = [
    { id: 1, name: "Lunch", amount: 100 },
    { id: 2, name: "Books", amount: 250 }
];

const list = document.querySelector("#list");
const emptyMessage = document.querySelector("#empty-message");

function renderRecords() {
    list.textContent = "";

    if (records.length === 0) {
        emptyMessage.textContent = "No expenses left.";
    } else {
        emptyMessage.textContent = "";
    }

    for (const record of records) {
        const item = document.createElement("li");
        item.textContent = record.name + " - Rs." + record.amount;
        list.appendChild(item);
    }
}

function deleteRecord(id) {
    const kept = [];
    for (const record of records) {
        if (record.id !== id) {
            kept.push(record);
        }
    }
    records = kept;
    renderRecords();
}

renderRecords();
deleteRecord(1);
deleteRecord(1);
console.log(records);