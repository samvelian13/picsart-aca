export default class DisjointSetByRank {
    constructor(list) {
        this.rank = new Map();
        this.parent = new Map();

        if (list && list.length) {
            list.forEach(item => this.makeSet(item))
        }
    }

    makeSet(x) {
        if (!this.parent.has(x)) {
            this.parent.set(x, x);
            this.rank.set(x, 0);
        }
    }

    findSet(x) {
        if (this.parent.get(x) !== x) {
            this.parent.set(x, this.findSet(this.parent.get(x)))  // path compression
        }
        return this.parent.get(x);
    }

    union(x, y) {
        x = this.findSet(x)
        y = this.findSet(y)

        if (x === y) return false

        if (this.rank.get(x) < this.rank.get(y)) {
            this.parent.set(x, y);
        } else if (this.rank.get(x) > this.rank.get(y)) {
            this.parent.set(y, x);
        } else {
            this.parent.set(x, y);
            this.rank.set(y, this.rank.get(y) + 1);
        }

        return true
    }

    printSets() {
        const sets = new Map();
        for (const [key, value] of this.parent) {
            if (sets.has(value)) {
                sets.get(value).push(key);
            } else {
                sets.set(value, [key]);
            }
        }

        for (const [root, elements] of sets) {
            console.log(`Set with root ${root}: ${elements}`);
        }
    }
}

// const ds = new DisjointSetByRank();
//
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
//
// console.log('\nSets after union:');
// ds.printSets();
//
// console.log('\nFind results:');
// console.log('find(1):', ds.findSet(1));
// console.log('find(2):', ds.findSet(2));
// console.log('find(3):', ds.findSet(3));
// console.log('find(4):', ds.findSet(4));