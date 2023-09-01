import {SinglyLinkedList} from '../LinkedList/SLLPairData.js';

class HashMap {
    #capacity;
    #loadFactor;
    size = 0

    constructor({capacity = 7, loadFactor = 0.75} = {}) {
        this.#capacity = capacity;
        this.#loadFactor = loadFactor;
        this.buckets = new Array(this.#capacity).fill(null)

        // console.log("HashTable created");
        // console.log("Number of pairs in the HashTable: " + this.size);
        // console.log("Size of HashTable: " + this.#capacity);
        // console.log("Default Load Factor : " + loadFactor + "\n");
    }

    #hash(key) {
        let hash = 0;
        if (typeof key === 'string') {
            for (const s of key) {
                hash = ((hash << 5) - hash) + s.charCodeAt(0);
                hash |= 0
            }

            return hash % this.#capacity;
        } else if (typeof key === 'number') {
            return key % this.#capacity
        }
    }

    set(key, value) {
        const index = this.#hash(key);

        if (!this.buckets[index]) {
            const nl = new SinglyLinkedList()
            nl.push(key, value)
            this.buckets[index] = nl;
        } else {
            let current = this.buckets[index];
            current.push(key, value)
        }

        // console.log("Pair(" + key + ", " + value + ") inserted successfully.\n");
        this.size++

        // console.log("Current Load factor = " + this.getCurrentLoadFactor());
        if (this.getCurrentLoadFactor() > this.#loadFactor) {
            // console.log(this.getCurrentLoadFactor() + " is greater than " + this.#loadFactor);
            // console.log("Therefore Rehashing will be done.\n");
            this.#rehash();
            // console.log("New Size of HashTable: " + this.#capacity + "\n");
        }
    }

    get(key) {
        const index = this.#hash(key);
        const curr = this.buckets[index];

        if (!curr) return

        const node = curr.findByKey(key)
        return node.value
    }

    remove(key) {
        const index = this.#hash(key);
        const curr = this.buckets[index];

        const isRemoved = curr.removeByKey(key)
        if (isRemoved) {
            this.size--
        }

        return isRemoved
    }

    #rehash() {
        // console.log("\n***Rehashing Started***\n");
        this.#capacity = this.#capacity * 2

        let newMap = new HashMap({capacity: this.#capacity});

        for (let bucket of this.buckets) {
            if (!bucket) {
                continue
            }

            let cur = bucket.head
            while (cur) {
                newMap.set(cur.key, cur.value)
                cur = cur.next;
            }
        }

        this.buckets = newMap.buckets
        newMap = undefined
        // console.log("\n***Rehashing Ended***\n");
    }

    getCurrentLoadFactor() {
        return this.size / this.#capacity;
    }

    print() {
        console.log("Current HashTable:");
        for (let bucket of this.buckets) {
            if(!bucket) {
                continue
            }

            let curr = bucket.head
            while (curr) {
                console.log("key = " + curr.key + ", val = " + curr.value);
                curr = curr.next;
            }
        }

        console.log("\n")
    }
}

const hashTable = new HashMap({capacity: 5, loadFactor: 0.75})
hashTable.set(1, "Element1");
hashTable.set('1', "HGQWJHGDqjwhgdj");

hashTable.print();

// hashTable.set(2, "Element2");
// hashTable.print();
// hashTable.set(3, "Element3");
// hashTable.print();
// hashTable.set(4, "Element4");
// hashTable.print();
// hashTable.set(5, "Element5");
// hashTable.print();