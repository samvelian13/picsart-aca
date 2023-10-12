class DisjointSetBySize {
    constructor() {
        this.size = new Map();
        this.parent = new Map();
    }

    findSet(x) {
        let root = x

        if (!this.parent.has(x)) {
            this.parent.set(x, x);
            this.size.set(x, 1);
        } else {
            while (root !== this.parent.get(root)) {
                root = this.parent.get(root)
            }

            while (x !== root) {
                const next = this.parent.get(x)
                this.parent.set(x, root)
                x = next
            }
        }

        return root
    }

    union(x, y) {
        x = this.findSet(x)
        y = this.findSet(y)

        if (x === y) return false

        if (this.size.get(x) < this.size.get(y)) {
            this.parent.set(x, y);
            this.size.set(y, this.size.get(y) + this.size.get(x));
        } else {
            this.parent.set(y, x);
            this.size.set(x, this.size.get(x) + this.size.get(y));
        }

        return true
    }
}

/**
 * @param {string[]} grid
 * @return {number}
 */
var regionsBySlashes = function (grid) {
    const n = grid.length
    const ds = new DisjointSetBySize();

    for (let r = 0; r < n; r++) {
        for (let c = 0; c < n; c++) {
            const root = 4 * (r * n + c)

            if (grid[r][c] !== '/') {
                ds.union(root + 0, root + 1)
                ds.union(root + 2, root + 3)
            }

            if (grid[r][c] !== '\\') {
                ds.union(root + 0, root + 3)
                ds.union(root + 1, root + 2)
            }

            if (r > 0) {
                ds.union(4 * ((r - 1) * n + c) + 2, root + 0)
            }

            if (c > 0) {
                ds.union(4 * (r * n + (c - 1)) + 1, root + 3)
            }
        }
    }

    let count = 0
    for (const key of ds.parent.keys()) {
        if (ds.findSet(key) === key) {
            count++
        }
    }

    return count
};

// const grid = [" /", "/ "]
// const grid = [" /","  "]
const grid = ["/\\", "\\/"]
regionsBySlashes(grid)