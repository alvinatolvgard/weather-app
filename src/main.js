import { handleSearch } from "./utils.js";

// Lyssna på Enter-knapptryck - Alvina
document.querySelector(".search-bar").addEventListener("keydown", async(event) => {
    if (event.key === "Enter") {
        await handleSearch();
    }
});

import { showError, clearError } from "./ui.js";

const searchBtn = document.getElementById("search-btn");
const cityInput = document.getElementById("city-input");

// Lyssna på klick på förstoringsglaset - Sanel
document.getElementById("search-btn").addEventListener("click", async () => {
    await handleSearch();
});

// Funktion för felhantering - Sanel
async function handleSearch() {
    const city = cityInput.value.trim();
    clearError();

if (!city) {
    showError("Vänligen skriv in ett stadsnamn.");
    return;
}

try {

    // HÄR SKA VI ANROPA API:ET OCH HÄMTA VÄDERDATA! Och även lägga till om API:et inte hittar staden. - Sanel

} catch (error) {
    showError("Kunde inte hämta väderdata. Kontrollera stavningen.");
}
}