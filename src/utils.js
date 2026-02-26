import { getWeatherForecast } from "./api.js";
import { renderWeeklyForecast } from "./ui.js";

export async function handleSearch() {
    const city = document.querySelector(".search-bar").value.trim();
    if (!city) return;

    try {
        const data = await getWeatherForecast(city);

        // Uppdatera stadens namn
        document.querySelector(".card-location").textContent = data.location.name;
        document.querySelector(".header-left span").textContent = data.location.name;

        // Uppdatera temperaturen
        const current = data.current;
        document.querySelector(".temperature").textContent = Math.round(current.temp_c) + "°";
        document.querySelector(".feels-like").textContent = `Feels like ${Math.round(current.feelslike_c)}°`;
        document.querySelector(".condition").textContent = current.condition.text;

        // Rendera 7-dagarsprognosen
        renderWeeklyForecast(data.forecast.forecastday);

    } catch (error) {
        console.error("Fel vid sökning:", error);
    }
}