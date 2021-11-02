const input = document.querySelector('input');
const items = document.querySelector('.items');
const addBtn = document.querySelector('.footer__button');

function onAdd() {
  const text = input.value;
  if (text === '') {
    input.focus();
    return;
  }
  const item = createItem(text);
  
  items.appendChild(item);
  item.scrollIntoView({ block: 'center'});
  input.value = '';
  input.focus();
}

function createItem(text) {
  const itemRow = document.createElement('li');
  itemRow.setAttribute('class', 'item__row');
  
  const item = document.createElement('div');
  item.setAttribute('class', 'item');
  
  const itemName= document.createElement('span');
  itemName.setAttribute('class', 'item__name');
  itemName.innerText = text;
  
  const deleteBtn = document.createElement('button');
  deleteBtn.setAttribute('class', 'item__delete');
  deleteBtn.innerHTML = '<i class="fas fa-trash"></i>';
  deleteBtn.addEventListener('click', () => {
    items.removeChild(itemRow);
  });
  
  const ItemDivider = document.createElement('div');
  ItemDivider.setAttribute('class', 'divider');

  item.appendChild(itemName);
  item.appendChild(deleteBtn);

  itemRow.appendChild(item);
  itemRow.appendChild(ItemDivider);

  return itemRow;
}
addBtn.addEventListener('click', () => {
  onAdd();
})

input.addEventListener('keypress', e => {
  if (e.key === 'Enter') {
    onAdd();
  }
})

