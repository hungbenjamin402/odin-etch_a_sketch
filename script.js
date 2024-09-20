const mainDiv = document.querySelector(".mainDiv")
const parentSquareDiv = document.querySelector(".parentSquareDiv")
const squareDiv = document.querySelector(".squareDiv");

function createElement(tags, className = '', content = '', style = '') {
    const element = document.createElement(tags)
    if (className) {
        element.classList.add(className)
    }
    if (content) {
        element.textContent = content
    }
    if (style) {
        element.setAttribute('style', style)
    }

    return element
};

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

const PARENT_GRID_STYLE = 'display: flex; flex-direction: row; justify-content: center; padding: 0px;';
const SQUARE_STYLE = 'border: solid; border-color: black; height: 100px; width: 100px; transition: background-color 0.15s ease;';

function createGrid(rowCount, columnCount) {
    for (let i = 0; i < rowCount; i++) {
        const rowDiv = createElement('div', 'mainSquareDiv', undefined, PARENT_GRID_STYLE);

        for (let j = 0; j < columnCount; j++) {
            const squareDiv = createElement('div', 'squareDiv', undefined, SQUARE_STYLE);

            squareDiv.addEventListener('mouseover', handleMouseOver);
            squareDiv.addEventListener('mouseout', handleMouseOut);

            rowDiv.append(squareDiv);
        }
        parentSquareDiv.append(rowDiv);
    }
}

function handleMouseOver(event) {
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    event.target.style.backgroundColor = randomColor;
    displayRandomColorGenerate(randomColor);
}

function handleMouseOut(event) {
    setTimeout(() => {
        event.target.style.backgroundColor = '';
    }, 200);
}

gridGeneration(16, 16);


