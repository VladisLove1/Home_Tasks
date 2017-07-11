var operator = prompt("Какую операцию совершить? (+, -, *, /");
var operand1 = prompt("Введите первое число");
var operand2 = prompt("Введите второе число");

confirm("Вы уверены?");

switch (operator) {
    case '+':
        alert(operand1 + operand2);
        break;
    case '-':
        alert(operand1 - operand2);
        break;
    case '*':
        alert(operand1 * operand2);
        break;
    case '/':
        alert(operand1 / operand2);
        break;
}
