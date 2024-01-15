var closeStrings = function (word1, word2) {
    if (word1.length != word2.length) return false;

    const letters = Array.from({ length: 26 }, () => 0);

    countDistinctLetters(word1, letters);
    const result1 = getResult(letters);

    letters.fill(0);

const countDistinctLetters = (string, array) =>
    string.split('').forEach((_, index) => array[string.charCodeAt(index) - 97]++);
    
