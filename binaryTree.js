function BinaryTree() {
	var nodes = new Array();
	this.n = nodes;
	function nodePosition(lvl,childNumber) {return childNumber-1+(1<<lvl);};	
	function setNodeAbsolute(position, value) { nodes[position] = value;};
	function getNodeAbsolute(position) { return nodes[position];};	

	function setNodeRelative(lvl, childNumber, value) {
		if(lvl == 0 && childNumber !=0) return;
		if(childNumber != 0 && childNumber > (1<<lvl)-1) return;
		nodes[nodePosition(lvl,childNumber)] = value;
	};
	
	function getNodeRelative(lvl, childNumber) {
		if(lvl == 0 && childNumber !=0) return undefined;
		if(childNumber != 0 && childNumber > (1<<lvl)-1) return undefined;
		return nodes[nodePosition(lvl,childNumber)];
	};
	
	this.setNode = function(arg1, arg2, arg3) {
		if(arguments.length == 2) setNodeAbsolute(arg1, arg2);
		setNodeRelative(arg1, arg2, arg3);
	}
	
	this.getNode = function(arg1, arg2) {
		if(arguments.length == 1) return getNodeAbsolute(arg1);
		return getNodeRelative(arg1, arg2);
	}
    
	this.setRoot = function(value) {this.setNode(0,0,value);};
	this.getRoot = function() {return this.getNode(0,0);};
	this.getRightChildKey = function(fatherKey) {return fatherKey*2+2;};
	this.getLeftChildKey = function(fatherKey) {return fatherKey*2+1;};
	this.getRightChildValue = function(fatherKey) {return nodes[this.getRightChildKey(fatherKey)];};
	this.getLeftChildValue = function(fatherKey) {return nodes[this.getLeftChildKey(fatherKey)];};
}