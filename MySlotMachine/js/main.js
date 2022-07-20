'use strict'

{
  class Panel {
    constructor(){
      //↓sectionはconstructor関数の中でしか使わない
      const section = document.createElement('section');
      section.classList.add('panel');

      this.img = document.createElement('img');
      this.img.src = this.getRandomImage();   //ここにgetRandomImageを組み込むことでリロードごとにimgを更新することになる

      this.timeoutId = undefined;   //timeoutIdの定義

      this.stop = document.createElement('div');
      this.stop.textContent = 'STOP';
      this.stop.classList.add('stop', 'inactive');    //最初にinavtiveクラスを付与しておくことでstopが押せないように表示する

      //stopボタンを押した時(クリック時)の処理について
      this.stop.addEventListener('click', () => {
        //指定されたクラスが含まれているか判別し、結果を返すcontains
        if (this.stop.classList.contains('inactive')) {
          return;   //inactiveクラスがついているなら押せない
        }
        this.stop.classList.add('inactive');
        clearTimeout(this.timeoutId);

        panelsLeft--;

        if (panelsLeft === 0) {
          spin.classList.remove('inactive');
          panelsLeft = 3;
          checkResult();
        }
      });

      //↑thisを付けたのはこのクラスの他のメソッドから呼び出したいから

      //appendChildは親要素(section)の末尾に要素(this.img)を追加する
      section.appendChild(this.img);
      section.appendChild(this.stop);

      const main = document.querySelector('main');
      main.appendChild(section);
    }

    //乱数によって決められた画像を返す関数
    getRandomImage() {
      const images = [
        'img/seven.png',
        'img/bell.png',
        'img/cherry.png',
      ];
      return images[Math.floor(Math.random() * images.length)];
    }

    //画像を回転しているように見せる関数
    spin() {
      this.img.src = this.getRandomImage();
      this.timeoutId = setTimeout(() => {
        this.spin();
      }, 50);
      //↑setTimeout(処理内容(関数), 時間)…時間秒ごとに関数を繰り返す(疑似的に繰り返し処理を行う)
    }

    //2つの画像を比較して、その同一性を確かめる関数
    isUnmatched(p1, p2) {
      // if(this.img.src != p1.img.src && this.img.src != p2.img.src) {
      //   return true;
      // }else {
      //   return false;
      // }
      return this.img.src !== p1.img.src && this.img.src !== p2.img.src
    }

    //unmatchedクラスを加えて、CSSのデザインを適用する
    unmatch() {
      this.img.classList.add('unmatched')
    }

    //unmatchedクラスとinactiveクラスを除く
    activate() {
      this.img.classList.remove('unmatched');
      this.stop.classList.remove('inactive')
    }
  }
  
  function checkResult() {
    if (panels[0].isUnmatched(panels[1], panels[2])) {
      panels[0].unmatch();
    }
    if (panels[1].isUnmatched(panels[0], panels[2])) {
      panels[1].unmatch();
    }
    if (panels[2].isUnmatched(panels[0], panels[1])) {
      panels[2].unmatch();
    }
  }

  //インスタンスの生成(回転する画像とstopボタンで1セット)
  const panels = [
    new Panel(),
    new Panel(),
    new Panel(),
  ];

  let panelsLeft = 3;

  //spinボタンを押した時の処理について
  const spin = document.getElementById('spin')
  spin.addEventListener('click', ()=> {
    if (spin.classList.contains('inactive')) {
      return;
    }
    spin.classList.add('inactive');
    panels.forEach(panel => {
      panel.activate();
      panel.spin();
    });
  });
}

//↑今回のプログラムではmain内で定義されるそれぞれ3つずつの画像とstopボタンを一つの塊、つまりは構造体としてプログラムを生成している