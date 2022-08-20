function validBraces(str) {

    var arrOpenSymbols = [],
        result = false,
        countOpenSymbols;
    if (str.length > 0) {
        for (var i = 0; i < str.length; i++) {
            if (str[i] === '{' || str[i] === '[' || str[i] === '(') {
                arrOpenSymbols.push(str[i]);
            } else {
                countOpenSymbols = arrOpenSymbols.length;
                if ((str[i] === '}' && arrOpenSymbols[(countOpenSymbols - 1)] === '{') ||
                    (str[i] === ']' && arrOpenSymbols[(countOpenSymbols - 1)] === '[') ||
                    (str[i] === ')' && arrOpenSymbols[(countOpenSymbols - 1)] === '(')
                ) {
                    arrOpenSymbols.pop();
                }
            }
        }

        if (arrOpenSymbols.length === 0) {
            result = true;
        } else {
            result = false;
        }
    }
    return result;
}
console.log('');
console.log(validBraces('()'));
console.log(validBraces('[)'));
console.log(validBraces('{}[]()'));
console.log(validBraces('([{}])'));
console.log(validBraces('())({}}{()][]['));

function validBraces(str) {
    try {
        eval(str);
        return true;
    } catch (err) {
        return false;
    }
}
