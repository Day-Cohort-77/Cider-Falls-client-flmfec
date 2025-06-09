// Import guest data from database module
import { getGuests } from "./database.js";

const guests = getGuests();

// Generate HTML for the guest list
export const guestHTML = () => {
    let html = "";
    // Create a list item for each guest
    for (const guest of guests) {
        html += `<li class="guests">${guest.name}</li>`;
    }
    return html;
};