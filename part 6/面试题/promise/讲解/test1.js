var promise1 = new Promise(function (resolve, reject) {
    setTimeout(() => {
        resolve('我是 promise1 reject')
    }, 0)
})

var promise2 = promise1.then(() => {
    // console.log('我是promise2')
    // return Promise.resolve(1)
    throw new Error('111')
})

promise2.then((data) => {
    console.log('promise2 data', data)
})