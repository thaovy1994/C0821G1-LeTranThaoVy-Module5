function Fibonacci(n: number):number {
    if(n ==1 || n ==2){
        return  1;
    }
    return Fibonacci(n-1) + Fibonacci(n-2);
}
let number: number = 3;
console.log(Fibonacci(number));
