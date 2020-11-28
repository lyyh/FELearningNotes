let lastState = []
let stateIndex = 0
function useState(initState) {
    lastState[stateIndex] = lastState[stateIndex] || initState;
    // 闭包特性
    const currentIndex = stateIndex
    function setState(newState) {
        lastState[currentIndex] = newState
        render()
    }
    return [lastState[stateIndex++],setState]
}