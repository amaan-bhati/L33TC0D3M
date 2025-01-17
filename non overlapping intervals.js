var eraseOverlapIntervals = function (intervals) {
    intervals.sort((a, b) => a[1] - b[1]);
    let end = intervals[0][1];
    let removeCount = 0;

    for (let i = 1; i < intervals.length; i++) {
        if (intervals[i][0] < end) {
            removeCount++;
        } else {
            end = intervals[i][1];
        }
    }

    return removeCount;
};
