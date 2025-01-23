---
uid: Qdk.Std.Arrays.ForEach
title: ForEach operation
description: "Q# ForEach operation: Given an array and an operation that is defined for the elements of the array, returns a new array that consists of the images of the original array under the operation."
ms.date: 01/22/2025
ms.topic: managed-reference
qsharp.kind: operation
qsharp.package: __Std__
qsharp.namespace: Std.Arrays
qsharp.name: ForEach
qsharp.summary: "Given an array and an operation that is defined for the elements of the array, returns a new array that consists of the images of the original array under the operation."
---

# ForEach operation

Fully qualified name: Std.Arrays.ForEach

```qsharp
operation ForEach<'T, 'U>(action : ('T => 'U), array : 'T[]) : 'U[]
```

## Summary
Given an array and an operation that is defined
for the elements of the array, returns a new array that consists
of the images of the original array under the operation.

## Type Parameters
### 'T
The type of `array` elements.
### 'U
The result type of the `action` operation.

## Input
### action
An operation from `'T` to `'U` that is applied to each element.
### array
An array of elements over `'T`.

## Output
An array `'U[]` of elements that are mapped by the `action` operation.

## See Also
- [Std.Arrays.Mapped](xref:Qdk.Std.Arrays.Mapped)
