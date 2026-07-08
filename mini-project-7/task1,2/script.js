function addPlaylistLink(linkObj) {

    // Get existing links from LocalStorage
    let links = JSON.parse(localStorage.getItem("myLinks")) || [];

    // Add new playlist link
    links.push(linkObj);

    // Save updated array back to LocalStorage
    localStorage.setItem("myLinks", JSON.stringify(links));

    // Show output in Console
    console.log("Playlist Added Successfully!");
    console.log(links);
}

// Function Call
addPlaylistLink({
    name: "Spotify Playlist",
    url: "https://open.spotify.com/playlist/123"
});