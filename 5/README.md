
Create a simple index.html page with a JavaScript file. In the JavaScript file solve these exercises, display the results in your index.html.
**IF YOU'RE STUCK CHECK OUT THE HINTS FILE.**

### 1. Fibonacci and Recursion

Write a JavaScript program to get the first *n* Fibonacci numbers.
Note : The Fibonacci Sequence is the series of numbers: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, . . . 
Each subsequent number is the sum of the previous two.

```
// Your code here.

console.log(getFibonacci(10));
// → 0, 1, 1, 2, 3, 5, 8, 13, 21, 34
```

### 2. Bean counting

You can get the Nth character, or letter, from a string by writing "string"[N]. The returned value will be a string containing only one character (for example, "b"). The first character has position 0, which causes the last one to be found at position string.length - 1. In other words, a two-character string has length 2, and its characters have positions 0 and 1.

Write a function countBs that takes a string as its only argument and returns a number that indicates how many uppercase “B” characters there are in the string.

Next, write a function called countChar that behaves like countBs, except it takes a second argument that indicates the character that is to be counted (rather than counting only uppercase “B” characters). Rewrite countBs to make use of this new function.

```
// Your code here.

console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4
```
