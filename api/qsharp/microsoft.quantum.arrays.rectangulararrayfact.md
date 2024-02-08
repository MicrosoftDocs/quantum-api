---
uid: Microsoft.Quantum.Arrays.RectangularArrayFact
title: RectangularArrayFact function
ms.date: 7/28/2023 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: function
qsharp.namespace: Microsoft.Quantum.Arrays
qsharp.name: RectangularArrayFact
qsharp.summary: Represents a condition that a 2-dimensional array has a rectangular shape
---

# RectangularArrayFact function

> [!WARNING]
> This documentation refers to the Classic QDK, which has been replaced by the Modern QDK.
>
> Please see <https://aka.ms/qdk.api> for the API documentation for the Modern QDK.

Namespace: [Microsoft.Quantum.Arrays](xref:Microsoft.Quantum.Arrays)

Package: [Microsoft.Quantum.Standard](https://nuget.org/packages/Microsoft.Quantum.Standard)


Represents a condition that a 2-dimensional array has a rectangular shape

```qsharp
function RectangularArrayFact<'T> (array : 'T[][], message : String) : Unit
```


## Description

This function asserts that each row in an array has the same length.

## Input

### array : 'T[][]

A 2-dimensional array of elements


### message : [String](xref:microsoft.quantum.qsharp.valueliterals#string-literals)

A message to be printed if the array is not a rectangular array



## Output : [Unit](xref:microsoft.quantum.qsharp.valueliterals#unit-literal)



## Type Parameters

### 'T

The type of each element of `array`.

## Example

```qsharpRectangularArrayFact([[1, 2], [3, 4]], "Array is not rectangular");       // okayRectangularArrayFact([[1, 2, 3], [4, 5, 6]], "Array is not rectangular"); // okayRectangularArrayFact([[1, 2], [3, 4, 5]], "Array is not rectangular");    // will fail```

## See Also

- [Microsoft.Quantum.Arrays.SquareArrayFact](xref:Microsoft.Quantum.Arrays.SquareArrayFact)