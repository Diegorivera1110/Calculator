// function for dsiplay
function display(val) {
    document.getElementById('result').value += val
    return val
}

// Solving function
function solve() {
    let x = document.getElementById('result').value
    let y = eval(x);

    document.getElementById('result').value = y

    return y
}