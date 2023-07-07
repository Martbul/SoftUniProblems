import { contacts } from "./contacts.js";
import {styleMap} from './node_modules/lit-html/directives/style-map.js'
import {repeat} from './node_modules/lit-html/directives/repeat.js';
import { html, render } from "./node_modules/lit-html/lit-html.js";

let main = document.getElementById('contacts')

let contactTemplate = (contact, detailsHandler) => {
    let styles = {'background-color':'blue', padding:'10px'}
    return html`
<div class="contact card">
<div>
    <i class="far fa-user-circle gravatar"></i>
</div>
<div class="info">
    <h2 >Name: ${contact.name}</h2>
    <button class="detailsBtn" @click=${(e) => detailsHandler(e,contact.name)}>Details</button>
    <div class="details" id="${contact.id}">
        <p>Phone number: ${contact.phoneNumber}</p>
        <p>Email: ${contact.email}</p>
    </div>
</div>
</div>
`;
}

let contactsTemplate = (contacts, detailsHandler) => html`

<main>
    ${      contacts.length > 0
         ? repeat (contacts,(c => c.id) , (c, index) => contactsTemplate(c))
            : html`<div>No Content </div >`
        }
    }

</main>
`
    render(contactsTemplate(contacts, detailsHandler), main)


    function detailsHandler(e, name){
        console.log(name)
        let element = e.target
        let details = element.parentElement.querySelector('.details')
        details.classList.toggle('hiden')
    }