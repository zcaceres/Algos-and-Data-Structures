const expect = require('chai').expect;
const BinarySearchTree = require('./BSTStart');

xdescribe('Binary Search Tree', () => {
  var tree,
      testArr,
      valuesToInsert = [15, 25, 5, 17, 21, 28, 0, 14, 50, 1, 45, 13, 12, 11, 30, 35, 33, 31, 34];

  beforeEach(function() {
    tree = new BinarySearchTree(20);
    testArr = [];
  });

  describe('ContainsIterative', () => {
    it('returns false if `containsIterative` is passed a value not in the tree', () => {
      valuesToInsert.forEach(function(value){
          tree.insert(value);
      });
      [6, 23, 37, 51].forEach(function(value){
        expect(tree.containsIterative(value)).to.be.false;
      });
    });

    it('returns true if `containsIterative` is passed a value in the tree', () => {
      valuesToInsert.forEach(function(value){
          tree.insert(value);
      });
      valuesToInsert.forEach(function(value){
          expect(tree.containsIterative(value)).to.be.true;
      });
    });
  })

  describe('ContainsRecursive', () => {
    it('returns false if `containsRecursive` is passed a value not in the tree', () => {
      valuesToInsert.forEach(function(value){
          tree.insert(value);
      });
      [6, 23, 37, 51].forEach(function(value){
        expect(tree.containsRecursive(value)).to.be.false;
      });
    });

    it('returns true if `containsRecursive` is passed a value in the tree', () => {
      valuesToInsert.forEach(function(value){
          tree.insert(value);
      });
      valuesToInsert.forEach(function(value){
          expect(tree.containsRecursive(value)).to.be.true;
      });
    });
  })

  // obvious advantage: values are processed respecting their comparative order
  describe('dfsInOrder', () => {
    it('runs depth-first with in-order traversal', function() {
      valuesToInsert.forEach(function(value){
          tree.insert(value);
      });
      tree.dfsInOrder(function(val){ testArr.push(val); });
      expect(testArr).to.deep.equal([ 0, 1, 5, 11, 12, 13, 14, 15, 17, 20, 21, 25, 28, 30, 31, 33, 34, 35, 45, 50 ]);
      testArr = [];
      tree.dfsInOrder(function(val){ testArr.push(val); });
      expect(testArr).to.deep.equal([ 0, 1, 5, 11, 12, 13, 14, 15, 17, 20, 21, 25, 28, 30, 31, 33, 34, 35, 45, 50 ]);
    });
  })

  // one use case: copying a tree (processes roots first)
  describe('dfsPreOrder', () => {
    it('runs depth-first with pre-order traversal', function() {
      valuesToInsert.forEach(function(value){
          tree.insert(value);
      });
      tree.dfsPreOrder(function(val){ testArr.push(val); });
      expect(testArr).to.deep.equal([20, 15, 5, 0, 1, 14, 13, 12, 11, 17, 25, 21, 28, 50, 45, 30, 35, 33, 31, 34]);
    });
  })

  // one use case: deleting a tree (processes leaves first)
  describe('dfsPostOrder', () => {
    it('runs depth-first with post-order traversal', function() {
      valuesToInsert.forEach(function(value){
          tree.insert(value);
      });
      tree.dfsPostOrder(function(val){ testArr.push(val); });
      expect(testArr).to.deep.equal([ 1, 0, 11, 12, 13, 14, 5, 17, 15, 21, 31, 34, 33, 35, 30, 45, 50, 28, 25, 20 ]);
    });
  })
})
