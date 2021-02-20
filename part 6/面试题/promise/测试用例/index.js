var promise1 = new Promise(function (resolve, reject) {
    setTimeout(() => {
        resolve('我是promise 1')
    }, 100);
})

promise1.then(data => {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            resolve('我是promise 1 的 then')
        }, 100);
    })
}).then(data => {
    console.log('data', data) // 我是promise 1 的 then
})