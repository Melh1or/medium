export function loadFromLocalStorage(key) {
  try {
    const data = localStorage.getItem(key);
    return JSON.parse(data);
  } catch {
    return null;
  }
}

export function saveToLocalStorage(key, data) {
  const stringified = JSON.stringify(data);
  localStorage.setItem(key, stringified);
}
