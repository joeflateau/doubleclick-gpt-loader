import { expect } from "chai";
import { describe, it } from "mocha";
import { AsyncLazy } from "./async-lazy";

describe("asyncLazy", () => {
  it("should resolve with the string 'hello world'", async () => {
    const lazy = new AsyncLazy(async () => "hello world");
    expect(await lazy).to.equal("hello world");
  });
});
