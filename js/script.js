document.addEventListener('DOMContentLoaded', function () {
    const burger = document.querySelector('.header__burger');
    const nav = document.querySelector('.header__nav');
    const overlay = document.querySelector('.overlay'); // Получаем затемнение
    const body = document.body;

    burger.addEventListener('click', function () {
        burger.classList.toggle('active');
        nav.classList.toggle('active');
        overlay.classList.toggle('active'); // Добавляем или удаляем класс для затемнения
        body.classList.toggle('no-scroll'); // Блокируем или разблокируем скролл
    });

    overlay.addEventListener('click', function () {
        burger.classList.remove('active');
        nav.classList.remove('active');
        overlay.classList.remove('active'); // Скрываем затемнение
        body.classList.remove('no-scroll'); // Разблокируем скролл
    });
});

document.getElementById('progress').addEventListener('input', function () {
    document.getElementById('progress-value').textContent = this.value + '%';
});

document.addEventListener('DOMContentLoaded', function () {
    const fileUploadButton = document.getElementById('file-upload-button');
    const fileInput = document.getElementById('file-upload');

    fileUploadButton.addEventListener('click', function () {
        fileInput.click(); // Программно открываем диалог выбора файла
    });

    fileInput.addEventListener('change', function () {
        if (fileInput.files.length > 0) {
            fileUploadButton.textContent = fileInput.files[0].name; // Отображаем имя выбранного файла на кнопке
        }
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const dropdown = document.querySelector('.custom-dropdown');
    const selected = dropdown.querySelector('.custom-dropdown__selected');
    const options = dropdown.querySelector('.custom-dropdown__options');
    const optionElements = dropdown.querySelectorAll('.custom-dropdown__option');
    const select = dropdown.querySelector('select');

    selected.addEventListener('click', function () {
        dropdown.classList.toggle('open');
    });

    optionElements.forEach(option => {
        option.addEventListener('click', function () {
            const value = this.getAttribute('data-value');
            selected.textContent = this.textContent;
            select.value = value;
            dropdown.classList.remove('open');
        });
    });

    // Close the dropdown when clicking outside
    document.addEventListener('click', function (e) {
        if (!dropdown.contains(e.target)) {
            dropdown.classList.remove('open');
        }
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const openPopupButton = document.getElementById('open-popup');
    const closePopupButton = document.getElementById('close-popup');
    const popup = document.getElementById('popup');

    // Открыть попап
    openPopupButton.addEventListener('click', function (e) {
        e.preventDefault(); // Предотвратить переход по якорю
        popup.style.display = 'block';
    });

    // Закрыть попап
    closePopupButton.addEventListener('click', function () {
        popup.style.display = 'none';
    });

    // Закрыть попап при клике вне его содержимого
    popup.addEventListener('click', function (e) {
        if (e.target === popup) {
            popup.style.display = 'none';
        }
    });
});
