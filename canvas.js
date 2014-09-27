function canvasTool(context) {

	var API = {};
	API.drawForest = drawForest;
	return API;

	function drawForest(context, forest) {
		context.translate(0, canvas.height);
		context.scale(1, -1);
		for(var i=0; i<forest.size; i++) {
			drawTree(context, forest.trees[i]);
		}
		context.translate(0, 0);
		context.scale(1, 1);
	};

	function drawTree(context, tree) {
		var depth = 0;
		drawBranch(context,-1,tree.getRoot().x, 0, tree.getRoot().x, tree.getRoot().y);
		while(true) {
			for(var i=0; i<(1<<depth) ;i++){
				var currentNode = tree.getNode(depth,i);
				var rightNode = tree.getRightChildValue(i-1+(1<<depth));
				var leftNode = tree.getLeftChildValue(i-1+(1<<depth));
				drawBranch(context, depth, currentNode.x, currentNode.y, rightNode.x, rightNode.y);
				drawBranch(context, depth, currentNode.x, currentNode.y, leftNode.x, leftNode.y);
			}
			depth++;
			if(tree.getNode(depth+1,0) == undefined) break;
		}
	};


	function drawBranch(context, depth, startX, startY, targetX, targetY) {
		context.strokeStyle = treeColor(depth);
		context.beginPath();
		context.lineWidth = 10*(Math.pow(.7,depth+1));
		context.moveTo(startX,startY);
		context.lineTo(targetX,targetY);
		context.stroke();
		context.closePath();
	};

	function treeColor(depth) {return "rgb(0, "+ 25*depth +", 0)";}
	
} 


