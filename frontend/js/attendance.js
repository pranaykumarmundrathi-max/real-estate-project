async function loadAttendance() {
    try {
        const res = await fetch("http://localhost:5000/attendance");
        const data = await res.json();

        document.getElementById("attendanceList").innerHTML =
            data.map(a => `
                <div class="card">
                    <h3>👤 ${a.employeeName}</h3>
                    <p>📧 ${a.email}</p>
                    <p>🕘 Login: ${a.loginTime}</p>
                    <p>🕔 Logout: ${a.logoutTime}</p>
                    <p>📅 Date: ${a.date}</p>
                </div>
            `).join("");

    } catch (err) {
        console.log(err);
        alert("❌ Attendance not loading");
    }
}

loadAttendance();