const IS_BROWSER = typeof document !== "undefined";
/**
* Returns an integer representing the number of data items stored in the Storage object.
* 
* https://developer.mozilla.org/en-US/docs/Web/API/Storage/length
* @returns { number } localStorage length
*/
export const lengthStorage = (): number => { return (IS_BROWSER && localStorage.length) || 0 }
/**
* When passed a number n, this method will return the name of the nth key in the storage.
*
* https://developer.mozilla.org/en-US/docs/Web/API/Storage/key
* @param n { number} key index
* @returns { string } key name
*/
export const keyStorage = (n:number): string => { return ((IS_BROWSER && localStorage.key(n)) as string) }
/**
* When passed a key name, will return that key's value.
*
* https://developer.mozilla.org/en-US/docs/Web/API/Storage/getItem
* @param key { string } name
* @returns { string } key value
*/
export const getStorage = (key:string):string => { return ((IS_BROWSER && localStorage.getItem(key)) as string) }
/**
* When passed a key name and value, will add that key to the storage, or update that key's value if it already exists.
*
* https://developer.mozilla.org/en-US/docs/Web/API/Storage/setItem
* @param key { string } name 
* @param value { string } 
*/
export const setStorage = (key:string, value:string) => { (IS_BROWSER && localStorage.setItem(key, value)) }
/**
* When passed a key name, will remove that key from the storage.
*
* https://developer.mozilla.org/en-US/docs/Web/API/Storage/removeItem
* @param key { string } name
*/
export const removeStorage = (key:string) => { (IS_BROWSER && localStorage.removeItem(key)) }
/**
* When invoked, will empty all keys out of the storage.
*
* https://developer.mozilla.org/en-US/docs/Web/API/Storage/clear
*/
export const clearStorage = () => { (IS_BROWSER && localStorage.clear()) }