var NestedIterator = function (nestedList) {
    function flatten(nestedList, r = []) {
        while (nestedList.length) {
            let a = nestedList.shift();
            a.isInteger() ? r.push(a.getInteger()) : flatten(a.getList(), r);
        }
        return r;
    }
    this.queue = flatten(nestedList);
};

NestedIterator.prototype.hasNext = function () {
    return this.queue.length;
};

NestedIterator.prototype.next = function () {
    return this.queue.shift();
};
