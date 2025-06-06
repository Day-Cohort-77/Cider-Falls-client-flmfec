import { getGuests } from "./database.js";

const guests = getGuests()

export const guestHTML = () =>{
    let html = ""

    html += "<ul>"

    for (const guest of guests) {
        html += `<li class="guests">${guest.name}</li>`
    }
    html += "</ul>"
    return html
}