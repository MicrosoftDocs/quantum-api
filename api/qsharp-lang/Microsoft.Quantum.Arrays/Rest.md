---
uid: Qdk.Microsoft.Quantum.Arrays.Rest
title: Rest function
ms.date: 02/23/2024 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: function
qsharp.namespace: Microsoft.Quantum.Arrays
qsharp.name: Rest
qsharp.summary: Creates an array that is equal to an input array except that the first array element is dropped.
---

# Rest function

Namespace: Microsoft.Quantum.Arrays

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
