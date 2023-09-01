// Minimum Index Sum of Two Lists


const findRestaurant = function (list1, list2) {
    const hashMap = new Map();

    for (let i = 0; i < list1.length; i++) {
        hashMap.set(list1[i], i);
    }

    let res = []
    let minVal = Infinity
    for (let i = 0; i < list2.length && i <= minVal; i++) {
        if (hashMap.has(list2[i])) {
            const currentVal = hashMap.get(list2[i]) + i

            if (currentVal < minVal) {
                res = [list2[i]]
                minVal = currentVal
            } else if (currentVal === minVal) {
                res.push(list2[i])
            }
        }
    }

    return res
}

const list1 = ["happy", "sad", "good"], list2 = ["sad", "happy", "good"]
// const list1 = ["n", "vamh", "KFC"], list2 = ["kxhzx", "vamh", "KFC"]
const res = findRestaurant(list1, list2)
console.log(res);