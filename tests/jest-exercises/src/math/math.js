export const add = (a, b) => {
    return a + b;
};

export const factorial = (number) => {
    let result = 1;
    for (let i = 2; i <= number; i++)
        result *= i;
    
    return result;
}
