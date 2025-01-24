---
uid: Qdk.Std.Convert.ResultArrayAsInt
title: ResultArrayAsInt function
description: "Q# ResultArrayAsInt function: Produces a non-negative integer from a string of Results in little-endian format."
ms.date: 01/24/2025
ms.topic: managed-reference
qsharp.kind: function
qsharp.package: __Std__
qsharp.namespace: Std.Convert
qsharp.name: ResultArrayAsInt
qsharp.summary: "Produces a non-negative integer from a string of Results in little-endian format."
---

# ResultArrayAsInt function

Fully qualified name: Std.Convert.ResultArrayAsInt

```qsharp
function ResultArrayAsInt(results : Result[]) : Int
```

## Summary
Produces a non-negative integer from a string of Results in little-endian format.

## Input
### results
Results in binary representation of number.

## Output
A non-negative integer

## Example
```qsharp
// The following returns 1
let int1 = ResultArrayAsInt([One,Zero])
```
