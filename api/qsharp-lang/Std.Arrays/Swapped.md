---
uid: Qdk.Std.Arrays.Swapped
title: Swapped function
ms.date: 11/01/2024 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: function
qsharp.package: __Std__
qsharp.namespace: Std.Arrays
qsharp.name: Swapped
qsharp.summary: "Applies a swap of two elements in an array."
---

# Swapped function

Fully qualified name: Std.Arrays.Swapped

```qsharp
function Swapped<'T>(firstIndex : Int, secondIndex : Int, array : 'T[]) : 'T[]
```

## Summary
Applies a swap of two elements in an array.

## Input
### firstIndex
Index of the first element to be swapped.

### secondIndex
Index of the second element to be swapped.

### array
Array with elements to be swapped.

## Output
The array with the in place swap applied.

## Example
```qsharp
// The following returns [0, 3, 2, 1, 4]
Swapped(1, 3, [0, 1, 2, 3, 4]);
```
