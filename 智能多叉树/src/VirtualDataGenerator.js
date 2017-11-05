/**
 * Created by zouzehua on 2016-8-22.
 */

class VirtualDataGenerator {
    static getVirtualResult() {
        let dataList = [];
        dataList.push({id: '0', text: '根', parentId: '-1', 'weight': 1});
        dataList.push({id: '1', text: '1', parentId: '0', 'weight': 1});
        dataList.push({id: '2', text: '2', parentId: '0', 'weight': 1});
        dataList.push({id: '3', text: '3', parentId: '0', 'weight': 1});
        dataList.push({id: '4', text: '4', parentId: '0', 'weight': 1});
        dataList.push({id: '11', text: '11', parentId: '1', 'weight': 1});
        dataList.push({id: '12', text: '12', parentId: '1', 'weight': 1});
        dataList.push({id: '21', text: '21', parentId: '2', 'weight': 1});
        dataList.push({id: '31', text: '31', parentId: '3', 'weight': 1});
        dataList.push({id: '32', text: '32', parentId: '3', 'weight': 1});
        dataList.push({id: '41', text: '41', parentId: '4', 'weight': 1});
        dataList.push({id: '43', text: '43', parentId: '4', 'weight': 1});
        dataList.push({id: '111', text: '111', parentId: '11', 'weight': 1});
        dataList.push({id: '121', text: '121', parentId: '12', 'weight': 1});
        dataList.push({id: '122', text: '122', parentId: '12', 'weight': 1});
        dataList.push({id: '123', text: '123', parentId: '12', 'weight': 1});
        dataList.push({id: '321', text: '321', parentId: '32', 'weight': 1});
        dataList.push({id: '322', text: '322', parentId: '32', 'weight': 1});
        dataList.push({id: '323', text: '323', parentId: '32', 'weight': 1});
        return dataList;
    }
}