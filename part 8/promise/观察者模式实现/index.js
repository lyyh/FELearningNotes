/*
    简单的观察者模式
    new constructor 里的代码是同步执行，遇到异步任务，放入下一次
    宏任务：
    微任务：
*/
class MyPromise{
    constructor(executor){
        this._resolveQueue = []
        this._rejectQueue = []
        let _resolve = (val) => {
            while (this._resolveQueue.length) {
                const callback = this._resolveQueue.shift()
                callback(val)
            }
        }
        let _reject = () => {
            while (this._rejectQueue.length) {
                const callback = this._rejectQueue.shift()
                callback(val)
            }
        }
        executor(_resolve,_reject)
    }

    then(resolveFn,rejectFn){
        this._resolveQueue.push(resolveFn)
        this._rejectQueue.push(rejectFn)
    }
}

// TEST
// var promiseInstance = new MyPromise((resolve,reject)=>{
//     console.log('before')
//     setTimeout(() => {
//         resolve(111)
//     }, 1000);
//     console.log('after')
// })
// promiseInstance.then((val)=>{
//     console.log(val)
// })
// promiseInstance

new MyPromise(resolve => {
    resolve()
    console.log(1)
  }).then(_ => {
    console.log(3)
  })
  
  console.log(2)