// URL van de API
const apiUrl = "https://i558324.luna.fhict.nl/api/area/";

// Functie om data van de API op te halen
async function fetchAreas() {
    try {
        const response = await fetch(apiUrl); // Maak een fetch-verzoek naar de API
        if (!response.ok) {
            throw new Error(`HTTP-fout! status: ${response.status}`);
        }
        const data = await response.json(); // Zet de response om naar JSON
        displayAreas(data); // Roep de functie aan om de data weer te geven
    } catch (error) {
        console.error("Er is een fout opgetreden:", error);
    }
}

// Functie om data in de HTML te tonen
function displayAreas(areas) {
    const container = document.querySelector(".areas-container"); // Selecteer de container in HTML
    areas.forEach(area => {
        const div = document.createElement("div");
        div.className = "area";
        div.innerHTML = `<h3>${area.name}</h3><p>${area.description}</p>`;
        container.appendChild(div);
    });
}

// API-data ophalen zodra de pagina is geladen
document.addEventListener("DOMContentLoaded", fetchAreas);
