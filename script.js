 // Function to generate a random hex code
 function generateRandomHexCode() {
    const characters = '0123456789ABCDEF';
    let hexCode = '#';
    
    for (let i = 0; i < 6; i++) {
        const randomIndex = Math.floor(Math.random() * 16);
        hexCode += characters[randomIndex];
    }
    
    return hexCode;
}

// Function to update the background color and text
function updateColor() {
    const colorBox = document.getElementById('colorBox');
    const colorCode = document.getElementById('colorCode');
    const headLine = document.getElementById('colorContainer');
    const randomColor = generateRandomHexCode();
    
    // Update the background color of the body and color box
    document.body.style.backgroundColor = randomColor;
    colorBox.style.backgroundColor = randomColor;
    colorCode.textContent = 'Color Code: ' + randomColor;

    // Set text color based on brightness
    const brightness = calculateBrightness(randomColor);
    colorCode.style.color = brightness > 128 ? '#000' : '#FFF';
    headLine.style.color = brightness > 128 ? '#000' : '#FFF';
}

// Function to calculate brightness based on hex color code
function calculateBrightness(hex) {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return (r * 299 + g * 587 + b * 114) / 1000;
}

// Event listener for the spacebar key press
document.addEventListener('keydown', function(event) {
    if (event.key === ' ') { // Check if the spacebar is pressed
        updateColor();
    }
});

// Event listener for tap gesture (click)
document.addEventListener('click', function() {
    updateColor();
});

// Initial random hex code display
updateColor();

