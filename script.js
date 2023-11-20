
var mainHeader = document.querySelector('main h1');
mainHeader.textContent = 'Ласкаво просимо в Old School Gym!';

var mainParagraph = document.querySelector('main p');
mainParagraph.textContent = 'З нами ви отримаєте найкращий досвід тренувань та знайомства з новими друзями!';

// Отримати елемент .hero
var heroSection = document.querySelector('.hero');

// Додати клас .animate після завантаження сторінки
document.addEventListener('DOMContentLoaded', function() {
    heroSection.classList.add('animate');
});





