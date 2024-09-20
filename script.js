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

const parentSquareDivCSS = 'display: flex; flex-direction: row; justify-content: center; padding: 0px;'
const squareDivCSS = 'border: solid; border-color: black; height: 100px; width: 100px; transition: background-color 0.15s ease; ';

function gridGeneration(rowNumber, columnNumber) {
    for (let i = 0; i < rowNumber; i++) {
        const mainSquareDiv = createElement('div', 'mainSquareDiv', undefined, parentSquareDivCSS);

        for (let j = 0; j < columnNumber; j++ ) {
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

            mainSquareDiv.append(squareDiv)
        }
        parentSquareDiv.append(mainSquareDiv)
    }
}

gridGeneration(16, 16);


