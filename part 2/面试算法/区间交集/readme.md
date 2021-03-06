# 判断两个区间有无交集
有两个区间A[a1，b1]， B[a2，b2]，判断这两个区间有没有交集。我们可以分为两种思维来判断：
### 1. 正向思维：判断所有相交的情况
```
/**判断所有可能相交的情况
  * 1. A[1，5]， B[4，8] A尾部与B首部相交(b1端必须在[a2，b2]之间)
  * 2. A[1，5]， B[2，4] A包含B（B的两个端点都位于A中）
  * 3. A[2，5]， B[1，3] A首部与B尾部相交（a1端必须在[a2，b2]之间）
  * 4. A[4，5]， B[1，8] A被包含于B （a1，b1端必须都在[a2，b2]之间）
  **/

//因为A的一个端点落在B中name就有交集，所以第四点可省略
if((b1>a2&&b1<b2) || (a1<a2&&b1>b2) || (a1>a2&&a1<b2)){
    return "有交集"
}else{
    return "无交集"
}
```

### 2. 逆向思维：判断所有不相交的情况
```
/**判断所有可能相交的情况
  * 1. A[1，2]， B[3，4] A位于B前面(b1小于a2)
  * 2. A[3，4]， B[1，2] A位于B后面(a1大于b2)
  **/

if((a1 < a2 && b1 < a2) || (b2 < a1 && a2 < a1)){
    return "无交集"
}else{
    return "有交集"
}
```

### 3. 优化逆向思维
```
/**
  *思路就是如果两个区间不相交，那么所有的开始端一定小于所有的结束端。
  **/

if(max(a1, a2) < min(b1, b2)){
    return "有交集"
}else{
    return "无交集"
}
```
