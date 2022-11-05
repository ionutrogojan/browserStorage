# Deno Fresh browserStorage

The fresh `localStorage` object is a server side component that does not work with Deno Deploy.
`browserStorage` uses instead the browser's Web Storage API to update the keys and values.
<br>

## Import

```ts
import { lengthStorage, keyStorage, getStorage, setStorage, removeStorage, clearStorage } from "https://deno.land/x/browserstorage@v0.1.1/mod.ts";
```
<br>

## Examples

```ts
    setStorage("deno", "fresh");
    // adds or updates { key: "deno" , value: "fresh" } to browser localStorage

    keyStorage(0);
    // returns the key name at index 0 : "deno"

    getStorage("deno");
    // returns the value of the key : "fresh"

    lengthStore();
    // returns the browser localStorage length : 1, or 0 if no key is found

    removeStorage("deno");
    // removes { key: "deno" , value: "fresh" } from browser localStorage

    clearStorage();
    // clear all the browser localStorage keys
```
