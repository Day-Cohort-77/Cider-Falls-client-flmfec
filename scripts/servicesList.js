// Import necessary functions from database module
import { getServices, getParkAreas, getParkFeatures } from "./database.js";
const services = getServices();

// Add click event listener to handle services interactions
document.addEventListener(
    "click",
    (event) => {
        // Check if clicked element is a service
        if (event.target.dataset.type === "service") {
            // Get the service ID from the clicked element
            const serviceId = parseInt(event.target.dataset.id);
            const areas = getParkAreas();
            const features = getParkFeatures();
            const parkLocations = [];
            // Find the clicked service object
            const clickedService = services.find(service => service.id === serviceId);

            // Find all park areas that offer this service
            for(const area of areas) {
                for(const feature of features) {
                    if(area.id === feature.parkId && feature.serviceId === serviceId) {
                        parkLocations.push(area.name);
                    }
                }
            }
            
            // Display alert with service locations if any found
            if (parkLocations.length > 0) {
                window.alert(`${clickedService.activity} can be found in ${parkLocations.join(", ")}`);
            }
        }
    }
);

// Generate HTML for the services list
export const serviceHTML = () => {
    let html = "";
    // Create a list item for each service with data attributes for interaction
    for (const service of services) {
        html += `<li class="services" data-type="service" data-id="${service.id}">${service.activity}</li>`;
    }
    return html;
};