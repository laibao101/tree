/**
 * Created by zouzehua on 2016-8-22.
 */
/**
 * 节点类
 */
class Node {
    /**
     * Node constructor.
     */
    constructor() {
        this.id;
        this.text;
        this.parentId;
        this.weight;
        this.parentNode = null;
        this.visible = true;
        this.children = new Children();
    }

    // 先序遍历，拼接JSON字符串
    toString() {
        if (this.visible) {
            let result = '{id : ' + this.id + ', text : ' + this.text + ',weight:' + this.weight;

            if (this.children != null && this.children.getSize() != 0) {
                result += ', children : ' + this.children.toString();
            } else {
                result += ', leaf : true';
            }

            return result + '}';
        } else {
            return '';
        }

    }

    // 兄弟节点横向排序
    sortChildren() {
        if (this.children != null && this.children.getSize() != 0) {
            this.children.sortChildren();
        }
    }

    // 添加孩子节点
    addChild(node) {
        this.children.addChild(node);
    }

    // 先序遍历，构造功能叶子列表
    initializeLeafList(leafList) {
        if (this.children.getSize() == 0) {
            leafList.push(this);
        } else {
            this.children.initializeLeafList(leafList);
        }
    }

// 先序遍历，设置该节点下的所有功能路径为不可见
    setTreeNotVisible() {
        this.visible = false;
        if (this.children != null && this.children.getSize() != 0) {

            this.children.setTreeNotVisible();
        }
    }

// 先序遍历，设置该节点下的所有功能路径为可见

    searchTreeNode(keyWord) {
        if (this.text.indexOf(keyWord) > -1) {
            this.setTreeVisible();
            this.setRouteVisible();
        } else {
            if (this.children != null && this.children.getSize() != 0) {
                this.children.searchTreeNode(keyWord);
            }
        }
    }

// 设置包含该叶子节点的功能路径可见

    setTreeVisible() {
        this.visible = true;
        if (this.children != null && this.children.getSize() != 0) {
            this.children.setTreeVisible();
        }
    }


// 先序遍历，搜索菜单节点，同时进行功能路径过滤

    setRouteVisible() {
        this.visible = true;
        let parentNode = this.parentNode;
        while (parentNode != null) {
            parentNode.visible = true;
            parentNode = parentNode.parentNode;
        }
    }

    increaseRouteWeight() {
        this.weight++;
        let parentNode = this.parentNode;
        while (parentNode != null) {
            parentNode.weight++;
            parentNode = parentNode.parentNode;
        }
    }

}