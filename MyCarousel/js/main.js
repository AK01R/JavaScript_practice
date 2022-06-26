'use strict';

{
  const next = document.getElementById('next');
  const prev = document.getElementById('prev');
  const ul = document.querySelector('ul');
  const slides = ul.children;   //つまり3つの<li>に対して、情報を取得
  const dots = [];
  let currentIndex = 0;

  function updateButton() {
    //下記のif文の条件に当てはまらない場合はhiddenクラスを外しておく
    prev.classList.remove('hidden');
    next.classList.remove('hidden');

    if (currentIndex === 0) {   //最初の画像の時に左矢印を消す
      prev.classList.add('hidden');
    }
    // if (currentIndex === 2) {
    if (currentIndex === slides.length - 1) {   //最後の画像が表示されたときに右矢印を消す
      next.classList.add('hidden');
    }
  }

  function moveSlides() {
    const slideWidth = slides[0].getBoundingClientRect().width;  
    ul.style.transform = `translateX(${-1 * slideWidth * currentIndex}px)`;
  }

  function setupDots() {
    for (let i = 0; i < slides.length; i++) {
      const button = document.createElement('button');
      //createElementで<button>の生成
      button.addEventListener('click', () => {
        currentIndex = i;
        updateButton();
        updateDots();
        moveSlides();
      });
      dots.push(button);
      document.querySelector('nav').appendChild(button);
      //appendChildで<button>の追加
    }
    dots[0].classList.add('current');   //初期設定
  }

  function updateDots() {
    dots.forEach(dot => {
      dot.classList.remove('current');
    });
    dots[currentIndex].classList.add('current');
  }

  updateButton();   //urrentIndex === 0の時にprevを消したいから
  setupDots();

  next.addEventListener('click', () => {
    currentIndex++;
    updateButton();
    // const slideWidth = slides[0].getBoundingClientRect().width;   /* 要素の寸法と、そのビューポートに対する相対位置に関する情報を返す */
    //ulを左にずらせば、次の画像が出てくるはず
    // ul.style.transform = `translateX(${-1 * slideWidth * currentIndex}px)`;
    /* ul {  ↓これを適用するのと同じ意味
          transform: translateX(-200px);
       }*/
    updateDots();
    moveSlides()

  });

  prev.addEventListener('click', () => {
    currentIndex--;
    updateButton();
    // const slideWidth = slides[0].getBoundingClientRect().width;  
    // ul.style.transform = `translateX(${-1 * slideWidth * currentIndex}px)`;
    updateDots();
    moveSlides()
  });

  //画面を広げると崩れるのを防ぐ
  window.addEventListener('resize', () => {
    moveSlides();
  });
}