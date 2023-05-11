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
    if(root){
        this.inOrder(root.left);
        console.log(root.value);
        this.inOrder(root.right)
    }
  }
  postOrder(root){
    if(root){
        this.postOrder(root.left)
        this.postOrder(root.right)
        console.log(root.value);

    }
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
console.log(bst.search(bst.root, 10));
console.log(bst.search(bst.root, 55));
console.log(bst.search(bst.root, 66));
console.log('preOrder below');
bst.preOrder(bst.root);
console.log('inOrder below');
bst.inOrder(bst.root)
console.log('postOrder below');
bst.postOrder(bst.root)

