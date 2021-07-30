# doubleclick-gpt-loader

Easy loading Doubleclick GPT script and get a reference to googletag.

## Rationale

I wrote this because I don't like my code depending on globals that may or may not have been actually created and I don't like jumping through hoops to load `@types/doubleclick-gpt`. With `doubleclick-gpt-loader`, you can import gpt as a typed module.

`doubleclick-gpt-loader` exports a [p-lazy](https://www.npmjs.com/package/p-lazy) lazy Promise that is resolved with a reference to `googletag` typed with types from [@types/doubleclick-gpt](https://www.npmjs.com/package/@types/doubleclick-gpt)

## Usage

```typescript
import { googletagLoader } from "doubleclick-gpt-loader";

async function showAds() {
  const googletag = await googletagLoader;

  const slot = googletag
    .defineSlot("/12345678/my-ad-slot", [320, 50], "my-ad-slot")
    .addService(googletag.pubads());

  googletag.enableServices();

  googletag.display(slot);
}
```
