function createCounter(a) {
    let i = 0;
    function f() {
        const sum = a + i;
        i++;
        return sum;
    }
    return f;
}

const counter = createCounter(10);
console.log(counter(10));
console.log(counter(10));
console.log(counter(10));