import {
    assert
} from "https://deno.land/std/testing/asserts.ts";

import { getEntry } from './lib.ts';

Deno.test('Get Entry', async () => {
    const result = await getEntry();
    assert(!!result, 'Entry is undefined');
});