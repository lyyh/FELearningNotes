#include <iostream>
#include <vector>

using namespace std;

class Solution {
public:
    int findKthLargest(vector<int> &nums, int k) {
        int size = nums.size();
        sort(begin(nums), end(nums));
        return nums[size - k];
    }
};

int main(){
    int a[] = {1,2};
    vector<int> vec;
    int a_size = sizeof(a)/sizeof(1);
    vec.assign(a,a+a_size);
    cout << 1 << endl;
    Solution s;
    cout << s.findKthLargest(vec,2) << endl;
    return 0;
}