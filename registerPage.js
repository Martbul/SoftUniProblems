import { showCatalog } from "./catalogPage.js";
import { UserReadableError } from "./services/userReadableError.js";
import * as userService from "./services/usersService.js"


let _domElement = undefined;
export async function showRegister(domElement) {
    _domElement = domElement;
    domElement.innerHTML = '';
    domElement.innerHTML = `<article id="register">
    <h2>Register</h2>
    <form>
        <label>E-mail: <input type="text" name="email"></label>
        <label>Password: <input type="password" name="password"></label>
        <label>Repeat: <input type="password" name="rePass"></label>
        <input type="submit" value="Register">
    </form>
</article>`;

    let form = domElement.querySelector('form');
    form.addEventListener('submit', register);
}

async function register(e) {
    e.preventDefault();
    let form = e.target;
    let formData = new FormData(form);

    let rePass = formData.get('rePass');
    let password = formData.get('password');

    //Validate values are not empty
    if (password !== rePass) {
        return alert('The passwords need to match');
    }


    let user ={
        email: formData.get('email'),
        password: formData.get('password')
    }


    try{
        let result = await userService.register(user)
        showCatalog()
       
   }catch(e){
       if(e instanceof UserReadableError){
           alert(e.message);
       }
   }

}


