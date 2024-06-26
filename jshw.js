function applyStyleBasedOnInput() {
    const userInput = document.getElementById('styleInput').value.toLowerCase(); 
    const paragraph = document.getElementById('styledParagraph');
    
   
    paragraph.style.backgroundColor = 'transparent';
    paragraph.style.textDecoration = 'none';
    paragraph.style.fontWeight = 'normal';


    if (userInput === 'highlight') {
        paragraph.style.backgroundColor = 'yellow';
    } else if (userInput === 'underline') {
        paragraph.style.textDecoration = 'underline';
    } else if (userInput === 'bold') {
        paragraph.style.fontWeight = 'bold';
    } 
}

function ToggleVisibility(paragraphId) {
    const paragraph = document.getElementById(paragraphId);
    if (paragraph.style.display === 'none') {
        paragraph.style.display = 'block'; 
    } else {
        paragraph.style.display = 'none'; 
    }
}
function toggleButton() {
   const button = document.getElementById('myButton');

    if (!button.disabled) {
        button.textContent = 'Pressed !';
        button.disabled = true;
        button.classList.add('disabled');
    }
}
