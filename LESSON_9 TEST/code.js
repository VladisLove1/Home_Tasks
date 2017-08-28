/*function ariphmetical (na, a1, d) {
    return (((2 * a1 + (na-1)*d)/2)*na);
}*/

function sort(newArr1) {
    for (var i = 0; i < newArr1.length - 1; i++) {
        for (var j = 0; j < newArr1.length -1; j++) {
            if (newArr1[j+1].length > newArr1[j].length) {
                var replacedValue = newArr1[j+1];
                newArr1[j+1] = newArr1[j];
                newArr1[j] = replacedValue; }
        }
    }
    return newArr1;
}

