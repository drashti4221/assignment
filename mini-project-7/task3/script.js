function addPlaylistLink(linkObj) {

    let playlists = JSON.parse(localStorage.getItem("myPlaylists")) || [];

    playlists.push(linkObj);

    localStorage.setItem("myPlaylists", JSON.stringify(playlists));

    console.log("Playlist Added!");
    console.log(playlists);
}

addPlaylistLink({
    name: "My Songs",
    url: "https://music.youtube.com"
});