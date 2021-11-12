export function removeItem(itemTotemove) {
    window.localStorage.removeItem(itemTotemove);
}
export function getItem(item) {
    return window.localStorage.getItem(item);
}
export function addItem(localStorageName, newItem) {
    window.localStorage.setItem(localStorageName, newItem);
}