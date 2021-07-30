import PLazy from "p-lazy";
import { loadScript } from "./loadScript";

export const googletagLoader = PLazy.from(async () => {
  await loadScript("https://securepubads.g.doubleclick.net/tag/js/gpt.js");
  return googletag;
});
