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
        document.getElementById("language").value;

    if (language === "es") {

        document.getElementById("title").textContent =
            "Control de Gastos";

        document.getElementById("instructions").textContent =
            "Añade un gasto y pulsa el botón.";

        document.getElementById("languageLabel").textContent =
            "Idioma:";

        document.getElementById("expenseName").placeholder =
            "Nombre del gasto";

        document.getElementById("amount").placeholder =
            "Cantidad";

        document.getElementById("addButton").textContent =
            "Agregar Gasto";

        document.getElementById("expenseListTitle").textContent =
            "Lista de Gastos";

        document.getElementById("deleteAllButton").textContent =
            "Eliminar Todos los Gastos";

    } else {

        document.getElementById("title").textContent =
            "Expense Tracker";

        document.getElementById("instructions").textContent =
            "Add an expense and click the button.";

        document.getElementById("languageLabel").textContent =
            "Language:";

        document.getElementById("expenseName").placeholder =
            "Expense Name";

        document.getElementById("amount").placeholder =
            "Amount";

        document.getElementById("addButton").textContent =
            "Add Expense";

        document.getElementById("expenseListTitle").textContent =
            "Expenses List";

        document.getElementById("deleteAllButton").textContent =
            "Delete All Expenses";
    }
}
