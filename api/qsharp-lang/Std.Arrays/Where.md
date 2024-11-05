---
uid: Qdk.Std.Arrays.Where
title: Where function
ms.date: 11/01/2024
ms.topic: managed-reference
qsharp.kind: function
qsharp.package: __Std__
qsharp.namespace: Std.Arrays
qsharp.name: Where
qsharp.summary: "Given a predicate and an array, returns the indices of that array where the predicate is true."
---

# Where function

Fully qualified name: Std.Arrays.Where

```qsharp
function Where<'T>(predicate : ('T -> Bool), array : 'T[]) : Int[]
```

## Summary
Given a predicate and an array, returns the indices of that
array where the predicate is true.

## Type Parameters
### 'T
The type of `array` elements.

## Input
### predicate
A function from `'T` to Boolean that is used to filter elements.
### array
An array of elements over `'T`.

## Output
An array of indices where `predicate` is true.
