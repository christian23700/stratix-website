// Theme (light / dark). The choice is saved in localStorage; without one, the system setting decides.
export const THEME_KEY = "theme";

// Runs in <head> before the page paints, so a dark-mode visitor never sees a light flash.
export const themeScript = `(function(){try{var t=localStorage.getItem("${THEME_KEY}");if(t!=="light"&&t!=="dark"){t=matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}document.documentElement.dataset.theme=t}catch(e){}})()`;
