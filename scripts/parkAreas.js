import { getParkAreas } from "./database.js"; 

const park = getParkAreas();

export const parkHTML = () => {
    let html = "<ul>";

    for (const area of park) {
        html += `<li>${area.name}</li>`;
    }

    html += "</ul>";
    return html;
}