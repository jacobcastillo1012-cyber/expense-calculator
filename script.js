function addExpense() {

    let name = document.getElementById("expenseName").value;
    let amount = document.getElementById("amount").value;

    if (name === "" || amount === "") {
        alert("Fill all fields");
        return;
    }

    let li = document.createElement("li");

    li.innerHTML = `
        ${name} - $${amount}
        <button class="delete-btn">Delete</button>
    `;

    li.querySelector(".delete-btn").addEventListener("click", function () {
        li.remove();
    });

    document.getElementById("expenses").appendChild(li);

    document.getElementById("expenseName").value = "";
    document.getElementById("amount").value = "";
}

function changeLanguage() {

    let language = document.getElementById("language").value;

    if (language === "es") {

        document.getElementById("languageLabel").textContent = "Idioma:";
        document.getElementById("title").textContent = "Control de Gastos";
        document.getElementById("instructions").textContent =
            "Añade un gasto y pulsa el botón.";

        document.getElementById("expenseName").placeholder =
            "Nombre del gasto";

        document.getElementById("amount").placeholder =
            "Cantidad";

        document.getElementById("addButton").textContent =
            "Agregar Gasto";

        document.getElementById("expenseListTitle").textContent =
            "Gastos";

    } else {

        document.getElementById("languageLabel").textContent = "Language:";
        document.getElementById("title").textContent = "Expense Tracker";
        document.getElementById("instructions").textContent =
            "Add an expense and click the button.";

        document.getElementById("expenseName").placeholder =
            "Expense Name";

        document.getElementById("amount").placeholder =
            "Amount";

        document.getElementById("addButton").textContent =
            "Add Expense";

        document.getElementById("expenseListTitle").textContent =
            "Expenses";
    }
}
