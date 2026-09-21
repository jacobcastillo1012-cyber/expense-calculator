let total = 0;

function addExpense() {
    const amount = Number(
        document.getElementById("amount").value
    );

    total += amount;

    document.getElementById("total").textContent = total;

    const item = document.createElement("li");
    item.textContent = "$" + amount;

    document.getElementById("expenses").appendChild(item);

    document.getElementById("amount").value = "";
}
