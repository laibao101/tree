interface treeHtml {
    ul : HTMLElement;
    li : HTMLElement;
}

class Tree {
    private _data : treeData[];
    private _tree : HTMLElement = document.createElement("ul");
    private _container : HTMLElement;
    private _sortData : treeData[];
    private root : treeData;
    constructor(data : treeData[]) {
        this._data = data;
    }

    /**
     * 返回data
     */
    get data() {
        return this._data;
    }

    get html() {
        return this._tree;
    }

    /**
     * 创建一个树形组件
     */
    create() {
        const ul : HTMLElement = this._curateUl();

        this._container = ul;
        ul.className = "tree-container";

        const root = this._getRoot();

        console.log(root);
        this._getTreeData();
        // this
        //     ._data
        //     .forEach((treeItem) => {
        //         const li : HTMLElement = this._createLi();
        //         this
        //             ._container
        //             .appendChild(li);
        //         li.className = "tree-item";
        //         li.innerText = treeItem.element;
        //         li.id = `tree-item-${treeItem.id}`;
        //         li.setAttribute("data-pid", `${treeItem.pid}`);
        //     }, this);
        // this._tree = this._container;
    }

    /**
     * 刷新数据,重新生成一个树
     */
    fresh(data : treeData[]) {
        this._data = data;
    }

    /**
     * 组件的ul部分
     */
    _curateUl() : HTMLElement {
        return document.createElement('ul');
    }

    /**
     * 组件的li部分html
     */
    _createLi() : HTMLElement {
        return document.createElement('li');
    }
    /**
     * 获取root,pid最小的就是root
     */
    _getRoot() {
        this._sortData = Array.from(this._data);
        this
            ._sortData
            .sort((a, b) => a.pid - b.pid);
        this.root = this._sortData[0];
        this._sortData.splice(0,1);
        return this.root;
    }

    /**
     * 获取treeData
     */
    _getTreeData(){
        console.log(this._getChild(this.root.pid));
    }

    /**
     * 获取当前元素的子节点
     */
    _getChild(pid:number){
        let result:treeData[]=[];
        this._sortData.forEach((item,index) => {
            if(item.pid === pid){
                result.push(item);
                this._sortData.splice(index,1);
            }
        });

        return result;
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
tree.create();
console.log(tree.html);
