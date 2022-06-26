'use strict'

{
  const btn = document.getElementById('btn');

  btn.addEventListener('click', () => {
    const results = ['大吉', '中吉', '凶', '末吉'];
    const n = Math.floor(Math.random() * results.length);
    //Math.floorは数値の小数点以下を切り捨てる
    //results.lengthにしておくと、resultsに追加されたときに対応できる
    // btn.textContent = n
    btn.textContent = results[n];
    // btn.textContent = results[Math.random() * results.length];
    //↑これでも動作する。配列からランダムな数値を取得するのによく使われる

    // //おみくじに確率を加える場合
    // const n = Math.random();   //Math.randomが0から1の実数値を返すことを利用
    // if (n < 0.05) {
    //   btn.textContent = '大吉'; //5%

    // }else if (n < 0.2) {
    //   btn.textContent = '中吉'; //15%
      
    // } else {
    //   btn.textContent = '凶';   //80%

    // }

    // switch (n) {
    //   case 0:凶
    //     btn.textContent = '大吉';
    //     break;
    //   case 1:
    //     btn.textContent = '中吉';
    //     break;
    //   case 2:
    //     btn.textContent = '凶';
    //     break;
    // }
  });
}