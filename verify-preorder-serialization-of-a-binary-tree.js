var isValidSerialization = function (preorder) {
    let vacancy = 1
    preorder = preorder.split(',')
    for (let node of preorder) {
        vacancy = vacancy - 1
        if (vacancy < 0) { 
            return false
        }
        if (node != '#') {
            vacancy = vacancy + 2 
        }
    }
    return vacancy == 0
};
