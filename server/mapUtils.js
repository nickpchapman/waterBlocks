const mapUtils = {

  createMap: (walls, callback) => {
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
    callback(null, newMap);
  },

  editMap: (counter, map, newVal, callback) => {
    for (let i = 0; i < map[0].length; i++) {
      for (let j = map.length - 1; j >= 0; j-- ) {
        if (map[j][i] === 0 && counter[i]) {
          map[j][i] = newVal;
          counter[i]--;
        }
      }
    }
    callback(null, map);
  },

  boldColumn: (col, map, newVal, callback) => {
    for (let i = map.length - 1; i >= 0; i--) {
      if (map[i][col]) {
        map[i][col] = newVal;
      }
    }
    callback(null, map);
  }
};

module.exports = mapUtils;