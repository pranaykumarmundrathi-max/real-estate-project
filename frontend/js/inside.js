async function loadCustomers() {
    const res = await fetch("http://localhost:5000/customers");
    const data = await res.json();

    document.getElementById("customers").innerHTML = data.map(c => `
        <div class="card">
            ${c.name} - ****${c.phone.slice(-4)}
            <br><br>
            <button onclick="whatsapp('${c.phone}')">
                WhatsApp
            </button>
        </div>
    `).join("");
}

function whatsapp(phone) {
    window.open(`https://wa.me/91${phone}`);
}

loadCustomers();