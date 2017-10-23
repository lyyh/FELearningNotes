// 红黑树构建
var Colors = {
    RED: 0,
    BALACK: 1
}
var Node = function (key, color) {
    this.key = key;
    this.left = null;
    this.right = null;
    this.color = color;
    this.flipColor = function () {
        this.color = this.color === Colors.RED ? Colors.BALACK : Colors.RED;
    }
}

var RedBlackTree = function () {
    this.root = null;
}
RedBlackTree.prototype = {
    getRoot: function () {
        return this.root;
    },
    isRed: function (node) {
        return !node ? false : node.color === Colors.RED
    },
    flipColors: function (node) {
        node.left.flipColor();
        node.right.flipColor();
    },
    rotateLeft(node) {
        var tmpNode = node.right;
        if (tmpNode) {
            node.right = tmpNode.left;
            tmpNode.left = node;
            tmpNode.color = node.color;
            node.color = Colors.RED; //为什么要转化成红色
        }
        return tmpNode;
    },
    rotateRight(node) {
        var tmpNode = node.left;
        if (tmpNode) {
            node.left = tmpNode.right;
            tmpNode.right = node;
            tmpNode.color = node.color;
            node.color = Colors.RED;
        }
        return tmpNode;
    },
    insert(element) {
        this.root = this._insertNode(this.root, element);
        this.root.color = Colors.BALACK;
    },
    _insertNode(node, element) {
        if (!node) {
            return new Node(element, Colors.RED);
        }
        var newRoot = node;
        if (element > node.key) {
            newRoot.right = this._insertNode(newRoot.right, element);
        } else if (element < node.key) {
            newRoot.left = this._insertNode(newRoot.left, element);
        } else {
            node.key = element;
        }

        if (this.isRed(node.right) && !this.isRed(node.left)) {
            newRoot = this.rotateLeft(node);
        }
        if (this.isRed(node.left) && this.isRed(node.left.left)) {
            newRoot = this.rotateRight(node);
        }
        if (this.isRed(node.left) && this.isRed(node.right)) {
            this.flipColors(node);
        }

        return newRoot;
    }
}

var rbTree = new RedBlackTree();
rbTree.insert(1);
rbTree.insert(2);
rbTree.insert(3);
rbTree.insert(4);
rbTree.insert(5);
rbTree.insert(6);
rbTree.insert(7);
rbTree.insert(14);
rbTree.insert(15);
rbTree.insert(13);
rbTree.insert(12);
rbTree.insert(11);

console.log(rbTree.getRoot());