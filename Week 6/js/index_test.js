//this will be where we write our unit test
var expect = chai.expect; //this will import the chai.expect; this will call the chai method

describe('MyFunctions', function() { //function that will facilitate the test
    describe('#doSomething', function () { //test do something; title
        it('should concatenate the two parameters', function() { //summarize the title: concatenates
            var x = doSomething('Hello', 5);
            expect(x).to.equal('Hello5'); //x is the variable
        });

        it('should throw an error if first parameter is not a string', function() {
            expect(function() {
                doSomething(5, 5); //call our function
            }).to.throw(Error);
        });
    });
});