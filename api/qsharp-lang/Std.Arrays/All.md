---
uid: Qdk.Std.Arrays.All
title: All function
description: "Q# All function: Given an array and a predicate that is defined for the elements of the array, and checks if all elements of the array satisfy the predicate."
ms.date: 01/22/2025
ms.topic: managed-reference
qsharp.kind: function
qsharp.package: __Std__
qsharp.namespace: Std.Arrays
qsharp.name: All
qsharp.summary: "Given an array and a predicate that is defined for the elements of the array, and checks if all elements of the array satisfy the predicate."
---

# All function

Fully qualified name: Std.Arrays.All

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
