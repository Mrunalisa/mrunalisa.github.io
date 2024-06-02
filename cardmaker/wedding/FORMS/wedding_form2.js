document.addEventListener("DOMContentLoaded", function() {
    // Get query parameters from URL
    const urlParams = new URLSearchParams(window.location.search);

    // Get recipient name, date, time, and location from query parameters
    const groom = decodeURIComponent(urlParams.get('groom'));
    const bride = decodeURIComponent(urlParams.get('bride'));

    const groomparent = decodeURIComponent(urlParams.get('groomparent'));
    const brideparent = decodeURIComponent(urlParams.get('brideparent'));

    const dateoffirstmeet = decodeURIComponent(urlParams.get('dateoffirstmeet'));
    const messageoffirstmeet = decodeURIComponent(urlParams.get('messageoffirstmeet'));

    const dateoffirstdate = decodeURIComponent(urlParams.get('dateoffirstdate'));
    const messageoffirstdate = decodeURIComponent(urlParams.get('messageoffirstdate'));

    const dateofproposal = decodeURIComponent(urlParams.get('dateofproposal'));
    const messageofproposal = decodeURIComponent(urlParams.get('messageofproposal'));

    const dateofengagement = decodeURIComponent(urlParams.get('dateofengagement'));
    const messageofengagement = decodeURIComponent(urlParams.get('messageofengagement'));

    const address_wedding = decodeURIComponent(urlParams.get('address_wedding'));
    const dateofwedding = decodeURIComponent(urlParams.get('dateofwedding'));
    const timeofwedding = decodeURIComponent(urlParams.get('timeofwedding'));

    const address_reception = decodeURIComponent(urlParams.get('address_reception'));
    const dateofreception = decodeURIComponent(urlParams.get('dateofreception'));
    const timeofreception = decodeURIComponent(urlParams.get('timeofreception'));

    // Update content dynamically
    document.getElementById("groom").textContent = groom;
    document.getElementById("bride").textContent = bride;

    document.getElementById("groomparent").textContent = groomparent;
    document.getElementById("brideparent").textContent = brideparent;

    document.getElementById("dateoffirstmeet").textContent = dateoffirstmeet;
    document.getElementById("messageoffirstmeet").textContent = messageoffirstmeet;

    document.getElementById("dateoffirstdate").textContent = dateoffirstdate;
    document.getElementById("messageoffirstdate").textContent = messageoffirstdate;

    document.getElementById("dateofproposal").textContent = dateofproposal;
    document.getElementById("messageofproposal").textContent = messageofproposal;

    document.getElementById("dateofengagement").textContent = dateofengagement;
    document.getElementById("messageofengagement").textContent = messageofengagement;

    document.getElementById("address_wedding").textContent = address_wedding;
    document.getElementById("dateofwedding").textContent = dateofwedding;
    document.getElementById("timeofwedding").textContent = timeofwedding;

    document.getElementById("address_reception").textContent = address_reception;
    document.getElementById("dateofreception").textContent = dateofreception;
    document.getElementById("timeofreception").textContent = timeofreception;
    
});