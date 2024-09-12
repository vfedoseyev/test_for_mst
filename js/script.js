document.addEventListener('DOMContentLoaded', function () {
    const burger = document.querySelector('.header__burger');
    const nav = document.querySelector('.header__nav');
    const body = document.body;

    burger.addEventListener('click', function () {
        burger.classList.toggle('active');
        nav.classList.toggle('active');
        body.classList.toggle('no-scroll'); // Добавляем или удаляем класс для блокировки скролла
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
