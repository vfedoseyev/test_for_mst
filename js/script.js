document.getElementById('progress').addEventListener('input', function () {
    document.getElementById('progress-value').textContent = this.value + '%';
});
