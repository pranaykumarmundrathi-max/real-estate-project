// frontend/js/outside.js

let mediaRecorder;
let audioChunks = [];

// Start Recording
async function startVisit() {
    audioChunks = [];

    const stream = await navigator.mediaDevices.getUserMedia({
        audio: true
    });

    mediaRecorder = new MediaRecorder(stream);

    mediaRecorder.ondataavailable = (e) => {
        audioChunks.push(e.data);
    };

    mediaRecorder.start();
}

// Stop Recording
function stopVisit() {
    if (mediaRecorder) {
        mediaRecorder.stop();
    }
}

// Upload
async function upload() {
    try {
        const blob = new Blob(audioChunks, {
            type: "audio/webm"
        });

        const formData = new FormData();
        formData.append("audio", blob);

        const selfieInput = document.getElementById("selfie");

        if (selfieInput.files.length > 0) {
            formData.append("selfie", selfieInput.files[0]);
        }

        // optional values
        formData.append("customerId", "123");
        formData.append("employeeId", "456");

        const res = await fetch("http://localhost:5000/visit", {
            method: "POST",
            body: formData
        });

        const data = await res.json();

        console.log(data);

        alert("Uploaded successfully ✅");

    } catch (err) {
        console.log(err);
        alert("Upload failed ❌");
    }
}