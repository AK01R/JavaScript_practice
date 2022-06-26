'use strict';

{
  function update() {
    //querySelector()は要素を取得する
    // document.querySelector('h1').textContent = 'Changed!';
    //要素にid属性を指定した場合にはgetElementById(id属性の名前)を使う
    document.getElementById('target').textContent = 'Changed!';

    //複数の要素を取得したい場合 querySelectorAll('要素名')[変更したい場所]
    // document.querySelectorAll('p')[2].textContent = 'Changed!';

    //forEachを使うとすべての要素を取得することができる
    document.querySelectorAll('p').forEach((p, index) => {
      p.textContent = `${index}番目のpです！`;
    });
  }
  setTimeout(update, 1000);

  //addEventListener()はクリックした時の処理を指定することができる
  document.querySelector('button').addEventListener('click', () => {
    const targetNode = document.getElementById('target');

    //属性の要素を操作する方法
    document.getElementById('target').textContent = 'Changed!';
    targetNode.title = 'This is title!';
    targetNode.style.color = 'red';
    targetNode.style.backgroundColor = 'skyblue';   // -ではなく2単語目以降の文字を大文字に

    //classNameを使ってクラス属性を操作する方法について
    //ただし、もとからh1にclassが指定されている場合はclass名を後ろに付け加える必要がある
    targetNode.className = 'my-color my-border';

    //もっと簡単な方法 class list
    //classlistを使えば、後ろにclass名を付ける必要がなくなる
    targetNode.classList.add('my-color');
    if (targetNode.classList.contains('my-color') === true) {
      targetNode.classList.remove('my-color');    //my-colorクラスがついていたら外す
    } else {
      targetNode.classList.add('my-color');   //my-colorクラスがついていなかったら
    }
    //↑これをもっと簡単な命令にしたのが
    targetNode.classList.toggle('my-color');
  });
} 
