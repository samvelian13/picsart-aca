// Check Distances Between Same Letters

const checkDistances = function (s, distance) {
    const arr = new Array(26).fill(0);

    for (let i = 0; i < s.length; i++) {
        const charCode = s.charCodeAt(i) - 97

        if (arr[charCode]) {
            if (i - (arr[charCode]) !== distance[charCode]) return false
        } else {
            arr[charCode] = i + 1
        }
    }

    return true;
}

const s = "abaccrb", distance = [1, 4, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
// const s = "aa", distance = [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
// const s = "abbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzza",
//     distance = [49, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
const res = checkDistances(s, distance)
console.log(res);