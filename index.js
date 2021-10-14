// Code your solution in this file!
const returnFirstTwoDrivers = function(arrayOfDrivers) {
    return arrayOfDrivers.slice(0,2)
}

const returnLastTwoDrivers = function(arrayOfDrivers) {
    return arrayOfDrivers.slice(2, arrayOfDrivers.length)
 }

 const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

 function createFareMultiplier(mult) {
     return function (fare) {
         return mult * fare
     }
 }
 const fareDoubler = createFareMultiplier(2)

 const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(arrayOfDrivers, diffDrivers) {
    return diffDrivers(arrayOfDrivers)
}