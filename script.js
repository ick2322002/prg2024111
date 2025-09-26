// 1. 時刻を表示するHTML要素を取得
const clockElement = document.getElementById('clock');

// 2. 現在の時刻を取得し、整形して表示する関数
function updateClock() {
    // 現在の日付と時刻を取得
    const now = new Date(); 

    // 時、分、秒を取得
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    // 桁が1桁だった場合、頭に '0' をつけて2桁にする（例: 5 -> 05）
    // 条件演算子 (三項演算子) を使って短く記述
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    // 時刻を "HH:MM:SS" の形式にまとめる
    const timeString = ${hours}:${minutes}:${seconds};

    // 取得したHTML要素（clockElement）のテキストを更新
    clockElement.textContent = timeString;
}

// 3. 1000ミリ秒（1秒）ごとに updateClock 関数を実行する
// これにより、時刻がリアルタイムで更新され続けます
setInterval(updateClock, 1000);

// プログラムが開始されたとき、すぐに一度時刻を表示しておく
updateClock();

