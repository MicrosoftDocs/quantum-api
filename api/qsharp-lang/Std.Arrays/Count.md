---
uid: Qdk.Std.Arrays.Count
title: Count function
description: "Q# Count function: Given an array and a predicate that is defined for the elements of the array, returns the number of elements an array that consists of those elements that satisfy the predicate."
ms.date: 06/02/2025
qsharp.kind: function
qsharp.package: __Std__
qsharp.namespace: Std.Arrays
qsharp.name: Count
qsharp.summary: "Given an array and a predicate that is defined for the elements of the array, returns the number of elements an array that consists of those elements that satisfy the predicate."
---

# Count function

Fully qualified name: Std.Arrays.Count

```qsharp
function Count<'T>(predicate : ('T -> Bool), array : 'T[]) : Int
```

## Summary
Given an array and a predicate that is defined
for the elements of the array, returns the number of elements
an array that consists of those elements that satisfy the predicate.

## Type Parameters
### 'T
The type of `array` elements.

## Input
### predicate
A function from `'T` to Boolean that is used to filter elements.
### array
An array of elements over `'T`.

## Output
The number of elements in `array` that satisfy the predicate.

## Example
```qsharp
let evensCount = Count(x -> x % 2 == 0, [1, 3, 6, 7, 9]);
// evensCount is 1.
```
