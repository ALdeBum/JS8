document.addEventListener('DOMContentLoaded', function() {
    const display = document.getElementById('display');
    const editor = document.getElementById('editor');

    document.addEventListener('keydown', function(event) {
        if (event.ctrlKey && event.key === 'e') {
            event.preventDefault();
            editor.value = display.textContent;
            display.style.display = 'none';
            editor.style.display = 'block';
            editor.focus();
        }

        if (event.ctrlKey && event.key === 's') {
            event.preventDefault();
            display.textContent = editor.value;
            editor.style.display = 'none';
            display.style.display = 'block';
        }
    });
});
