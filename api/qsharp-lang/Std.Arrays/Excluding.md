---
uid: Qdk.Std.Arrays.Excluding
title: Excluding function
description: "Q# Excluding function: Returns an array containing the elements of another array, excluding elements at a given list of indices."
ms.date: 01/24/2025
ms.topic: managed-reference
qsharp.kind: function
qsharp.package: __Std__
qsharp.namespace: Std.Arrays
qsharp.name: Excluding
qsharp.summary: "Returns an array containing the elements of another array, excluding elements at a given list of indices."
---

# Excluding function

Fully qualified name: Std.Arrays.Excluding

```qsharp
function Excluding<'T>(remove : Int[], array : 'T[]) : 'T[]
```

## Summary
Returns an array containing the elements of another array,
excluding elements at a given list of indices.

## Type Parameters
### 'T
The type of the array elements.

## Input
### remove
An array of indices denoting which elements should be excluded.
from the output.
### array
Array of which the values in the output array are taken.

## Output
An array `output` such that `output[0]` is the first element
of `array` whose index does not appear in `remove`,
such that `output[1]` is the second such element, and so
forth.

## Example
```qsharp
let array = [10, 11, 12, 13, 14, 15];
// The following line returns [10, 12, 15].
let subarray = Excluding([1, 3, 4], array);
```
