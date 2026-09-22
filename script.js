function addExpense() {

    let name = document.getElementById("expenseName").value;
    let amount = document.getElementById("amount").value;

    if (name === "" || amount === "") {
        alert("Fill all fields");
        return;
    }

    let li = document.createElement("li");

    li.textContent = name + " - $" + amount;

    document.getElementById("expenses").appendChild(li);

    document.getElementById("expenseName").value = "";
    document.getElementById("amount").value = "";
}
