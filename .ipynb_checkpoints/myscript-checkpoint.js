

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

// ひとまず、全部のタスクをJSONから生成してみる
// TinyDBで生成された、DBの内容を、テスト用に準備
// var dummy_tasks = {
//   "_default":
//   {
//   "1": {"task": "apple"},
//   "2": {"task": "peach"},
//   "3": {"task": "banana"},
//   "4": {"task": "orenge"}
//   }
// }

// JSON を 連携
function showAllTasks(){
    // JSONを通信で受け取る -> Flask側でTaskのリストをJSONを書き出す
    $.ajax({
      url: 'http://kamirazio.com:5000/',
      type: 'GET',
      dataType: 'json',
      success: function(data){
          // 通信成功時の処理を記述
          console.log(data);

          // このinputValueをJsonデータに置き換える
          for(var i = 1; i <= Object.keys(data).length ; i++){

            var li = document.createElement("li");
            var myTasklist = document.getElementsByTagName("li");

            //タスクを一個ずつ書き出してみる
            var str = document.createTextNode(dummy_tasks._default[i].task);
            li.appendChild(str);
            document.getElementById("task_list").appendChild(li);
            addCloseBtn(li);
            addCheckFunc(li);
          }
      },
      error: function(XMLHttpRequest, textStatus, errorThrown){
        // 通信失敗時の処理を記述
        console.log('失敗');

        // 失敗の理由を引数で受け取る
        // console.log(XMLHttpRequest);
        // console.log(textStatus);
        // console.log(errorThrown);
      }
    })
}

showAllTasks();
