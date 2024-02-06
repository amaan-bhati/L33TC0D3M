var oddEvenList = function (head) {
    if (head === null || head.next === null) return head;
    let nextOdd = head;
    let firstEven = head.next;
    let nextEven = firstEven;
    while (nextEven && nextEven.next) {
        nextOdd.next = nextEven.next;
        nextEven.next = nextEven.next.next;
        nextOdd = nextOdd.next;
        nextEven = nextEven.next;
    }
    nextOdd.next = firstEven;
    return head;
};
