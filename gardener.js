function gardener() {

	var BRANCH_SIZE = 50;
	var forest = {'size':0, 'trees':[]};

	function createTree(x, size) {
		var tree = new BinaryTree();
		var root = {'x':x, 'y':BRANCH_SIZE, 'angle':Math.PI/2};
		tree.setRoot(root);
		plantTree(tree, 0, size);
		forest.trees.push(tree);
		forest.size++;
	};


	function createTreeNode(root, depth) {
	    var angle = root.angle + Math.random()*Math.PI/2 - Math.PI/4;
	    var x = root.x + BRANCH_SIZE*(Math.pow(.8,depth))*Math.cos(angle);
		var y = root.y + BRANCH_SIZE*(Math.pow(.8,depth))*Math.sin(angle);
	    return {'x':x,'y':y,'angle':angle};
	}


	function plantTree(tree, currentDepth, depth){
	    if(depth>0) {
			for(var i=0; i<(1<<currentDepth) ;i++){
				var currentNode = tree.getNode(currentDepth,i);
				var rightNode = createTreeNode(currentNode, currentDepth);
				var leftNode = createTreeNode(currentNode, currentDepth);
				tree.setNode((i-1+(1<<currentDepth))*2 + 1, leftNode);
				tree.setNode((i-1+(1<<currentDepth))*2 + 2, rightNode);
			}
			plantTree(tree, currentDepth+1, depth-1);
	    }
	}

	function branchSize(size) { BRANCH_SIZE = size};
	function reset() { forest = {'size':0, 'trees':[]}};


	var API = {};
	API.forest = forest;
	API.branchSize = branchSize;
	API.reset = reset;
	API.createTree = createTree;
	return API;
}


