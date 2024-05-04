const input1 = document.querySelector("#input1");
const input2 = document.querySelector("#input2");
const output = document.querySelector("#output");


function calculateor() {
    let options = document.getElementById("operations").value;
    let total;

    switch (options) {
        case "add":
            total = parseFloat(input1.value) + parseFloat(input2.value);

            if (isNaN(total)) {
                output.innerHTML = "Where's the Number?";
            } else {
                output.innerHTML = total;
            }
            break;
        case "minus":
            total = parseFloat(input1.value) - parseFloat(input2.value);
            if (isNaN(total)) {
                output.innerHTML = "Where's the Number?";
            } else {
                output.innerHTML = total;
            }
            break;
        case "times":
            total = parseFloat(input1.value) * parseFloat(input2.value);
            if (isNaN(total)) {
                output.innerHTML = "Where's the Number?";
            } else {
                output.innerHTML = total;
            }
            break;
        case "divided":
            total = parseFloat(input1.value) / parseFloat(input2.value);
            if (input2.value == 0) {
                output.innerHTML = "Tidak bisa dibagi 0";
            } else if (isNaN(total)) {
                output.innerHTML = "Where's the Number?";
            } else {
                output.innerHTML = total;
            }
            break;
        default:
            output.innerHTML = "Invalid operation";
            return;
    }


}