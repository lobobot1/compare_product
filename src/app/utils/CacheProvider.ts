export default function localStorageProvider() {
    const windowGlobal = typeof window !== 'undefined' && window;
  const infoCache =
  windowGlobal ? localStorage.getItem("app-cache") ?? "[]" : "[]";
  const map = new Map(JSON.parse(infoCache));

  if (windowGlobal)
    window.addEventListener("beforeunload", () => {
      const appCache = JSON.stringify(Array.from(map.entries()));
      localStorage.setItem("app-cache", appCache);
    });

  return map;
}
