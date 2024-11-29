const { sum } = require("../src/Math");

test('When I try to calculate the sum of two numbers, then i should get the sum result', ()=> {
    let result = sum(1, 5);
    expect(result).toBe(6);
});

