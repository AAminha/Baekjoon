function solution(nodeinfo) {
  const nodes = nodeinfo.map(([x, y], index) => ({ index: index + 1, x, y }));
  nodes.sort((a, b) => {
    if (b.y === a.y) return a.x - b.x;
    return b.y - a.y;
  });

  const binaryTree = new BinaryTree();
  nodes.forEach((node) => binaryTree.insertToTree(node.index, node.x));

  return [binaryTree.preOrder(), binaryTree.postOrder()];
}

class Node {
  constructor(value, x) {
    this.value = value;
    this.x = x;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  insertToTree(value, x) {
    const newNode = new Node(value, x);
    if (!this.root) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(parentNode, newNode) {
    if (newNode.x < parentNode.x) {
      if (parentNode.left) {
        this.insertNode(parentNode.left, newNode);
      } else {
        parentNode.left = newNode;
      }
    } else {
      if (parentNode.right) {
        this.insertNode(parentNode.right, newNode);
      } else {
        parentNode.right = newNode;
      }
    }
  }

  preOrder() {
    const result = [];
    const stack = [this.root];

    while (stack.length > 0) {
      const currentNode = stack.pop();
      result.push(currentNode.value);
      if (currentNode.right) stack.push(currentNode.right);
      if (currentNode.left) stack.push(currentNode.left);
    }

    return result;
  }

  preOrder1(currentNode = this.root, result = []) {
    if (currentNode) {
      result.push(currentNode.value);
      this.preOrder1(currentNode.left, result);
      this.preOrder1(currentNode.right, result);
    }

    return result;
  }

  postOrder(currentNode = this.root, result = []) {
    if (currentNode) {
      this.postOrder(currentNode.left, result);
      this.postOrder(currentNode.right, result);
      result.push(currentNode.value);
    }

    return result;
  }
}

// 전위 순회 : 부모 -> 왼쪽 자식 -> 오른쪽 자식
// 후위 순회 : 왼쪽 자식 -> 오른쪽 자식 -> 부모
