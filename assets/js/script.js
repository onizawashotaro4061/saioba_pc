// hamburger
document.addEventListener('DOMContentLoaded', function () {
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const navMenu = document.getElementById('nav-menu');

    hamburgerMenu.addEventListener('click', function () {
        navMenu.classList.toggle('open');
    });
});
// JavaScript
document.addEventListener('DOMContentLoaded', function () {
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const navMenu = document.getElementById('nav-menu');

    hamburgerMenu.addEventListener('click', function () {
        if (navMenu.style.display === 'block') {
            navMenu.style.display = 'none';
            hamburgerMenu.innerHTML = '&#9776;'; // ☰ アイコンに変更
        } else {
            navMenu.style.display = 'block';
            hamburgerMenu.innerHTML = '&times;'; // ☓ アイコンに変更
        }
    });
});
// JavaScript
// document.addEventListener('DOMContentLoaded', function () {
//     const hamburgerMenu = document.getElementById('hamburger-menu');
//     const navMenu = document.getElementById('nav-menu');

//     hamburgerMenu.addEventListener('click', function () {
//         if (navMenu.classList.contains('show')) {
//             navMenu.classList.remove('show'); // メニューを閉じる
//         } else {
//             navMenu.classList.add('show'); // メニューを開く
//         }
//     });
// });
// JavaScript
document.addEventListener('DOMContentLoaded', function () {
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const navMenu = document.getElementById('nav-menu');

    hamburgerMenu.addEventListener('click', function () {
        if (navMenu.classList.contains('show')) {
            // メニューが表示されている場合、非表示にする
            navMenu.style.opacity = '0'; // 透明にする
            setTimeout(function () {
                navMenu.classList.remove('show'); // メニューを閉じる
            }, 300); // 遅延させる
        } else {
            // メニューが非表示の場合、表示する
            navMenu.classList.add('show'); // メニューを開く
            navMenu.style.opacity = '1'; // 透明度を元に戻す
        }
    });
});
// slide-show
// JavaScript
let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    const slides = document.getElementsByClassName("slide");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.opacity = "0"; // 全ての画像を透明にする
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex-1].style.opacity = "1"; // 選択された画像を不透明にする
    setTimeout(showSlides, 4000); // 2秒ごとに次のスライドを表示
}


//toggle

