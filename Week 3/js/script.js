// #1
var ages = [3, 9, 23, 64, 2, 8, 28, 93]; //array values are denoted by square brackets

    //#1a - subtracting the first element from the last element
    var lastArray = ages[ages.length - 1];
    var firstArray = ages[ages.length - ages.length];
    var lastFirstSubtraction = lastArray - firstArray;
    console.log(`1st element subtracted from last element: ${lastFirstSubtraction}`);

    //#1b - adding a new value to my array
    ages.push(21);
    console.log(ages);
        //repeat step #1a w/new information from #1b
    var lastArray = ages[ages.length - 1];
    var firstArray = ages[ages.length - ages.length];
    var lastFirstSubtraction = lastArray - firstArray;
    console.log(`1st element subtracted from last element: ${lastFirstSubtraction}`);

    //1c - loop to iterate through the array and calculate average age
    var sum = 0.0, avg = 0.0;
    for (var i = 0; i < ages.length; i++) { //runs a loop from 0 to the length of the array
        sum = sum + ages[i]; //add each age to the sum
    }
    console.log("Average age : ", sum/ages.length);


//#2
var names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];

    //2a - use loop to iterate through the array and calculate the average number of letters per name
    sum = 0;
    for ( i = 0; i < names.length; i++) {
        sum = sum + names[i].length;
    }
    console.log("Average letters per name : ",sum/names.length);

    //2b - loop to iterate through the array, concatenate all the names together, separate by spaces, and print
    for (let i = 0; i < names.length; i++) {
        console.log(names[i]);
    }


//#3
/* You can access the last element of any array by using length*/
var lastArrayName = names[names.length-1];
console.log(lastArrayName);


//#4
/* You can access the first element of any array by using zero base indexing*/
console.log(names[0]);


//#5 - Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.
var nameLengths = [];
for (i = 0; i < names.length; i++) {
    nameLengths[i] = names[i].length;
};


//#6 - Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array. Print the result to the console.
sum = 0;
for ( i = 0; i < nameLengths.length; i++) {
    sum = sum + nameLengths[i];
}
console.log("NameLengths sum: ",sum);


/* 
#7 - Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. 
(i.e. if I pass in ‘Hello’ and 3, I would expect the function to return ‘HelloHelloHello’).
*/
func = (word, n) => {
    var concatenated = '';
    while (n !=0) { 
        concatenated += word
        n--
    }
    return concatenated
}
console.log(func('Hello', 3));



//#8 - Write a function that takes two parameters, firstName and lastName, and returns a full name (the full name should be the first and the last name separated by a space).
function fullName(firstName, lastName) {
    console.log(firstName + ' ' + lastName);
}
fullName('Ralph', 'Wiggum');


//#9 - Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.
function sumGreaterThan100(myArray) {
    sum = 0 ;
    for (i = 0; i < myArray.length; i++) {
        sum = sum + myArray[i];
    }
    if (sum > 100)
    {
        return true;
    }
    else
    {
        return false;
    }
};


//#10 - Write a function that takes an array of numbers and returns the average of all the elements in the array.
function average(myArray)
{
    sum = 0;
    for(i = 0; i < myArray.length; i++)
    {
        sum = sum + myArray[i];
    }
    return (sum/myArray.length);
}

/* 
#11 - Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the 
average of the elements in the second array.
*/
function arrayComparison(array1, array2) {
    var arrayAverage1 = average(array1);
    var arrayAverage2 = average(array2);
    return arrayAverage1 > arrayAverage2;
}


/* 
#12 - Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is 
hot outside and if moneyInPocket is greater than 10.50.
*/
function willBuyDrink(isHotOutside, moneyInPocket) { //
    var result = isHotOutside && moneyInPocket > 10.50;
    return result;
};


//#13 - Create a function of your own that solves a problem. In comments, write what the function does and why you created it
var nSwitchGame = {
    title: 'SpellBreak',
    cost: 'Free 2 Play',
    ratings: 88,
    printswitchTitle: function() { //prints the desired title
        console.log(this.switchtitle); //this refers to the object itself
    }
};
console.log(nSwitchGame.title); //title refers to what value is there

/*
giuthub repository
https://github.com/RalphRebel/testRepository
*/