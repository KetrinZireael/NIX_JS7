let weight = prompt('Введите значение от 1 до 10');
let recommendation = '';

if (weight < 4) {
    recommendation = 'Пора перекусить';
    console.log(recommendation);
} else if (weight <= 5.5) {
    recommendation = 'Вес в норме';
    console.log(recommendation);
} else if (weight > 5.5){
    recommendation = 'Пора на тренировку';
    console.log(recommendation);
}