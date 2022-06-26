'use strict';

{
  const menuItems = document.querySelectorAll('.menu li a');
  const contents = document.querySelectorAll('.content');

  menuItems.forEach (item/* クリックされたitemを示す */ => {
      item.addEventListener('click',e => {
      e.preventDefault();      //ページ遷移をキャンセルすることができる(キャンセルしないと、タブをクリックするたびにページが最上部にスクロールされる)

      //activeクラスの付け替えを行う
      menuItems.forEach(item /* menuItemsの要素の一つ */=> {
        item.classList.remove('active');
      });
      item.classList.add('active');   //clickされたitemについて、activeクラスを付ける
      contents.forEach(content => {
        content.classList.remove('active');
      });
      document.getElementById(item.dataset.id).classList.add('active');
      //item.dataset.idはクリックされたメニュー項目のdate-idの値が取得できる。
      //data-idをidと結びつけているため、メニュー項目をクリックすると、item.dataset.id→idとなって、指定されたidを持つ要素が取得される
    });
  });
}