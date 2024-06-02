document.addEventListener("DOMContentLoaded", function() {
    // Get query parameters from URL
    const urlParams = new URLSearchParams(window.location.search);

    // Get recipient name, date, time, and location from query parameters
    const groom = decodeURIComponent(urlParams.get('groom'));
    const bride = decodeURIComponent(urlParams.get('bride'));

    const address_mehandi = decodeURIComponent(urlParams.get('address_mehandi'));
    const date_mehandi = decodeURIComponent(urlParams.get('date_mehandi'));
    const time_mehandi = decodeURIComponent(urlParams.get('time_mehandi'));

    const address_sangeet = decodeURIComponent(urlParams.get('address_sangeet'));
    const date_sangeet = decodeURIComponent(urlParams.get('date_sangeet'));
    const time_sangeet = decodeURIComponent(urlParams.get('time_sangeet'));

    const address_haldi = decodeURIComponent(urlParams.get('address_haldi'));
    const date_haldi = decodeURIComponent(urlParams.get('date_haldi'));
    const time_haldi = decodeURIComponent(urlParams.get('time_haldi'));

    const address_wedding = decodeURIComponent(urlParams.get('address_wedding'));
    const date_wedding = decodeURIComponent(urlParams.get('date_wedding'));
    const time_wedding = decodeURIComponent(urlParams.get('time_wedding'));

    const address_reception = decodeURIComponent(urlParams.get('address_reception'));
    const date_reception = decodeURIComponent(urlParams.get('date_reception'));
    const time_reception = decodeURIComponent(urlParams.get('time_reception'));

    const groom_dad = decodeURIComponent(urlParams.get('groom_dad'));
    const groom_mom = decodeURIComponent(urlParams.get('groom_mom'));
    const groom_sis = decodeURIComponent(urlParams.get('groom_sis'));
    const groom_bro = decodeURIComponent(urlParams.get('groom_bro'));

    const bride_dad = decodeURIComponent(urlParams.get('bride_dad'));
    const bride_mom = decodeURIComponent(urlParams.get('bride_mom'));
    const bride_bro = decodeURIComponent(urlParams.get('bride_bro'));
    const bride_sis = decodeURIComponent(urlParams.get('bride_sis'));

    // Update content dynamically
    document.getElementById("groomname").textContent = groomname;
    document.getElementById("bridename").textContent = bridename;

    document.getElementById("address_mehandi").textContent = address_mehandi;
    document.getElementById("date_mehandi").textContent = date_mehandi;
    document.getElementById("time_mehandi").textContent = time_mehandi;

    document.getElementById("address_sangeet").textContent = address_sangeet;
    document.getElementById("date_sangeet").textContent = date_sangeet;
    document.getElementById("time_sangeet").textContent = time_sangeet;

    document.getElementById("address_haldi").textContent = address_haldi;
    document.getElementById("date_haldi").textContent = date_haldi;
    document.getElementById("time_haldi").textContent = time_haldi;

    document.getElementById("address_wedding").textContent = address_wedding;
    document.getElementById("date_wedding").textContent = date_wedding;
    document.getElementById("time_wedding").textContent = time_wedding;

    document.getElementById("address_reception").textContent = address_reception;
    document.getElementById("date_reception").textContent = date_reception;
    document.getElementById("time_reception").textContent = time_reception;

    document.getElementById("groom_dad").textContent = groom_dad;
    document.getElementById("groom_mom").textContent = groom_mom;
    document.getElementById("groom_sis").textContent = groom_sis;
    document.getElementById("groom_bro").textContent = groom_bro;

    document.getElementById("bride_dad").textContent = bride_dad;
    document.getElementById("bride_mom").textContent = bride_mom;
    document.getElementById("bride_bro").textContent = bride_bro;
    document.getElementById("bride_sis").textContent = bride_sis;
    
});