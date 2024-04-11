const {oneEuroIs} = require('./app.js');

test('One euro should be 1,07 dollars', function (){
    const {fromEurotoDollar} = require('./app.js');
    expect (fromEurotoDollar(1)).toBe(oneEuroIs.USD);
})

test ('1,07 dollars should be 156,5 yen', function () {
    const {fromDollarToYen} = require('./app.js');
    expect (fromDollarToYen(oneEuroIs.USD)).toBe(oneEuroIs.JPY);
})

test ('156,5 Yen should be 0,87 pound', function () {
    const {fromYentoPound} = require('./app.js');
    expect(fromYentoPound(oneEuroIs.JPY)).toBe(oneEuroIs.GBP);
})
