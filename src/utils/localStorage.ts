export function getItemFromLocalStorage(key: string): string | null {
  return localStorage.getItem(key);
}

export function saveToLocalStorage(key: string, item: string): void {
  localStorage.setItem(key, item);
}

export function removeItemFromLocalStorage(key: string): void {
  localStorage.removeItem(key);
}
