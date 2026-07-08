let playlists = [
    {
        name: "My Songs",
        url: "https://music.youtube.com"
    },
    {
        name: "Spotify Hits",
        url: "https://spotify.com"
    }
];

// Save sample data
localStorage.setItem("myPlaylists", JSON.stringify(playlists));

function editPlaylistLink(index, newLinkObj) {

    let playlists = JSON.parse(localStorage.getItem("myPlaylists")) || [];

    playlists[index] = newLinkObj;

    localStorage.setItem("myPlaylists", JSON.stringify(playlists));

    console.log(playlists);
}

// Update first playlist
editPlaylistLink(0, {
    name: "Updated Playlist",
    url: "https://open.spotify.com"
});