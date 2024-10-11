let submitContactForm = function(event) {
    event.preventDefault()

    let url = "https://docs.google.com/forms/d/e/1FAIpQLSfLROb3uVGDKawTIomeqHnT5sACd1GCsWaG_aURxVD0kRD7kw/formResponse";

    

    document.getElementById("date").value = new Date().toGMTString();

    fetch(url, {
        method: "POST",
        mode: "no-cors",
        body: new FormData(event.target)
    }).then(function () {
        document.getElementById("ContactFormButton").style.background = "aquamarine";
        document.getElementById("ContactFormButton").disabled = true;

        document.getElementById("name").value = ""
        document.getElementById("phone").value = ""
        document.getElementById("email").value = ""
        document.getElementById("project-details").value = ""
        document.getElementById("GDPR").checked = false

        setTimeout(function() {
            document.getElementById("ContactFormButton").style.background = "#fff";
            document.getElementById("ContactFormButton").disabled = false;
        }, 2000);

    }).catch(function () {
        console.log("error")
    })
}