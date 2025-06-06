import { getServices } from "./database.js";

const services = getServices()

export const serviceHTML = () => {
    let html = ""

    html += "<ul>"

    for (const service of services) {
        html += `<li class="services">${service.activity}</li>`
    }
    html += "</ul>"
    return html
}