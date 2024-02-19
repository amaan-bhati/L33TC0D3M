var partition = function (s) {
    const isP = (str) => str === str.split("").reverse().join(""),
        path = [],
        res = [];
    BT();
    return res;
    function BT(idx = 0) {
        if (idx === s.length) {
            res.push([...path]);
            return;
        }

        for (let i = idx + 1; i <= s.length; i++) {
            let curStr = s.substring(idx, i);
            if (isP(curStr)) {
                path.push(curStr);
                BT(i);
                path.pop();
            }
        }
    }
};
