import { getGuests, getParkAreas } from "./database.js"; 

const park = getParkAreas();

export const parkHTML = () => {
    let html = "<ul>";

    for (const area of park) {
        html += ` <li data-type="park" data-id="${area.id}"> ${area.name} </li>`;
    }

    html += "</ul>";
    return html;
}

document.addEventListener(
    "click",
    (event) => {
        const parkClicked = event.target
        if (parkClicked.dataset.type === "park") {
            const parkId = parkClicked.dataset.id
            let guestCounter = 0
            const whereGuests = getGuests()
            for (const guest of whereGuests) {
                if(parseInt(parkId) === guest.parkId){
                    guestCounter++
                }
            }
            window.alert(`This park has ${guestCounter} enjoying it's many amenities!`)
        }
    }
)
