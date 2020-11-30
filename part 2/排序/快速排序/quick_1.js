var localQuickSort = function (nums, left, right) {
    var _left = left;
    var _right = right
    if (_left < _right) {
        var pivot = nums[_left]
        while (_left < _right) {
            while (_left < _right && pivot <= nums[_right]) {
                _right--
            }
            [nums[_left], nums[_right]] = [nums[_right], nums[_left]]
            while (_left < _right && nums[_left] <= pivot) {
                _left++
            }
            [nums[_left], nums[_right]] = [nums[_right], nums[_left]]
        }
        localQuickSort(nums, left, _right - 1)
        localQuickSort(nums, _left + 1, right)
    }
    return nums;
}



console.log(localQuickSort([2, 1, 3, 0, 6, 3, 2, 7, 4], 0, 8));