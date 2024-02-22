document.addEventListener('DOMContentLoaded', function() {
    var btn = document.createElement('button');
    btn.id = 'createGridBtn';
    btn.textContent = 'Create Grid';
    btn.style.padding = '10px 20px'; // Increase padding for a larger button
    btn.style.fontSize = '20px'; // Increase text size
    btn.style.cursor = 'pointer'; // Change cursor on hover
    btn.style.margin = '20px auto'; // Margin for some space around the button
    btn.style.display = 'block'; // Necessary for centering with auto margins
    btn.style.border = '2px solid black'
    btn.style.borderRadius = '5px';
    btn.style.fontWeight = 'bold';
    btn.style.backgroundColor = '#6CCAF9'
    document.body.appendChild(btn);
    
    var divContainer = document.createElement('div');
    divContainer.id = 'container';
    document.body.appendChild(divContainer);
    
    btn.addEventListener('click', function() {
        // Assuming each cell needs a minimum width of 66px (55px width + 9px margin + 2px border)
        var maxWidth = divContainer.clientWidth;
        var maxCellsPerRow = Math.floor(maxWidth / 80); // Calculate how many cells can fit within the container width

        var gridSize = prompt("Enter the dimension of the grid you want (max " + maxCellsPerRow + "):", "5");
        gridSize = parseInt(gridSize, 10);

        if (!isNaN(gridSize) && gridSize > 0 && gridSize <= maxCellsPerRow) {
            createGrid(gridSize);
        } else if (gridSize > maxCellsPerRow) {
            alert("Please enter a number less than or equal to " + maxCellsPerRow + ".");
        } else {
            alert("Please enter a valid number.");
        }
    });

    function createGrid(size) {
        divContainer.innerHTML = ''; // Clear existing grid if any
        divContainer.style.display = 'grid';
        divContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
        divContainer.style.gridGap = '5px';
        divContainer.style.width = '100%';
        divContainer.style.height = 'auto';
        divContainer.style.border = '1px solid black';
        divContainer.style.aspectRatio = '1 / 1';

            for (var i = 0; i < size * size; i++) {
            var childDiv = document.createElement('div');
            childDiv.classList.add('grid-item');
            styleChildDiv(childDiv); // Apply styles and event listeners
            divContainer.appendChild(childDiv);
        }
    }

    function styleChildDiv(childDiv) {
        childDiv.style.display = 'flex';
        childDiv.style.alignItems = 'center';
        childDiv.style.justifyContent = 'center';
        childDiv.style.height = 'auto';
        childDiv.style.border = '1px solid black';
        childDiv.style.aspectRatio = '1 / 1';
        childDiv.style.padding = '5px';
       

        // Event listener for mouseenter
        childDiv.addEventListener('mouseenter', function() {
            this.style.backgroundColor = getRandomColor();
        });

        // Event listener for mouseleave
        childDiv.addEventListener('mouseleave', function() {
            this.style.backgroundColor = ''; // Set to original or another specified color
        });
    }

    // Function to generate a random color
    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var j = 0; j < 6; j++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
});
