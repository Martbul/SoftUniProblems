import page from '../node_modules/page/page.mjs';
import {html ,render} from '../node_modules/lit-html/lit-html.js';
import { logout } from './api/auth.js';
import { getUserData } from './utils.js';
import { showHome } from './views/home.js';
import { showLogin } from './views/login.js';
import { showRegister } from './views/register.js';
import { showDashboard } from './views/dashboard.js';
import { showDetails } from './views/details.js';
import { showEdit } from './views/edit.js';
import { showCreate } from './views/create.js';


const navTemplate = (user) =>html`
  
<div>
            <a href="/dashboard">Fun Facts</a>
          </div>
            ${user 
                
                ?html`<!-- Logged-in users -->
          <div class="user">
            <a href="/create">Add Fact</a>
            <a href="#" @click=${onLogout}>Logout</a>
          </div>`
          
          :html` <!-- Guest users -->
          <div class="guest">
            <a href="/login">Login</a>
            <a href="/register">Register</a>`}
          

         
          </div>
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
page('/login', showLogin)
page('/register', showRegister)
page('/dashboard', showDashboard)
page('/details/:id', showDetails)
page('/edit/:id', showEdit)
page('/create', showCreate)

page.start()