//ID名toggleをクリックしたとき
    document.getElementById('TOGGLE').addEventListener('click' , () => {
//ID名bodyにクラス名is-openをつける
    document.getElementById('BODY').classList.toggle('is-open');
} );

//クラス名closeがついている要素にtargetsという変数を宣言
const targets = document.getElementsByClassName('close');

//クリックする要素が複数あって、どこをクリックされても同じ処理をするために
//forで要素数分ループ処理
for(let i = 0; i < targets.length; i = i + 1){
    targets[i].addEventListener('click', () => {
        document.getElementById('BODY').classList.remove('is-open');
  }, false);
}

