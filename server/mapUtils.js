const mapUtils = {

  createMap: (walls) => {
    let n = walls.length;
    let m = Math.max(...walls) + 1;
    let newMap = [];
    for (let i = 0; i < m; i++ ) {
      let row = [];
      for (let j = 0; j < n; j++) {
        row.push(0)
      }
      newMap.push(row)
    }
    return newMap;
  },

  editMap: (counter, map, newVal) => {
    for (let i = 0; i < map[0].length; i++) {
      for (let j = map.length - 1; j >= 0; j-- ) {
        if (map[j][i] === 0 && counter[i]) {
          map[j][i] = newVal;
          counter[i]--;
        }
      }
    }
    return map;
  },

  boldColumn: (col, map, newVal) => {
    for (let i = map.length - 1; i >= 0; i--) {
      if (map[i][col]) {
        map[i][col] = newVal;
      }
    }
    return map;
  }
};

module.exports = mapUtils;