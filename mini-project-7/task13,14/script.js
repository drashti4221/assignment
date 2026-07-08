function checkInstagramURL() {

    let url = document.getElementById("instagramURL").value;

    let error = document.getElementById("errorMsg");

    if (
        url.startsWith("https://www.instagram.com/")
    ) {
        error.innerHTML = "";
    } else {
        error.innerHTML = "Please enter a valid Instagram profile URL.";
    }

}