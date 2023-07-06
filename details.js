import { editPage } from "./edit.js";
import { showView } from "./utils.js";

const section =document.getElementById('movie-example')

export async function detailsPage(id){

    showView(section)
    const movie = await getMovie(id)

    section.replaceChildren(createMovieCard(movie))

}

function createMovieCard(movie) {
  const elem = document.createElement('div')
  elem.className = 'mcontainer';
  elem.innerHTML = `
    <div class="row bg-light text-dark">
        <h1>Movie title: ${movie.title}</h1>

        <div class="col-md-8">
            <img class="img-thumbnail" src="${movie.img}" alt="Movie">
            </div>
            <div class="col-md-4 text-center">
                <h3 class="my-3 ">Movie Description</h3>
                <p>${movie.description}</p>
                <a class="btn btn-warning" id=${movie._id} href="#">Edit</a>
                </div>
                </div>
                
  `;
    return elem
}


async function getMovie(id) {
    const res = await fetch(`http://localhost:3030/data/movies/${id}`)
    const movie = await res.json()

    return movie
}


section.addEventListener('click', onEdit)

function onEdit(e) {
e.preventDefault()
const currentMovieId = e.target.id

if(e.target.tagName === 'A'&& e.target.textContent == 'Edit'){
editPage(currentMovieId)
}
}