const element = document.querySelector('#some-div');
const fragment = document.createDocumentFragment();

const size = 4;
const cellSideSize = 50;

element.style.width = (cellSideSize * size) + 'px';
element.style.height = (cellSideSize * size) + 'px';

for (let i = 1; i <= size * size; i++) {
  let cell = document.createElement('div');
  cell.classList.add('cell');

  cell.addEventListener('mouseover', function () {
  cell.classList.add('hovered');
});

  cell.addEventListener('mouseout', function () {
	cell.classList.remove('hovered');
});

  fragment.appendChild(cell); 
}

element.appendChild(fragment);