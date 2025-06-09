// Import HTML generation functions from modules
import { guestHTML } from "./guestList.js";
import { serviceHTML } from "./servicesList.js";
import { parkHTML } from "./parkAreas.js";

// Initialize the page by populating all dynamic content
// Render services list at the top of the park areas section
document.getElementById("services-list").innerHTML = serviceHTML();

// Render the grid of park areas with their features and services
document.getElementById("areas-grid").innerHTML = parkHTML();

// Render the list of current guests in the sidebar
document.getElementById("guests-list").innerHTML = guestHTML();