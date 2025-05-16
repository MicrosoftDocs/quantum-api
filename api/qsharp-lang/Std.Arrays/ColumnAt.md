---
uid: Qdk.Std.Arrays.ColumnAt
title: ColumnAt function
description: "Q# ColumnAt function: Extracts a column from a matrix."
ms.date: 01/24/2025
ms.topic: generated-reference
qsharp.kind: function
qsharp.package: __Std__
qsharp.namespace: Std.Arrays
qsharp.name: ColumnAt
qsharp.summary: "Extracts a column from a matrix."
---

# ColumnAt function

Fully qualified name: Std.Arrays.ColumnAt

```qsharp
function ColumnAt<'T>(column : Int, matrix : 'T[][]) : 'T[]
```

## Summary
Extracts a column from a matrix.

## Description
This function extracts a column in a matrix in row-wise order.
Extracting a row corresponds to element access of the first index
and therefore requires no further treatment.

## Type Parameters
### 'T
The type of each element of `matrix`.

## Input
### column
Column of the matrix
### matrix
2-dimensional matrix in row-wise order

## Example
```qsharp
let matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
let column = ColumnAt(0, matrix);
// same as: column = [1, 4, 7]
```

## See Also
- [Std.Arrays.Transposed](xref:Qdk.Std.Arrays.Transposed)
- [Std.Arrays.Diagonal](xref:Qdk.Std.Arrays.Diagonal)
