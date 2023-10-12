export default class DisjointSetBySize {
    constructor(list) {
        this.size = new Map();
        this.parent = new Map();
        if (list && list.length) {
            list.forEach(item => this.makeSet(item))
        }
    }

    makeSet(x) {
        if (!this.parent.has(x)) {
            this.parent.set(x, x);
            this.size.set(x, 1);
        }
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

    printSets() {
        const sets = new Map();
        for (const [key, value] of this.parent) {
            const root = this.findSet(key);
            if (sets.has(root)) {
                sets.get(root).push(key);
            } else {
                sets.set(root, [key]);
            }
        }

        for (const [root, elements] of sets) {
            console.log(`Set with root ${root}: ${elements}`);
        }
    }
}

// const ds = new DisjointSetBySize();
// ds.makeSet(1);
// ds.makeSet(2);
// ds.makeSet(3);
// ds.makeSet(4);
//
// console.log('Initial sets:');
// ds.printSets();
//
// ds.union(1, 2);
// ds.union(3, 4);
// ds.union(1, 4);
// //
// console.log('\nSets after union:');
// ds.printSets();
//
// console.log('\nFind results:');
// console.log('find(1):', ds.findSet(1));
// console.log('find(2):', ds.findSet(2));
// console.log('find(3):', ds.findSet(3));
// console.log('find(4):', ds.findSet(4));
