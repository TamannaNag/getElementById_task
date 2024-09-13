// 1. Create the box and center it
const box = document.getElementById('box');
box.style.display = 'flex'
box.style.width = '280px';
box.style.height = '160px';
box.style.borderColor = 'black'
box.style.justifyItems = 'center'
box.style.alignItems = 'center'
box.style.backgroundColor = 'white';
box.style.margin = 'auto'; // Center the box using margin
box.style.boxShadow = '0px 4px 5px'; // Add shadow to the bottom

// 2. Style the heading inside the box
const heading = document.getElementById('heading');
heading.style.textAlign = 'center'
heading.style.marginBottom = '-0'
heading.style.color = 'black'; // Set heading color
heading.style.fontSize = '42px'; // Adjust font size to fit inside the box


// 3. Function to change the text and color
function changeText() {
    heading.textContent = '4.0 Techonology'; // Change the text
    heading.style.color = 'blue'; // Change the color to blue

}












