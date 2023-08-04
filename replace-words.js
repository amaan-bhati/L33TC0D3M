/**
 * @param {string[]} dictionary
 * @param {string} sentence
 * @return {string}
 */
var replaceWords = function (dictionary, sentence) {
    const dictSet = new Set(dictionary);
    const sentenceArr = sentence.split(" ");

    const replaceWord = (word) => {
        for (let i = 1; i <= word.length; i++) {
            const prefix = word.substring(0, i);
            if (dictSet.has(prefix)) {
                return prefix;
            }
        }
        return word;
    };

    const resultArr = sentenceArr.map(replaceWord);
    return resultArr.join(" ");
};
