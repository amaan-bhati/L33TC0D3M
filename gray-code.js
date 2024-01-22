var grayCode = function (n) {
    let ans = [0];
    for (let i = 0; i < n; i++) {
        for (let j = ans.length - 1; j > -1; j--)
            ans.push(ans[j] + Math.pow(2, i));
    }
    return ans;
};
