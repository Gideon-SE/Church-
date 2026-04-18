let totalAmount = 0;

function addOffering() {
    let type = document.getElementById("type").value;
    let amount = document.getElementById("amount").value;

    if (type === "" || amount === "") {
        alert("Enter all details");
        return;
    }

    let li = document.createElement("li");
    li.textContent = type + " - KES " + amount;

    document.getElementById("list").appendChild(li);

    totalAmount += parseInt(amount);
    document.getElementById("total").textContent = "Total: KES " + totalAmount;

    saveData();

    document.getElementById("type").value = "";
    document.getElementById("amount").value = "";
}

function saveData() {
    localStorage.setItem("offerings", document.getElementById("list").innerHTML);
    localStorage.setItem("total", totalAmount);
}

function loadData() {
    document.getElementById("list").innerHTML = localStorage.getItem("offerings") || "";
    totalAmount = parseInt(localStorage.getItem("total")) || 0;
    document.getElementById("total").textContent = "Total: KES " + totalAmount;
}

window.onload = loadData;
