
const app = document.getElementById('root');

//const logo = document.createElement('img');
//logo.src = 'logo.png';

const container = document.createElement('div');
container.setAttribute('class', 'container');

//app.appendChild(logo);
app.appendChild(container);

// Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest();

// Open a new connection, using the GET request on the URL endpoint
//request.open('GET', 'https://ghibliapi.herokuapp.com/films', true);
request.open('GET', 'https://api.themoviedb.org/3/discover/movie?api_key=1b62ccff88d2cd537027e1d82920197b&sort_by=popularity.desc', true);

request.onload = function () {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response);

  if (request.status >= 200 && request.status < 400) {
    
    data.results.forEach(movie => {

      // Create a div with a card class
      const card = document.createElement('div');
      card.setAttribute('class', 'card');
      console.log('https://image.tmdb.org/t/p/w342'+ movie.poster_path);
      //card.setAttribute("style", "background-image: url(" + 'https://image.tmdb.org/t/p/w342'+ movie.poster_path+ ");background-repeat: no-repeat;");

      // Create a img within a card class
      const poster = document.createElement('img');
      poster.src ='https://image.tmdb.org/t/p/w342'+ movie.poster_path;  

      // Create an h1 and set the text content to the film's title
      const h1 = document.createElement('h1');
      h1.textContent = movie.title;

      // Create a p and set the text content to the film's description
      const p = document.createElement('p');
      movie.overview = movie.overview.substring(0, 300); // Limit to 300 chars
      p.textContent = `${movie.overview}...`; // End with an ellipses

      // Append the cards to the container element
      container.appendChild(card);

      // Each card will contain an img, h1 and a p
      card.appendChild(h1);
      card.appendChild(p);
      card.appendChild(poster);

      // console.log("Title :" + movie.title);
      // console.log("Description :" + movie.description);
    });
  } else {
    console.log('error');
  }
}

// Send request
request.send();