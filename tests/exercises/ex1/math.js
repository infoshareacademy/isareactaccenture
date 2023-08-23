const add = (a, b) => {
    return a + b;
};

const factorial = (number) => {
    let result = 1;
    for (let i = 2; i <= number; i++)
        result *= i;
    
    return result;
}

const multiplyOneHaveBePositiveAndNonZero = (a, b) => {
    if (a <= 0 && b <= 0) {
        throw new Error('Both numbers have to be positive.');
    }
    
    if(a === 0 || b === 0) {
        throw new Error('Zero not allowed');
    }

    return a * b;
}

