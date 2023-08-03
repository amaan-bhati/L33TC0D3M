/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
    const m = word1.length;
    const n = word2.length;

    // Create a 2D array to store the minimum operations for substrings
    const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

    // Fill in the base cases
    for (let i = 0; i <= m; i++) {
        dp[i][0] = i; // To convert word1 to an empty string
    }

    for (let j = 0; j <= n; j++) {
        dp[0][j] = j; // To convert an empty string to word2
    }

    // Calculate the minimum operations for each substring
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (word1[i - 1] === word2[j - 1]) {
                // Characters are the same, no operation needed
                dp[i][j] = dp[i - 1][j - 1];
            } else {
                // Choose the minimum of insert, delete, or replace operations
                dp[i][j] =
                    1 +
                    Math.min(
                        dp[i - 1][j], // Delete
                        dp[i][j - 1], // Insert
                        dp[i - 1][j - 1] // Replace
                    );
            }
        }
    }

    // The last element of the matrix contains the minimum operations for the entire strings
    return dp[m][n];
};
