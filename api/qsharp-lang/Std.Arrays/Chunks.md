---
uid: Qdk.Std.Arrays.Chunks
title: Chunks function
ms.date: 10/30/2024 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: function
qsharp.package: __Std__
qsharp.namespace: Std.Arrays
qsharp.name: Chunks
qsharp.summary: "Splits an array into multiple parts of equal length."
---

# Chunks function

Fully qualified name: Std.Arrays.Chunks

```qsharp
function Chunks<'T>(chunkSize : Int, array : 'T[]) : 'T[][]
```

## Summary
Splits an array into multiple parts of equal length.

## Input
### chunkSize
The length of each chunk. Must be positive.
### array
The array to be split in chunks.

## Output
A array containing each chunk of the original array.

## Remarks
Note that the last element of the output may be shorter
than `chunkSize` if `Length(array)` is not divisible by `chunkSize`.
