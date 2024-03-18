// FAQボタンの開閉
'use strict';
{
    // アコーディオン
    // DOM取得
    const parent = document.querySelectorAll('.js-qa__parent');
    console.log(parent);

    // イベント
    for (let i = 0; i < parent.length; i++) {
        // clickイベントを付加
        parent[i].addEventListener('click', accodionToggle);
    }

    // 処理
    function accodionToggle(e) {
        // クリックした要素にクラスを付加
        e.currentTarget.classList.toggle('is-open');
        // クリックした要素の兄弟要素を取得
        const child = e.currentTarget.nextElementSibling;
        //　兄弟要素にクラスを付加
        child.classList.toggle('is-open');
    }
}

// ハンバーガーメニュー
const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');

hamburger.addEventListener('click', function() {
  menu.classList.toggle('open');
});



// ナビゲーション　ページまでスクロール
$('#page-link a[href*="#"]').click(function () {//全てのページ内リンクに適用させたい場合はa[href*="#"]のみでもOK
	var elmHash = $(this).attr('href'); //ページ内リンクのHTMLタグhrefから、リンクされているエリアidの値を取得
	var pos = $(elmHash).offset().top;	//idの上部の距離を取得
	$('body,html').animate({scrollTop: pos}, 500); //取得した位置にスクロール。500の数値が大きくなるほどゆっくりスクロール
	return false;
});




// TOP　スクロール
document.addEventListener('DOMContentLoaded', function() {
    const scrollTopButton = document.getElementById('pagetop');
  
    scrollTopButton.addEventListener('click', function() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });