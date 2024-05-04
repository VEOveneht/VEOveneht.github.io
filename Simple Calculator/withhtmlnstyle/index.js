const input1 = document.querySelector("#input1");
const input2 = document.querySelector("#input2");
const output = document.querySelector("#output");

function calculateor() {
    let options = document.getElementById("operations").value;
    let total;

    const mindit = () => {
        console.log(total)
        if (isNaN(total)) {
            output.innerHTML = "Where's the Number?";
        } else {
            output.innerHTML = total;
        }
    }

    switch (options) {
        case "add":
            total = parseFloat(input1.value) + parseFloat(input2.value);
            mindit();
            break;
        case "minus":
            total = parseFloat(input1.value) - parseFloat(input2.value);
            mindit();

            break;
        case "times":
            total = parseFloat(input1.value) * parseFloat(input2.value);
            mindit();
            break;
        case "divided":
            total = parseFloat(input1.value) / parseFloat(input2.value);
            mindit();
            if (parseFloat(input2.value) == 0) {
                output.innerHTML = "Tidak bisa dibagi 0";
            }

            break;
        default:
            mindit();
            return;
    }
}