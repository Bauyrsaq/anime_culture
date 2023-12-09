function filterButtonClick(button) {
    // Удаляем класс disabled у всех кнопок
    let buttons = document.querySelectorAll('.anime__container-filters-btn');
    buttons.forEach(function (btn) {
        btn.classList.remove('active');
    });

    // Добавляем класс disabled только для нажатой кнопки
    button.classList.add('active');

    let filters = document.querySelectorAll(".anime__container-filter > div");
    filters.forEach(div => {
        div.classList.add('hidden');
    });

    let selectedFilter = document.querySelector('.anime__container-filter-' + button.id);
    if (selectedFilter) {
        selectedFilter.classList.remove('hidden');
    }
}  


document.addEventListener('DOMContentLoaded', function() {
    // Получаем ссылку на кнопку
    let myButton = document.getElementById('myButton');

    // Добавляем обработчик события при клике на кнопку
    myButton.addEventListener('click', function() {
        // Задаем URL, на который мы хотим перейти
        var targetURL = 'https://www.youtube.com/watch?v=gy2snbi3q3g'; // Замените на ваш URL

        // Выполняем переход по ссылке
        window.location.href = targetURL;
    });
});