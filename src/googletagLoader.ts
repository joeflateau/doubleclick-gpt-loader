import PLazy from "p-lazy";
import { loadScript } from "./loadScript";

declare global {
  interface Window {
    googletag: googletag.Googletag;
  }
}

export const googletagLoader = PLazy.from(async () => {
  await loadScript("https://securepubads.g.doubleclick.net/tag/js/gpt.js");
  window.googletag = window.googletag || { cmd: [] };
  await new Promise<void>((resolve) => {
    window.googletag.cmd.push(() => {
      resolve();
    });
  });
  return googletag;
});
