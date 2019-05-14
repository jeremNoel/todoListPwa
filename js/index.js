console.log('scripts');
let count;
var xhttp = new XMLHttpRequest();
xhttp.open("GET", "http://localhost:3000/comments", true);
xhttp.send();
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
      generateUl(this.responseText);
      count = JSON.parse(this.responseText).length;
  }
};

// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

function deleteElementOnDb(id) {
  console.log('hey ?');
  let options = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  }
  return fetch("http://localhost:3000/comments/"+id, options)
    .then((response) => response.json)
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

function generateUl(list) {
  var parsed = JSON.parse(list);
  console.warn('result : ',parsed);
  parsed.forEach(function (arrayItem) {
    var node = document.createElement("LI");
    var textnode = document.createTextNode(arrayItem.title);  
    if(arrayItem.checked) {
      node.className = 'checked';
    }
    node.id = arrayItem.id;       
    node.appendChild(textnode);                              
    document.getElementById("myUL").appendChild(node);
    console.log('list element : ', arrayItem);


    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    var li = document.createElement("li");
    li.appendChild(span);

    for (i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        deleteElementOnDb(arrayItem.id);
        var div = this.parentElement;
        div.style.display = "none";
      }
    }
});
}

function create(data) {
  console.log('hey ?');
  let options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }
  return fetch("http://localhost:3000/comments", options)
    .then((response) => response.json)
}

// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  console.warn('cout', count);
  li.id = count+1;
  count++;
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    create({"title": inputValue, "checked": false});
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      console.warn('li: ', li.id);
      deleteElementOnDb(li.id);
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}