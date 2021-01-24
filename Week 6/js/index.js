function doSomething(x, y) {
    if (typeof x != 'string') {
        throw new Error('x must be a string'); //throw an error if the first parameter is not a string
    }
    return x + y;
}