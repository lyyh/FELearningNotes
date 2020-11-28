class PromiseA {
    static race(list) {
        return new Promise((resolve, reject) => {
            for (let p of Object.values(list)) {
                this.resolve(p).then(res => {
                    resolve(res)
                }).catch(err => {
                    reject(err)
                })
            }
        })
    }

    static resolve(res) {
        if (res instanceof PromiseA) {
            return res
        }
        return new Promise(resolve => resolve(res))
    }

    static reject(res) {
        return new Promise((resolve, reject) => reject(res))
    }

    static all(list) {
        return new PromiseA(function (resolve, reject) {
            let count = 0;
            const values = []
            for (let [i, p] of Object.entries(list)) {
                this.resolve(p).then((res) => {
                    value[i] = res;
                    if (++count === list.length) resolve(values)
                }).catch((err) => {
                    this.reject(err)
                })
            }
        })
    }

    constructor(handle) {
        this._status = '_PENDING';
        // 判断handle函数与否
        if (typeof handle !== 'function') {
            throw new Error('MyPromise must accept a function as a parameter')
        }

        this._value = null;
        this.fullFillQueues = [];
        this.rejecteQueues = [];

        try {
            handle(this, this._resolve.bind(this), this._reject.bind(this))
        } catch (error) {
            this._reject(error)
        }
    }

    _resolve(res) {
        const runFullfill = (val) => {
            this._status = '_FULFILL';
            let cb;
            while (cb = this.fullFillQueues.shift()) {
                cb(val)
            }
        }

        const runRejected = (val) => {
            this._status = '_REJECT'
            let cb;
            while (cb = this.rejecteQueues.shift()) {
                cb(val)
            }
        }

        const run = () => {
            if (this._status !== '_PENDING') return
            this._status = '_FULFILL'
            if (res instanceof PromiseA) {
                res.then((_value) => {
                    this._value = _value
                    runFullfill(_value);
                }, (err) => {
                    this._value = err;
                    runRejected(err);
                })
            } else {
                this._value = res;
                runFullfill(res);
            }
        }

        setTimeout(run, 0);
    }

    _reject(value) {
        if (this._status !== '_PENDING') return
        const run = () => {
            this._value = value
            this._status = '_REJECT';
            let cb;
            while (cb = this.rejecteQueues.shift()) {
                cb(value)
            }
        }

        setTimeout(run, 0);
    }

    then(onFulfilled, onRejected) {
        const {
            _value,
            _status
        } = this;
        return new PromiseA((onFulfilledNext, onRejectedNext) => {
            let fullFill = function () {
                try {
                    if (typeof onFulfilled !== 'function') {
                        onFulfilledNext(_value)
                    } else {
                        let res = onFulfilled(_value)
                        if (res instanceof PromiseA) {
                            res.then(onFulfilledNext, onRejectedNext)
                        } else {
                            onFulfilledNext(res)
                        }
                    }
                } catch (error) {
                    onRejectedNext(error)
                }
            }

            let reject = function () {
                try {
                    if (typeof onFulfilled !== 'function') {
                        // 绕到下一个onfullfill
                        onFulfilledNext(_value)
                    } else {
                        let res = onRejected(_status)
                        if (res instanceof PromiseA) {
                            res.then(onFulfilledNext, onRejectedNext)
                        } else {
                            onFulfilledNext(res)
                        }
                    }
                } catch (error) {
                    onRejectedNext(error)
                }
            }
            switch (this._status) {
                case '_PENDING':
                    this.fullFillQueues.push(onFulfilled)
                    this.rejecteQueues.push(onRejected)
                    break;
                case '_FULFILL':
                    fullFill();
                    break;
                case '_REJECT':
                    reject();
                    break;
            }
        })
    }

    catch (onRejected) {
        return this.then(null, onRejected)
    }
}

// const inlinePromise = new PromiseA(function (resolve, reject) {
//     resolve(111111111)
// })

// const promise = new PromiseA(function (resolve, reject) {
//     setTimeout(() => {
//         resolve(inlinePromise)
//     }, 100);
// })

const promise1 = new Promise((resolve) => {
    resolve('我是promise1')
})

const promise2 = new Promise((resolve) => {
    resolve('我是promise2')
})

const promise3 = PromiseA.race([promise1, promise2])
promise3.then((data) => {
    console.log(data)
})