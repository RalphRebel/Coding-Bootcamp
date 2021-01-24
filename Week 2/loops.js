
let a = 0;
while (a < 100) {
    console.log(a);
    a = a+2; //increment by 2 to print even numbers
};


let b = 100;
while(b >= 0) {
    console.log(b);
    b = b-3; //decrement by 3 to print every 3rd number
}


for (c = 1; c <= 100; c = c + 2) { //print c is equal to c plus 2
    console.log(c)
}


for (i = 0; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {//if divisible by both 3 and 5
        console.log("Hello World");
    } 
    else if (i % 3 == 0) { //if divisible by 3
        console.log("Hello"); 
    }
    else if (i % 5 == 0) { //if divisible by 5
        console.log("World"); 
    }
    else {
        console.log(i);
    }
};


