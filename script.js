let total = 0;

function formatCurrency(value) {
    return "$" + value.toLocaleString("en-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
}

function addExpense() {
    const expenseName =
        document.getElementById("expenseName").value;

    const amount =
        parseFloat(document.getElementById("amount").value);

    if (!expenseName || isNaN(amount) || amount <= 0) {
        alert("Please complete all fields.");
        return;
    }

    total += amount;

    document.getElementById("total").textContent =
        formatCurrency(total);

    const li = document.createElement("li");

    li.textContent =
        expenseName + " - " + formatCurrency(amount);

    document.getElementById("expenses").appendChild(li);

    document.getElementById("expenseName").value = "";
    document.getElementById("amount").value = "";
}

function changeLanguage() {
    const lang =
        document.getElementById("language").value;

    if (lang === "es") {
        document.getElementById("title").textContent =
            "Control de Gastos";

        document.getElementById("addButton").textContent =
            "Agregar Gasto";

        document.getElementById("expenseName").placeholder =
            "Nombre del gasto";

        document.getElementById("amount").placeholder =
            "Cantidad";

        document.getElementById("totalLabel").textContent =
            "Total";
    } else {
        document.getElementById("title").textContent =
            "Expense Tracker";

        document.getElementById("addButton").textContent =
            "Add Expense";

        document.getElementById("expenseName").placeholder =
            "Expense Name";

        document.getElementById("amount").placeholder =
            "Amount";

        document.getElementById("totalLabel").textContent
