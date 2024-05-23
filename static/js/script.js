function hideElementById(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        element.style.display = 'none';
    }
}

function hideFrontWindow() {
    hideElementById('front-window');
}

function closePopup() {
    hideElementById('popup-container');
}

function closePopup2() {
    hideElementById('popup-container2');
}

function closePopup3() {
    hideElementById('popup-container3');
}

function closePopup4() {
    hideElementById('popup-container4');
}

function closePopup5() {
    hideElementById('popup-container5');
}

function closePave() {
    hideElementById('pavement');
}

document.addEventListener("DOMContentLoaded", function () {
    const buttons = [
        "A1", "A2", "A3", "A4", "A5", "A6", "A7",
        "paves", "citerne", "lagunage",
        "buisson1", "buisson2", "buisson3", "buisson4"
    ];

    const backgroundMap = document.querySelector(".modal-background");
    let clickedButtonId = null;

    // Add event listeners for all buttons
    buttons.forEach(buttonId => {
        const button = document.getElementById(buttonId);
        button.addEventListener("click", function () {
            clickedButtonId = buttonId;
        });
    });

    const hoverImage = document.getElementById("hoverImage");

    const hoverPoint = document.createElement('div');
    hoverPoint.style.position = 'absolute';
    hoverPoint.style.left = '50px'; 
    hoverPoint.style.top = '50px';  
    hoverPoint.style.width = '20px';
    hoverPoint.style.height = '20px';
    hoverPoint.style.backgroundColor = 'rgba(255, 255, 255, 0)'; 
    hoverPoint.style.zIndex = '15';
    backgroundMap.appendChild(hoverPoint);

    // Event listener for hovering over the hover point
    hoverPoint.addEventListener('mouseover', function () {
        hoverImage.style.display = 'block';
        hoverImage.style.left = '1px'; 
        hoverImage.style.top = '1px';  
    });

    hoverPoint.addEventListener('mouseout', function () {
        hoverImage.style.display = 'none';
    });

    backgroundMap.addEventListener("click", function (event) {
        if (clickedButtonId) {
            const button = document.getElementById(clickedButtonId);
            const newButton = button.cloneNode(true); 
            newButton.style.position = "absolute";
            newButton.style.left = event.clientX + "px"; 
            newButton.style.top = event.clientY + "px"; 
            backgroundMap.appendChild(newButton); 
            clickedButtonId = null; 
        }
    });

    const triggerRegions = [
        {
            container: 'popup-container',
            region: { left: 548, right: 586, top: 456, bottom: 494 }
        },
        {
            container: 'popup-container2',
            region: { left: 686, right: 724, top: 543, bottom: 581 }
        },
        {
            container: 'popup-container3',
            region: { left: 746, right: 784, top: 433, bottom: 471 }
        },
        {
            container: 'popup-container4',
            region: { left: 856, right: 894, top: 381, bottom: 419 }
        },
        {
            container: 'popup-container5',
            region: { left: 842, right: 880, top: 399, bottom: 437 }
        },
        {
            container: 'pavement',
            region: { left: 684, right: 722, top: 477, bottom: 515 }
        }
    ];

    document.addEventListener('mousemove', (event) => {
        const mouseX = event.clientX;
        const mouseY = event.clientY;
        let cursorChanged = false;

        triggerRegions.forEach(({ region }) => {
            if (mouseX >= region.left && mouseX <= region.right && mouseY >= region.top && mouseY <= region.bottom) {
                document.body.style.cursor = 'pointer';
                cursorChanged = true;
            }
        });

        if (!cursorChanged) {
            document.body.style.cursor = 'default';
        }
    });

    backgroundMap.addEventListener('click', (event) => {
        const clickX = event.clientX;
        const clickY = event.clientY;

        triggerRegions.forEach(({ container, region }) => {
            if (clickX >= region.left && clickX <= region.right && clickY >= region.top && clickY <= region.bottom) {
                document.getElementById(container).style.display = 'block';
            }
        });
    });
});
