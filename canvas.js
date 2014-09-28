function canvasTool(ctx) {

	var API = {};
	API.drawForest = drawForest;
	return API;

	function drawForest(forest) {
		ctx.translate(0, canvas.height);
		ctx.scale(1, -1);
		for(var i=0; i<forest.size; i++) {
			drawTree(forest.trees[i]);
		}
		ctx.translate(0, 0);
		ctx.scale(1, 1);
	};

	function drawTree(tree) {
		var depth = 0;
		drawBranch(-1,tree.getRoot().x, 0, tree.getRoot().x, tree.getRoot().y);
		while(true) {
			for(var i=0; i<(1<<depth) ;i++){
				var currentNode = tree.getNode(depth,i);
				var rightNode = tree.getRightChildValue(i-1+(1<<depth));
				var leftNode = tree.getLeftChildValue(i-1+(1<<depth));
				drawBranch(depth, currentNode.x, currentNode.y, rightNode.x, rightNode.y);
				drawBranch(depth, currentNode.x, currentNode.y, leftNode.x, leftNode.y);
			}
			depth++;
			if(tree.getNode(depth+1,0) == undefined) break;
		}
	};


	function drawBranch(depth, startX, startY, targetX, targetY) {
		ctx.strokeStyle = treeColor(depth);
		ctx.beginPath();
		ctx.lineWidth = 4*(Math.pow(.7,depth+1));
		ctx.moveTo(startX,startY);
		ctx.lineTo(targetX,targetY);
		ctx.stroke();
		ctx.closePath();
	};

	//function treeColor(depth) {return ;}
	function treeColor(depth) {
		if(depth < 2) return '#2C200F';
		else return "rgb(0, "+ 25*(depth+1) +", 0)";
	}
	
} 


