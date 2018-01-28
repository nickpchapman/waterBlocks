document.getElementById('submit')
  .addEventListener('click', () => {
    handleClick();
  });

const handleClick = () => {
    let wallInfo = document.getElementById('walls').value
    getNewMap(wallInfo);
};

const getNewMap = (walls) => {
  axios.post('/getMap', {
    walls: walls
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
};

const renderMap = () => {

};

const renderRow = () => {

};
