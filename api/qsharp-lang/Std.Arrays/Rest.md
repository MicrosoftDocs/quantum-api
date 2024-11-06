---
uid: Qdk.Std.Arrays.Rest
title: Rest function
ms.date: 11/01/2024
ms.topic: managed-reference
qsharp.kind: function
qsharp.package: __Std__
qsharp.namespace: Std.Arrays
qsharp.name: Rest
qsharp.summary: "Creates an array that is equal to an input array except that the first array element is dropped."
---

# Rest function

Fully qualified name: Std.Arrays.Rest

```qsharp
function Rest<'T>(array : 'T[]) : 'T[]
```

## Summary
Creates an array that is equal to an input array except that the first array
element is dropped.

## Type Parameters
### 'T
The type of the array elements.

## Input
### array
An array whose second to last elements are to form the output array.

## Output
An array containing the elements `array[1..Length(array) - 1]`.
