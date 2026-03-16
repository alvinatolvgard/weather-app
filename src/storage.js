/**
 * Hämtar listan med favoritstäder från webbläsarens lokala lagring.
 * @author Sanel
 * @returns {Array} En array med namnen på favoritstäderna.
 */
export function getFavorites() {
    const favorites = localStorage.getItem('weatherFavorites');
    return favorites ? JSON.parse(favorites) : [];
}

/**
 * Sparar en ny stad i favoritlistan i den lokala lagringen.
 * @author Sanel
 * @param {string} city - Namnet på staden som ska sparas.
 * @return {void}
 */
export function saveFavorite(city) {
    const favorites = getFavorites();
    // Kontroll så det inte blir samma stad två gånger.
    if (!favorites.includes(city)) {
        favorites.push(city);
            localStorage.setItem('weatherFavorites', JSON.stringify(favorites));
        }
    }

/**
 * Tar bort stad från favoriter i lokala lagringen.
 * @author Sanel
 * @param {string} city - Namnet på staden som ska tas bort.
 * @returns {void}
 */
export function removeFavorite(city) {
    let favorites = getFavorites();
    favorites = favorites.filter(fav => fav !== city);
    localStorage.setItem('weatherFavorites', JSON.stringify(favorites));
}

/* Här börjar Albrims kod */

/**
Hämtar listan med senaste sökta städer.
@author Albrim
@returns {Array} En array med namnen på de senaste sökta städerna.*/
export function getRecentSearches() {
    const recents = localStorage.getItem('recentSearches');
    return recents ? JSON.parse(recents) : [];
}
/**
 
Sparar en stad i listan över senaste sökningar.
@author Albrim
@param {string} city - Namnet på staden som ska sparas.*/
export function saveRecentSearch(city) {
    let recents = getRecentSearches();

    // Ta bort staden om den redan finns.
    recents = recents.filter(item => item.toLowerCase() !== city.toLowerCase());

    // Lägg till staden först i listan.
    recents.unshift(city);

    // Spara bara de senaste sökningarna.
    if (recents.length > 5) {
        recents = recents.slice(0, 5);
    }

    localStorage.setItem('recentSearches', JSON.stringify(recents));
}