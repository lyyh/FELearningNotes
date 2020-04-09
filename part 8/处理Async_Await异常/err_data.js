run();

async function throwAnError() {
    throw new Error("Oops!");
}

async function noError() {
    return 42;
}

async function run() {
    // The `.then(v => [null, v], err => [err, null])` pattern
    // 你可以使用数组解构来匹配err和返回值
    let [err, res] = await throwAnError().then(
        v => [null, v],
        err => [err, null]
    );
    if (err != null) {
        err.message; // 'Oops'
    }

    err = await noError().then(v => [null, v], err => [err, null]);
    err; // null
    res; // 42
}