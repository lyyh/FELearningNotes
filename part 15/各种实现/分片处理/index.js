var sliceTasks = function (tasks, args, callback) {
    var run = function () {
        var task = tasks.shift()
        if (task) {
            task.apply(null, args || [])
            setTimeout(run, 16);
        } else {
            callback()
        }
    }

    setTimeout(run);
}

var times = 0
var logger = function () {
    console.log(times++)
}

var task = [logger, logger]
sliceTasks(task, ['a'], () => {
    console.log('我结束了')
})