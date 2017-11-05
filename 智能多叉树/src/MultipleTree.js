/**
 * Created by zouzehua on 2016-8-22.
 */
class MultipleTree {
    static  run() {
        //读取层次数据结果集列表
        let dataList = VirtualDataGenerator.getVirtualResult();
        // 构造加权多叉树
        let root = this.buildWeightedMultiTree(dataList);

        // 构造功能叶子列表
        let functionLeafList = this.buildFunctionLeafList(root);

        // 对多叉树重新进行横向排序
        root.sortChildren();
        // 输出首次登录后的树形菜单
        console.log("首次登录时的树形菜单：\n" + root.toString());

        // 进行菜单节点搜索（即功能路径筛选）
        this.searchTreeNode(root, "123");

        // 输出搜索结果
        console.log("搜索后的树形菜单：\n" + root.toString());
        // 增加功能路径权值
        this.increaseRouteWeight(root, functionLeafList, "122");
        this.increaseRouteWeight(root, functionLeafList, "323");
        //
        // // 对多叉树重新进行横向排序
        root.sortChildren();
        // // 输出权值变化后的树形菜单
        console.log("路径权值变化后再次登录时的树形菜单：\n" + root.toString());
        //
        // // 获取热点功能叶子
        let hotFunctionLeaf = this.getHotFunctionLeaf(functionLeafList);
        //
        // // 输出热点功能叶子
        this.printHotFunctionLeaf(hotFunctionLeaf);
        console.log(root);
        // 程序输出结果如下：

        //首次登录时的树形菜单：
        //{id : 0, text : 根, children : [{id : 1, text : 1, children : [{id : 11, text : 11, children : [{id : 111, text : 111, leaf : true}]},{id : 12, text : 12, children : [{id : 121, text : 121, leaf : true},{id : 122, text : 122, leaf : true},{id : 123, text : 123, leaf : true}]}]},{id : 2, text : 2, children : [{id : 21, text : 21, leaf : true}]},{id : 3, text : 3, children : [{id : 31, text : 31, leaf : true},{id : 32, text : 32, children : [{id : 321, text : 321, leaf : true},{id : 322, text : 322, leaf : true},{id : 323, text : 323, leaf : true}]}]},{id : 4, text : 4, children : [{id : 41, text : 41, leaf : true},{id : 43, text : 43, leaf : true}]}]}
        //  搜索后的树形菜单：
        //{id : 0, text : 根, children : [{id : 1, text : 1, children : [{id : 12, text : 12, children : [{id : 123, text : 123, leaf : true}]}]}]}
        //路径权值变化后再次登录时的树形菜单：
        //{id : 0, text : 根, children : [{id : 2, text : 2, children : [{id : 21, text : 21, leaf : true}]},{id : 4, text : 4, children : [{id : 41, text : 41, leaf : true},{id : 43, text : 43, leaf : true}]},{id : 1, text : 1, children : [{id : 12, text : 12, children : [{id : 121, text : 121, leaf : true},{id : 122, text : 122, leaf : true},{id : 123, text : 123, leaf : true}]},{id : 11, text : 11, children : [{id : 111, text : 111, leaf : true}]}]},{id : 3, text : 3, children : [{id : 31, text : 31, leaf : true},{id : 32, text : 32, children : [{id : 322, text : 322, leaf : true},{id : 323, text : 323, leaf : true},{id : 321, text : 321, leaf : true}]}]}]}
        //输出热点功能叶子
        //[{id : 111, text : 111, leaf : true},{id : 321, text : 321, leaf : true}]
    }

    /**
     * 构造加权多叉树
     * @return
     */
    static buildWeightedMultiTree(dataList) {
        // 节点列表（散列表，用于临时存储节点对象）
        let nodeList = [];
        // 根节点
        let root = new Node();
        // 根据结果集构造节点列表（存入散列表）
        for (let i in dataList) {
            let value = dataList[i];
            let node = new Node();
            node.id = value['id'];
            node.text = value['text'];
            node.parentId = value['parentId'];
            node.weight = value['weight'];
            nodeList[node.id] = node;
        }

        for (let i in nodeList) {
            let node = nodeList[i];
            if ('-1' == node.parentId) {
                root = node;
            } else {
                nodeList[node.parentId].addChild(node);
                node.parentNode = nodeList[node.parentId];
            }
        }
        console.log(root);
        return root;
    }

    /**
     * 构造功能叶子列表
     * @param root
     * @return
     */
    static  buildFunctionLeafList(root) {
        let functionLeafList = [];
        root.initializeLeafList(functionLeafList);

        return functionLeafList;
    }

    /**
     * 进行菜单节点搜索（即功能路径筛选）
     * @param root
     * @param keyWord
     */
    static  searchTreeNode(root, keyWord) {
        // 首先设置整棵树的功能路径为不可见
        root.setTreeNotVisible();
        // 在整棵功能树中搜索包含关键字的节点，并进行路径筛选
        root.searchTreeNode(keyWord);
    }

    /**
     * 增加功能路径权值
     * @param root
     */
    static   increaseRouteWeight(root, functionLeafList, nodeId) {
        // 首先设置整棵树的功能路径为可见
        root.setTreeVisible();
        // 对包含功能叶子节点的路径权值加1
        for (let i in functionLeafList) {
            let leafNode = functionLeafList[i];
            if (leafNode.id == nodeId) {
                leafNode.increaseRouteWeight();
            }
        }
    }

    /**
     * 获取热点功能叶子
     * @param functionLeafList
     * @return
     */
    static  getHotFunctionLeaf(functionLeafList) {
        let count = 0, totalWeight = 0;
        for (let i in functionLeafList) {
            let node = functionLeafList[i];
            totalWeight += node.weight;
            count++;
        }

        //这里平均权重为四舍五入
        let avgWeight = (count > 0) ? this.getRound(totalWeight / count, 2) : 0;


        let retList = [];
        for (let i in functionLeafList) {
            let node = functionLeafList[i];
            if (node.weight > avgWeight) {
                retList.push(node);
            }
        }

        return retList;
    }

    static  getRound(num, len) {
        return Math.round(num * Math.pow(10, len)) / Math.pow(10, len);
    }

    /**
     * 输出热点功能叶子
     * @param hotFunctionLeaf
     */
    static  printHotFunctionLeaf(hotFunctionLeaf) {
        let result = '[';
        if (hotFunctionLeaf) {
            for (let i in hotFunctionLeaf) {
                let node = hotFunctionLeaf[i];
                let ret = node.toString();
                if (ret) {
                    result += ret + ',';
                }
            }
        }
        result = result = result.substring(0, result.length - 1) + ']';

        console.log("输出热点功能叶子\n" + result);
    }
}