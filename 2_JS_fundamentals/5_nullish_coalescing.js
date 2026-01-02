/**Nullish Coalescing ??
 * 
 */

// let firstName = "Shravani"
// console.log( firstName ?? "HiddenUser"); ->Shravani
// let firstName = null
// console.log( firstName ?? "HiddenUser");->HiddenUser
// let firstName = ""
// console.log( firstName ?? "HiddenUser"); -> empty string

/**Difference Between Logical OR and Nullish Coalescing-> 
 * Logical Or treats (0, "", null, undefined) all these as falsey values.
 * Nullish Coalescing treats only (null, undefined) as falsey values. It does not treat (0,"") as falsey.
 * This is important mostly in integers where 0 is to be treated as a valid value instead of treating it as a falsey value.
*/
// const money = 0;
// console.log( money || 10); -> 10
// const money = 0;
// console.log( money ?? 10); ->0

// let a = 12;
// let b;
// console.log(a + (b ?? 0));