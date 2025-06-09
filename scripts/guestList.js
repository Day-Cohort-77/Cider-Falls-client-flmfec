// Import guest data from database module
import { getGuests } from "./database.js";
import { getParkAreas } from "./database.js";

const guests = getGuests();

// Generate HTML for the guest list
export const guestHTML = () => {
    const guests = getGuests();
    const parks = getParkAreas();

    let html = "";
    for (const guest of guests) {
        // Find the park name for this guest
        const park = parks.find(p => p.id === guest.parkId);
        const parkName = park ? park.name : "Unknown Park";
        html += `<li class="guest" data-id="${guest.id}">${guest.name} (${parkName})</li>`;
    }
    return html;
};

// Handle guest clicks - for instance, to possibly display guest details
document.addEventListener("click", (event) => {
    if (event.target.className === "guest") {
        const guestId = parseInt(event.target.dataset.id);
        const guests = getGuests();
        const guest = guests.find(g => g.id === guestId);
        if (guest) {
            // You can show any info here, for example:
            window.alert(`${guest.name} is currently visiting: ${ (getParkAreas().find(p => p.id === guest.parkId) || {}).name || "Unknown Park" }`);
        }
    }
});
