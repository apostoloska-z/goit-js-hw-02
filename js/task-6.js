let input;
const numbers = [];
let total=0;

do {
  input = prompt('Введите число');
  if (input === null) {
    break;
  }
  if (Number.isNaN(Number(input))) {
    alert ('Было введено не число, попробуйте еще раз');
    continue;
  }
  input = Number(input);
  numbers.push(input);
} while (input !== null);

if (numbers.length !== 0) {
    for (const number of numbers) {
    total += number;
  }
  console.log(`Общая сумма чисел равна ${total}`);
} else {
    alert ('Вы ничего не ввели');
};

