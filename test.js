class Calculator {
    add(x, y) {
        return x + y;
    }

    subtract(x, y) {
        return x - y;
    }

    multiply(x, y) {
        return x * y;
    }

    divide(x, y) {
        if (y === 0) {
            return "Error! Division by zero.";
        }
        return x / y;
    }

    promptUser() {
        const operation = prompt("Select operation:\n1. Add\n2. Subtract\n3. Multiply\n4. Divide\nEnter choice (1/2/3/4):");
        const num1 = parseFloat(prompt("Enter first number:"));
        const num2 = parseFloat(prompt("Enter second number:"));

        let result;
        switch (operation) {
            case '1':
                result = this.add(num1, num2);
                break;
            case '2':
                result = this.subtract(num1, num2);
                break;
            case '3':
                result = this.multiply(num1, num2);
                break;
            case '4':
                result = this.divide(num1, num2);
                break;
            default:
                result = "Invalid operation.";
        }

        alert(`Result: ${result}`);
    }
}

const calculator = new Calculator();
calculator.promptUser();