class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  isEmpty() {
    return this.root === null;
  }
  insert(value) {
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }
  insertNode(root, newNode) {
    if (newNode.value < root.value) {
      if (root.left === null) {
        root.left = newNode;
      } else {
        this.insertNode(root.left, newNode);
      }
    } else {
      if (root.right === null) {
        root.right = newNode;
      } else {
        this.insertNode(root.right, newNode);
      }
    }
  }
  search(root, value) {
    if (!root) {
      return false;
    } else {
      if (root.value === value) {
        return true;
      } else {
        if (value < this.root.value) {
          return this.search(root.left, value);
        } else {
          return this.search(root.right, value);
        }
      }
    }
  }
  preOrder(root) {
    if (root) {
      console.log(root.value);
      this.preOrder(root.left);
      this.preOrder(root.right);
    }
  }
  inOrder(root) {
    if (root) {
      this.inOrder(root.left);
      console.log(root.value);
      this.inOrder(root.right);
    }
  }
  postOrder(root) {
    if (root) {
      this.postOrder(root.left);
      this.postOrder(root.right);
      console.log(root.value);
    }
  }

  //
  levelOrder() {
    const queue = [];
    queue.push(this.root);
    while (queue.length) {
      let cur = queue.shift();
      console.log(cur.value);
      if (cur.left) {
        queue.push(cur.left);
      }
      if (cur.right) {
        queue.push(cur.right);
      }
    }
  }
  minValue(root) {
    if (!root.left) {
      return root.value;
    } else {
      return this.minValue(root.left);
    }
  }
  maxValue(root) {
    if (!root.right) {
      return root.value;
    } else {
      return this.maxValue(root.right);
    }
  }
  delete(value) {
    this.root = this.deleteNode(this.root, value);
  }
  deleteNode(root, value) {
    if (root == null) {
      return root;
    }
    if (value < root.value) {
      root.left = this.deleteNode(root.left, value);
    } else if (value > root.value) {
      root.right = this.deleteNode(root.right, value);
    }
    //value equal
    else {
      //leaf
      if (!root.left && !root.right) {
        return null;
      } else if (!root.left) {
        return root.right;
      } else if (!root.right) {
        return root.left;
      }
      root.value = this.minValue(root.right);
      root.right = this.deleteNode(root.right, root.value);
    }
    return root;
  }

  //  I will find value ,and return closest value node.
  
  findClosestInBst(tree, target) {
    let currentNode = tree;
    let closestValue = tree.value;
    while (currentNode !== null) {
      if (Math.abs(target - currentNode.value) < Math.abs(target - closestValue)) {
        closestValue = currentNode.value;
      }
      if (target < currentNode.value) {
        currentNode = currentNode.left;
      } else if (target > currentNode.value) {
        currentNode = currentNode.right;
      } else {
        break;
      }
    }
    return closestValue;
  }

  isBSTUtil(node, min, max) {
    // Base case: an empty tree is considered as a BST
    if (node === null) {
      return true;
    }
  
    // Check if the current node violates the BST property
    if (node.val <= min || node.val >= max) {
      return false;
    }
  
    // Recursively check the left and right subtrees
    return (
      this.isBSTUtil(node.left, min, node.val) &&
      this.isBSTUtil(node.right, node.val, max)
    );
  }
  //check its BST or Not
  //
   isBST(root) {
    return this.isBSTUtil(root, 0, 144);
  }
   
  
  
}
const bst = new BinarySearchTree();
console.log("Tree is empty ? ", bst.isEmpty());
bst.insert(10);
bst.insert(4);
bst.insert(16);
bst.insert(7);
bst.insert(66);
bst.insert(55);
bst.insert(22);
// console.log(bst.search(bst.root, 10));
// console.log(bst.search(bst.root, 55));
// console.log(bst.search(bst.root, 66));
// console.log("preOrder below");
// bst.preOrder(bst.root);
// console.log("inOrder below");
// bst.inOrder(bst.root);
// console.log("postOrder below");
// bst.postOrder(bst.root);
// console.log("levelOrder below BFS");
// bst.levelOrder();
// console.log("Min value of root node is ", bst.minValue(bst.root));
// console.log("Max value of root node is ", bst.maxValue(bst.root));
bst.levelOrder();
bst.delete(4);
console.log("hi");
bst.levelOrder();
console.log(bst.findClosestInBst(bst.root, 25),'closest value');

console.log(bst.isBST(bst.root));