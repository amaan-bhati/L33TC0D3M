function mergeAccounts(accounts) {
    const emailToName = new Map();
    const graph = new Map();

    // Build the graph and create a mapping of email to name
    for (const account of accounts) {
        const name = account[0];
        for (let i = 1; i < account.length; i++) {
            const email = account[i];
            emailToName.set(email, name);
            if (!graph.has(email)) {
                graph.set(email, new Set());
            }
            if (i > 1) { // Connect emails within the same account
                const prevEmail = account[i - 1];
                graph.get(prevEmail).add(email);
                graph.get(email).add(prevEmail);
            }
        }
    }

    const visited = new Set();

    function dfs(email, emails) {
        emails.push(email);
        visited.add(email);
        for (const neighbor of graph.get(email)) {
            if (!visited.has(neighbor)) {
                dfs(neighbor, emails);
            }
        }
    }

    const result = [];

    for (const email of emailToName.keys()) {
        if (!visited.has(email)) {
            const emails = [];
            dfs(email, emails);
            emails.sort();
            const name = emailToName.get(email);
            result.push([name, ...emails]);
        }
    }

    return result;
}
