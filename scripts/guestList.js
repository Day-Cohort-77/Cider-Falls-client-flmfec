import { getGuests } from "./database.js";

const guests = getGuests();

export const guestHTML = () =>{
    let html = "";
    for (const guest of guests) {
        html += `<li class="guests">${guest.name}</li>`;
    }
    return html;
};