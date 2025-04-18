const MathematicalOperations = {
    sum: '+',
    subtraction: '-',
    multiplication: '*',
    division: '/'
};

function calculate({ a, b, operation}) {
    let result = null;

    switch(operation) {
        case MathematicalOperations.sum:
            result = sum(a,b);

        break;
        case MathematicalOperations.subtraction:
            result = subtraction(a,b);

        break;
        case MathematicalOperations.multiplication:
            result = multiplication(a,b);

        break;
        case MathematicalOperations.division:
            result = division(a,b);

        break;

        default:
            break;
    }

    return result;
}