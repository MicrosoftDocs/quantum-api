---
uid: Qdk.Std.Arrays.Unzipped
title: Unzipped function
description: "Q# Unzipped function: Given an array of 2-tuples, returns a tuple of two arrays, each containing the elements of the tuples of the input array."
ms.date: 01/22/2025
ms.topic: managed-reference
qsharp.kind: function
qsharp.package: __Std__
qsharp.namespace: Std.Arrays
qsharp.name: Unzipped
qsharp.summary: "Given an array of 2-tuples, returns a tuple of two arrays, each containing the elements of the tuples of the input array."
---

# Unzipped function

Fully qualified name: Std.Arrays.Unzipped

```qsharp
function Unzipped<'T, 'U>(array : ('T, 'U)[]) : ('T[], 'U[])
```

## Summary
Given an array of 2-tuples, returns a tuple of two arrays, each containing
the elements of the tuples of the input array.

## Type Parameters
### 'T
The type of the first element in each tuple.
### 'U
The type of the second element in each tuple.

## Input
### array
An array containing 2-tuples.

## Output
Two arrays, the first one containing all first elements of the input
tuples, the second one containing all second elements of the input tuples.

## Example
```qsharp
// split is same as ([5, 4, 3, 2, 1], [true, false, true, true, false])
let split = Unzipped([(5, true), (4, false), (3, true), (2, true), (1, false)]);
```

## See Also
- [Std.Arrays.Zipped](xref:Qdk.Std.Arrays.Zipped)
