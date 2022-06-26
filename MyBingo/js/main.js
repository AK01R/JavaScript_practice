'use strict';

{
  function createColumn(col) {
    const source = [];
    for (let i = 0; i < 15; i++) {
      //1 ... 15
      // source[i] = i + 1 + 15 * 0;

      //16 ... 30
      // source[i] = i + 1 + 15 * 1;

      //31 ... 45
      // source[i] = i + 1 + 15 * 2;
      source[i] = i + 1 + 15 * col
    }
    const column = [];

    for(let i = 0; i < 5; i++) {
      column[i] = source.splice(Math.floor(Math.random() * source.length), 1)[0];
    }

    return column;
  }

  // const source = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]; 
  // const source = [];
  // for(let i = 0; i < 15 ;i++) {
  //   source[i] = i + 1;
  // }

  //Math.floor(Math.random() * (14 + 1))
  //Math.floor(Math.random() * source.length)

  // const column = [];   //空の配列
  //末尾に[0]がないと、[3]のような「要素が一つはいっている配列」が返るが、[0]があると、3のような「単なる整数値」を返すことができる。←spliceが配列を返すから
  // b[0] = source.splice(Math.floor(Math.random() * source.length), 1)[0];
  // b[1] = source.splice(Math.floor(Math.random() * source.length), 1)[0];
  // b[2] = source.splice(Math.floor(Math.random() * source.length), 1)[0];
  // b[3] = source.splice(Math.floor(Math.random() * source.length), 1)[0];
  // b[4] = source.splice(Math.floor(Math.random() * source.length), 1)[0];

  // for(let i = 0; i < 5; i++) {
  //   column[i] = source.splice(Math.floor(Math.random() * source.length), 1)[0];
  // }

  function createColumns() {
    const columns =[];
    // columns[0] = createColumn(0);
    // columns[1] = createColumn(1);
    // columns[2] = createColumn(2);
    // columns[3] = createColumn(3);
    // columns[4] = createColumn(4);
    for (let i = 0; i < 5; i++) {
      columns[i] = createColumn(i);
    }
    columns[2][2] = 'FREE';
    return columns;
  }

  function createBingo(columns) {
    //配列の行と列の交換
    const bingo = [];
    for(let row = 0; row < 5; row++) {
      bingo[row] = [];
      for (let col = 0; col < 5; col++) {
        bingo[row][col] =columns[col][row];
      }
    }
    console.table(bingo);
    return bingo;
  }

  //配列の配列を表示する時にはconsle.tableを使う
  // console.table(columns);

  function renderBingo(bingo) {
    //実際にHTMLの要素に追加
    for(let row = 0; row < 5; row++) {
      const tr = document.createElement('tr')
      for(let col = 0; col < 5; col++) {
        const td = document.createElement('td');
        td.textContent = bingo[row][col];   //textContent…ノード及びその子孫のテキスト情報を取得・設定するためのプロパティ
        tr.appendChild(td);   //<tr>の子要素に<td>を追加
      }
      document.querySelector('tbody').appendChild(tr);
    }
  }

  const columns = createColumns();
  const bingo = createBingo(columns);
  renderBingo(bingo);
}