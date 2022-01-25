//  set session key
export function setLocalKey(key: string, value: string) {
  window.localStorage.setItem(key, value);
}

//  get value from session storage
export const getLocalKey = (key: string | any) => {
  if (typeof window === "undefined") return false;
  if (localStorage.getItem(key)) return localStorage.getItem(key);
  return false;
};
//  remove key from session storage
export const removeLocalKey = (key: string) => {
  if (typeof window !== "undefined") localStorage.removeItem(key);
};

// Save data to sessionStorage
export function setSessionKey(key: string, value: string) {
  window.sessionStorage.setItem(key, value);
}

// Get saved data from sessionStorage
export const getSessionKey = (key: string) => {
  if (typeof window === "undefined") return false;
  if (sessionStorage.getItem(key)) return sessionStorage.getItem(key);
  return false;
};
// Remove saved data from sessionStorage
export const removeSessionKey = (key: string) => {
  if (typeof window !== "undefined") sessionStorage.removeItem(key);
};
// Remove all saved data from sessionStorage
sessionStorage.clear();

export const permissions = () => {
  return ["list of all the assing permission"]
}
