
var getHint = function (secret, guess) {
    let bulls = 0;
    let cows = 0;
    const secretDigitsCount = new Array(10).fill(0);
    const guessDigitsCount = new Array(10).fill(0);

    for (let i = 0; i < secret.length; i++) {
        if (secret[i] === guess[i]) {
            bulls++;
        } else {
            secretDigitsCount[Number(secret[i])]++;
            guessDigitsCount[Number(guess[i])]++;
        }
    }

    for (let i = 0; i < 10; i++) {
        cows += Math.min(secretDigitsCount[i], guessDigitsCount[i]);
    }

    return `${bulls}A${cows}B`;
}

