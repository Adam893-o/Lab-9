function init(){
//add your javascrip between these two lines of code
function displayWords() {
    // Get the value from the input field
    let input = document.getElementById('userInput').value;

    // Display the input in the output div
    document.getElementById('output').innerHTML = input;
}




window.addEventListener('load', init);
