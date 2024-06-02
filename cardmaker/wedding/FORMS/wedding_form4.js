document.addEventListener("DOMContentLoaded", function() {
    // Get query parameters from URL
    const urlParams = new URLSearchParams(window.location.search);

    // Get recipient name, date, time, and location from query parameters
    const groom = decodeURIComponent(urlParams.get('groom'));
    const bride = decodeURIComponent(urlParams.get('bride'));

    const address_HM = decodeURIComponent(urlParams.get('address_HM'));
    const date_HM = decodeURIComponent(urlParams.get('date_HM'));
    const time_HM = decodeURIComponent(urlParams.get('time_HM'));

    const address_wedding = decodeURIComponent(urlParams.get('address_wedding'));
    const date_wedding = decodeURIComponent(urlParams.get('date_wedding'));
    const time_wedding = decodeURIComponent(urlParams.get('time_wedding'));

    const address_reception = decodeURIComponent(urlParams.get('address_reception'));
    const date_reception = decodeURIComponent(urlParams.get('date_reception'));
    const time_reception = decodeURIComponent(urlParams.get('time_reception'));


    // Update content dynamically
    document.getElementById("groomname").textContent = groomname;
    document.getElementById("bridename").textContent = bridename;

    document.getElementById("address_HM").textContent = address_HM;
    document.getElementById("date_HM").textContent = date_HM;
    document.getElementById("time_HM").textContent = time_HM;

    document.getElementById("address_wedding").textContent = address_wedding;
    document.getElementById("date_wedding").textContent = date_wedding;
    document.getElementById("time_wedding").textContent = time_wedding;

    document.getElementById("address_reception").textContent = address_reception;
    document.getElementById("date_reception").textContent = date_reception;
    document.getElementById("time_reception").textContent = time_reception;
    
});