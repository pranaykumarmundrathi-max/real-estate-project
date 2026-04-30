// frontend/js/customers.js

async function loadCustomers() {
    try {
        const res = await fetch("http://localhost:5000/customers");
        const data = await res.json();

        document.getElementById("customerList").innerHTML = data.map(c => `
            <div class="card">
                <h3>👤 ${c.name}</h3>
                <p>📞 ${c.phone}</p>
                <p>📍 ${c.status || "Active"}</p>
            </div>
        `).join("");

    } catch (err) {
        console.log(err);
        alert("Customers not loading");
    }
}

loadCustomers();