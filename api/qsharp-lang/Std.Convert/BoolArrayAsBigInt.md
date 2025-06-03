---
uid: Qdk.Std.Convert.BoolArrayAsBigInt
title: BoolArrayAsBigInt function
description: "Q# BoolArrayAsBigInt function: Converts an array of Boolean values into a non-negative BigInt, interpreting the array as a binary representation in little-endian format."
ms.date: 06/02/2025
qsharp.kind: function
qsharp.package: __Std__
qsharp.namespace: Std.Convert
qsharp.name: BoolArrayAsBigInt
qsharp.summary: "Converts an array of Boolean values into a non-negative BigInt, interpreting the array as a binary representation in little-endian format."
---

# BoolArrayAsBigInt function

Fully qualified name: Std.Convert.BoolArrayAsBigInt

```qsharp
function BoolArrayAsBigInt(boolArray : Bool[]) : BigInt
```

## Summary
Converts an array of Boolean values into a non-negative BigInt, interpreting the
array as a binary representation in little-endian format.

## Input
### boolArray
An array of Boolean values representing the binary digits of a BigInt.

## Output
A BigInt represented by `boolArray`.

## Remarks
The function interprets the array in little-endian format, where the first
element of the array represents the least significant bit.
The input `boolArray` should not be empty.
