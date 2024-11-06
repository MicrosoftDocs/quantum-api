---
uid: Qdk.Std.Arrays.SequenceI
title: SequenceI function
ms.date: 11/01/2024
ms.topic: managed-reference
qsharp.kind: function
qsharp.package: __Std__
qsharp.namespace: Std.Arrays
qsharp.name: SequenceI
qsharp.summary: "Get an array of integers in a given interval."
---

# SequenceI function

Fully qualified name: Std.Arrays.SequenceI

```qsharp
function SequenceI(from : Int, to : Int) : Int[]
```

## Summary
Get an array of integers in a given interval.

## Input
### from
An inclusive start index of the interval.
### to
An inclusive end index of the interval that is not smaller than `from`.

## Output
An array containing the sequence of numbers `from`, `from + 1`, ...,
`to`.

## Example
```qsharp
let arr1 = SequenceI(0, 3); // [0, 1, 2, 3]
let arr2 = SequenceI(23, 29); // [23, 24, 25, 26, 27, 28, 29]
let arr3 = SequenceI(-5, -2); // [-5, -4, -3, -2]

let numbers = SequenceI(0, _); // function to create sequence from 0 to `to`
let naturals = SequenceI(1, _); // function to create sequence from 1 to `to`
```
