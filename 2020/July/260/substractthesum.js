function SubstractSum(inputNumber) {
    if (isNaN(inputNumber) || (inputNumber < 10) || (inputNumber > 10000)) return;
    let numSting = inputNumber.toString().split('');
    let realDigits = numSting.map(Number);
    let sumOfArrayElements = realDigits.reduce((previousValue, currentValue) => {
        return previousValue + currentValue
    });
    let subtractedSum = inputNumber - sumOfArrayElements;
    if (subtractedSum > 100) {
        SubstractSum(subtractedSum);
    }
    return getFruits().find((value, index) => index = subtractedSum);
}


const getFruits = () => [
    "kiwi",
    "pear",
    "kiwi",
    "banana",
    "melon",
    "banana",
    "melon",
    "pineapple",
    "apple",
    "pineapple",
    "cucumber",
    "pineapple",
    "cucumber",
    "orange",
    "grape",
    "orange",
    "grape",
    "apple",
    "grape",
    "cherry",
    "pear",
    "cherry",
    "pear",
    "kiwi",
    "banana",
    "kiwi",
    "apple",
    "melon",
    "banana",
    "melon",
    "pineapple",
    "melon",
    "pineapple",
    "cucumber",
    "orange",
    "apple",
    "orange",
    "grape",
    "orange",
    "grape",
    "cherry",
    "pear",
    "cherry",
    "pear",
    "apple",
    "pear",
    "kiwi",
    "banana",
    "kiwi",
    "banana",
    "melon",
    "pineapple",
    "melon",
    "apple",
    "cucumber",
    "pineapple",
    "cucumber",
    "orange",
    "cucumber",
    "orange",
    "grape",
    "cherry",
    "apple",
    "cherry",
    "pear",
    "cherry",
    "pear",
    "kiwi",
    "pear",
    "kiwi",
    "banana",
    "apple",
    "banana",
    "melon",
    "pineapple",
    "melon",
    "pineapple",
    "cucumber",
    "pineapple",
    "cucumber",
    "apple",
    "grape",
    "orange",
    "grape",
    "cherry",
    "grape",
    "cherry",
    "pear",
    "cherry",
    "apple",
    "kiwi",
    "banana",
    "kiwi",
    "banana",
    "melon",
    "banana",
    "melon",
    "pineapple",
    "apple",
    "pineapple"];


//console.log(SubstractSum(10));
console.log(SubstractSum(325));
//console.log(SubstractSum(101));
//console.log(SubstractSum(106));
//console.log(SubstractSum('abc'));
//console.log(SubstractSum(9));
//console.log(SubstractSum(1024));
