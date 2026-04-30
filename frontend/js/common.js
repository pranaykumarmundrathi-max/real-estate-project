// 🌐 BASE API URL
const API_URL = "http://localhost:5000";

// 👤 GET LOGGED USER
function getUser() {
  const user = localStorage.getItem("user");
  return user ? JSON.parse(user) : null;
}

// 🔐 CHECK LOGIN (redirect if not logged in)
function checkAuth() {
  const user = getUser();

  if (!user) {
    alert("Please login first ❌");
    window.location.href = "login.html";
  }
}

// 🚪 LOGOUT
function logout() {
  localStorage.removeItem("user");
  window.location.href = "login.html";
}

// 📡 COMMON FETCH FUNCTION
async function api(url, method = "GET", body = null) {
  const options = {
    method,
    headers: {
      "Content-Type": "application/json"
    }
  };

  if (body) {
    options.body = JSON.stringify(body);
  }

  const res = await fetch(API_URL + url, options);
  return res.json();
}

// 🔄 FORMAT DATE
function formatDate(date) {
  return new Date(date).toLocaleString();
}

// 📞 MASK PHONE NUMBER (last 4 digits only)
function maskPhone(phone) {
  return "XXXXXX" + phone.slice(-4);
}