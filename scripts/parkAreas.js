// Import necessary functions from database module
import { getParkAreas, getGuests } from "./database.js"; 

const park = getParkAreas();

// Generate HTML for the park areas grid
export const parkHTML = () => {
    let html = "";
    // Create a list item for each park area with data attributes for interaction
    for (const area of park) {
        html += `<li class="park-card" data-type="park" data-id="${area.id}">${area.name}</li>`;
    }
    return html;
};

// Add click event listener to handle park area interactions
document.addEventListener(
    "click",
    (event) => {
        const parkClicked = event.target;
        // Check if clicked element is a park
        if (parkClicked.dataset.type === "park") {
            // Get the park ID from the clicked element
            const parkId = parkClicked.dataset.id;
            let guestCounter = 0;
            const whereGuests = getGuests();
            // Count guests currently in this park area
            for (const guest of whereGuests) {
                if(parseInt(parkId) === guest.parkId){
                    guestCounter++;
                }
            }
            // Display alert with guest count
            window.alert(`This park has ${guestCounter} enjoying its many amenities!`);
        }
    }
);