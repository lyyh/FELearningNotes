// 定时器
function timer(params) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            // resolve('resolve');
            reject('reject');
        }, params);
    })
}

// aysnc 声明的函数
function fn(args) {
    return spawn(function* () { // 配合 next 按步骤自动执行
        try {
            yield timer(args); // timer Promise类型
        } catch (error) {
            console.log(error);
        }
    });
}

// 自动执行器
function spawn(genF) {
    return new Promise(function (resolve, reject) {
        var gen = genF();

        function step(nextF) {
            try {
                var next = nextF(); // 执行 gen.next 或者 gen.throw ，使用 try/catch 捕获异常
            } catch (e) {
                return reject(e);
            }
            if (next.done) {
                return resolve(next.value);
            }
            Promise.resolve(next.value).then(function (v) {
                step(function () {
                    return gen.next(v);
                });
            }, function (e) {
                step(function () {
                    return gen.throw(e); // 若 next.value 是 rejected 状态，抛出异常，函数体内的try/catch捕获
                });
            });
        }
        step(function () {
            return gen.next(undefined);
        });
    });
}


fn(100).then(function (data) {
    console.log(data)
}).catch(function (error) {
    console.log(error);
})
