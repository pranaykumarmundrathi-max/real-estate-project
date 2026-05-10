async function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    const res = await 
fetch("https://real-estate-project-wstj.onrender.com/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email, password })
    });

    const user = await res.json();

    if (user.error) {
      alert("Invalid login");
      return;
    }

    localStorage.setItem("user", JSON.stringify(user));

    if (user.role === "admin") {
      location.href = "admin.html";
    } else if (user.role === "executive") {
      location.href = "executive.html";
    } else if (user.role === "inside") {
      location.href = "inside.html";
    } else if (user.role === "outside") {
      location.href = "outside.html";
    }

  } catch (err) {
    console.log(err);
    alert("Server error");
  }
}