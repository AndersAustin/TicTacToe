document.addEventListener('DOMContentLoaded', () => {
  var placer = 'X'
  var gameDone = false;
  var playCounter = 0;
  var playerX = prompt('Hello, please enter the name of Player X');
  var playerY = prompt('Hello, please enter the name of Player Y');

  document.getElementById('playerX').innerHTML = 'Times ' + playerX + ' has won'+ document.getElementById('playerX').innerHTML;
  document.getElementById('playerY').innerHTML = 'Times ' + playerY + ' has won' + document.getElementById('playerY').innerHTML;

  document.getElementById('reset').addEventListener('click', () => {
    for (let element of document.getElementsByClassName('table')) {
      element.innerText = '';
      element.setAttribute('value','not pressed');
    }
    if (gameDone === true) {
      gameDone = false;
      if (placer === 'O') {
        placer = 'X';
      } else {
        placer = 'O';
      }
    } else {
      placer = 'X'
    }
  })

  for (let element of document.getElementsByClassName('table')) {
    element.addEventListener('click', () => {
      clickHandler(element)
    });
  }
  
  clickHandler = (element) => {
    //first see if the clicked value has been pressed before, if not, it becomes a move
    if (element.getAttribute('value') === 'not pressed') {
      element.setAttribute('value','pressed');
      element.innerText = placer;
      playCounter++;
      if (placer === 'X') {
        placer = 'O';
      } else {
        placer = 'X';
      }
    } 
    //next there is the game ending event handler, which is only run if the game is not done
    if (!gameDone) {
      const matrix = [];
      let miniArr = [];
      let counter = 0;

      if (playCounter === 9) {
        alert('Players have tied');
        playCounter = 0;
      }

      for (let element of document.getElementsByClassName('table')) {
        if (counter < 2) {
          miniArr.push(element.innerText);
          counter++;
        } else {
          miniArr.push(element.innerText);
          matrix.push(miniArr);
          miniArr = [];
          counter = 0;
        }
      };
      //go through all possible winning combos
      //check horizontal
      checkHorizontal(matrix);
      //check vertical
      checkVertical(matrix);
      //check major diagonal
      checkMajorDiag(matrix);
      //check minor diagonal
      checkMinorDiag(matrix);
    }
  }
  const checkHorizontal = (matrix) => {
    for (let value of matrix) {
      let joined = value.join('');
      if ((!value.includes('X') || !value.includes('O')) && value.length === matrix.length && !value.includes('')) {     
        if (value[0] === 'X') {
          let placeholder = Number(document.getElementById('x_winning').innerText);
          placeholder++;
          alert(playerX + ' has won the game!');
          document.getElementById('x_winning').innerText = placeholder;
        } else {
          let placeholder = Number(document.getElementById('O_winning').innerText);
          placeholder++;
          alert(playerY + ' has won the game!');
          document.getElementById('O_winning').innerText = placeholder;           
        }
        playCounter = 0;
        for (let bit of document.getElementsByClassName('table')) {
          bit.setAttribute('value','pressed');
        }
        gameDone = true;
      };
    }
  }
  
  const checkVertical = (matrix) => {
    for (let i = 0; i < matrix.length; i++) {
      let vertArr = [];
      for (let j = 0; j < matrix.length; j++) {
        vertArr.push(matrix[j][i])
      }
      if ((!vertArr.includes('X') || !vertArr.includes('O')) && vertArr.length === matrix.length && !vertArr.includes('')) {
        if (vertArr[0] === 'X') {
          let placeholder = Number(document.getElementById('x_winning').innerText);
          placeholder++;
          alert(playerX + ' has won the game!');
          document.getElementById('x_winning').innerText = placeholder;
        } else {
          let placeholder = Number(document.getElementById('O_winning').innerText);
          placeholder++;
          alert(playerY + ' has won the game!');
          document.getElementById('O_winning').innerText = placeholder;           
        }
        playCounter = 0;
        for (let bit of document.getElementsByClassName('table')) {
          bit.setAttribute('value','pressed');
        }
        gameDone = true;
      };
    };
  }
  
  const checkMajorDiag = (matrix) => {
    for (let i = 0; i< matrix.length; i++) {
      let majorDiagArr = [];
    for (let j = 0; j < matrix.length; j++) {
      majorDiagArr.push(matrix[j][i+j]);
    }
    if ((!majorDiagArr.includes('X') || !majorDiagArr.includes('O')) && majorDiagArr.length === matrix.length && !majorDiagArr.includes('') && !majorDiagArr.includes(undefined)) {
      if (majorDiagArr[0] === 'X') {
        let placeholder = Number(document.getElementById('x_winning').innerText);
        placeholder++;
        alert(playerX + ' has won the game!');
        document.getElementById('x_winning').innerText = placeholder;
      } else {
        let placeholder = Number(document.getElementById('O_winning').innerText);
        placeholder++;
        alert(playerY + ' has won the game!');
        document.getElementById('O_winning').innerText = placeholder;           
      }
      playCounter = 0;
      for (let bit of document.getElementsByClassName('table')) {
        bit.setAttribute('value','pressed');
      }
      gameDone = true;
    };
  };
  }
  
  const checkMinorDiag = (matrix) => {
    for (let i = 0; i< matrix.length; i++) {
      let minorDiagArr = [];
    for (let j = 0; j < matrix.length; j++) {
      minorDiagArr.push(matrix[j][i-j]);
    }
      if ((!minorDiagArr.includes('X') || !minorDiagArr.includes('O')) && minorDiagArr.length === matrix.length && !minorDiagArr.includes('') && !minorDiagArr.includes(undefined)) {
        if (minorDiagArr[0] === 'X') {
          let placeholder = Number(document.getElementById('x_winning').innerText);
          placeholder++;
          alert(playerX + ' has won the game!');
          document.getElementById('x_winning').innerText = placeholder;
        } else {
          let placeholder = Number(document.getElementById('O_winning').innerText);
          placeholder++;
          alert(playerY + ' has won the game!');
          document.getElementById('O_winning').innerText = placeholder;           
        }
        playCounter = 0;
        for (let bit of document.getElementsByClassName('table')) {
          bit.setAttribute('value','pressed');
        }
        gameDone = true;
      };
    };
  }
});

