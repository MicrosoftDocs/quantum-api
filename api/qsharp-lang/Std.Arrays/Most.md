---
uid: Qdk.Std.Arrays.Most
title: Most function
description: "Q# Most function: Creates an array that is equal to an input array except that the last array element is dropped."
ms.date: 01/24/2025
ms.topic: managed-reference
qsharp.kind: function
qsharp.package: __Std__
qsharp.namespace: Std.Arrays
qsharp.name: Most
qsharp.summary: "Creates an array that is equal to an input array except that the last array element is dropped."
---

# Most function

Fully qualified name: Std.Arrays.Most

```qsharp
function Most<'T>(array : 'T[]) : 'T[]
```

## Summary
Creates an array that is equal to an input array except that the last array
element is dropped.

## Type Parameters
### 'T
The type of the array elements.

## Input
### array
An array whose first to second-to-last elements are to form the output array.

## Output
An array containing the elements `array[0..Length(array) - 2]`.
