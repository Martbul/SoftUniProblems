
//-login (login action) => login page
// -register (register action) => register page

import { homePage } from "./home.js";
import { loginPage } from "./login.js";
import { registerPage } from "./register.js";
import { updateNavBar } from "./utils.js";
import {logout} from  "./logout.js";
// -
const routes = {
    '/':homePage,
    '/login': loginPage,
    '/register': registerPage,
    '/logout': logout,
}
document.querySelector('nav').addEventListener('click', onNavigate);

function onNavigate(e) {
if(e.target.tagName === 'A' && e.target.href){

    e.preventDefault();

    

    const url = new URL(e.target.href)
    const view = routes[url.pathname]

    view()
}
}

updateNavBar()
homePage()