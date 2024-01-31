var minPathSum = function (grid) {
    let i, j, m, n;
    m = grid.length;
    n = grid[0].length;

    for (i = 0; i < m; i++) {
        for (j = 0; j < n; j++) {
            if (i === 0 && j === 0) continue;
            if (i === 0 && j !== 0) grid[i][j] = grid[i][j] + grid[i][j - 1];
            if (i !== 0 && j === 0) grid[i][j] = grid[i][j] + grid[i - 1][j];
            if (i !== 0 && j !== 0) grid[i][j] = Math.min(grid[i - 1][j], grid[i][j - 1]) + grid[i][j];
        }
    }

    return grid[m - 1][n - 1];
};
