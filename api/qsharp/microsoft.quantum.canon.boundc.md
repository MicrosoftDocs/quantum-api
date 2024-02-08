---
uid: Microsoft.Quantum.Canon.BoundC
title: BoundC function
ms.date: 7/28/2023 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: function
qsharp.namespace: Microsoft.Quantum.Canon
qsharp.name: BoundC
qsharp.summary: >-
  Given an array of operations acting on a single input,
  produces a new operation that
  performs each given operation in sequence.
  The modifier `C` indicates that all operations in the array are controllable.
---

# BoundC function

> [!WARNING]
> This documentation refers to the Classic QDK, which has been replaced by the Modern QDK.
>
> Please see <https://aka.ms/qdk.api> for the API documentation for the Modern QDK.

Namespace: [Microsoft.Quantum.Canon](xref:Microsoft.Quantum.Canon)

Package: [Microsoft.Quantum.Standard](https://nuget.org/packages/Microsoft.Quantum.Standard)


Given an array of operations acting on a single input,produces a new operation thatperforms each given operation in sequence.The modifier `C` indicates that all operations in the array are controllable.

```qsharp
function BoundC<'T> (operations : ('T => Unit is Ctl)[]) : ('T => Unit is Ctl)
```


## Input

### operations : 'T => [Unit](xref:microsoft.quantum.qsharp.valueliterals#unit-literal)  is Ctl[]

A sequence of operations to be performed on a given input.



## Output : 'T => [Unit](xref:microsoft.quantum.qsharp.valueliterals#unit-literal)  is Ctl

A new operation that performs each given operation in sequenceon its input.

## Type Parameters

### 'T

The target on which each of the operations in the array act.

## Example

The following are equivalent:```qsharplet bound = BoundC([U, V]);bound(x);```and```qsharpU(x); V(x);```

## See Also

- [Microsoft.Quantum.Canon.Bound](xref:Microsoft.Quantum.Canon.Bound)