---
uid: Qdk.Microsoft.Quantum.Arrays.Transposed
title: Transposed function
ms.date: 02/23/2024 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: function
qsharp.namespace: Microsoft.Quantum.Arrays
qsharp.name: Transposed
qsharp.summary: Returns the transpose of a matrix represented as an array of arrays.
---

# Transposed function

Namespace: Microsoft.Quantum.Arrays

```qsharp
function Transposed<'T>(matrix : 'T[][]) : 'T[][]
```

## Summary
Returns the transpose of a matrix represented as an array
of arrays.

## Description
Input as an r x c matrix with r rows and c columns.  The matrix
is row-based, i.e., `matrix[i][j]` accesses the element at row `i` and column `j`.

This function returns the c x r matrix that is the transpose of the
input matrix.

## Type Parameters
### 'T
The type of each element of `matrix`.

## Input
### matrix
Row-based r x c matrix.

## Output
Transposed c x r matrix.

## Example
```qsharp
// same as [[1, 4], [2, 5], [3, 6]]
let transposed = Transposed([[1, 2, 3], [4, 5, 6]]);
```
