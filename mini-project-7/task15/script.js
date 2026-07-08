function validateLink() {

    let url = document.getElementById("playlistURL").value;
    let error = document.getElementById("errorMsg");

    if (
        url.startsWith("https://") &&
        (url.includes("spotify.com") || url.includes("youtube.com"))
    ) {
        error.innerHTML = "Valid Playlist URL";
        error.style.color = "green";
    } else {
        error.innerHTML = "Invalid Playlist URL";
        error.style.color = "red";
    }

}