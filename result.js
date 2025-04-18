const inputA = document.getElementById("js-number-a");
const inputB = document.getElementById("js-number-b");
const buttonResult = document.getElementById("js-result");
const outputResult = document.getElementById("js-output");
const selectOperations = document.getElementById("js-select-operations");

buttonResult.addEventListener('click', function() {
    const a = Number(inputA.value);
    const b = Number(inputB.value);
    const operation = selectOperations.value;

    const result = calculate({ a, b, operation });


    outputResult.innerHTML = result;
})
