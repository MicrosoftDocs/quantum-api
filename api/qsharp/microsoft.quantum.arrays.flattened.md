---
uid: Microsoft.Quantum.Arrays.Flattened
title: Flattened function
ms.date: 7/28/2023 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: function
qsharp.namespace: Microsoft.Quantum.Arrays
qsharp.name: Flattened
qsharp.summary: Given an array of arrays, returns the concatenation of all arrays.
---

# Flattened function

> [!WARNING]
> This documentation refers to the Classic QDK, which has been replaced by the Modern QDK.
>
> Please see <https://aka.ms/qdk.api> for the API documentation for the Modern QDK.

Namespace: [Microsoft.Quantum.Arrays](xref:Microsoft.Quantum.Arrays)

Package: [Microsoft.Quantum.Standard](https://nuget.org/packages/Microsoft.Quantum.Standard)


Given an array of arrays, returns the concatenation of all arrays.

```qsharp
function Flattened<'T> (arrays : 'T[][]) : 'T[]
```


## Input

### arrays : 'T[][]

Array of arrays.



## Output : 'T[]

Concatenation of all arrays.

## Type Parameters

### 'T

The type of `array` elements.

## Example

```qsharplet flattened = Flattened([[1, 2], [3], [4, 5, 6]]);// flattened = [1, 2, 3, 4, 5, 6]```