'use strict';

{
  function setWord() {
    word = words.splice(Math.floor(Math.random() * words.length), 1)[0];   //定数配列wordsからランダムに文字列を抽出
    target.textContent = word;
    loc = 0;
  }

  const words = [
    'red',
    'blue',
    'pink',
  ];

  let word;
  let loc = 0;
  let startTime;
  let isPlaying = false;    //「true」 or 「false」フラッグ判定に使える
  const target = document.getElementById('target');
 
  document.addEventListener('click', () => {
    if(isPlaying === true) {//ゲームの途中にクリックされると元に戻る不具合の修正
      return;
    }

    isPlaying = true;
    startTime = Date.now();
    setWord();
  });

  //addEventListener(イベントの種類, クリックした時に実行したい処理)
  document.addEventListener('keydown', e => {
    if (e.key !== word[loc]) {//不正解だった場合
      return;
    }

    loc++;
    target.textContent = '_'.repeat(loc) + word.substring(loc);
    //.repeat(変数)…変数の数だけ文字列を表示  //substring(変数)…変数番目以降の文字を取り出す

    //↑main以外のケースを先に除外してmainを簡潔にするやり方を「早期リターン」と呼ぶ

    if(loc === word.length) {
      if (words.length === 0) {
        const elapsedTime = ((Date.now() - startTime) / 1000).toFixed(2);
        const result = document.getElementById('result');
        result.textContent = `Finished! ${elapsedTime} seconds!`
        return;
      }
      setWord();
    }
    //↑Date.now()…現在の時刻を記録  //(数値)/toFixed(桁数)…数値を指定した桁数だけまとめる
  });
}