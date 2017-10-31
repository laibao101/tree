class TreeNode {
    public key : number;
    public parent : number;
    public children : TreeNode[];
    public element : string;
    constructor(node : treeData) {
        this.key = node.id;
        this.parent = node.pid;
        this.element = node.element;
        this.children = [];
    }
}

interface TreeNode {
    key : number;
    parent : number;
    children : TreeNode[];
    element : string;
}

class Tree {
    private _data : treeData[];
    private root : TreeNode;
    constructor(data : treeData[]) {
        this._data = data;
        this._initTree();
    }

    _initTree() {
        const initData = Array.from(this._data);
        let count = 0;
        while (initData.length&& count < initData.length) {
            if (this.root) {
                if (initData[count].pid === this.root.key) {
                    this
                        .root
                        .children
                        .push(new TreeNode(initData[count]));
                }
                count++;
            } else {
                this.root = new TreeNode({id: 0, pid: -1, element: 'root'});
            }
        }
    }

}



interface treeData {
    element : string;
    id : number;
    pid : number;
}

const data : treeData[] = [
    {
        element: '轮播',
        id: 2,
        pid: 1
    }, {
        element: '轮播小图',
        id: 3,
        pid: 2
    }, {
        element: '首页',
        id: 1,
        pid: 0
    }, {
        element: '轮播大图',
        id: 4,
        pid: 2
    }, {
        element: '产品',
        id: 5,
        pid: 0
    }, {
        element: '蔬菜',
        id: 6,
        pid: 5
    }, {
        element: '有机蔬菜',
        id: 7,
        pid: 6
    }, {
        element: '无机蔬菜',
        id: 8,
        pid: 6
    }, {
        element: '水果',
        id: 9,
        pid: 5
    }, {
        element: '有机水果',
        id: 10,
        pid: 9
    }, {
        element: '有机大水果',
        id: 11,
        pid: 10
    }, {
        element: '有机小水果',
        id: 12,
        pid: 10
    }, {
        element: '无机水果',
        id: 13,
        pid: 9
    }
];

// 单元测试 
const tree = new Tree(data);

console.log(tree);