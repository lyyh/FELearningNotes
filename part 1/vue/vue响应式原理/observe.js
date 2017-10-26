class Vue {
    constructor(options) {
        this._data = options.data;
        this.observer(this._data, options.render)
        this._proxy(this._data,options.render);
    }
    observer(value, cb) {
        var ctx = this;
        Object.keys(value).forEach(key => {
            ctx.defineReactive(value, key, value[key], cb);
        })
    }
    defineReactive(obj, key, value, cb) {
        Object.defineProperty(obj, key, {
            enumerable: true,
            configurable: true,
            get() {

            },
            set() {
                cb();
            }
        })
    }
    _proxy(data) {
        var ctx = this;
        Object.keys(data).forEach(key => {
            Object.defineProperty(ctx, key,{
                enumerable: true,
                configurable: true,
                get(){
                    return ctx._data[key];
                },
                set(newValue){
                    ctx._data[key] = newValue;
                    cb(key,newValue);
                }
            })

        })
    }
}


let app = new Vue({
    el: '#app',
    data: {
        text: 'text',
        text2: 'text2'
    },
    render(key,newValue) {
        console.log(key+' is '+newValue);
    }
})