function hideFrontWindow() {
    document.getElementById('front-window').style.display = 'none';
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
});
