import MinPriorityQueue from "../DS/Heap/MinPriorityQueue.js";

class Node {
    constructor(val, fr, left, right) {
        this.val = val
        this.fr = fr
        this.left = left ?? null
        this.right = right ?? null
    }
}

function buildHuffmanTree(text) {
    const freq = new Map()

    for (const char of text) {
        freq.set(char, (freq.get(char) || 0) + 1)
    }

    const pq = new MinPriorityQueue()
    for (const [ch, fr] of freq) {
        console.log(`Pushing node with char = ${ch}, freq = ${fr}`, );
        pq.insert(fr, new Node(ch, fr))
    }


    while (pq.size !== 1) {
        const {val: left} = pq.extractMin()
        const {val: right} = pq.extractMin()
        pq.insert(left.fr + right.fr, new Node('$', left.fr + right.fr, left, right))
    }

    const {val: root} = pq.extractMin()
    const huffmanMap = new Map()
    const encodedStr = encode(root, text, huffmanMap)
    console.log('Printing Huffman codes: \n'+ [...huffmanMap.entries()].map(([key, value]) => `char: ${key} -> ${value}`).join('\n'));
    console.log('Original string: ', text);
    console.log('Encoded string: ', encodedStr);
    console.log(`Size if Encoded string: ${new Blob([encodedStr]).size}, Original size: ${new Blob([text]).size}`);
    const decodedStr = decode(root, encodedStr)
    console.log('Decoded String: ', decodedStr);
}

function encode(root, text, huffmanMap) {
    function encodeHelper(node, str, huffman) {
        if (!node) return
        if (!node.left && !node.right) {
            huffman.set(node.val, str)
            return;
        }

        encodeHelper(node.left, str + '0', huffman)
        encodeHelper(node.right, str + '1', huffman)
    }

    encodeHelper(root, '', huffmanMap)

    let str = ''
    for (const ch of text) {
        if (huffmanMap.has(ch)) {
            str += huffmanMap.get(ch)
        }
    }

    return str
}

function decode(root, encodedStr) {
    let decodedStr = ''
    let index = -1

    function decodeHelper(node, encodedStr) {
        if (!node) return
        if (!node.left && !node.right) {
            decodedStr += node.val
            return;
        }

        index++
        if (encodedStr[index] === '0') {
            decodeHelper(node.left, encodedStr)
        } else {
            decodeHelper(node.right, encodedStr)
        }
    }

    while (index < encodedStr.length - 1) {
        decodeHelper(root, encodedStr)
    }

    return decodedStr
}

buildHuffmanTree('abcdefabdbdecf')