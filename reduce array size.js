/**
 * @param {number[]} arr
  * @return {number}
   */
var minSetSize = function (arr) {
    let map = new Map()
    for (const item of arr) {
        if (!map.has(item)) {
            map.set(item, 1)
        } else {
            map.set(item, map.get(item) + 1)
        }
    }

    let unique = [...map.keys()];
    unique.sort((a, b) => map.get(b) - map.get(a))

    let count = 0
    let total = 0
    for (const item of unique) {
        total += map.get(item)
        count++
        if (total >= arr.length / 2) {
            return count
        }

    }

    return count
};
