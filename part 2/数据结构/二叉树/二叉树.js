// Node节点
function Node(data,right,left){
    this.right = right;
    this.left = left;
    this.data = data;
    this.show = show;
}

function show(){
    return this.show;
}

function BST(){
    this.root = null;
    this.insert = insert;
    this.inOrder = inOrder;
}

function insert(data){
    var n = new Node(data,null,null);
    if(this.root == null){
        this.root = n;
    }else{
        var current = this.root;
        var parent;
        while(current){
            parent = current;
            if(data < current.data){
                current = current.left;
                if(current == null){
                    parent.left = n;
                    break;
                }
            }else{
                current = current.right;
                if(current == null){
                    parent.right = n;
                    break;
                }
            }
        }
    }
}

var bst = new BST();
bst.insert(22);
bst.insert(10);
bst.insert(30);
bst.insert(22);
bst.insert(50);
console.log(bst)
