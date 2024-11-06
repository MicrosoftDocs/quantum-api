---
uid: Qdk.Std.Arrays.Any
title: Any function
ms.date: 11/01/2024
ms.topic: managed-reference
qsharp.kind: function
qsharp.package: __Std__
qsharp.namespace: Std.Arrays
qsharp.name: Any
qsharp.summary: "Given an array and a predicate that is defined for the elements of the array, checks if at least one element of the array satisfies the predicate."
---

# Any function

Fully qualified name: Std.Arrays.Any

```qsharp
function Any<'T>(predicate : ('T -> Bool), array : 'T[]) : Bool
```

## Summary
Given an array and a predicate that is defined
for the elements of the array, checks if at least one element of
the array satisfies the predicate.

## Type Parameters
### 'T
The type of `array` elements.

## Input
### predicate
A function from `'T` to `Bool` that is used to check elements.
### array
An array of elements over `'T`.

## Output
A `Bool` value of the OR function of the predicate applied to all elements.

## Example
```qsharp
let anyEven = Any(x -> x % 2 == 0, [1, 3, 6, 7, 9]);
```
