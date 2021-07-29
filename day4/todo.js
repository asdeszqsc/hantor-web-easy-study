let num = 0;

const appendlist = () =>{
  let text = document.getElementById('inputText').value;
  let node = document.createElement('li');
  node.setAttribute('onclick', 'listClick()');
  node.setAttribute('id', `listChild-${num++}`);
  node.innerHTML = text;
  
  let parent = document.getElementById('list');
  parent.appendChild(node);
}

const listClick = () =>{
  let stylenode = event.target;
  stylenode.style.textDecoration = 'line-through';
}

