
var maxLength = function (arr) {
    let ls = [];

    for (let s of arr) {
        let flag = 0;
        let visited = new Set();

        for (let char of s) {
            if (visited.has(char)) {
                flag = 1;
                break;
            } else {
                visited.add(char);
            }
        }

        if (flag === 0) {
            ls.push(s);
        }
    }

    return helper("", 0, ls);
};

var helper = function (s, i, ls) {
    if (i === ls.length) {
        return s.length;
    }

    let notTake = helper(s, i + 1, ls);
    let flag = 0;

    for (let j = 0; j < s.length; j++) {
        if (ls[i].includes(s.charAt(j))) {
            flag = 1;
            break;
        }
    }

    let take = 0;

    if (flag === 0) {
        take = helper(s + ls[i], i + 1, ls);
    }

    return Math.max(take, notTake);
};
