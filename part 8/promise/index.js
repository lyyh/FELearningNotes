// 简单版本的promise，只有constructor、状态改变
class PromiseA{
    constructor(handler){
        if(typeof handler !== 'function'){
            throw new Error('xxx must accept a function as parameter')
        }

        this._status  = 'PEDING'
        this._value = null

        try{
            handler(this._resolve.bind(this),this._reject.bind(this))
        }catch(e){
            console.log(3)
            this._reject(e)
        }
    }
    _resolve(value){
        console.log(value)
        console.log(0)
        if(this._status !== 'PEDING')return
        console.log(1)
        this._status = 'FULFILLED'
        this._value = value 
    }

    _reject(value){
        console.log(2)
        console.log(value)
        if(this._status !== 'PEDING')return
        this._status = 'REJECTED'
        this._value = value
    }
}

const p = new PromiseA(function (resolve,reject) {
    setTimeout(() => {
        
        // resolve(111)
    }, 0);
    throw new Error(123)
})