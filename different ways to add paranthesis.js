
var diffWaysToCompute = function (expression) {
    const memo = {};
    if (memo[expression]) {
        return memo[expression];
    }
    const res = [];
    for (let i = 0; i < expression.length; i++) {
        const c = expression.charAt(i);
        if (c === '+' || c === '-' || c === '*') {
            const left = expression.substring(0, i);
            const right = expression.substring(i + 1);
            const leftValues = diffWaysToCompute(left);
            const rightValues = diffWaysToCompute(right);
            for (const lv of leftValues) {
                for (const rv of rightValues) {
                    if (c === '+') {
                        res.push(lv + rv);
                    } else if (c === '-') {
                        res.push(lv - rv);
                    } else {
                        res.push(lv * rv);
                    }
                }
            }
        }
    }

    if (res.length === 0) {
        res.push(parseInt(expression));
    }

    memo[expression] = res;
    return res;
};
