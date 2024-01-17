class UF {
    constructor(n) {
        this.parents = new Array(n).fill(0).map((_, index) => index + 1)
    }

    union(u, v) {
        const uParent = this.find(u)
        const vParent = this.find(v)
        this.parents[uParent - 1] = vParent
    }
   }
    return []
};
