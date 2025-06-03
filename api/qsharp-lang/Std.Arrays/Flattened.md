---
uid: Qdk.Std.Arrays.Flattened
title: Flattened function
description: "Q# Flattened function: Given an array of arrays, returns the concatenation of all arrays."
ms.date: 06/02/2025
qsharp.kind: function
qsharp.package: __Std__
qsharp.namespace: Std.Arrays
qsharp.name: Flattened
qsharp.summary: "Given an array of arrays, returns the concatenation of all arrays."
---

# Flattened function

Fully qualified name: Std.Arrays.Flattened

```qsharp
function Flattened<'T>(arrays : 'T[][]) : 'T[]
```

## Summary
Given an array of arrays, returns the concatenation of all arrays.

## Type Parameters
### 'T
The type of `array` elements.

## Input
### arrays
Array of arrays.

## Output
Concatenation of all arrays.

## Example
```qsharp
let flattened = Flattened([[1, 2], [3], [4, 5, 6]]);
// flattened = [1, 2, 3, 4, 5, 6]
```
