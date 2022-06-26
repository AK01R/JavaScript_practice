'use strict';

{
  // 配列
  const scores = [80, 90, 40];
  console.log(scores);

  // 配列の要素に対する代入
  scores[2] = 44;
  console.log(scores)

  // 配列名.lengthで配列の要素数を表示
  console.log(scores.length);

  // for分を用いた配列の表示
  for (let i = 0; i < scores.length; i++) {
    console.log(`Scores ${i}: ${scores[i]}`);
  }
}



{
  // 配列の要素の交換・削除
  const scores2 =[80, 90, 40, 70];
  scores2.push(60, 50);   //配列の最後に要素を追加
  scores2.shift();        //配列の先頭を削除
  for (let i = 0; i <scores2.length; i++) {
    console.log(`Scores2 ${i}: ${scores2[i]}`)
  } // 90, 40 ,70, 60, 50

  // 配列の真ん中の要素を交換・削除するsplice()
  scores2.splice(1, 1, 40, 50);   //配列名.splice(変化が開始する位置, 削除数, 追加する要素,...)
  for (let i = 0; i <scores2.length; i++) {
    console.log(`Scores2 ${i}: ${scores2[i]}`)
  } // 90, 40, 50, 70, 60, 50

  //スプレッド構文...配列名(配列を変数として扱うための記法)
  const otherScores = [10, 20];
  const scores3 =[80, 90, 40, 70, ...otherScores];
  console.log (scores3);
  function sum(a, b) {
    console.log(a + b);
  }
  sum (...otherScores);
  // sum(10, 20);

  //分割代入(配列の要素を分割しながら変数や定数に代入する)
  const scores4 = [80, 90, 40, 70];
  const [a, b, ...others] = scores4;
  console.log(a);
  console.log(b);
  console.log(others);

  //分割代入の応用例(値の交換)
  let x = 30;
  let y = 70;
  [x, y] = [y, x];
  console.log(x);
  console.log(y);
}



{
  //forEach()
  //for分を用いる時とは異なり、要素数を気にする必要がない
  const scores5 =[80, 90, 40, 70];
  scores5.forEach((score, index) => {
    console.log(`Score ${index}: ${score}`);
  });

  //map()
  //配列の各要素に何等かの処理をして、別の配列を作りたい時に便利
  const prices =[180, 190, 200];
  // const updatedPrices = prices.map((price) => {
  //   return price +20 ;
  // });
  //上記の省略記法
  const updatedPrices = prices.map(price => price + 20);
  console.log(updatedPrices)

  //filter()
  //配列の要素の内、条件に合うものだけが抽出され、別の配列として取得される
  const numbers = [1, 4, 7, 8, 10]
  // const evenNumbers = numbers.filter(number => {
  //   if (number % 2 === 0) {
  //     return true ;
  //   }else {
  //     return false;
  //   }
  // });
  //上記の省略記法
  const evenNumbers =numbers.filter(number => number % 2 === 0);
  console.log(evenNumbers);
}



{
  //オブジェクト
  //値を名前付きで管理する
  const point = {
    x: 100, 
    y: 180,
  };
  console.log(point);

  //オブジェクトの呼び出し
  console.log(point.x);
  console.log(point['y']);
  point.z = 90;   //オブジェクトの追加
  console.log(point);
  delete point.y;   //オブジェクトの削除
  console.log(point);

  //オブジェクトトスプレッド構文
  const otherProps = {
    r: 4,
    color: 'red',
  }
  const point2 = { 
    x: 100,
    y: 180,
    ...otherProps,
  }
  console.log(point2);
  const {x, y, ...others} = point2;   //オブジェクトと分割代入・レスト構文
  console.log(x);
  console.log(y);
  console.log(others);

  //Object.keys()
  //オブジェクトをプロパティの一つ対して処理する
  const keys = Object.keys(point);
  keys.forEach(key => {
    console.log(`key: ${key} Value: ${point[key]}`);
  });
  const points = [
    {x: 30, y: 20},
    {x: 10, y: 50},
    {x: 40, y: 40},
  ];   //配列の中にオブジェクトを入れる方法
  console.log(points[1].y);   //オブジェクトの呼び出し
}

{
  //配列の変数を代入した時の挙動
  let x = [1, 2];
  let y = x;
  x[0] = 5;
  console.log(x);   //[5, 2]
  console.log(y);   //[5, 2] ([1, 2]とはならないことに注意！)
  //上記のように値が更新されるのを防ぎたい時はスプレッド構文を使う
  let z = [1, 2];
  let v = [...z];
  z[0] = 5;
  console.log(z);   //[5, 2]
  console.log(v);   //[1, 2]
}



{
  //文字列を扱うための命令
  const str = 'hello';
  console.log(str.length)   //  文字の単語数を表示

  //部分文字列の取得  str.substring(開始位置, 終了位置)
  console.log(str.substring(2, 4));   //llが出力される

  //文字列で配列のように要素を取り出す(値の取りだしができるだけで、文字列を配列のように扱えるわけではない)
  console.log(str[1]);    //eが出力される

  const d = [2019, 11, 14];
  //join('結合したい時の文字')  //文字列dを区切りたい文字をはさんで出力する
  console.log(d.join('/'))    //「2019/11/14」と出力される

  const t = '17:08:24';
  //split('削除したい文字')   //文字列tを削除したい文字列で消して表示させる
  console.log(t.split(':'));    //「17, 08, 24」と出力される
  //文字列と配列の相互変換
  const [hour, minute, second] = t.split(':');
  console.log(hour);
  console.log(minute);
  console.log(second);
}



{
  const scores =[10, 3, 9];

  let sum = 0;

  scores.forEach(score => {
    sum += score;
  });

  const svg = sum / scores.length;

  console.log(sum);   // 22
  console.log(svg);   // 7.333333333333333

  console.log(Math.floor(svg));   // 7 小数点以下切り捨て
  console.log(Math.ceil(svg));    // 8 小数点以下切り上げ
  console.log(Math.round(svg));   // 7 四捨五入
  console.log(svg.toFixed(3));    // 7.333 指定した小数点以下まで表示
  console.log(Math.random());   //乱数を生成するための命令(0以上1未満のランダムな数値の生成)
  //0, 1, 2...,nのランダムな整数値を生成する方法
  //0, 1, 2
  //Math.floor(Math,random() * 3);
  //0, ..., n
  //Math,floor(Math,random() * (n + 1));
  //min, ..., max
  //Math.floor(Math.random() * (max + 1 -min)) + min;
  //サイコロの実装
  console.log(Math.floor(Math.random() * 6) + 1);
}



{
  //日時を表すデータについて
  const d = new Date();
  console.log(`${d.getFullYear()} 年${d.getMonth() + 1} 月 ${d.getDate()} 日`);
  
  //特定の日時を表すデータの作成や日時の計算
  const e = new Date(2019, 10);   // 2019/11/01 00:00:00
  e.setHours(10, 20 ,30);   // 2019/11/01 10:20:30 時間の計算
  e.setDate(31);    // 2019/12/01 10:20:30 日付の計算
  e.setDate(e.getDate() + 3);   // 2019/12/04/ 10:20:30 日付の計算(関数)
  console.log(e);
}



{
  //ウィンドウで警告や確認のダイアログを出す方法
  // alert(`hello`);   //何かお知らせを表示する
  const answer = confirm('削除しますか？');   //お知らせにキャンセルとOKボタンを加える
  if (answer) {
    console.log('削除しました');
  } else {
    console.log('キャンセルしました')
  }
}



{
  //指定した時間ごとに処理を実行する
  let i = 0;    //カウンタ用の変数
  function showtime() {
    console.log(new Date());
    i++
    if(i > 2) {   //iの大きさが2より大きくなった時に止まる
      clearInterval(intervalID);    //InterValIDという定数名の命令を中止させる
    }
  }
  // setInterval(showtime, 1000);    //指定した秒数ごとに(今回は1000ms = 1s)与えた関数を実行する

  //showtimeの処理を止めたい時(setInterval関数を定数として置く)
  const intervalID = setInterval(showtime, 1000);

  //setTimeout(showTime, 1000);   //setTimeoutに渡した関数は一度だけ実行される
  let j = 0;
  function showTime2() {
    console.log(new Date());
    const timeoutID = setTimeout(showTime2, 1000);    //setTimeout()も何回も繰り返し使うと、setInterval()と同じになる
    j++;
    if(j > 2) {
      clearTimeout(timeoutID);
    }
  }
  showTime2();

  // タイマー処理の違いについて(setInterval()とsetTimeout()の違い)
  //setInterval()は指定した秒数が処理の速度よりも小さいと、処理が重複し、コンピュータに負荷がかかってしまう。しかし、setTimeout()では、これが起きることはない。
}



{
  //例外処理について
  // const name = 'taguchi';
  const name = 5;

  try {   //try...catch文はエラーが発生した時に処理を実装する
    console.log(name.toUpperCase());    //文字列を大文字にする関数
  } catch (e) {
    console.log(e);
  }
  console.log('Finish!');
}



{
  //classについて
  const posts = [
    {
      text: 'JavaScriptの勉強中…',
      likeCount: 0,
      // show: function() {
      //   console.log(`${this.text} - ${this.likeCount}いいね`);
      // },
      show() {    //関数をプロパティの値にした場合、この関数をメソッドという
        console.log(`${this.text} - ${this.likeCount}いいね`);
      },
    },
    {
      text: 'プログラミング楽しい！',
      likeCount: 0,
      show() {
        console.log(`${this.text} - ${this.likeCount}いいね`);
      },
    },
  ];
  posts[0].show();
  posts[1].show();

  //ただし、全てのオブジェクトに関数を付けるのは面倒くさく、また、後に変更したい時には不便
  //そこで使われるのが、オブジェクトをテンプレート化できるclass
  class Post {    //クラス
    constructor(text) {
      this.text = text;
      this.likeCount = 0;
    }
    show() {
      console.log(`${this.text} - ${this.likeCount}likes`);
    }
    //静的メソッド(インスタンスを生成しなくてもオブジェクトから直接呼び出せるプロパティ/メソッド)
    //メソッド内でthisを使えないという点に注意
    static showInfo() {
      console.log('Post class version 1.0');
    }
  }
  const posts2 = [    //インスタンス
    new Post('[New]JavaScriptの勉強中…'),
    new Post('[New]プログラミング楽しい！'),
  ];
  
  Post.showInfo();
  
  //classの継承(他のclassからプロパティやメソッドを引き継ぐ)
  class SponsoredPost extends Post {    //元のclassを親クラスと呼ぶのに対し、こちらを子クラスと呼ぶ
    constructor(text, sponsor) {
      super(text);    //子クラスのconstructorでthisキーワードを使うために必要
      // this.text = text;
      // this.likeCount = 0;    //親クラスにもあるので省略
      this.sponsor = sponsor;
    }
    show() {
      super.show();
      console.log(`...sponsored by ${this.sponsor}`);
    }
  }
  posts2[0].show();
  posts2[1].show();
}






