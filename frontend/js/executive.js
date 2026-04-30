async function addCustomer() {
    const cname = document.getElementById("cname");
    const phone = document.getElementById("phone");

    await fetch("http://localhost:5000/addCustomer", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: cname.value,
            phone: phone.value
        })
    });

    alert("Customer added");
}