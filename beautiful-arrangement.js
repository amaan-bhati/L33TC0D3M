var countArrangement = function (n) {
    let count = 0;
    const visited = Array(n + 1).fill(false)

    function permute(idx) {
        if (idx > n) count++;

        for (let i = 1; i <= n; i++) {
            if (visited[i]) continue;
            if (i % idx && idx % i) continue;
            visited[i] = true;
            permute(idx + 1);
            visited[i] = false;
        }
    }
    permute(1);
    return count;
};
