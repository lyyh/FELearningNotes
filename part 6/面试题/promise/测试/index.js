new Promise((resolve, reject) => {
    resolve('这是第一个 resolve 值')
}).then((data) => {
    console.log(data)
}).catch(() => {
    console.log(data)
})

new Promise((resolve, reject) => {
    reject('这是第一个 reject 值')
}).then((data) => {
    console.log(data)
}).catch((data) => {
    console.log(data)
})

// resolve reject 静态方法
Promise.resolve('这是第二个 resolve 值').then((data) => {
    console.log(data) // 会打印'这是第二个 resolve 值'
})

Promise.reject('这是第二个 reject 值').then((data) => {
    console.log(data)
}).catch(data => {
    console.log(data)
})


// Promise all
const pOne = new Promise((resolve, reject) => {
    resolve(1);
});

const pTwo = new Promise((resolve, reject) => {
    resolve(2);
});

const pThree = new Promise((resolve, reject) => {
    resolve(3);
});

Promise.all([pOne, pTwo, pThree]).then(data => {
    console.log(data); // [1, 2, 3] 正常执行完毕会执行这个,结果顺序和promise实例数组顺序是一致的
}, err => {
    console.log(err); // 任意一个报错信息
});

const pOne = new Promise((resolve, reject) => {
    resolve(1);
});

const pTwo = new Promise((resolve, reject) => {
    resolve(2);
});

const pThree = new Promise((resolve, reject) => {
    // resolve(3);
});


Promise.race([pOne, pTwo, pThree]).then(data => {
    console.log(data); // 1 只要碰到FulFilled 或者 Rejected就会停止执行
}, err => {
    console.log(err); // 任意一个报错信息
});