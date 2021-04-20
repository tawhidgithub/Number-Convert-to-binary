const reaselt = document.getElementById("resunlt_se");
const submit = document.getElementById("submit_input");
function binary(x) {
    x.preventDefault();
    const num = document.getElementById("input_value").value;

    if (num === '') {
        alert("Please enter a number!")
    }
    else if (num < 0) {
        alert(" Please enter a positive number!")
    } else {
        reaselt.style.visibility = 'visible';
    }

    binarynumber = Number(num).toString(2);
    reaselt.innerText = binarynumber;
}
submit.addEventListener("click", binary);