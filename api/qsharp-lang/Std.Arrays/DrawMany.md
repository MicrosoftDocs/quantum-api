---
uid: Qdk.Std.Arrays.DrawMany
title: DrawMany operation
description: "Q# DrawMany operation: Repeats an operation for a given number of samples, collecting its outputs in an array."
ms.date: 05/29/2025
qsharp.kind: operation
qsharp.package: __Std__
qsharp.namespace: Std.Arrays
qsharp.name: DrawMany
qsharp.summary: "Repeats an operation for a given number of samples, collecting its outputs in an array."
---

# DrawMany operation

Fully qualified name: Std.Arrays.DrawMany

```qsharp
operation DrawMany<'TInput, 'TOutput>(op : ('TInput => 'TOutput), nSamples : Int, input : 'TInput) : 'TOutput[]
```

## Summary
Repeats an operation for a given number of samples, collecting its outputs
in an array.

## Input
### op
The operation to be called repeatedly.
### nSamples
The number of samples of calling `op` to collect.
### input
The input to be passed to `op`.

## Type Parameters
### TInput
The type of input expected by `op`.
### TOutput
The type of output returned by `op`.

## Example
The following samples an alternating array of results.
```qsharp
use qubit = Qubit();
let results = Std.Arrays.DrawMany(q => {X(q); M(q)}, 3, qubit);
```
