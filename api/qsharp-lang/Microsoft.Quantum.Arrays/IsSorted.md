---
uid: Qdk.Microsoft.Quantum.Arrays.IsSorted
title: IsSorted function
ms.date: 02/23/2024 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: function
qsharp.namespace: Microsoft.Quantum.Arrays
qsharp.name: IsSorted
qsharp.summary: Given an array, returns whether that array is sorted as defined by a given comparison function.
---

# IsSorted function

Namespace: Microsoft.Quantum.Arrays

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
