/**
 * Visar ett felmeddelande om staden inte hittas.
 * @author: Sanel
 * @param {string} message - Texten som ska visas i felmeddelandet.
 * @returns {void}
 */

export function showError(message) {
    const errorMessage = document.getElementById('error-message');
    const cityInput = document.getElementById('city-input');
    const weatherCard = document.getElementById('weather-card');  // För att rensa 


    errorMessage.textContent = message;
    errorMessage.classList.remove('hidden');

    cityInput.value = '';
    if (weatherCard) {
        weatherCard.style.display = 'none'; // Dölj väderkortet om det finns
    }
}

/**
 * Återställer vyn inför en ny sökning.
 */
export function clearError() {
    const errorMessage = document.getElementById('error-message');
    const weatherCard = document.getElementById('weather-card');  // För att visa igen

    errorMessage.classList.add('hidden');
    if (weatherCard) {
        weatherCard.style.display = 'block'; // Visa väderkortet igen när vi söker igen.
    }
}
