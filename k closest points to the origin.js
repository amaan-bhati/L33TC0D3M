var kClosest = function (points, k) {
    points.sort((a, b) => squaredDistance(a) - squaredDistance(b));
    return points.slice(0, k);
};

const squaredDistance = ([x, y]) => x ** 2 + y ** 2;
