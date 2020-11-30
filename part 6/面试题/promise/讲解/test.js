class MyPromise {
    static resolve(val) {
        if (val instanceof MyPromise) return val
        return new Promise(resolve => resolve(val))
    }
    static reject(val) {
        return new Promise((resolve, reject) => reject(val))
    }
    static all(list) {
        return new Promise((resolve, reject) => {
            let stop = false
            const values = []
            let times = 0
            for (const [i, p] of Object.entries(list)) {
                if (stop) return;
                p.then((res) => {
                    values[i] = res
                    if (++times === values.length) resolve(values)
                }, (err) => {
                    console.log(err)
                    reject(err)
                    stop = true
                })
            }
        })
    }
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

        const run = () => {
            this._status = "FULFILLED";
            this._value = value
            let cb = null
            while (cb = this._resolveQueue.shift()) {
                cb(this._value)
            }
        }

        setTimeout(run, 0);
    }
    _reject(error) {
        if (this._status !== 'PENDING') return;

        const run = () => {
            this._status = "REJECTED";
            this._value = error
            let cb = null
            while (cb = this._rejectQueue.shift()) {
                cb(this._value)
            }
        }
        setTimeout(run, 0);
    }

    catch (onRejected) {
        return this.then(null, onRejected)
    }

    then(onFulFill, onReject) {
        const {
            _value,
            _status,
            _resolveQueue,
            _rejectQueue
        } = this
        return new MyPromise(function (onNextFulFill, onNextRejected) {
            const fulfill = function (val) {
                try {
                    if (typeof onFulFill !== 'function') {
                        onNextFulFill(val)
                    } else {
                        const res = onFulFill(val)
                        if (res instanceof MyPromise) {
                            res.then(onNextFulFill).catch(onNextRejected)
                        } else {
                            onNextFulFill(res)
                        }
                    }
                } catch (error) {
                    onNextFulFill(err)
                }
            }

            const reject = function (val) {
                try {
                    if (typeof onReject !== 'function') {
                        onNextRejected(val)
                    } else {
                        const res = onReject(val)
                        if (res instanceof MyPromise) {
                            res.then(onNextFulFill).catch(onNextRejected)
                        } else {
                            onNextFulFill(res)
                        }
                    }
                } catch (error) {
                    onNextRejected(error)
                }
            }
            switch (_status) {
                case 'PENDING':
                    _resolveQueue.push(fulfill)
                    _rejectQueue.push(reject)
                    break;
                case 'FULFILLED':
                    fulfill(_value)
                case "REJECTED":
                    reject(_value)
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
const promise2 = new MyPromise(function (resolve, reject) {
    setTimeout(() => {
        resolve('promise2')
    }, 200);
})
const promise3 = MyPromise.all([promise1, promise2])
promise3.then(data => {
    console.log('success', data)
}).catch(data => {
    console.log('err', data)
})
// console.log(promise1.then(function (data) {
//     console.log('data', data)
// }, function (error) {
//     console.log('error', error)
// }))