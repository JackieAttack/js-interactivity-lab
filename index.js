console.log('hello world')

const message = document.querySelector('#message');


//Step 2
function addMovie(event) {
    event.preventDefault();
    let inputField = document.querySelector("#movie-box");
    let movie = document.createElement('li');
    let movieTitle = document.createElement('span');
    movieTitle.textContent = inputField.value;

    //cross off movie
    movieTitle.addEventListener("click", crossOffMovie);

    movie.appendChild(movieTitle);

    //Delete Button
    let deleteBtn = document.createElement('button');
    deleteBtn.textContent = "X";
    deleteBtn.addEventListener("click", deleteMovie);
    movie.appendChild(deleteBtn);

    document.querySelector('ul').appendChild(movie);
    inputField.value = "";
}

function deleteMovie(event) {
    event.target.parentNode.remove();
    message.textContent = "Movie deleted!";
}

function crossOffMovie(event) {
    event.target.classList.toggle('checked');
    if(event.target.classList.contains("checked")) {
        message.textContent = "Movie watched!";
    } else {
        message.textContent = "Movie added back!";
    }
}

let form = document.querySelector('form');

form.addEventListener("submit", addMovie);

