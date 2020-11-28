class MyPromise {
    static resolve(value) {
        if (value instanceof MyPromise) return value
        return new MyPromise(function (resolve, rejected) {
            resolve(value)
        })
    }
    static reject(value) {
        return new MyPromise(function (resolve, rejected) {
            rejected(value)
        })
    }
    static all(lists) {
        return new MyPromise(function (fulfilled, rejected) {
            const results = [];
            let times = 0;
            for (const [i, p] of Object.entries(lists)) {
                MyPromise.resolve(p).then(value => {
                    results[i] = value;
                    times++
                    if (times.length === lists.length) fulfilled(results)
                }).catch(error => {
                    rejected(error)
                })
            }
        })
    }
    static race() {
        return new MyPromise(function (fulfilled, rejected) {
            let done = false;
            for (const [i, p] of Object.entries(lists)) {
                if (done) return
                MyPromise.resolve(p).then(value => {
                    done = true
                    fulfilled(value)
                }).catch(error => {
                    done = true
                    rejected(error)
                })
            }
        })
    }
    finally(callback) {
        const P = this.constructor;
        return this.then(function (value) {
            return P.resolve(callback()).then(() => value)
        }, function (reason) {
            return P.resolve(callback()).then(() => {
                throw reason
            })
        })
    }
    constructor(handle) {
        this._status = 'PENDING'
        this._value = null
        this._fulfilledQueues = [];
        this._rejectedQueues = [];
        try {
            handle(this._resolve.bind(this), this._reject.bind(this))
        } catch (error) {
            this._reject(error)
        }
    }
    catch (onRejected) {
        return this.then(null, onRejected)
    }
    _resolve(res) {
        if (this._status !== 'PENDING') return

        const runFulFill = val => {
            let cb = null
            while (cb = this._fulfilledQueues.shift()) {
                cb(val);
            }
        }

        const runReject = val => {
            let cb = null
            while (cb = this._rejectedQueues.shift()) {
                cb(val);
            }
        }

        const run = () => {
            this._status = 'FULFILL'
            if (res instanceof MyPromise) {
                res.then(val => {
                    this._value = val;
                    runFulFill(this._value)
                }).catch(error => {
                    this._value = error;
                    runReject(this._value)
                })
            } else {
                this._value = res
                runFulFill(this._value)
            }
        }

        setTimeout(run, 0);
    }
    _reject(value) {
        if (this._status !== 'PENDING') return

        const run = () => {
            this._status = 'REJECT'
            let cb = null
            while (cb = this._rejectedQueues.shift()) {
                cb(value);
            }
        }

        setTimeout(run, 0);
    }
    then(onFulFilled, onRejected) {
        const {
            _value,
            _status,
            _fulfilledQueues,
            _rejectedQueues
        } = this
        return new Promise(function (onFulFiledlNext, onRejectedNext) {
            // 判断promise
            const fullfilled = () => {
                try {
                    if (typeof onFulFilled !== 'function') {
                        onFulFiledlNext(_value)
                    } else {
                        const res = onFulFilled(_value)
                        if (res instanceof MyPromise) {
                            res.then(onFulFiledlNext).catch(onRejectedNext)
                        } else {
                            onFulFiledlNext(res)
                        }
                    }
                } catch (error) {
                    onRejectedNext(error)
                }
            }

            const rejected = () => {
                try {
                    if (typeof onRejected !== 'function') {
                        onRejectedNext(_value)
                    } else {
                        const res = onRejected(_value)
                        if (res instanceof MyPromise) {
                            res.then(onFulFiledlNext).catch(onRejectedNext)
                        } else {
                            onFulFiledlNext(res)
                        }
                    }
                } catch (error) {
                    onRejectedNext(error)
                }
            }

            switch (_status) {
                case 'PENDING':
                    _fulfilledQueues.push(onFulFilled)
                    _rejectedQueues.push(onRejected)
                    break;
                case 'FULFILL':
                    fullfilled(_value)
                    break;
                case 'REJECT':
                    rejected(_value)
                    break;
                default:
                    break;
            }
        })
    }
}

const inlinePromise = new MyPromise(function (resolve, reject) {
    resolve('inlinePromise')
})

const promise = new MyPromise(function (resolve, reject) {
    resolve(inlinePromise)
})

promise.finally(() => 'finally').then(data => {
    console.log('data', data)
})