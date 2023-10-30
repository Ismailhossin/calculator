
function appendToDisplay(value) {
    document.getElementById('display').value += value;            
}
function chairDisplay() {
    document.getElementById('display').value = "";
}
function totalResult() {
    try {
        const result = eval(document.getElementById('display').value);
        document.getElementById('display').value = result;
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}