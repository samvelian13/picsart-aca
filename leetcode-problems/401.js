/**
 * @param {number} turnedOn
 * @return {string[]}
 */
var readBinaryWatch = function (turnedOn) {
    const res = []
    if (turnedOn > 8) return res

    backtrack(0, turnedOn, 0, 0, 0, 0, 4, 6, res)
    return res
};

const backtrack = (count, turnedOn, h, m, i, j, maxHour, maxMin, res) => {
    if (count === turnedOn) {
        res.push(getTime(h, m))
        return
    }

    for (; i < maxHour; i++) {
        for (; j < maxMin; j++) {
            if (m + (1 << j) >= 60) continue
            m += 1 << j
            backtrack(count + 1, turnedOn, h, m, i, j + 1, maxHour, maxMin, res)
            m -= 1 << j
        }

        console.log(i, '---I');

        if (h + (1 << i) >= 12) continue
        h += 1 << i
        backtrack(count + 1, turnedOn, h, m, i + 1, j, maxHour, maxMin, res)
        h -= 1 << i
    }
}

function getTime(hours, minutes) {
    if (hours >= 0 && hours <= 11 && minutes >= 0 && minutes <= 59) {
        return `${hours.toString()}:${minutes.toString().padStart(2, '0')}`;
    }
    return "Invalid input";
}

readBinaryWatch(1)