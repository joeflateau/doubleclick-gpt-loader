export function loadScript(src: string) {
  return new Promise<void>((resolve, reject) => {
    const el = document.createElement("script");
    el.onload = () => resolve();
    el.onerror = () => reject();
    el.src = src;
  });
}
