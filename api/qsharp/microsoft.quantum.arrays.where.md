---
uid: Microsoft.Quantum.Arrays.Where
title: Where function
ms.date: 4/21/2022 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: function
qsharp.namespace: Microsoft.Quantum.Arrays
qsharp.name: Where
qsharp.summary: >-
  Given a predicate and an array, returns the indices of that
  array where the predicate is true.
---

# Where function

Namespace: [Microsoft.Quantum.Arrays](xref:Microsoft.Quantum.Arrays)

Package: [Microsoft.Quantum.Standard](https://nuget.org/packages/Microsoft.Quantum.Standard)


Given a predicate and an array, returns the indices of thatarray where the predicate is true.

```qsharp
function Where<'T> (predicate : ('T -> Bool), array : 'T[]) : Int[]
```


## Input

### predicate : 'T -> [Bool](xref:microsoft.quantum.qsharp.valueliterals#bool-literals)

A function from `'T` to Boolean that is used to filter elements.


### array : 'T[]

An array of elements over `'T`.



## Output : [Int](xref:microsoft.quantum.qsharp.valueliterals#int-literals)[]

An array of indices where `predicate` is true.

## Type Parameters

### 'T

The type of `array` elements.