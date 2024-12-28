# MongoDB $in Operator with Single-Element Array
This example demonstrates a common error when using MongoDB's `$in` operator with a single-element array.  The `$in` operator is designed to check if a field's value is present within an array of values, but when used with a single element, it acts like an equality operator (`$eq`). This can create subtle bugs.

## Bug
The `bug.js` file contains an example of incorrectly using `$in` with a single-element array.  This will produce unexpected results if you were expecting the behavior of multiple-value checking.

## Solution
The `bugSolution.js` file shows the corrected approach. If you only want to check for a single value, it is better to use the `$eq` operator directly. For multiple values, the `$in` operator should be used with an array containing at least two elements.