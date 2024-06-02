document.addEventListener("DOMContentLoaded", function() {
    // Get query parameters from URL
    const urlParams = new URLSearchParams(window.location.search);

    // Get recipient name, date, time, and location from query parameters
    const groom = decodeURIComponent(urlParams.get('groom'));
    const bride = decodeURIComponent(urlParams.get('bride'));
    

    // Update content dynamically
    document.getElementById("groom").textContent = groom;
    document.getElementById("bride").textContent = bride;

    // Generate QR code
    generateQRCode(location);
});

// Function to generate QR code for venue location
function generateQRCode(locationInput) {
    var qrCodeImg = document.getElementById("qrcode");
    
    // Generate QR code
    var googleMapsLink = "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(locationInput);
    var qrCodeUrl = "https://api.qrserver.com/v1/create-qr-code/?data=" + encodeURIComponent(googleMapsLink) + "&size=200x200";
    qrCodeImg.src = qrCodeUrl;
    
    // Redirect to Google Maps when QR code is clicked
    qrCodeImg.onclick = function() {
        window.location.href = googleMapsLink;
    };
}
