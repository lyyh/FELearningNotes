// Node节点
function Node(data, right, left) {
    this.right = right;
    this.left = left;
    this.data = data;
    this.show = show;
}

function show() {
    return this.data;
}

function BST() {
    this.root = null;
    this.insert = insert;
    this.inOrder = inOrder;
    this.preOrder = preOrder;
    this.lastOrder = lastOrder;
}

function insert(data) {
    var n = new Node(data, null, null);
    if (this.root == null) {
        this.root = n;
    } else {
        var current = this.root;
        var parent;
        while (current) {
            parent = current;
            if (data < current.data) {
                current = current.left;
                if (current == null) {
                    parent.left = n;
                    break;
                }
            } else {
                current = current.right;
                if (current == null) {
                    parent.right = n;
                    break;
                }
            }
        }
    }
}

// function insert(data) {
//     var n = new Node(data, null, null);
//     if (this.root == null) {
//         this.root = n;
//     } else {
//         var current = this.root;
//         var parent = current;
//         if (data < current.data) {
//             current = current.left;
//             if (current == null) {
//                 parent.left = n;
//                 return;
//             }else{
//                 insert(current);
//             }
//         } else {
//             current = current.right;
//             if (current == null) {
//                 parent.right = n;
//                 return;
//             }else{
//                 insert(current);
//             }
//         }
//     }
// }

function inOrder(node) {
    if (node != null) {
        inOrder(node.left);
        console.log(node.show());
        inOrder(node.right);
    }
}

function preOrder(node) {
    if (node != null) {
        console.log(node.show());
        preOrder(node.left);
        preOrder(node.right);
    }
}

function lastOrder(node) {
    if (node != null) {
        lastOrder(node.left);
        lastOrder(node.right);
        console.log(node.show());
    }
}
var bst = new BST();
bst.insert(22);
// bst.insert(10);
// bst.insert(30);
// bst.insert(22);
// bst.insert(50);
// console.log(bst)
// console.log(bst.inOrder(bst.root));
// console.log(bst.preOrder(bst.root));
// console.log(bst.lastOrder(bst.root));