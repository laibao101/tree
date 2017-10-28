interface treeHtml {
    ul:HTMLElement;
    li:HTMLElement;
}


class Tree {
    private _data:treeData[];
    private _tree:HTMLElement;
    private _container:HTMLElement;
    constructor(data:treeData[]){
        this._data = data;
    }

    /**
     * 返回data
     */
    get data(){
        return this._data;
    }

    get html(){
        return this._tree;
    }

    /**
     * 创建一个树形组件
     */
    create(){
        const {ul} = this._html();

        this._container = ul;
        ul.className="tree-container";

        this._data.forEach((treeItem)=>{
            const {li} = this._html();
            this._container.appendChild(li);
            li.className="tree-item";
            li.innerText = treeItem.element;
            li.id = `tree-item-${treeItem.id}`;
        },this);
        this._tree = this._container;
    }

    /**
     * 刷新数据,重新生成一个树
     */
    fresh(){

    }

    /**
     * 组件的html部分
     */
    _html():treeHtml{
        return {
            ul:document.createElement('ul'),
            li:document.createElement('li')
        };
    }

}


interface treeData {
    element:string;
    id:number;
    pid:number;
}

const data:treeData[] = [  
    {element:'轮播',id:2,pid:1},  
    {element:'轮播小图',id:3,pid:2},  
    {element:'首页',id:1,pid:0},  
    {element:'轮播大图',id:4,pid:2},  
    {element:'产品',id:5,pid:0},  
    {element:'蔬菜',id:6,pid:5},  
    {element:'有机蔬菜',id:7,pid:6},  
    {element:'无机蔬菜',id:8,pid:6},  
    {element:'水果',id:9,pid:5},  
    {element:'有机水果',id:10,pid:9},  
    {element:'有机大水果',id:11,pid:10},  
    {element:'有机小水果',id:12,pid:10},  
    {element:'无机水果',id:13,pid:9},  
];  


// 单元测试
const tree = new Tree(data);
tree.create();
console.log(tree.html);
console.log(tree.data);