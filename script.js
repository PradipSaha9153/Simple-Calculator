let input = document.getElementById('input');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);

arr.forEach(button => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            string = eval(string);
            input.value = string;
        }
        else if (e.target.innerHTML == 'AC') {
            string = "";
            input.value = string;
        }
        else if(e.target.innerHTML == 'DEL') {
            string = string.substring(0, string.length-1);
            input.value = string;
        }
        else if (e.target.innerHTML == '%') {
            // Improved percentage logic
            // Find the last operator and calculate percentage based on the left operand
            let match = string.match(/([0-9.]+)([\+\-\*\/])([0-9.]+)$/);
            if (match) {
                let left = parseFloat(match[1]);
                let op = match[2];
                let right = parseFloat(match[3]);
                let percentValue = left * right / 100;
                string = string.replace(/([0-9.]+)$/, percentValue);
                input.value = string;
            } else if (string !== "") {
                // If no operator, just divide by 100
                string = (parseFloat(string) / 100).toString();
                input.value = string;
            }
        }
        else {
            string += e.target.innerHTML;
            input.value = string;
        }
    })
})