function createIterator(args) {
    let i = 0;
    return {
        next: function () {
            const done = i >= args.length
            const value = !done ? args[i++] : undefined;
            return {
                done,
                value
            }
        },
        [Symbol.iterator]: function () {
            return this;
        }
    }
}

const args = [1, 2, 3]
for (const item of args) {
    console.log(item)
}

Object.prototype[Symbol.iterator] = function* () {
    for (var prop in this) {
        if (this.hasOwnProperty(prop)) {
            yield [prop, this[prop]]
        }
    }
}

const obj = {
    a: 1,
    b: 2
}
for (let a of obj) console.log('a', a)
// const iterator = createIterator([1, 2, 3])
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())