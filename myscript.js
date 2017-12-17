
// Create a new list item when clicking on the "Add" button
function newTask() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("task_input").value;
  console.log(inputValue);


  //ここで新しいタスクを作っている
  var str = document.createTextNode(inputValue);
  li.appendChild(str);

  if (inputValue == '') {
    alert("You must write something!");
  } else {

    //ここで新しいタスクを作っている
    document.getElementById("task_list").appendChild(li);
    addCloseBtn(li);
    addCheckFunc(li);
  }
  document.getElementById("task_input").value = "";
}

// Create a "close" button and append it to each list item
function addAllFunction(){
  var myTasklist = document.getElementsByTagName("li");
  for (var i = 0; i < myTasklist.length; i++) {
     // addCloseBtn(myTasklist[i]).addEventListener('click', out('outer'), true);
     // addCheckFunc(myTasklist[i]).addEventListener('click', out('outer'), true);
  }
}

function addCheckFunc(elm){
  elm.onclick = function(){
    this.classList.toggle('checked');
  }
}

function addCloseBtn(elm){
  var closeSign = document.createElement("span");
  var txt = document.createTextNode("x");
  closeSign.className = "close";
  closeSign.appendChild(txt);
  elm.appendChild(closeSign);

  closeSign.onclick = function() {
    elm.style.display = "none";
  }
}

addAllFunction();

// ひとまず、全部のタスクをJSONから生成してみる
// TinyDBで生成された、DBの内容を、テスト用に準備
var dummy_tasks = {
  "_default":
  {
  "1": {"task": "apple"},
  "2": {"task": "peach"},
  "3": {"task": "banana"},
  "4": {"task": "orenge"}
  }
}

// console.log(dummy_tasks);
console.log(dummy_tasks._default);
console.log(Object.keys(dummy_tasks._default));

for(var i = 1; i <= Object.keys(dummy_tasks._default).length ; i++){
  // forのチェック
  console.log(i);
  //タスクを一個ずつ書き出してみる1
  console.log(dummy_tasks._default[i].task);
}

function showAllTasks(){
    // このinputValueをJsonデータに置き換える
    var str = document.createTextNode(inputValue);
    li.appendChild(str);
    document.getElementById("task_list").appendChild(li);
    addCloseBtn(li);
    addCheckFunc(li);
}
