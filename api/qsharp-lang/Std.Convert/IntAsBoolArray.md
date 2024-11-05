---
uid: Qdk.Std.Convert.IntAsBoolArray
title: IntAsBoolArray function
ms.date: 11/01/2024
ms.topic: managed-reference
qsharp.kind: function
qsharp.package: __Std__
qsharp.namespace: Std.Convert
qsharp.name: IntAsBoolArray
qsharp.summary: "Produces a binary representation of a non-negative integer, using the little-endian representation for the returned array."
---

# IntAsBoolArray function

Fully qualified name: Std.Convert.IntAsBoolArray

```qsharp
function IntAsBoolArray(number : Int, bits : Int) : Bool[]
```

## Summary
Produces a binary representation of a non-negative integer, using the
little-endian representation for the returned array.

## Input
### number
A non-negative integer to be converted to an array of Boolean values.
### bits
The number of bits in the binary representation of `number`.

## Output
An array of Boolean values representing `number`.

## Remarks
The input `bits` must be non-negative.
The input `number` must be between 0 and 2^bits - 1.
