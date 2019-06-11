/*打印二叉树的左视图*/
function printLeftView(node,level,maxLevel=0){
    if(!node)return
    if(maxLevel<level){
        console.log(node.show())
        maxLevel = level
    }
    printLeftView(node.left,level+1,maxLevel)
    printLeftView(node.right,level+1,maxLevel)
}
printLeftView(bst.root,1)
