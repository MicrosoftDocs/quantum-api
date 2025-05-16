---
uid: Qdk.Std.Core.Length
title: Length function
description: "Q# Length function: Returns the number of elements in the input array `a`."
ms.date: 01/24/2025
ms.topic: generated-reference
qsharp.kind: function
qsharp.package: __Core__
qsharp.namespace: Std.Core
qsharp.name: Length
qsharp.summary: "Returns the number of elements in the input array `a`."
---

# Length function

Fully qualified name: Std.Core.Length

```qsharp
function Length<'T>(a : 'T[]) : Int
```

## Summary
Returns the number of elements in the input array `a`.

## Input
### a
Input array.

## Output
The total number of elements in the input array `a`.

## Example
```qsharp
Message($"{ Length([0, 0, 0]) }"); // Prints 3
```
