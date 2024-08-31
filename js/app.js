// FOR START
{
    // 1 - misol
    // function printKTimes(k, n) {
    //     for (let i = 0; i < n; i++) {
    //         console.log(k);
    //     }
    // }
    
    // printKTimes(3, 5);
    
}

{
    // 2 - misol
    // function printRange(a, b) {
    //     for (let i = a; i <= b; i++) {
    //         console.log(i);
    //     }
    // }
    
    // printRange(2, 7);
    
}

{
    // 3 - misol
    // function printRangeDescending(a, b) {
    //     for (let i = b; i >= a; i--) {
    //         console.log(i);
    //     }
    // }
    
    // printRangeDescending(2, 7);
    
}

{
    // 4 - misol
    // function calculateCandyCost(pricePerKg) {
    //     for (let i = 1; i <= 10; i++) {
    //         console.log(`${i} kg costs ${i * pricePerKg}`);
    //     }
    // }
    
    // calculateCandyCost(5);
    
}

{
    // 5 - misol
    // function calculateCandyCostInTenth(pricePerKg) {
    //     for (let i = 1; i <= 10; i++) {
    //         let weight = i / 10;
    //         console.log(`${weight} kg costs ${weight * pricePerKg}`);
    //     }
    // }
    
    // calculateCandyCostInTenth(5);
    
}

{
    // 6 - misol
    // function calculateCandyCostInTwos(pricePerKg) {
    //     for (let i = 12; i <= 20; i += 2) {
    //         let weight = i / 10;
    //         console.log(`${weight} kg costs ${weight * pricePerKg}`);
    //     }
    // }
    
    // calculateCandyCostInTwos(5);
    
}

{
    // 7 - misol
    // function sumRange(a, b) {
    //     let sum = 0;
    //     for (let i = a; i <= b; i++) {
    //         sum += i;
    //     }
    //     console.log(`Sum of integers between ${a} and ${b} is ${sum}`);
    // }
    
    // sumRange(2, 7);
    
}

{
    // 8 - misol
    // function productRange(a, b) {
    //     let product = 1;
    //     for (let i = a; i <= b; i++) {
    //         product *= i;
    //     }
    //     console.log(`Product of integers between ${a} and ${b} is ${product}`);
    // }
    
    // productRange(2, 5);
    
}

{
    // 9 - misol
    // function sumOfSquares(a, b) {
    //     let sum = 0;
    //     for (let i = a; i <= b; i++) {
    //         sum += i * i;
    //     }
    //     console.log(`Sum of squares of integers between ${a} and ${b} is ${sum}`);
    // }
    
    // sumOfSquares(2, 5); // Example: calculates the sum of squares of 2, 3, 4, 5
    
}

{
    // 10 - misol
    // function calculateHarmonicSum(n) {
    //     let sum = 0;
    //     for (let i = 1; i <= n; i++) {
    //         sum += 1 / i;
    //     }
    //     console.log(`The harmonic sum S for n = ${n} is ${sum}`);
    // }
    
    // calculateHarmonicSum(5);
    
}

// FOR END
// WHILE START

{
    // 1 - misol
    // function fitSegment(A, B) {
    //     let count = 0;
    //     while (A >= B) {
    //         A -= B;
    //         count++;
    //     }
    //     console.log(`B fits into A ${count} times, and the remaining segment is ${A}`);
    // }
    
    // fitSegment(23, 5);
    
}

{
    // 2 - misol
    // function countFitSegments(A, B) {
    //     let count = 0;
    //     while (A >= B) {
    //         A -= B;
    //         count++;
    //     }
    //     console.log(`B fits into A exactly ${count} times`);
    // }
    
    // countFitSegments(20, 4);
    
}

{
    // 3 - misol
    // function divideWithRemainder(N, K) {
    //     let quotient = 0;
    //     while (N >= K) {
    //         N -= K;
    //         quotient++;
    //     }
    //     console.log(`Quotient: ${quotient}, Remainder: ${N}`);
    // }
    
    // divideWithRemainder(17, 3);
    
}

{
    // 4 - misol
    // function isPowerOfThree(n) {
    //     while (n > 1 && n % 3 === 0) {
    //         n /= 3;
    //     }
    //     if (n === 1) {
    //         console.log("n is a power of 3");
    //     } else {
    //         console.log("n is not a power of 3");
    //     }
    // }
    
    // isPowerOfThree(27);
    
}

{
    // 5 - misol
    // function findPowerOfTwo(n) {
    //     let k = 0;
    //     while (n > 1 && n % 2 === 0) {
    //         n /= 2;
    //         k++;
    //     }
    //     if (n === 1) {
    //         console.log(`n is 2^${k}`);
    //     } else {
    //         console.log("n is not a power of 2");
    //     }
    // }
    
    // findPowerOfTwo(16);
    
}

{
    // 6 - misol
//     function doubleFactorial(n) {
//     let result = 1;
//     while (n > 0) {
//         result *= n;
//         n -= 2;
//     }
//     console.log(`Double factorial is ${result}`);
// }

// doubleFactorial(5);

}

{
    // 7 - misol
    // function smallestKSquareGreaterThanN(n) {
    //     let k = 1;
    //     while (k * k <= n) {
    //         k++;
    //     }
    //     console.log(`The smallest k such that k^2 > n is ${k}`);
    // }
    
    // smallestKSquareGreaterThanN(10);
    
}

{
    // 8 - misol
    // function largestKSquareLessThanOrEqualN(n) {
    //     let k = 1;
    //     while ((k + 1) * (k + 1) <= n) {
    //         k++;
    //     }
    //     console.log(`The largest k such that k^2 <= n is ${k}`);
    // }
    
    // largestKSquareLessThanOrEqualN(10);
    
}

{
    // 9 - misol
    // function findSmallestK(n) {
    //     let k = 0;
    //     while (Math.pow(3, k) <= n) {
    //         k++;
    //     }
    //     console.log(`For n = ${n}, the smallest k such that 3^k > n is: ${k}`);
    // }

    // const n = 10;
    // findSmallestK(n);
}

{
    // 10 - misol
    // function findLargestK(n) {
    //     let k = 0;
    //     while (Math.pow(3, k + 1) <= n) {
    //         k++;
    //     }
    //     console.log(`For n = ${n}, the largest k such that 3^k <= n is: ${k}`);
    // }

    // const n = 10;
    // findLargestK(n);
}

// WHILE END