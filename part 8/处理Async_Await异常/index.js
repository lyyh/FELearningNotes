// await将一个被拒绝的 promise 转换为可捕获的错误，但是 return 不行，或者不加 await 却不行
run();
async function run() {
    try {
        // 注意这里是return,不是await
        return Promise.reject(new Error("Oops!"));
    } catch (error) {
        // 代码不会执行到这里
        console.log('invoke run')
        console.log(error.message)
    }
}

runA()
async function runA() {
    try {
        // 注意这里是return,不是await
        return await Promise.reject(new Error("Oops!"));
    } catch (error) {
        // 代码会执行到这里
        console.log('invoke run')
        console.log(error.message)
    }
}