import { getServices, getParkAreas, getParkFeatures } from "./database.js";
const services = getServices();

document.addEventListener(
    "click",
    (event) => {
        if (event.target.dataset.type === "service") {
            const serviceId = parseInt(event.target.dataset.id);
            const areas = getParkAreas();
            const features = getParkFeatures();
            const parkLocations = [];
            const clickedService = services.find(service => service.id === serviceId);

            for(const area of areas) {
                for(const feature of features) {
                    if(area.id === feature.parkId && feature.serviceId === serviceId) {
                        parkLocations.push(area.name);
                    }
                }
            }
            
            if (parkLocations.length > 0) {
                window.alert(`${clickedService.activity} can be found in ${parkLocations.join(", ")}`);
            }
        }
    }
);

export const serviceHTML = () => {
    let html = "";
    for (const service of services) {
        html += `<li class="service-badge" data-type="service" data-id="${service.id}">${service.activity}</li>`;
    }
    return html;
};