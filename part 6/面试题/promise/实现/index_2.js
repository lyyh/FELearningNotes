class MyPromise {
    static all() {

    }
    static race() {

    }
    static resolve() {

    }
    constructor(handle) {
        this._value = 0;
        this._status = 'PENDING'
        this.onFulFillQueues = [];
        this.onRjectedQueues = [];

        try {
            handle(this._resolve.bind(this), this._reject.bind(this))
        } catch (error) {
            this._reject(error)
        }
    }

    _resolve(val) {
        if (this._status === 'PENDING') return

        const runFulFill = function (value) {
            this._status = 'FULFILL'
            let cb = null
            while (cb = this.onFulFillQueues.shift()) {
                const res = cb(value)
                this._value = res
            }
        }

        const runReject = function (value) {
            this._status = 'REJECT'
            let cb = null
            while (cb = this.onRjectedQueues.shift()) {
                const res = cb(value)
                this._value = res
            }
        }

        const run = function () {
            try {
                if (val instanceof Promise) {
                    val.then(runFulFill).catch(runReject)
                }else{
                    runFulFill(val)
                }
            } catch (error) {
                runReject(error)
            }
        }

        setTimeout(run, 0);
    }
    _reject(val) {
        // reject 不需要判断是否是promise？？？
        const run = () => {
            this._status = 'REJECT'
            let cb = null
            while (cb = this.onRjectedQueues.shift()) {
                const res = cb(val)
                this._value = res
            }
        }
        setTimeout(run, 0);
    }
    then(curFulFill, curReject) {
        const {
            _value,
            _status,
            onFulFillQueues,
            onRjectedQueues
        } = this;
        return new Promise(function (nextFulFill, nextReject) {
            const fullFill = () => {
                try {
                    // 如果不是function，则忽略
                    if (typeof curFulFill !== 'function') {
                        nextFulFill(_value)
                    } else {
                        const res = curFulFill(_value);
                        if (res instanceof MyPromise) {
                            res.then(nextFulFill).catch(nextReject)
                        } else {
                            nextFulFill(_value)
                        }
                    }
                } catch (error) {
                    nextReject(error)
                }
            }

            const reject = () => {
                try {
                    // 如果不是function，则忽略
                    if (typeof curReject !== 'function') {
                        nextReject(_value)
                    } else {
                        const res = curReject(_value);
                        if (res instanceof MyPromise) {
                            res.then(nextFulFill).catch(nextReject)
                        } else {
                            nextFulFill(_value)
                        }
                    }
                } catch (error) {
                    nextReject(error)
                }
            }


            switch (_status) {
                case 'PENDING':
                    onFulFillQueues.push(curFulFill)
                    onRjectedQueues.push(curReject)
                case 'FULFILL':
                    fullFill()
                case 'REJECT':
                    reject()
                    break;
            }
        })
    }
}

var promise = new Promise(function (resolve,reject) {
    resolve(1)
})

promise.then(value => {
    console.log('data',value)
})