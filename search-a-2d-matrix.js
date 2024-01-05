var searchMatrix = function (matrix, target) {
    if (matrix.length === 0) {
        return false;
    }
    var i = 0;
    var j = matrix[0].length - 1;
    while (i <= matrix.length - 1 && j >= 0) {

        if (matrix[i][j] > target) {
            j--;
        } else if (matrix[i][j] === target) {
            return true;
        } else if (matrix[i][j] < target) {
            i++;
        }
    }
    return false;
};
