document.addEventListener("DOMContentLoaded", function() {
    // Get query parameters from URL
    const urlParams = new URLSearchParams(window.location.search);

    // Get groom and bride names from query parameters
    const groom = urlParams.get('groom');
    const bride = urlParams.get('bride');

    console.log("Groom:", groom);
    console.log("Bride:", bride);

    // Update content dynamically
    document.getElementById("groomName").textContent = groom;
    document.getElementById("brideName").textContent = bride;
});
