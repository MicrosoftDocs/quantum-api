---
uid: Microsoft.Quantum.Convert.RangeAsIntArray
title: RangeAsIntArray function
ms.date: 7/28/2023 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: function
qsharp.namespace: Microsoft.Quantum.Convert
qsharp.name: RangeAsIntArray
qsharp.summary: Creates an array `arr` of integers enumerated by start..step..end.
---

# RangeAsIntArray function

> [!WARNING]
> This documentation refers to the Classic QDK, which has been replaced by the Modern QDK.
>
> Please see <https://aka.ms/qdk.api> for the API documentation for the Modern QDK.

Namespace: [Microsoft.Quantum.Convert](xref:Microsoft.Quantum.Convert)

Package: [Microsoft.Quantum.Standard](https://nuget.org/packages/Microsoft.Quantum.Standard)


Creates an array `arr` of integers enumerated by start..step..end.

```qsharp
function RangeAsIntArray (range : Range) : Int[]
```


## Input

### range : [Range](xref:microsoft.quantum.qsharp.valueliterals#range-literals)

A `Range` of values `start..step..end` to be converted to an array.



## Output : [Int](xref:microsoft.quantum.qsharp.valueliterals#int-literals)[]

A new array of integers corresponding to values iterated over by `range`.

## Example

```qsharp// The following returns [1,3,5,7];let array = RangeAsIntArray(1..2..8);```