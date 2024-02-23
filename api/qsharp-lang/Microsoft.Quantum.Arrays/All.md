---
uid: Qdk.Microsoft.Quantum.Arrays.All
title: All function
ms.date: 02/23/2024 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: function
qsharp.namespace: Microsoft.Quantum.Arrays
qsharp.name: All
qsharp.summary: Given an array and a predicate that is defined for the elements of the array, and checks if all elements of the array satisfy the predicate.
---

# All function

Namespace: Microsoft.Quantum.Arrays

```qsharp
function All<'T>(predicate : ('T -> Bool), array : 'T[]) : Bool
```

## Summary
Given an array and a predicate that is defined
for the elements of the array, and checks if all elements of the
array satisfy the predicate.

## Type Parameters
### 'T
The type of `array` elements.

## Input
### predicate
A function from `'T` to `Bool` that is used to check elements.
### array
An array of elements over `'T`.

## Output
A `Bool` value of the AND function of the predicate applied to all elements.

## Example
The following code checks whether all elements of the array are non-zero:
```qsharp
let allNonZero = All(x -> x != 0, [1, 2, 3, 4, 5]);
```
