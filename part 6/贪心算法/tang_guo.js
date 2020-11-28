// case: p455 分糖果

var g = [5, 10, 2, 9, 15, 9]
var s = [6, 1, 20, 3, 8]
var gO = g.sort(function(a, b) {
    return a - b
})
var sO = s.sort(function(a, b) {
    return a - b
})

var gOIdx = 0;
var sOIdx = 0;

while(gOIdx < gO.length && sOIdx < sO.length){
    if(gO[gOIdx] <= sO[sOIdx]){
        gOIdx++;
        sOIdx++
    }else{
        sOIdx++;
    }
}

console.log(gOIdx)