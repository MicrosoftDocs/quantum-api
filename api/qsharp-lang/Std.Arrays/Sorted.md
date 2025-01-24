---
uid: Qdk.Std.Arrays.Sorted
title: Sorted function
description: "Q# Sorted function: Given an array, returns the elements of that array sorted by a given comparison function."
ms.date: 01/24/2025
ms.topic: managed-reference
qsharp.kind: function
qsharp.package: __Std__
qsharp.namespace: Std.Arrays
qsharp.name: Sorted
qsharp.summary: "Given an array, returns the elements of that array sorted by a given comparison function."
---

# Sorted function

Fully qualified name: Std.Arrays.Sorted

```qsharp
function Sorted<'T>(comparison : (('T, 'T) -> Bool), array : 'T[]) : 'T[]
```

## Summary
Given an array, returns the elements of that array sorted by a given
comparison function.

## Type Parameters
### 'T
The type of each element of `array`.

## Input
### comparison
A function that compares two elements such that `a` is considered to
be less than or equal to `b` if `comparison(a, b)` is `true`.
### array
The array to be sorted.

## Output
An array containing the same elements as `array`, such that for all
elements `a` occurring earlier than elements `b`, `comparison(a, b)`
is `true`.

## Example
The following snippet sorts an array of integers to occur in ascending
order:
```qsharp
let sortedArray = Sorted(LessThanOrEqualI, [3, 17, 11, -201, -11]);
```

## Remarks
The function `comparison` is assumed to be transitive, such that
if `comparison(a, b)` and `comparison(b, c)`, then `comparison(a, c)`
is assumed. If this property does not hold, then the output of this
function may be incorrect.
