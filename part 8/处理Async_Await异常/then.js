run();

async function throwAnError() {
    throw new Error("Oops!");
}

async function noError() {
    return 42;
}

async function run() {
    // console.log(Object.prototype.toString.call(noError()))
    // The `.then(() => null, err => err)` 来匹配正常/异常的情况。如果正常情况，返回`null`；如果异常，返回`err`
    // 转化成普通promise，不会抛出异常好
    let err = await throwAnError().then(() => null, err => err);
    if (err != null) {
        err.message; // 'Oops'
    }

    err = await noError().then(() => null, err => err);
    err; // null
}