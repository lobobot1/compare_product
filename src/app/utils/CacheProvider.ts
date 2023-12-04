export default function localStorageProvider() {
  let stored: string | null;
  
  const windowBool = typeof window !== 'undefined';

  if(windowBool){
    stored = localStorage.getItem("app-cache");
  }

  const map = new Map(JSON.parse(stored || "[]"));
  
  if(windowBool){
    window.addEventListener("beforeunload", () => {
      const appCache = JSON.stringify(Array.from(map.entries()));
      localStorage.setItem("app-cache", appCache);
    });
  }

  return map;
}
