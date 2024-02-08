---
uid: Microsoft.Quantum.Arrays.HeadAndRest
title: HeadAndRest function
ms.date: 7/28/2023 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: function
qsharp.namespace: Microsoft.Quantum.Arrays
qsharp.name: HeadAndRest
qsharp.summary: Returns a tuple of first and all remaining elements of the array.
---

# HeadAndRest function

> [!WARNING]
> This documentation refers to the Classic QDK, which has been replaced by the Modern QDK.
>
> Please see <https://aka.ms/qdk.api> for the API documentation for the Modern QDK.

Namespace: [Microsoft.Quantum.Arrays](xref:Microsoft.Quantum.Arrays)

Package: [Microsoft.Quantum.Standard](https://nuget.org/packages/Microsoft.Quantum.Standard)


Returns a tuple of first and all remaining elements of the array.

```qsharp
function HeadAndRest<'A> (array : 'A[]) : ('A, 'A[])
```


## Input

### array : 'A[]

An array with at least one element.



## Output : ('A,'A[])

A tuple of first and all remaining elements of the array.

## Type Parameters

### 'A

The type of the array elements.