var zNodes = [
    { id: 0, pid: -1, name: "Aaaa" },
    { id: 1, pid: 0, name: "A" },
    { id: 11, pid: 1, name: "A1" },
    { id: 12, pid: 1, name: "A2" },
    { id: 13, pid: 1, name: "A3" },
    { id: 2, pid: 0, name: "B" },
    { id: 21, pid: 2, name: "B1" },
    { id: 22, pid: 2, name: "B2" },
    { id: 23, pid: 2, name: "B3" },
    { id: 3, pid: 0, name: "C" },
    { id: 31, pid: 3, name: "C1" },
    { id: 32, pid: 3, name: "C2" },
    { id: 33, pid: 3, name: "C3" },
    { id: 34, pid: 31, name: "x" },
    { id: 35, pid: 31, name: "y" },
    { id: 36, pid: 31, name: "z" },
    { id: 37, pid: 36, name: "z1123" },
    { id: 38, pid: 37, name: "z123123123" },
];
function TreeNode(values) {
    this.values = values;
    this.id = values.id;
    this.pid = values.pid;
    this.parent = null;
    this.children = [];
}

function Tree(config) {
    this.root = null;
    
    this.init = function () {
        if (typeof config === 'undefined') {
            throw new Error("请传入配置");
        }
        if (typeof config.rootId === 'undefined') {
            throw new Error("请设置根节点");
        }
        if (Object.prototype.toString.call(config.data) !== '[object Array]') {
            throw new Error("请设置数据");
        }
        this.conf = config;
        this.data = this.conf.data;
        getInitData.call(this);
        getInitTree.call(this);
        createTree.call(this);
    }

    this.getTree = function () {
        return this.root;
    }

    var getInitData = function () {
        this.initData = this.data.slice(0);
    }

    var getInitTree = function () {
        this.initTree = [];
        this.initData.forEach(function (item) {
            this.initTree.push(new TreeNode(item));
        }, this);
    }

    var createTree = function () {
        if (this.root === null) {
            this.root = searchNode.call(this, this.conf.rootId);
        }
        for(var i = 0; i< this.initTree.length; i++){
            insert.call(this,this.initTree[i]);
        }
    }

    var insert = function (node) {
        searchParent.call(this,node);
        searchChildren.call(this,node);
    }

    var searchChildren = function (searchNode) {
        this.initTree.forEach(function (node, index) {
            if (node.pid === searchNode.id) {
                searchNode.children.push(node);
            }
        }, this);
    }

    var searchParent = function (searchNode) {
        var parent = null;
        if (searchNode.id !== this.root.id) {
            this.initTree.forEach(function (node, index) {
                if (node.id === searchNode.pid) {
                    searchNode.parent = node;
                    return false;
                }
            }, this);
        }
    }

    var searchNode = function (id) {
        var findNode = null;
        this.initTree.forEach(function (node, index) {
            if (node.id === id) {
                findNode = node;
                return ;
            }
        }, this);
        return findNode;
    }
    this.searchNode = searchNode;
}
var config = {
    data: zNodes,
    rootId: 0
}
var tree = new Tree(config);
tree.init();
console.log(tree.getTree());