var addBinary = function (a, b) {
    let res = ''
    let i = a.length - 1
    let j = b.length - 1
    let carry = 0

    while (i >= 0 || j >= 0 || carry) {
        if (i >= 0) {
            carry += a[i--] - '0'
        }
        if (j >= 0) {
            carry += b[j--] - '0'
        }

        res = (carry % 2) + res
        carry = carry >> 1
    }

    return res
};

const a = "11", b = "1"
addBinary(a, b)