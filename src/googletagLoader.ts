import { AsyncLazy } from "./async-lazy";
import { loadScript } from "./loadScript";

const loadGpt = new AsyncLazy(() => {
  return loadScript("https://securepubads.g.doubleclick.net/tag/js/gpt.js");
});

export async function googletagLoader() {
  await loadGpt;
  return googletag;
}
