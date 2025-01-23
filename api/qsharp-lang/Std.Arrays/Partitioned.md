---
uid: Qdk.Std.Arrays.Partitioned
title: Partitioned function
description: "Q# Partitioned function: Splits an array into multiple parts."
ms.date: 01/22/2025
ms.topic: managed-reference
qsharp.kind: function
qsharp.package: __Std__
qsharp.namespace: Std.Arrays
qsharp.name: Partitioned
qsharp.summary: "Splits an array into multiple parts."
---

# Partitioned function

Fully qualified name: Std.Arrays.Partitioned

```qsharp
function Partitioned<'T>(partitionSizes : Int[], array : 'T[]) : 'T[][]
```

## Summary
Splits an array into multiple parts.

## Input
### partitionSizes
Number of elements in each split part of array.
### array
Input array to be split.

## Output
Multiple arrays where the first array is the first `partitionSizes[0]` of `array`
and the second array are the next `partitionSizes[1]` of `array` etc. The last array
will contain all remaining elements. If the array is split exactly, the
last array will be the empty array, indicating there are no remaining elements.
In other words, `Tail(Partitioned(...))` will always return the remaining
elements, while `Most(Partitioned(...))` will always return the complete
partitions of the array.

## Example
```qsharp
// The following returns [[2, 3], [5], [7]];
let split = Partitioned([2, 1], [2, 3, 5, 7]);
// The following returns [[2, 3], [5, 7], []];
let split = Partitioned([2, 2], [2, 3, 5, 7]);
```
