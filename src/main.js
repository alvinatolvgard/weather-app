import { getWeatherForecast, getWeatherByCoords } from "./api.js";
import {
  renderWeeklyForecast,
  renderCurrentWeather,
  renderAirQuality,
  renderWeatherDetails,
  displayCurrentDate,
  renderHourlyForecast,
} from "./ui.js";
import { getFavorites, saveFavorite, removeFavorite, getRecentSearches, saveRecentSearch } from "./storage.js"; // Lagt till get och save - Albrim

const DEFAULT_CITY = "Gothenburg";

// Håller koll på om geolocation redan jobbar - Maryam
let geolocationStarted = false;

let currentActiveCity = ""; // Sanel

// Lyssna på Enter-knapptryck - Alvina
document
  .querySelector(".search-bar")
  .addEventListener("keydown", async (event) => {
    if (event.key === "Enter") {
      const city = event.target.value;
      if (city) {
        await loadWeather(city);
        event.target.value = "";
        document.getElementById("search-dropdown").classList.add("hidden"); // Albrim
      }
    }
  });

// Visar aktuellt datum i headern - Alvina
displayCurrentDate();

/**
 *  Lyssna på klick på förstoringsglaset
 * @author Sanel
 */
document.getElementById("search-btn").addEventListener("click", async () => {
  const city = document.getElementById("city-input").value;
  if (city) {
    await loadWeather(city);
    document.getElementById("city-input").value = "";
  }
});

/**
 * Hämtar väderdata för en stad och uppdaterar hela sidan
 * @author Maryam & Ivana
 * @param {String} city - Stadens namn
 * @returns {Promise<void>}
 */
async function loadWeather(city) {
  try {
    const weatherData = await getWeatherForecast(city);

    saveRecentSearch(city); // Albrim

    const currentWeather = weatherData.current;
    const location = weatherData.location;
    currentActiveCity = location.name; // Sanel
    const forecastDays = weatherData.forecast.forecastday;
    const todayForecast = forecastDays[0];
    const hourlyData = todayForecast.hour; // Vi visar alla 24 timmar för idag!

    // Uppdatera alla delar av UI:t
    renderCurrentWeather(currentWeather, location);
    renderAirQuality(currentWeather.air_quality);
    renderWeatherDetails(currentWeather, todayForecast);
    renderWeeklyForecast(forecastDays);
    renderHourlyForecast(hourlyData); // <-- Anropar med 24 timmar för idag
    updateStarState(currentActiveCity); // Sanel

    // Uppdatera datum
    const date = new Date(location.localtime);
    document.querySelector(".date").textContent = date.toLocaleDateString(
      "en-US",
      {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      },
    );
  } catch (error) {
    console.error("Error fetching weather data:", error);
    alert("Could not fetch weather data. Please try again later.");
  }
}
/**
 * Hämtar användarens position och laddar vädret för den platsen
 * @author Maryam & Ivana
 * @returns {void}
 */
async function loadWeatherByLocation() {
  // Rensar hårdkodade värden medan plats och väderdata hämtas - Alvina
  document.querySelector(".temperature").textContent = "-";
  document.querySelector(".card-location").textContent = "Fetching location...";
  document.querySelector(".header-left span").textContent =
    "Fetching location...";
  document.querySelector(".feels-like").textContent = "-";
  document.querySelector(".condition").textContent = "-";
  document.querySelector(".condition-detail").textContent = "-";
  document.querySelectorAll(".hour").forEach((el) => (el.textContent = "-"));
  document.querySelectorAll(".temp").forEach((el) => (el.textContent = "-"));
  document.querySelectorAll(".precip").forEach((el) => (el.textContent = "-"));
  document.querySelector(".aq-value").textContent = "-";
  document.querySelector(".aq-label").textContent = "-";
  document
    .querySelectorAll(".aq-metric-value")
    .forEach((el) => (el.textContent = "-"));
  document
    .querySelectorAll(".card-value")
    .forEach((el) => (el.textContent = "-"));

  // Kontrollerar först att webbläsaren stödjer geolocation
  if (!navigator.geolocation) {
    console.error("Browser does not support geolocation");
    loadWeather(DEFAULT_CITY); // Visar i så fall defaultstaden
    return;
  }

  geolocationStarted = true;

  // Frågar användaren om tillstånd att använda platsen
  navigator.geolocation.getCurrentPosition(
    // Om användaren godkänner
    async (position) => {
      try {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        const weatherData = await getWeatherByCoords(lat, lon);

        const currentWeather = weatherData.current;
        const location = weatherData.location;
        saveRecentSearch(location.name); // Albrim
        currentActiveCity = location.name; // Sanel
        updateStarState(currentActiveCity); // Sanel
        const forecastDays = weatherData.forecast.forecastday;
        const todayForecast = forecastDays[0];
        const hourlyData = todayForecast.hour; // Timdata för användarens plats

        renderCurrentWeather(currentWeather, location);
        renderAirQuality(currentWeather.air_quality);
        renderWeatherDetails(currentWeather, todayForecast);
        renderWeeklyForecast(forecastDays);
        renderHourlyForecast(hourlyData); // <-- NY!
      } catch (error) {
        console.error("Could not get location", error);
        loadWeather(DEFAULT_CITY); // Faller tillbaka på default om något går fel
      }
    },
    // Om användaren nekar eller något går fel med geolocation
    (error) => {
      console.error("Could not get location", error);
      loadWeather(DEFAULT_CITY);
    },
  );
}

// Skriver över med användarens plats när geolocation svarar
loadWeatherByLocation();

// Kör bara default om geolocation inte startade
if (!geolocationStarted) {
  loadWeather(DEFAULT_CITY);
}

/**
 * Ändrar stjärnans utseende beroende på om staden är en favorit.
 * @author Sanel
 */
function updateStarState(city) {
  const favStar = document.getElementById("fav-star");
  if (!favStar) return;

  const favorites = getFavorites();
  if (favorites.includes(city)) {
    favStar.className = "fa-solid fa-star";
  } else {
    favStar.className = "fa-regular fa-star";
  }
}

/**
 * Klick, sparar/tarbort favoriter
 * @author Sanel
 */
document.addEventListener("click", (event) => {
  if (event.target && event.target.id === "fav-star") {
    if (!currentActiveCity) return;

    const favorites = getFavorites();

    if (favorites.includes(currentActiveCity)) {
      removeFavorite(currentActiveCity);
    } else {
      saveFavorite(currentActiveCity);
    }

    updateStarState(currentActiveCity);
  }
});

/** Här börjar Albrims kod */

const cityInputEl = document.getElementById("city-input");
const dropdownEl = document.getElementById("search-dropdown");

function updateDropdown() {
  const recentList = document.getElementById("recent-list");
  const favList = document.getElementById("favorites-list");
  const favSection = document.getElementById("favorites-section");
  const recentSection = document.getElementById("recent-section");

  const favorites = getFavorites();
  const recents = getRecentSearches();

  recentList.innerHTML = "";
  favList.innerHTML = "";

  // Favoriter - Nu utan hjärt-ikonen!
  if (favorites.length === 0) {
    favSection.style.display = "none";
  } else {
    favSection.style.display = "block";
    favorites.forEach(city => {
      const li = document.createElement("li");
      li.textContent = city;
      li.onclick = () => {
        loadWeather(city);
        dropdownEl.classList.add("hidden");
      };
      favList.appendChild(li);
    });
  }

  // Senast sökta
  if (recents.length === 0) {
    recentSection.style.display = "none";
  } else {
    recentSection.style.display = "block";
    recents.forEach(city => {
      const li = document.createElement("li");
      li.textContent = city;
      li.onclick = () => {
        loadWeather(city);
        dropdownEl.classList.add("hidden");
      };
      recentList.appendChild(li);
    });
  }
}

// 2. Fixa Enter-knappen och klick-fokus
if (cityInputEl) {
  // Visa dropdown när man klickar i rutan
  cityInputEl.addEventListener("focus", () => {
    updateDropdown();
    dropdownEl.classList.remove("hidden");
  });

  // Stäng dropdown när man trycker Enter
  cityInputEl.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      dropdownEl.classList.add("hidden");
    }
  });
}

// Stäng om man klickar utanför rutan
document.addEventListener("click", (e) => {
  if (cityInputEl && dropdownEl) {
    if (!cityInputEl.contains(e.target) && !dropdownEl.contains(e.target)) {
      dropdownEl.classList.add("hidden");
    }
  }
});

/** Här slutar Albrims Kod */