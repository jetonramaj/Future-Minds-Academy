const myMovies = document.querySelector("#myMovies");
const main = document.querySelector('main');

for(let i=0; i<allMovies.length; i++){
    myMovies.innerHTML += `
    <div onclick="loadMovie(${i})">
        <span>${allMovies[i].year}</span>
        <h3>${allMovies[i].title}</h3>
        <p>${allMovies[i].description}</p>
    </div>
`;
}

function loadMovie(i){

    main.innerHTML = ` <h4>${allMovies[i].year}</h4>
        <h2>${allMovies[i].title}</h2>
        <p>${allMovies[i].description}</p>
        ${allMovies[i].trailer}
   
`
   }