class MyPromise {
    constructor(handle) {
        if (typeof handle !== 'function') {
            throw new Error('xxx')
        }
        this._status = "PENDING"
        this._value = undefined
        this._resolveQueue = [];
        this._rejectQueue = [];

        try {
            handle(this._resolve.bind(this), this._reject.bind(this))
        } catch (error) {
            this._reject(error)
        }
    }
    _resolve(value) {
        if (this._status !== 'PENDING') return;
        this._status = "RESOLVE";
        this._value = value
        let cb = this._resolveQueue.shift()
        if(cb){

        }
        while (cb = this._resolveQueue.shift()) {


            cb(this._value)
        }
    }
    _reject(error) {
        if (this._status !== 'PENDING') return;
        this._status = "REJECT";
        this._value = error
    }
    then(onFulFill, onReject) {
        const {
            _value,
            _status
        } = this
        return new MyPromise(function (onNextFulFill, onNextRejected) {
            switch (_status) {
                case 'PENDING':
                    this._resolveQueue.push(onFulFill)
                    this._rejectQueue.push(onReject)
                    break;
                default:
                    break;
            }
        })
    }
}
const promise1 = new MyPromise(function (resolve, reject) {
    setTimeout(() => {
        resolve('我是promise1')
    }, 100);
})
promise1.then(function (data) {

}, function () {

})

console.log(promise1)

// new Promise(function (fulFill, reject) {
//     throw new Error(111)
//     fulFill(222)
// })