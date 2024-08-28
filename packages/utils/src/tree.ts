// 数组转tree
export const listToTree = (list: any[] = []) => {
  const result: any[] = []; // 用于存放结果
  const map: any = {}; // 用于存放 list 下的节点

  // 1. 遍历 list，将 list 下的所有节点以 id 作为索引存入 map
  for (const item of list) {
    map[item.id] = { ...item, children: null }; // 浅拷贝
  }

  // 2. 再次遍历，将根节点放入最外层，子节点放入父节点
  for (const item of list) {
    // 3. 获取节点的 id 和 父 id
    const { id, parentId } = item; // ES6 解构赋值
    // 4. 如果是根节点，存入 result
    if (item.parentId === 0) {
      result.push(map[id]);
    } else {
      // 5. 反之，存入到父节点
      map[parentId].children
        ? map[parentId].children.push(map[id])
        : (map[parentId].children = [map[id]]);
    }
  }

  // 将结果返回
  return result;
};

// 树转列表
export function treeToList<T = any>(tree: any): T {
  const result: any = [...tree];
  for (let i = 0; i < result.length; i++) {
    if (!result[i]?.children) continue;
    result.splice(i + 1, 0, ...result[i]?.children);
  }
  return result;
}

// 获取面包屑
export function getCrumbs(menus: any[], pathname: string) {
  const crumbs: any[] = [];
  menus.forEach((item: any) => {
    if (pathname.startsWith(item.pathname)) {
      crumbs.push({
        ...item
      });
    }
    if (item.children?.length) {
      crumbs.push(...getCrumbs(item.children, pathname));
    }
  });
  return crumbs;
}
