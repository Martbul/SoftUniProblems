import { logout } from './api/auth.js';
import {html, render} from '../node_modules/lit-html/lit-html.js'
import page from '../node_modules/page/page.mjs'
import { showHome } from './views/home.js';
import { getUserData } from './utils.js';
import { showDashboard } from './views/dashboard.js';
import { showLogin } from './views/login.js';
import { showRegister } from './views/register.js';
import { showDetails } from './views/details.js';
import { showEdit } from './views/edit.js';
import { showCreate } from './views/create.js';



const navTemplate = (user) =>html`
       <section class="logo">
                <img src="./images/logo.png" alt="logo">
            </section>
            <ul>
                <!--Users and Guest-->
                <li><a href="/">Home</a></li>
                <li><a href="/dashboard">Dashboard</a></li>
                ${!user 
                  
                  ?html` <!--Only Guest-->
                <li><a href="/login">Login</a></li>
                <li><a href="/register">Register</a></li>`
                
                :html` <!--Only Users-->
                <li><a href="/create">Create Postcard</a></li>
                <li><a href="" @click=${onLogout}>Logout</a></li>`}
            </ul>
         

`

function updateNav(ctx, next) {
   render(navTemplate(ctx.user), document.querySelector('nav'))

   next();
}



function session(ctx, next) {
   const user = getUserData(ctx, next);
   

   if (user) {
       ctx.user = user
   }
   next()
}



function decorateContext(ctx, next) {
   ctx.render = function (content) {
       render(content, document.querySelector('main'))
   }

   next();
}

function onLogout(){
   logout()
}


page(session)
page(updateNav)
page(decorateContext)

page('/', showHome)
page('/dashboard', showDashboard)
page('/login', showLogin)
page('/register', showRegister)
page('/details/:id', showDetails)
page('/edit/:id', showEdit)
page('/create', showCreate)

page.start()