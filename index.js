function calculateDifference(a,b){
    return b-a;
}
//console.log(calculateDifference(5, 9)); 
function isOdd(n){
    if(n%2 ==1){
        return true;
    }
    else{
        return false;
    }
}
//console.log(isOdd(7));
function findMin(arr){
    let min = arr[0];
    for (let i=1; i<arr.length; i++){
        if (arr[i]< min){
            min = arr[i];
        }
    }
    return min;
}
//console.log(findMin([2,5,7,8]));
function filterEvenNumbers (arr){
    return arr.filter( num=> num%2 ===0 );
}
//console.log(filterEvenNumbers([2,5,7,8]));
function sortArrayDescending(arr){
     return arr.sort((a, b) => b - a);
}
//console.log(sortArrayDescending([2,5,7,8]));
function lowercaseFirstLetter (string){
    let firstCharacter = string[0].toLowerCase();
    let restOfString ="";
    for (let i =1; i<string.length; i++){
        restOfString += string[i];
    }
    return firstCharacter + restOfString;
}
//console.log(lowercaseFirstLetter("ARRAY"));
function findAverage(arr){
 let sum = 0;
 for (let i= 0; i<arr.length; i++){
    sum = sum + arr[i];
 }
 const avg = sum / arr.length;
 return avg;
}
//console.log(findAverage([1,2,3,4]));
function isLeapYear(year){
    leapYear = ( year%4 ===0 && year%100 !==0 ) || (year%400 ===0);
    return leapYear;
}
//console.log(isLeapYear(2019));