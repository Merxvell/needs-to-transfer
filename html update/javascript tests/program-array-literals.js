var empty = [];
numbers = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine'
];

empty[1] //undefined
numbers[1] //'one'

empty.length //0
numbers.length //10

//The object literal
var numbers_object = {
    '0': 'zero',
    '1': 'one',
    '2': 'two',
    '3': 'three',
    '4': 'four',
    '5': 'five',
    '6': 'six',
    '7': 'seven',
    '8': 'eight',
    '9': 'nine'
};

//Javascript arrays can contain any mixture of values
var mis = [
    'string', 98.6, true, false, null, undefined, ['nested', 'array'], {
        object: true
    },
    NaN, Infinity
];
mist.length //10
