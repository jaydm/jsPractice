// This is the implementation of a binary tree
// Best used to allow the sorting of data to be
// split out across receiving the data and
// storing it. This is best when the data is
// not all known at once.

function BinaryTree() {
	this._root = null;
}

BinaryTree.prototype = {
	constructor: BinaryTree,

	add: function(value) {
		var node = {
				value: value,
				left: null;
				right: null;
		};

		var current;

		if (this._root == null) { // empty initial tree
			this._root = node;
		} else {
			current = this._root; // start at the beginning...find where to add node

			while (true) { // keep going till we find a place to insert the node
				if (value < current.value) {
					if (current.left == null) {
						current.left = node;

						break;
					} else {
						current = current.left;
					}
				} else {
					if (current.right == null) {
						current.right = node;

						break;
					} else {
						current = current.right;
					}
				} else {
					break; // value already in tree
				}
			}
		}
	},

	contains: function(value) {
		if (this._root == null) {
			return false;
		} else if (this._root.value == value) {
			return true;
		} else {
			var current = this._root;

			while (true) {
				if (value < current.value) {
					if (current.left == null) {
						return false;
					} else {
						current = current.left;
					}
				} else if (value > current.value) {
					if (current.right == null) {
						return false;
					} else {
						current = current.right;
					}
				} else {
					return true;
				}
			}
		}
	},

	remove: function(value) {
	},

	size: function() {
	},

	toArray: function() {
	},

	toString: function() {
	}
};

