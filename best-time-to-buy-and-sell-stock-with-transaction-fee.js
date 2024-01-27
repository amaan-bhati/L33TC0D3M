var maxProfit = function (prices, fee) {
    const n = prices.length
    let notHold = 0
    let hold = -prices[0]

    for (let i = 1; i < n; i++) {
        const temp = notHold
        notHold = Math.max(prices[i] - fee + hold, notHold)
        hold = Math.max(-prices[i] + temp, hold)
    }

    return Math.max(notHold, hold)
};
