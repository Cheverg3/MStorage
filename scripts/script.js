import { gallery } from "./gallery.js";

function compare_albums(album1, album2) {
    if (album1.artist.toLowerCase().localeCompare(album2.artist.toLowerCase()) != 0) {
        return album1.artist.toLowerCase().localeCompare(album2.artist.toLowerCase())
    }
    else {
        return album1.title.toLowerCase().localeCompare(album2.title.toLowerCase())
    }
};

gallery.sort(compare_albums);

for (let album of gallery) {
    let albumHtml = document.createElement('div');
    albumHtml.className = 'album';
    let imageHtml = document.createElement('img');
    imageHtml.className = 'album-cover';
    imageHtml.src = 'scripts/music/ilustraciones/' + album.image;
    let albumInfoHtml = document.createElement('div');
    albumInfoHtml.className = 'album-info';
    albumHtml.appendChild(imageHtml);
    albumHtml.appendChild(albumInfoHtml);
    let albumInfoArtistHtml = document.createElement('p');
    albumInfoArtistHtml.className = 'album-info-artist';
    let albumInfoTitleHtml = document.createElement('p');
    albumInfoTitleHtml.className = 'album-info-title';
    albumInfoHtml.appendChild(albumInfoArtistHtml);
    albumInfoHtml.appendChild(albumInfoTitleHtml);
    albumInfoArtistHtml.innerHTML = album.artist;
    albumInfoTitleHtml.innerHTML = album.title;
    document.getElementById("gallery").appendChild(albumHtml);
}

console.log(document.getElementsByTagName('img')[0].className);

