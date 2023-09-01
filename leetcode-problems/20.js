// Valid Parentheses
import Stack from "../DS/Stack/Stack.js";

/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = function (s) {
    if (s.length % 2 !== 0) return false;
    const stack = new Stack();

    for (let i = 0; i < s.length; i++) {
        switch (s[i]) {
            case '(':
                stack.push(')');
                break;
            case '[':
                stack.push(']');
                break;
            case '{':
                stack.push('}');
                break;
            default:
                if (s[i] !== stack.pop()) {
                    return false;
                }
        }
    }

    return stack.isEmpty();
}

const s = "(]"
// const s = "()[]{}"
const res = isValid(s)
console.log(res);