const arr = ['kot', 'tok', 'okt'];
const arr1 = ['kot', 'tok', 'ott'];

function sameWords(arr) {
    let word1, word2;

    for (let i = 0; i < arr.length - 1; i++) {
        word1 = 0;
        word2 = 0;

        if (arr[i].length !== arr[i + 1].length) {
            return false;
        } else {
            for (let j = 0; j < arr[i].length; j++) {
                word1 += arr[i][j].charCodeAt(0);
                word2 += arr[i + 1][j].charCodeAt(0);
            }

            if (word1 !== word2) {
                return false;
            }
        }
    }

    return true;
}

console.log(sameWords(arr));
console.log(sameWords(arr1));