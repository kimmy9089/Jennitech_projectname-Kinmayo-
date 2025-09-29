// Arithmetic Operations
function calculator(a, b, operator) {
    switch(operator) {
        case '+': return a + b;
        case '-': return a - b;
        case '*': return a * b;
        case '/': return b !== 0 ? a / b : "Error: Division by zero";
        case '%': return a % b;
        default: return "Invalid Operator";
    }
}

// Logical Operations
function logicalOps(x, y) {
    return {
        AND: x && y,
        OR: x || y,
        NOT_X: !x,
        NOT_Y: !y
    };
}

// Comparison Operations
function compare(a, b) {
    return {
        equal: a == b,
        strictEqual: a === b,
        notEqual: a != b,
        greater: a > b,
        less: a < b,
        greaterOrEqual: a >= b,
        lessOrEqual: a <= b
    };
}

// Example Usage
console.log("Arithmetic:", calculator(10, 7, '+')); // 16
console.log("Logical:", logicalOps(true, false)); 
console.log("Comparison:", compare(10, 7));