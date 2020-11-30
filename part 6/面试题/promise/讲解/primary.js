class MyPromise {
    constructor(handle) {
        if (typeof handle !== 'function') {
            throw new Error('promise params must be a function')
        }
        this._status = "PENDING"
        this._value = null

        try {
            handle(this._resolve.bind(this), this._reject.bind(this))
        } catch (error) {
            this._reject(error)
        }
    }

    _resolve(value) {
        if (this._status === 'PENDING') return
        this._status = 'FULFILL'
        this._value = value
    }

    _reject(err) {
        if (this._status === 'PENDING') return
        this._status = 'REJECT'
        this._value = err
    }

    then(onFulFilled, onRejected) {
        const {
            _fulFillQueues,
            _rejectedQueues
            _status,
            _value
        } = this
        return new Promise(function (onNextFulFilled, onNextRejected) {
            const resolve = function (val) {
                if (typeof onFulFilled !== 'function') {
                    onNextFulFilled(val)
                }else{
                    const nextVal = onFulFilled(_value)
                    if (nextVal instanceof MyPromise) {
                        val.then(onFulFilled).catch(onNextFulFilled)
                    }else{
                        
                    }
                }
            }
        })
    }
}