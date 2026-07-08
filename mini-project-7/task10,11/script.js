let playlists = [
    {
        name: "Spotify Playlist",
        url: "https://spotify.com"
    }
];

localStorage.setItem("myPlaylists", JSON.stringify(playlists));

function manageLink(linkObj, mode, index = null) {

    let playlists = JSON.parse(localStorage.getItem("myPlaylists")) || [];

    if (mode === "add") {
        playlists.push(linkObj);
    }

    else if (mode === "edit") {
        playlists[index] = linkObj;
    }

    localStorage.setItem("myPlaylists", JSON.stringify(playlists));

    console.log(playlists);
}

manageLink(
    {
        name: "YouTube Playlist",
        url: "https://youtube.com"
    },
    "add"
);

manageLink(
    {
        name: "Updated Spotify",
        url: "https://open.spotify.com"
    },
    "edit",
    0
);