function hideFrontWindow() {
    document.getElementById('front-window').style.display = 'none';
}


function closepopup() {
    document.getElementById('popup-container').style.display = 'none';
    
}

function closePopup2(){
    document.getElementById('popup-container2').style.display = 'none';
}

function closePopup3(){
    document.getElementById('popup-container3').style.display = 'none';
}


function closePave(){
    document.getElementById('pavement').style.display = 'none';
}


document.addEventListener("DOMContentLoaded", function() {
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
        button.addEventListener("click", function() {
            clickedButtonId = buttonId;
        });
    });    
    
    document.addEventListener("DOMContentLoaded", function() {
        const backgroundMap = document.querySelector(".modal-background");
        const hoverImage = document.getElementById("hoverImage");
    
        // Create a transparent div as the hover point
        const hoverPoint = document.createElement('div');
        hoverPoint.style.position = 'absolute';
        hoverPoint.style.left = '50px'; // Adjust the position as needed
        hoverPoint.style.top = '50px';  // Adjust the position as needed
        hoverPoint.style.width = '20px';
        hoverPoint.style.height = '20px';
        hoverPoint.style.backgroundColor = 'rgba(255, 255, 255, 0)'; // Invisible but present
        hoverPoint.style.zIndex = '15';
        backgroundMap.appendChild(hoverPoint);
    
        // Event listener for hovering over the hover point
        hoverPoint.addEventListener('mouseover', function() {
            hoverImage.style.display = 'block';
            hoverImage.style.left = '1px'; // Adjust as needed
            hoverImage.style.top = '1px';  // Adjust as needed
        });
    
        hoverPoint.addEventListener('mouseout', function() {
            hoverImage.style.display = 'none';
        });
    });
    
    

    // Event listener for click on the modal background
    backgroundMap.addEventListener("click", function(event) {
        if (clickedButtonId) {
            const button = document.getElementById(clickedButtonId);
            const newButton = button.cloneNode(true); // Clone the clicked button
            newButton.style.position = "absolute";
            newButton.style.left = event.clientX + "px"; // Set left position based on cursor position
            newButton.style.top = event.clientY + "px"; // Set top position based on cursor position
            backgroundMap.appendChild(newButton); // Append cloned button to modal background
            clickedButtonId = null; // Reset flag
        }
    });

    

/////////////////////////////////////


const modalBackground = document.querySelector('.modal-background');
const popupContainer = document.getElementById('popup-container');
const popupContainer2 = document.getElementById('popup-container2');
const popupContainer3 = document.getElementById('popup-container3');
const popuppave= document.getElementById('pavement');



const triggerRegions = [
    {
        container: popupContainer,
        region: {
            left: 548,  // Absolute left position for arbre1
            right: 548 + 38,
            top: 456,   // Absolute top position for arbre1
            bottom: 456 + 38
        }
    },
    {
        container: popupContainer2,
        region: {
            left: 686,  // Absolute left position for arbre2
            right: 686 + 38,
            top: 543,   // Absolute top position for arbre2
            bottom: 543 + 38
        }
    }, 
    {
        container: popupContainer3,
        region: {
            left: 746,  // Absolute left position for arbre2
            right: 746 + 38,
            top: 433,   // Absolute top position for arbre2
            bottom: 433 + 38
        }
    }, 
    {
        container: popuppave,
        region: {
            left: 684,  // Absolute left position for arbre1
            right: 684 + 38,
            top: 477,   // Absolute top position for arbre1
            bottom: 477 + 38
        }
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

modalBackground.addEventListener('click', (event) => {
    const clickX = event.clientX;
    const clickY = event.clientY;

    triggerRegions.forEach(({ container, region }) => {
        if (clickX >= region.left && clickX <= region.right && clickY >= region.top && clickY <= region.bottom) {
            container.style.display = 'block';
        }
    });
});



modalBackground.addEventListener('click', function(event) {
    const clickX = event.clientX;
    const clickY = event.clientY;
    const modalRect = modalBackground.getBoundingClientRect();

    // Define the region where clicking should trigger the pop-up
    const triggerRegion = {
        left: 548,                            // Absolute left position
        right: 548 + 38,                     // Right position, 100px wide region
        top: 456,                             // Absolute top position
        bottom: 456 + 38                     // Bottom position, 100px tall region
    };
    
    
    document.addEventListener('mousemove', (event) => {
        const mouseX = event.clientX;
        const mouseY = event.clientY;
    
        if (mouseX >= triggerRegion.left && mouseX <= triggerRegion.right && mouseY >= triggerRegion.top && mouseY <= triggerRegion.bottom) {
            document.body.style.cursor = 'pointer';
        } else {
            document.body.style.cursor = 'default';
        }
    });
    
    document.addEventListener('click', (event) => {
        const clickX = event.clientX;
        const clickY = event.clientY;
    
        if (clickX >= triggerRegion.left && clickX <= triggerRegion.right && clickY >= triggerRegion.top && clickY <= triggerRegion.bottom) {
            popupContainer.style.display = 'block';
        }
    });

        document.addEventListener('click', (event) => {
        const clickX = event.clientX;
        const clickY = event.clientY;
    
        if (clickX >= triggerRegion.left && clickX <= triggerRegion.right && clickY >= triggerRegion.top && clickY <= triggerRegion.bottom) {
            popupContainer.style.display = 'block';
        }
    });



    //arbre2

    
    
});
});
