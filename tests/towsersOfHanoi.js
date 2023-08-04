function foo(a, b, c, n) {
    if (n === 0) return; // find solution

    // n--
    foo(a, c, b, n - 1)
    console.log(`${a} -> ${c}`)
    foo(b, a, c, n - 1)

}


foo('A', 'B', 'C', 3)

// AC
// AB
// CB
// AC
// BA
// BC
// AC