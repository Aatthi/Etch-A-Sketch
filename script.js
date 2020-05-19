
let container = document.getElementById("container");


makeRows(30,30);
function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  
  for (c = 0; c < (rows * cols); c++) {
    const cell = document.createElement("div");
    container.appendChild(cell).className = "grid-item";
    cell.addEventListener('mouseover', () => 
    {
      cell.style.backgroundColor = 'teal';
    });
    cell.addEventListener('mouseleave', () => 
    {
       cell.style.backgroundColor = 'teal';
    });
    let resetButton = document.getElementById('reset');
    resetButton.addEventListener('click', () => 
    {
     cell.style.background = '';
    });
    let newFile = document.getElementById('new');
    newFile.addEventListener('click', () => {
    cell.style.background = '';
  });
  }
};
  
  let newFile = document.getElementById('new');
  newFile.addEventListener('click', () => {
    let userInput = prompt('How many squares per size?');
     makeRows(userInput, userInput)
     if (userInput == null || userInput == ""){
       return makeRows(30, 30);
     } else if(userInput > 100){
       alert 
     }
  });
  
  

