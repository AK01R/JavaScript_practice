'use stridt';

{
  const open = document.getElementById('open');
  const overlay = document.querySelector('.overlay');
  const close = document.getElementById('close');

  open.addEventListener('click', () => {
    overlay.classList.add('show');
    open.classList.add('hide');   //clickしたら裏側のmenuタブを消すようにした
  });

  close.addEventListener('click',() => {
    overlay.classList.remove('show');
    open.classList.remove('hide');
  });
}