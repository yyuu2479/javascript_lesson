function addString(strA){
  let addSr = "Hello" + strA;
  return addSr;
}

let alertString;
alertString = addString("WebCamp");

alert(alertString)


// じゃんけん関数
let user_hand = prompt('じゃんけんの手をグー・チョキ・パーから選んでください！！！');

while(user_hand != "グー"　&& user_hand != "チョキ" && user_hand != "パー" && user_hand != null){
  alert("グー・チョキ・パーのいずれかを入力してください")
  user_hand = prompt('じゃんけんの手をグー・チョキ・パーから選んでください！！！');
}

// じゃんけんの手をランダム出力し変数に代入
let js_hand = getJShand();
// 結果を出力
let judge = winLose(user_hand, js_hand);

if(user_hand != null){
  alert('あなたの選んだ手は' + user_hand + 'です。\nJavaScriptの選んだ手は' + js_hand + 'です。\n結果は' + judge + 'です。');
}else{
  alert("またチャレンジしてね")
}

// じゃんけんの手をランダムで出力
function getJShand() {
  let js_hand_num = Math.floor(Math.random()*3);
  let hand_name;

  if(js_hand_num == 0){
    hand_name = "グー";
  }else if(js_hand_num == 1){
    hand_name = "チョキ";
  }else if(js_hand_num == 2){
    hand_name = "パー";
  }

  return hand_name;
}

// 勝ち負け判定する
function winLose(user, js){
  let winLoseStr;

  if (user == "グー"){
    if (js == "グー"){
      winLoseStr = "あいこ";
    }else if (js == "チョキ"){
      winLoseStr = "勝ち";
    }else if (js == "パー"){
      winLoseStr == "負け";
    }
  }else if(user == "チョキ"){
    if (js == "グー"){
      winLoseStr = "負け";
    }else if (js == "チョキ"){
      winLoseStr = "あいこ";
    }else if (js == "パー"){
      winLoseStr == "勝ち";
    }
  }else if(user == "パー"){
    if (js == "グー"){
      winLoseStr = "勝ち";
    }else if (js == "チョキ"){
      winLoseStr = "負け";
    }else if (js == "パー"){
      winLoseStr == "あいこ";
    }
  }

  return winLoseStr;
}
