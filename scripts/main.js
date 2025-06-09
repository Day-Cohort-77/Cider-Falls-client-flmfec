import { guestHTML } from "./guestList.js";
import { serviceHTML } from "./servicesList.js";
import { parkHTML } from "./parkAreas.js";

// Render services above the park grid
document.getElementById("services-list").innerHTML = serviceHTML();

// Render park areas in the grid
document.getElementById("areas-grid").innerHTML = parkHTML();

// Render guests in the sidebar
document.getElementById("guests-list").innerHTML = guestHTML();