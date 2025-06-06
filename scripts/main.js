import { guestHTML } from "./guestList.js"



const mainContainer = document.querySelector("#container")

const applicationHTML = `
<h1>Cider Falls River Trails</h1>
<article class="details">
        <section class="detail--column list details__">
        <h1>Guest List</h1>
        ${guestHTML()}
        </section>
        <section class="detail--column list details__">
        
        </section>

    </article>
    `

    mainContainer.innerHTML = applicationHTML