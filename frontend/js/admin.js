async function addEmployee() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const role = document.getElementById("role").value;

    await fetch("https://yourproject.onrender.com/addEmployee", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name,
            email,
            password,
            role
        })
    });

    alert("Employee Added");
    loadEmployees();
}

async function loadEmployees() {
    const res = await fetch("https://yourproject.onrender.com/employees");
    const data = await res.json();

    document.getElementById("list").innerHTML = data.map(e =>
        `<p>👤 ${e.name} - ${e.role}</p>`
    ).join("");
}

loadEmployees();