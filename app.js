let oneEuroIs = {
    'JPY' : 156.5,
    'USD' : 1.07,
    'GBP' : 0.87,
}

const fromEuroToDollar = function(valueInEuro) {
    let valueInDollar = valueInEuro * oneEuroIs.USD;
    return valueInDollar;
}
console.log(fromEuroToDollar(1))

const fromDollarToYen = function(valueInDollar) {
    let valueInYen = valueInDollar * oneEuroIs.JPY / oneEuroIs.USD;
    return valueInYen;
}
console.log(fromDollarToYen(1.07))

const fromYenToPound = function(valueInYen) {
let valueInPound = valueInYen * oneEuroIs.GBP / oneEuroIs.JPY;
return valueInPound;
}
console.log(fromYenToPound(156,5))



module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound }












/*function fromEuroToDollar(euro){
    return euro * oneEuroIs['USD']
}

function fromDollarToYen(dolar) {
    return dolar * (1/oneEuroIs['USD']) * oneEuroIs['JPY']
}

function fromYenToPound(pound) {
    return pound * (1/oneEuroIs['USD']) * oneEuroIs['GBP']
}
*/
