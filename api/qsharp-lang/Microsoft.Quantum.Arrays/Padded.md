---
uid: Qdk.Microsoft.Quantum.Arrays.Padded
title: Padded function
ms.date: 02/23/2024 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: function
qsharp.namespace: Microsoft.Quantum.Arrays
qsharp.name: Padded
qsharp.summary: Returns an array padded at with specified values up to a specified length.
---

# Padded function

Namespace: Microsoft.Quantum.Arrays

```qsharp
function Padded<'T>(paddedLength : Int, defaultElement : 'T, inputArray : 'T[]) : 'T[]
```

## Summary
Returns an array padded at with specified values up to a
specified length.

## Type Parameters
### 'T
The type of the array elements.

## Input
### paddedLength
The length of the padded array. If this is positive, `array`
is padded at the head. If this is negative, `array` is padded
at the tail.
### defaultElement
Default value to use for padding elements.
### array
Array to be padded.

## Output
An array `output` that is the `array` padded at the head or the tail
with `defaultElement`s until `output` has length `paddedLength`

## Example
```qsharp
let array = [10, 11, 12];
// The following line returns [10, 12, 15, 2, 2].
let output = Padded(-5, 2, array);
// The following line returns [2, 2, 10, 12, 15].
let output = Padded(5, 2, array);
```
