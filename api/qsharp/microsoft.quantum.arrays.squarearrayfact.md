---
uid: Microsoft.Quantum.Arrays.SquareArrayFact
title: SquareArrayFact function
ms.date: 7/28/2023 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: function
qsharp.namespace: Microsoft.Quantum.Arrays
qsharp.name: SquareArrayFact
qsharp.summary: Represents a condition that a 2-dimensional array has a square shape
---

# SquareArrayFact function

> [!WARNING]
> This documentation refers to the Classic QDK, which has been replaced by the Modern QDK.
>
> Please see <https://aka.ms/qdk.api> for the API documentation for the Modern QDK.

Namespace: [Microsoft.Quantum.Arrays](xref:Microsoft.Quantum.Arrays)

Package: [Microsoft.Quantum.Standard](https://nuget.org/packages/Microsoft.Quantum.Standard)


Represents a condition that a 2-dimensional array has a square shape

```qsharp
function SquareArrayFact<'T> (array : 'T[][], message : String) : Unit
```


## Description

This function asserts that each row in an array hasas many elements as there are rows (elements) in the array.

## Input

### array : 'T[][]

A 2-dimensional array of elements


### message : [String](xref:microsoft.quantum.qsharp.valueliterals#string-literals)

A message to be printed if the array is not a square array



## Output : [Unit](xref:microsoft.quantum.qsharp.valueliterals#unit-literal)



## Type Parameters

### 'T

The type of each element of `array`.

## Example

```qsharpSquareArrayFact([[1, 2], [3, 4]], "Array is not a square");       // okaySquareArrayFact([[1, 2, 3], [4, 5, 6]], "Array is not a square"); // will failSquareArrayFact([[1, 2], [3, 4, 5]], "Array is not a square");    // will fail```

## See Also

- [Microsoft.Quantum.Arrays.RectangularArrayFact](xref:Microsoft.Quantum.Arrays.RectangularArrayFact)