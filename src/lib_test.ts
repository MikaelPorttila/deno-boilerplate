import { assert } from "../test_deps.ts";
import { getEntry } from "./lib.ts";

Deno.test("Get Entry", async () => {
  const result = await getEntry();
  assert(!!result, "Entry is undefined");
});
