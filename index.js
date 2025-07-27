 let inputBox = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');
let string = '';

buttons.forEach(element => {
    element.addEventListener('click', (b) => {
        let btnText = b.target.innerText;

        if (btnText === '=') {
            // try {
                string = eval(string).toString();
                inputBox.value = string;
            // } catch {
            //     inputBox.value = "Error";
            //     string = '';
            // }
        } 
        else if (btnText === 'AC') {
            string = '';
            inputBox.value = string;
        } 
        else if (btnText === 'DEL') {
            string = string.substring(0, string.length - 1);
            inputBox.value = string;
        } 
        else if (b.target.id === 'plusminus') {
            if (string) {
                string = (-eval(string)).toString();
                inputBox.value = string;
            }
        } 
        else {
            string += btnText;
            inputBox.value = string;
        }
    });
});
