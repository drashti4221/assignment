let playlists = [
    {
        name: "Spotify Playlist",
        url: "https://spotify.com"
    },
    {
        name: "YouTube Playlist",
        url: "https://youtube.com"
    }
];

// Save data in LocalStorage
localStorage.setItem("myPlaylists", JSON.stringify(playlists));

// Delete Function
function deletePlaylistLink(index) {

    let playlists = JSON.parse(localStorage.getItem("myPlaylists")) || [];

    playlists.splice(index, 1);

    localStorage.setItem("myPlaylists", JSON.stringify(playlists));

    console.log("Updated Playlists:");
    console.log(playlists);
}

// Delete first playlist
deletePlaylistLink(0);