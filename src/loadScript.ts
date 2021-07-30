export function loadScript(src: string) {
  return new Promise<void>((resolve, reject) => {
    const scriptEl = document.createElement("script");
    scriptEl.async = true;
    scriptEl.onload = () => resolve();
    scriptEl.onerror = () => reject();
    scriptEl.src = src;
    document.head.appendChild(scriptEl);
  });
}
