import { getServices, getParkAreas, getParkFeatures } from "./database.js";
const services = getServices()
// check parkAreas id against the parkFeatures join table to find the parkId////////
// check services id against the parkFeatures join table to find the serviceId//////
// if the all of the ids match, then alert the user of the service location
// figure out how to display multiple locations for the same service
// add event listener to the document so when a service is clicked, it will show the location of the service
document.addEventListener(
    "click",
    (event) => {
        if (event.target.dataset.type === "service") {
            const serviceId = parseInt(event.target.dataset.id)
            const areas = getParkAreas()
            const features = getParkFeatures()   
            const parkLocations = []
            const clickedService = services.find(service => service.id === serviceId)

            for(const area of areas) {
                for(const feature of features) {
                    if(area.id === feature.parkId) {
                        if(feature.serviceId === serviceId) {
                            parkLocations.push(area.name)
                        }
                    }
                }
            }
            
            if (parkLocations.length > 0) {
                window.alert(`${clickedService.activity} can be found in ${parkLocations.join(", ")}`)
            }
        }
    }
)

export const serviceHTML = () => {
    let html = ""

    html += "<ul>"

    for (const service of services) {
        html += `<li data-type="service" data-id="${service.id}">${service.activity}</li>`
    }
    html += "</ul>"
    return html
}