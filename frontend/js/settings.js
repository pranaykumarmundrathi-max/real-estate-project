async function loadSettings() {
    try {
        const res = await fetch("http://localhost:5000/settings");
        const data = await res.json();

        const name = document.getElementById("name");
        const email = document.getElementById("email");
        const password = document.getElementById("password");

        if (name) name.value = data.name || "";
        if (email) email.value = data.email || "";
        if (password) password.value = data.password || "";

    } catch (err) {
        console.log(err);
    }
}

function saveSettings() {
    alert("Settings Saved Successfully ✅");
}

loadSettings();