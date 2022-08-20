// Реализовать функцию f: 
f(2, 3) // 5, при вызове 
f(2)(3) // тоже вернет 5
function fo(a, b) {
    if (b !== undefined) {
        return a + b;
    } else {
        return function (b) {
            return a + b;
        }
    }
}
// Хоть данный шаблон упоминается в книге Стефанова, на практике я ни разу не видел, что бы кто-то его использовал.

// Более сложный вариант.
f(1)(2)(3)() // 6,
f(0)(3)(1)(5)() // 8
function f(arg) {
    var value = arg;

    return function (arg) {
        if (arg !== undefined) {
            return f(value + arg);
        } else {
            return value;
        }
    }
}
// Реализовать функцию, которая возвращает результаты

foo(1)(2)(3) // 6
foo(1)(2)(3)(4) // 10
foo(-1)(2)(3)(4)(7) // 15
// foo(1)(2)(3)...(n) вернет результатом сумму 1+2+3...+n

// Самый сложный вариант, когда вызов этой конструкции не заканчивается пустыми скобками, а значит мы не имеем явного указателя на выход. 
// Задача досталась не мне, в комментариях к статье мне любезно рассказали решение.
function foo(value) {
    var acc = value;
    function addNext(next) {
        acc += next;
        return addNext;
    }
    addNext.toString = addNext.valueOf = function () {
        return acc;
    }
    return addNext;
}