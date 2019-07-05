// Get content from: https://jsonplaceholder.typicode.com

// Get the tabs objects
var albumsTab = document.querySelector('.albums-tab');
var todosTab = document.querySelector('.todos-tab');
albumsTab

// Get the containers for the albums and todos
const albumsContainer = document.querySelector('.albums-container');
const todosContainer = document.querySelector('.todos-container');

// Prepend proxyurl to url to fix Access-Control-Allow-Origin access control check
const proxyUrl = 'https://cors-anywhere.herokuapp.com/';

albumsTab.addEventListener('click', function() {
  
  albumsTab.classList.add('active');
  todosTab.classList.remove('active');
  
  todosContainer.style.display = "none";
  albumsContainer.style.display = "flex";
  
  const albumsUrl = 'https://jsonplaceholder.typicode.com/albums';
  
  // Show all albums
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
});



todosTab.addEventListener('click', function() {
  
  todosTab.classList.add('active');
  albumsTab.classList.remove('active');
  
  albumsContainer.style.display = "none";
  todosContainer.style.display = "flex";
  
  const todosUrl = 'https://jsonplaceholder.typicode.com/todos';
  
  // Show all albums
  // function showAlbum(album) {
  //   var albumItemContainer = document.createElement('div');
  //   var albumItemTitle = document.createElement('h3');
  //   var albumItemUserID = document.createElement('p');
  //   var albumItemID = document.createElement('span');
  //   albumItemContainer.classList.add('album-item-container');
  //   albumItemTitle.classList.add('album-item-title');
  //   albumItemUserID.classList.add('album-item-userid');
  //   albumItemID.classList.add('album-item-id');
  //
  //   albumItemTitle.textContent = album.title;
  //   albumItemUserID.textContent = 'User ' + album.userId;
  //   albumItemID.textContent = album.id;
  //
  //   albumItemContainer.appendChild(albumItemTitle);
  //   albumItemContainer.appendChild(albumItemUserID);
  //   albumItemContainer.appendChild(albumItemID);
  //   albumsContainer.appendChild(albumItemContainer);
  // }
  //
  // fetch(proxyUrl + todosUrl)
  //   .then(function(response) {
  //     return response.json();
  //   })
  //   .then(function(todos) {
  //     todos.forEach(function(todo) {
  //       showTodo(todo);
  //     })
  //   })
  //   .catch(function(error) {
  //     console.log('error', error);
  //   });
});
