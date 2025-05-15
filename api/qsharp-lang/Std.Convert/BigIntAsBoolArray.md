---
uid: Qdk.Std.Convert.BigIntAsBoolArray
title: BigIntAsBoolArray function
description: "Q# BigIntAsBoolArray function: Produces a binary representation of a non-negative BigInt, using the little-endian representation for the returned array."
ms.date: 01/24/2025
ms.topic: generated-reference
qsharp.kind: function
qsharp.package: __Std__
qsharp.namespace: Std.Convert
qsharp.name: BigIntAsBoolArray
qsharp.summary: "Produces a binary representation of a non-negative BigInt, using the little-endian representation for the returned array."
---

# BigIntAsBoolArray function

Fully qualified name: Std.Convert.BigIntAsBoolArray

```qsharp
function BigIntAsBoolArray(number : BigInt, bits : Int) : Bool[]
```

## Summary
Produces a binary representation of a non-negative BigInt, using the
little-endian representation for the returned array.

## Input
### number
A non-negative BigInt to be converted to an array of Boolean values.
### bits
The number of bits in the binary representation of `number`.

## Output
An array of Boolean values representing `number`.

## Remarks
The input `bits` must be non-negative.
The input `number` must be between 0 and 2^bits - 1.
