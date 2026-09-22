function addExpense() {

    const name = document.getElementById("expenseName").value;
    const amount = document.getElementById("amount").value;

    if (name === "" || amount === "") {
        alert("Please fill all fields.");
        return;
    }

    const li = document.createElement("li");

    const expenseText = document.createElement("span");
    expenseText.textContent = name + " - $" + amount;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.className = "deleteButton";

    deleteButton.onclick = function () {
        li.remove();
    };

    li.appendChild(expenseText);
    li.appendChild(deleteButton);

    document.getElementById("expenses").appendChild(li);

    document.getElementById("expenseName").value = "";
    document.getElementById("amount").value = "";
}

function deleteAllExpenses() {

    document.getElementById("expenses").innerHTML = "";
}

function changeLanguage() {

    const language =
        document.getElementById(
