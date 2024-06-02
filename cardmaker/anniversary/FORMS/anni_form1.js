document.addEventListener("DOMContentLoaded", function() {
    // Get query parameters from URL
    const urlParams = new URLSearchParams(window.location.search);

    // Get recipient name, date, time, and location from query parameters
    const groom = decodeURIComponent(urlParams.get('groom'));
    const bride = decodeURIComponent(urlParams.get('bride'));
    const year = decodeURIComponent(urlParams.get('year'));
    const date = decodeURIComponent(urlParams.get('date'));
    const time = decodeURIComponent(urlParams.get('time'));
    const venue = decodeURIComponent(urlParams.get('venue'));
    const city = decodeURIComponent(urlParams.get('city'));
    const state = decodeURIComponent(urlParams.get('state'));
    const count = decodeURIComponent(urlParams.get('count'));
    const img = decodeURIComponent(urlParams.get('img'));

    // Update content dynamically
    document.getElementById("groom").textContent = groom;
    document.getElementById("bride").textContent = bride;
    document.getElementById("date").textContent = date;
    document.getElementById("year").textContent = year;
    document.getElementById("time").textContent = time;
    document.getElementById("venue").textContent = venue;
    document.getElementById("city").textContent = city;
    document.getElementById("state").textContent = state;
    document.getElementById("count").textContent = count;
    document.getElementById("img").textContent = img;
});