# Unexpected Type Coercion in Firebase Cloud Function

This repository demonstrates an uncommon bug related to type coercion in JavaScript when using Firebase Cloud Functions.

The issue arises when adding a number and a string without explicit type checking.  JavaScript's loose typing can lead to unexpected results, especially when dealing with data from various sources within a Firebase environment.

The `bug.js` file shows the problematic code. The `bugSolution.js` provides a solution.

## Bug

The `add` function attempts to add a number and a string.  JavaScript coerces both to strings, resulting in string concatenation instead of numeric addition.

## Solution

The solution explicitly checks the types and handles them appropriately, ensuring numeric addition.

## How to reproduce

1. Clone this repo.
2. Run `bug.js`. Observe the unexpected output (55).
3. Run `bugSolution.js`. Observe the corrected output (10).