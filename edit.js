import { detailsPage } from "./details.js"
import { showView } from "./utils.js"

const section = document.getElementById('edit-movie')
const form = section.querySelector('form')

export async function editPage(id){
    showView(section)


    const res = await fetch(`http://localhost:3030/data/movies/${id}`)
    const movie = await res.json()

    section.querySelector('[name="title"]').value = movie.title;
    section.querySelector('[name="description"]').value = movie.description;
    section.querySelector('[name="img"]').value = movie.img;

form.setAttribute('id', id)

 form.addEventListener('submit', onEditMovie)


}

async function onEditMovie(e){
    e.preventDefault()

    const formData = new FormData(form)
    const title = formData.get('title')
    const description = formData.get('description')
    const img = formData.get('img')

    const movieId = e.target.id


    if(title !== ''&& description !== '' && img !== ''){
        const user = JSON.parse(sessionStorage.getItem('user'))
        try {
            const response = await fetch(`http://localhost:3030/data/movies/${movieId}`,{
                 method:'PUT',
                 headers: {'Content-Type': 'application/json',
                    'X-Authorization': user.accessToken
                },
                body:JSON.stringify({title,description,img})
            }
            )
           if(!response.ok){
            throw new Error(response.statusText)
           }

        }catch (err){
            console.log(err.message)
        }

        detailsPage(movieId);
    }
}