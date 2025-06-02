---
uid: Qdk.Std.Arrays.Interleaved
title: Interleaved function
description: "Q# Interleaved function: Interleaves two arrays of (almost) same size."
ms.date: 06/02/2025
qsharp.kind: function
qsharp.package: __Std__
qsharp.namespace: Std.Arrays
qsharp.name: Interleaved
qsharp.summary: "Interleaves two arrays of (almost) same size."
---

# Interleaved function

Fully qualified name: Std.Arrays.Interleaved

```qsharp
function Interleaved<'T>(first : 'T[], second : 'T[]) : 'T[]
```

## Summary
Interleaves two arrays of (almost) same size.

## Description
This function returns the interleaving of two arrays, starting
with the first element from the first array, then the first
element from the second array, and so on.

The first array must either be
of the same length as the second one, or can have one more element.

## Type Parameters
### 'T
The type of each element of `first` and `second`.

## Input
### first
The first array to be interleaved.

### second
The second array to be interleaved.

## Output
Interleaved array

## Example
```qsharp
// same as interleaved = [1, -1, 2, -2, 3, -3]
let interleaved = Interleaved([1, 2, 3], [-1, -2, -3])
```
