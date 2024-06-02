document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('container');
    const newGridButton = document.getElementById('newGridButton');

    function createGrid(size) {
        // Clear existing grid
        container.innerHTML = '';

        // Calculate the size of each cell based on the new grid size
        const cellSize = 960 / size;

        // Create grid
        for (let i = 0; i < size * size * size; i++) {
            const cell = document.createElement('div');
            cell.style.width = `${cellSize}px`;
            cell.style.height = `${cellSize}px`;
            container.appendChild(cell);
        }
    }

    // Initial 16x16 grid
    createGrid(16);

    newGridButton.addEventListener('click', () => {
        let size = prompt('Enter the number of squares per side for the new grid (max 100):');
        size = parseInt(size);
        if (size > 0 && size <= 100) {
            createGrid(size);
        } else {
            alert('Please enter a number between 1 and 100.');
        }
    });
});
