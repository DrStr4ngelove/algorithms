/**
 * @param {string[]} strs
 * @return {string}
 * @description Write a function to find the longest common prefix string amongst an array of strings.
 * If there is no common prefix, return an empty string "".
 * @example
 * Input: strs = ["flower","flow","flight"]
 * Output: "fl"
 * @example
 * Input: strs = ["dog","racecar","car"]
 * Output: ""
 */
export const longestCommonPrefix = function (strs: string[]): string {
    // nothing to process
    if (!strs.length) return ''

    // initialize the prefix with the first word (all words have to have the same prefix)
    let prefix = strs[0]

    // loop over the strs starting with 2nd word
    for (let i = 1; i < strs.length; i++) {
        // use indexOf to check if the prefix is at the start of the word
        while (strs[i].indexOf(prefix) !== 0) {
            // reduce prefix by 1 character
            prefix = prefix.substring(0, prefix.length - 1)
            if (!prefix) return ''
        }
    }

    return prefix
}

/**
 * @param {string} s
 * @return {number}
 * @description Given a string s consists of some words separated by spaces, return the length of the last word in the string. If the last word does not exist, return 0.
 * A word is a maximal substring consisting of non-space characters only.
 * @example
 * Input: s = "Hello World"
 * Output: 5
 * @example
 * Input: s = "   fly me   to   the moon  "
 * Output: 4
 */
export const lengthOfLastWord = function (s: string[]): number {
    // initialize the length of the last word to 0
    let strLen = 0
    // loop over the string from the end
    for (let i = s.length - 1; i >= 0; i--) {
        // if we encounter a space and we have a word...
        if (s[i] === ' ') {
            // if we have a word, return the length
            if (strLen) {
                return strLen
            }
            // if we don't have a word,
            continue
        } else {
            // if we don't encounter a space, increment the length of the word
            strLen++
        }
    }
    return strLen
}
