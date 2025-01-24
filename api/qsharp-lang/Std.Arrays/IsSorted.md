---
uid: Qdk.Std.Arrays.IsSorted
title: IsSorted function
description: "Q# IsSorted function: Given an array, returns whether that array is sorted as defined by a given comparison function."
ms.date: 01/24/2025
ms.topic: managed-reference
qsharp.kind: function
qsharp.package: __Std__
qsharp.namespace: Std.Arrays
qsharp.name: IsSorted
qsharp.summary: "Given an array, returns whether that array is sorted as defined by a given comparison function."
---

# IsSorted function

Fully qualified name: Std.Arrays.IsSorted

```qsharp
function IsSorted<'T>(comparison : (('T, 'T) -> Bool), array : 'T[]) : Bool
```

## Summary
Given an array, returns whether that array is sorted as defined by
a given comparison function.

## Type Parameters
### 'T
The type of each element of `array`.

## Input
### comparison
A function that compares two elements such that `a` is considered to
be less than or equal to `b` if `comparison(a, b)` is `true`.
### array
The array to be checked.

## Output
`true` if and only if for each pair of elements `a` and `b` of
`array` occurring in that order, `comparison(a, b)` is `true`.

## Remarks
The function `comparison` is assumed to be transitive, such that
if `comparison(a, b)` and `comparison(b, c)`, then `comparison(a, c)`
is assumed.
