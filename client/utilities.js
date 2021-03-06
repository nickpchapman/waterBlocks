const handleSubmit = document.getElementById('submit')
  .addEventListener('click', () => {
    handleClick();
  });

const handleClick = () => {
    let wallInfo = document.getElementById('walls-input').value
    getNewMap(wallInfo);
};

const getNewMap = (walls) => {
  axios.post('/getMap', {
    walls: walls
  })
  .then(function (response) {
    console.log(response);
    renderMap(response.data);
  })
  .catch(function (error) {
    console.log(error);
  });
};

const renderMap = (map) => {
  let count = map.length;
  let newMap = document.getElementById('map-anchor');
  newMap.innerHTML='';
  for (let i = 0; i < map.length; i++) {
    newMap.append(renderRow(map[i], count));
    count--;
  }
};

const renderRow = (row, rowNum) => {
  let newRow = document.createElement('div');
  newRow.classList.add('row');
  newRow.append(renderBlock(rowNum.toString()));
  for (let i = 0; i < row.length; i++) {
    newRow.append(renderBlock(row[i]));
  }
  return newRow;
};

const renderBlock = (block) => {
  let newBlock = document.createElement('div');
    newBlock.classList.add('square')
    if (block === 1) {
      newBlock.classList.add('wall');
    }
    if (block === 2) {
      newBlock.classList.add('water');
    }
    if (block === 3) {
      newBlock.classList.add('bold');
    }
    if (typeof block === 'string') {
      newBlock.innerHTML = block;
    }
    return newBlock;
};