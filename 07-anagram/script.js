/*
 * Задача 7: «Анаграмма»
 *
 * Два слова называют анаграммами, если они состоят из одних и тех же букв.
 * Напишите функцию, проверяющую, являются ли две строки анаграммами друг друга
 * (регистр букв не имеет значения). Для простоты примите, что в этих строках
 * нет пробелов и знаков препинания.
 * 
 */


function anagram(str1, str2) {
    let s1 = str1.toLowerCase().split('').sort();
    let s2 = str2.toLowerCase().split('').sort();

    // одинаковые слова не могут быть анаграммой
    if (str1.toLowerCase() === str2.toLowerCase()) {
        return false;
    }
    // проверяем длинну массива
    if (s1.length !== s2.length) {
        return false;
    }
    // проверяем каждый элемент массива
    for (i = 0; i < s1.length; i++) {
        if (s1[i] != s2[i]) {
            return false;
        }
        return true;
    }
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(anagram('finder', 'Friend')); // true
console.log(anagram('hello', 'bye')); // false