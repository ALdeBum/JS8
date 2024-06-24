document.addEventListener('DOMContentLoaded', function() {
    const table = document.querySelector('table');
    const headers = table.querySelectorAll('th');
    const tbody = table.querySelector('tbody');

    headers.forEach(header => {
        header.addEventListener('click', function() {
            const type = header.getAttribute('data-type');
            const index = Array.prototype.indexOf.call(headers, header);
            const rows = Array.from(tbody.querySelectorAll('tr'));

            rows.sort((a, b) => {
                const cellA = a.cells[index].innerText;
                const cellB = b.cells[index].innerText;

                if (type === 'number') {
                    return Number(cellA) - Number(cellB);
                } else {
                    return cellA.localeCompare(cellB);
                }
            });

            rows.forEach(row => tbody.appendChild(row));
        });
    });
});
