import { homePage } from "./home.js"
import { showView, updateNavBar } from "./utils.js"

const section = document.getElementById('form-login')

const form = section.querySelector('form')

form.addEventListener('submit', onSubmit)

export function loginPage(){

   showView(section)
}

async function onSubmit(e){

    e.preventDefault()

    const formData = new FormData(form)

    const email = formData.get('email')
    const password = formData.get('password')


    await login(email, password)

    form.reset
    updateNavBar()
    homePage()
}

async function login(email,password){
    
    try{
        const result = await fetch('http://localhost:3030/users/login',{
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({email,password})
        })

        if(!result.ok){
            throw new Error(res.statusText)
        }

        const user = await result.json()

        sessionStorage.setItem('user', JSON.stringify(user))
    }catch(err){
        alert(err.message)
    }
}
