// Get content from: https://jsonplaceholder.typicode.com

// Prepend proxyurl to url to fix Access-Control-Allow-Origin access control check
const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
const albumsUrl = 'https://jsonplaceholder.typicode.com/albums';
const todosUrl = 'https://jsonplaceholder.typicode.com/todos';

if (true) {
  
}

// Show all albums
const albumsContainer = document.querySelector('.albums-container');

function showAlbum(album) {
  var albumItemContainer = document.createElement('div');
  var albumItemTitle = document.createElement('h3');
  var albumItemUserID = document.createElement('p');
  var albumItemID = document.createElement('span');
  albumItemContainer.classList.add('album-item-container');
  albumItemTitle.classList.add('album-item-title');
  albumItemUserID.classList.add('album-item-userid');
  albumItemID.classList.add('album-item-id');
  
  albumItemTitle.textContent = album.title;
  albumItemUserID.textContent = 'User ' + album.userId;
  albumItemID.textContent = album.id;
  
  albumItemContainer.appendChild(albumItemTitle);
  albumItemContainer.appendChild(albumItemUserID);
  albumItemContainer.appendChild(albumItemID);
  albumsContainer.appendChild(albumItemContainer);
}

fetch(proxyUrl + albumsUrl)
  .then(function(response) {
    return response.json();
  })
  .then(function(albums) {
    albums.forEach(function(album) {
      showAlbum(album);
    })
  })
  .catch(function(error) {
    console.log('error', error);
  });
