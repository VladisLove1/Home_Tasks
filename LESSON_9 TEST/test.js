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
QUnit.module ("isSorted");
QUnit.test("sort()", function (assert) {
    assert.ok(sort("a as asd"), "letters sorted");
    assert.ok(sort("1 12 123 1234"), "numbers sorted");
    assert.ok(sort(1, 2, 3), "интерджер - это не стринг");
});



function ariphmetical (na, a1, d) {
    return (((2 * a1 + (na-1)*d)/2)*na);
}


QUnit.module ("ariphmetical");
QUnit.test ("ariphmetical()", function (assert){
    assert.equal(false, 0);
    assert.equal(true, 1);
    assert.equal(ariphmetical(1, 1, 1), 1);
    assert.equal(ariphmetical(-1, -2, -1), 1);
    assert.equal(ariphmetical(x, r, 7), null);

});
