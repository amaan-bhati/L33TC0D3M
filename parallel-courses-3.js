var minimumTime = function (n, relations, time) {
    let max = time[0]
    let dp = {}
    let adjList = new Array(n + 1)
    for (let i = 0; i < n + 1; i++) {
        adjList[i] = []
    }
    for (let [u, v] of relations) {
        adjList[v].push(u)
    }
    for (let i = 1; i <= n; i++) {
        max = Math.max(max, dfs(adjList, time, i, dp))
    }
    return max
};

var dfs = function (adjList, time, node, dp) {
    if (dp[node]) return dp[node]
    let preMaxTime = 0
    for (let u of adjList[node]) {
        preMaxTime = Math.max(preMaxTime, dfs(adjList, time, u, dp))
    }
    return dp[node] = time[node - 1] + preMaxTime
}
