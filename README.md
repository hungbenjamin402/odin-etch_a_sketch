# odin-etch_a_sketch - Grid Color Generator

This project generates a grid of squares that change color when hovered over. Users can specify the number of rows and columns for the grid.

## Project Structure

### index.html

The main HTML file that sets up the structure of the webpage.

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Grid Color Generator</title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="style.css">
</head>
<body class="mainDiv">
    <button onclick="updateGrid()">Update Grid</button>
    <div class="parentSquareDiv"></div>
    <script src="script.js"></script>
</body>
</html>
```

### script.js

This JavaScript file that contains the logic for generating the grid, color grid generation and handling user interactions.

```javascript
const mainDiv = document.querySelector(".mainDiv");
const parentSquareDiv = document.querySelector(".parentSquareDiv");

function createElement(tags, className = '', content = '', style = '') {
    const element = document.createElement(tags);
    if (className) {
        element.classList.add(className);
    }
    if (content) {
        element.textContent = content;
    }
    if (style) {
        element.setAttribute('style', style);
    }
    return element;
}

function updateGrid() {
    const rowNumber = Number(window.prompt("Enter row number you want", ""));
    const columnNumber = Number(window.prompt("Enter column number you want", ""));
    parentSquareDiv.replaceChildren();
    gridGeneration(rowNumber, columnNumber);
}

function displayRandomColorGenerate(randomColorHex) {
    const randomColorDisplay = document.querySelector(".randomColorDisplayLine");
    const content = `Random color: ${randomColorHex}`;
    if (!randomColorDisplay) {
        const outputRandomColorHex = createElement('p', 'randomColorDisplayLine', content, undefined);
        mainDiv.prepend(outputRandomColorHex);
    } else {
        randomColorDisplay.textContent = `Random color: ${randomColorHex}`;
    }
}

const parentSquareDivCSS = 'display: flex; flex-direction: row; justify-content: center; padding: 0px;';
const squareDivCSS = 'border: solid; border-color: black; height: 100px; width: 100px; transition: background-color 0.15s ease;';

function gridGeneration(rowNumber, columnNumber) {
    for (let i = 0; i < rowNumber; i++) {
        const mainSquareDiv = createElement('div', 'mainSquareDiv', undefined, parentSquareDivCSS);
        for (let j = 0; j < columnNumber; j++) {
            const squareDiv = createElement('div', 'squareDiv', undefined, squareDivCSS);
            squareDiv.addEventListener('mouseover', function(event) {
                const randomColor = "#"+((1<<24)*Math.random()|0).toString(16);
                squareDiv.style.setProperty('background-color', randomColor);
                displayRandomColorGenerate(randomColor);
            });
            squareDiv.addEventListener('mouseout', function(event) {
                setTimeout(() => {
                    squareDiv.style.setProperty('background-color', '');
                }, 200);
            });
            mainSquareDiv.append(squareDiv);
        }
        parentSquareDiv.append(mainSquareDiv);
    }
}

gridGeneration(16, 16);
```

### style.css

CSS file that styles the webpage.

```css
* {
    font-family: 'Arial', sans-serif;
    font-style: narrow;
    background-color: #8ACE00;
}

.mainDiv {
    padding: 20px;
}
```

## How to Use

1. Open `index.html` in a web browser.
2. Click the "Update Grid" button to specify the number of rows and columns for the grid.
3. Hover over the squares to see them change color.

## License

This project is licensed under the MIT License.