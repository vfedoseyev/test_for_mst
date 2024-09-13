document.addEventListener('DOMContentLoaded', function () {
    // Бургер-меню
    const burger = document.querySelector('.header__burger');
    const nav = document.querySelector('.header__nav');
    const overlay = document.querySelector('.overlay');
    const body = document.body;

    burger.addEventListener('click', function () {
        burger.classList.toggle('active');
        nav.classList.toggle('active');
        overlay.classList.toggle('active');
        body.classList.toggle('no-scroll');
    });

    overlay.addEventListener('click', function () {
        burger.classList.remove('active');
        nav.classList.remove('active');
        overlay.classList.remove('active');
        body.classList.remove('no-scroll');
    });

    // Функция для управления выпадающим списком
    function setupDropdown(dropdownClass) {
        const dropdown = document.querySelector(dropdownClass);
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

        document.addEventListener('click', function (e) {
            if (!dropdown.contains(e.target)) {
                dropdown.classList.remove('open');
            }
        });
    }

    // Инициализация всех выпадающих списков
    setupDropdown('.custom-dropdown'); // для основного выпадающего списка
    setupDropdown('#popup .custom-dropdown'); // для выпадающего списка в попапе

    // Функция для установки ползунка прогресса
    function setupProgressSlider(progressId, valueId) {
        document.getElementById(progressId).addEventListener('input', function () {
            document.getElementById(valueId).textContent = this.value + '%';
        });
    }

    // Установка ползунков для основной формы и попапа
    setupProgressSlider('progress', 'progress-value');
    setupProgressSlider('progress-popup', 'progress-value-popup');

    // Загрузка файлов
    const fileUploadButton = document.getElementById('file-upload-button-popup');
    const fileInputPopup = document.getElementById('file-upload-popup');

    fileUploadButton.addEventListener('click', function () {
        fileInputPopup.click();
    });

    fileInputPopup.addEventListener('change', function () {
        if (fileInputPopup.files.length > 0) {
            fileUploadButton.textContent = fileInputPopup.files[0].name;
        }
    });

    // Всплывающее окно
    const openPopupButton = document.getElementById('open-popup');
    const closePopupButton = document.getElementById('close-popup');
    const popup = document.getElementById('popup');

    openPopupButton.addEventListener('click', function (e) {
        e.preventDefault();
        popup.style.display = 'block';
    });

    closePopupButton.addEventListener('click', function () {
        popup.style.display = 'none';
    });

    popup.addEventListener('click', function (e) {
        if (e.target === popup) {
            popup.style.display = 'none';
        }
    });
});
