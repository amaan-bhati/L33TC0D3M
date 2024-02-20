var maxProfit = function (prices) {
    let n = prices.length,
        dp = [];
    for (let i = 0; i < n + 2; ++i) {
        dp.push([]);
        for (let j = 0; j < 2; ++j) {
            dp[i].push(0);
        }
    }
    let doNothing = 0,
       }
    }
    return dp[0][0];
};
