document.addEventListener("DOMContentLoaded", function() {
    // Get query parameters from URL
    const urlParams = new URLSearchParams(window.location.search);

    // Get recipient name, date, time, and location from query parameters
    const groom = decodeURIComponent(urlParams.get('groom'));
    const bride = decodeURIComponent(urlParams.get('bride'));
    const day = decodeURIComponent(urlParams.get('day'));
    const date = decodeURIComponent(urlParams.get('date'));
    const time = decodeURIComponent(urlParams.get('time'));
    const venue = decodeURIComponent(urlParams.get('venue'));
    const img = decodeURIComponent(urlParams.get('img'));

    // Update content dynamically
    document.getElementById("groom").textContent = groom;
    document.getElementById("bride").textContent = bride;
    document.getElementById("date").textContent = date;
    document.getElementById("day").textContent = day;
    document.getElementById("time").textContent = time;
    document.getElementById("venue").textContent = venue;
    document.getElementById("img").textContent = img;
});