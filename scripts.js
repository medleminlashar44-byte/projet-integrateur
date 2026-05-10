// 1. Select the elements from your HTML
const video = document.getElementById('webcam');
const btn = document.getElementById('cameraBtn');

async function startCamera() {
    try {
        
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        
        
        video.srcObject = stream;
        
        console.log("Camera started successfully");
    } catch (err) {
        
        alert("Could not access camera. " + err);
    }
}


btn.addEventListener('click', startCamera);