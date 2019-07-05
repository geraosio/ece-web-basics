//
// Constants
//

// Prepend proxyurl to url to fix Access-Control-Allow-Origin access control check
const proxyUrl = 'https://cors-anywhere.herokuapp.com/';

// URLs
const albumsUrl = 'https://jsonplaceholder.typicode.com/albums';
const todosUrl = 'https://jsonplaceholder.typicode.com/todos';

// Get the tabs objects to add event listeners
const albumsTab = document.querySelector('.albums-tab');
const todosTab = document.querySelector('.todos-tab');

// Get the containers for the albums and todos
// To add childs to them dynamically and to show or hide it's content
// depending on the tab selected.
const albumsContainer = document.querySelector('.albums-container');
const todosContainer = document.querySelector('.todos-container');





//
// Functions
//

function showAllAlbums(){
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
}

// Show all todos
function showAllTodos() {
  
  function showTodo(todo) {
    var todoItemContainer = document.createElement('div');
    var todoItemStatus = document.createElement('span');
    var todoItemTitle = document.createElement('span');
    var todoItemUserID = document.createElement('span');
    var todoItemID = document.createElement('span');
    todoItemContainer.classList.add('todo-item-container');
    todoItemStatus.classList.add('todo-item-status');
    todoItemTitle.classList.add('todo-item-title');
    todoItemUserID.classList.add('todo-item-userid');
    todoItemID.classList.add('todo-item-id');
    
    if (todo.completed == true) {
      todoItemStatus.textContent = "🔘";
    } else {
      todoItemStatus.textContent = "⚪️";
    }
    todoItemTitle.textContent = todo.title;
    todoItemUserID.textContent = 'From User ' + todo.userId;
    todoItemID.textContent = todo.id;
    
    todoItemContainer.appendChild(todoItemStatus);
    todoItemContainer.appendChild(todoItemTitle);
    todoItemContainer.appendChild(todoItemUserID);
    todoItemContainer.appendChild(todoItemID);
    todosContainer.appendChild(todoItemContainer);
  }

  fetch(proxyUrl + todosUrl)
    .then(function(response) {
      return response.json();
    })
    .then(function(todos) {
      todos.forEach(function(todo) {
        showTodo(todo);
      })
    })
    .catch(function(error) {
      console.log('error', error);
    });
}





//
// Script
//

// Start by showing all albums
showAllAlbums();

// Add event listener to the albums tab
albumsTab.addEventListener('click', function() {
  
  albumsTab.classList.add('active');
  todosTab.classList.remove('active');
  
  todosContainer.innerHTML = "";
  // albumsContainer.style.display = "flex";
  
  showAllAlbums();
});

// Add event listener to the todos tab
todosTab.addEventListener('click', function() {
  
  todosTab.classList.add('active');
  albumsTab.classList.remove('active');
  
  albumsContainer.innerHTML = "";
  // todosContainer.style.display = "flex";
  
  showAllTodos();
});
