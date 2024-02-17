var furthestBuilding = function (heights, bricks, ladders) {
    let len = heights.length - 1,
        pq = new MinPriorityQueue({ priority: x => x });
    for (let i = 0; i < len; i++) {
        let diff = heights[i + 1] - heights[i]
        if (diff > 0) {
            if (ladders > 0) pq.enqueue(diff), ladders--;
            else if (pq.front() && diff > pq.front().element)
                pq.enqueue(diff), bricks -= pq.dequeue().element;
            else bricks -= diff;
            if (bricks < 0) return i;
        }
    }
    return len;
};
