const osBtn = document.getElementById('btn');

const text = document.getElementById('text');



osBtn.addEventListener('click', () =>  {
  text.textContent = 'ボタンをクリックしました';
});