document.addEventListener("DOMContentLoaded", function() {
    // Get query parameters from URL
    const urlParams = new URLSearchParams(window.location.search);

    // Get recipient name, date, time, and location from query parameters
    const groom = decodeURIComponent(urlParams.get('groom'));
    const bride = decodeURIComponent(urlParams.get('bride'));
    const date = decodeURIComponent(urlParams.get('date'));
    const time = decodeURIComponent(urlParams.get('time'));
    const venue = decodeURIComponent(urlParams.get('venue'));
    const mobile = decodeURIComponent(urlParams.get('mobile'));
    const email = decodeURIComponent(urlParams.get('email'));
    const img = decodeURIComponent(urlParams.get('img'));

    // Update content dynamically
    document.getElementById("groom").textContent = groom;
    document.getElementById("bride").textContent = bride;
    document.getElementById("date").textContent = date;
    document.getElementById("time").textContent = time;
    document.getElementById("venue").textContent = venue;
    document.getElementById("mobile").textContent = mobile;
    document.getElementById("email").textContent = email;
    document.getElementById("img").textContent = img;
});