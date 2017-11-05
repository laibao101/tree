/**
 * Created by zouzehua on 2016-8-22.
 */
/**
 * 孩子列表类
 */
class Children {
    constructor() {
        this.list = [];
    }

    getSize() {
        return this.list.length;
    }

    addChild(node) {
        this.list.push(node);
    }

    // 拼接孩子节点的JSON字符串
    toString() {
        let result = "[";
        for (var i in this.list) {
            if (this.list.hasOwnProperty(i)) {
                let ret = this.list[i].toString();
                if (ret) {
                    result += ret + ',';
                }
            }
        }

        result = result.substring(0, result.length - 1) + ']';

        return result;
    }

    // 孩子节点排序
    sortChildren() {
        // 对本层节点进行排序
        // 可根据不同的排序属性，传入不同的比较器，这里传入ID比较器
        this.list.sort(function (a, b) {
            let a_w = parseInt(a.weight, 10);
            let b_w = parseInt(b.weight, 10);
            if (a_w == b_w) {
                let a_id = parseInt(a.id, 10);
                let b_id = parseInt(b.id, 10);

                return a_id < b_id ? -1 : (a_id == b_id ? 0 : 1);
            }

            return (a_w > b_w) ? -1 : +1;
        });

        // 对每个节点的下一层节点进行排序
        for (var i in this.list) {
            if (this.list.hasOwnProperty(i)) {
                let value = this.list[i];
                value.sortChildren();
            }
        }
    }

// 搜索菜单节点，同时进行功能路径过滤
    searchTreeNode(keyWord) {
        for (var i in this.list) {
            if (this.list.hasOwnProperty(i)) {
                let value = this.list[i];
                value.searchTreeNode(keyWord);
            }
        }
    }

// 设置孩子节点为不可见
    setTreeNotVisible() {
        for (var i in this.list) {
            if (this.list.hasOwnProperty(i)) {
                let value = this.list[i];
                value.setTreeNotVisible();
            }
        }

    }

// 设置孩子节点为可见
    setTreeVisible() {
        for (var i in this.list) {
            if (this.list.hasOwnProperty(i)) {
                let value = this.list[i];
                value.setTreeVisible();
            }
        }
    }

// 在孩子节点中寻找功能叶子节点
    initializeLeafList(leafList) {
        for (var i in this.list) {
            if (this.list.hasOwnProperty(i)) {
                let value = this.list[i];
                value.initializeLeafList(leafList);
            }
        }

    }
}