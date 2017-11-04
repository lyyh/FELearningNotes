// 定时器
function timer(params) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            // resolve('resolve');
            reject('reject');
        }, params);
    })
}

// async/await
async function fn(params) {
    try {
        var value = await timer(params);
    } catch (error) {
        console.log(error);        
    }
}

fn(1000); //执行