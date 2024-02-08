---
uid: Microsoft.Quantum.Canon.BoundCA
title: BoundCA function
ms.date: 7/28/2023 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: function
qsharp.namespace: Microsoft.Quantum.Canon
qsharp.name: BoundCA
qsharp.summary: >-
  Given an array of operations acting on a single input,
  produces a new operation that
  performs each given operation in sequence.
  The modifier `CA` indicates that all operations in the array are adjointable
  and controllable.
---

# BoundCA function

> [!WARNING]
> This documentation refers to the Classic QDK, which has been replaced by the Modern QDK.
>
> Please see <https://aka.ms/qdk.api> for the API documentation for the Modern QDK.

Namespace: [Microsoft.Quantum.Canon](xref:Microsoft.Quantum.Canon)

Package: [Microsoft.Quantum.Standard](https://nuget.org/packages/Microsoft.Quantum.Standard)


Given an array of operations acting on a single input,produces a new operation thatperforms each given operation in sequence.The modifier `CA` indicates that all operations in the array are adjointableand controllable.

```qsharp
function BoundCA<'T> (operations : ('T => Unit is Adj + Ctl)[]) : ('T => Unit is Adj + Ctl)
```


## Input

### operations : 'T => [Unit](xref:microsoft.quantum.qsharp.valueliterals#unit-literal)  is Adj + Ctl[]

A sequence of operations to be performed on a given input.



## Output : 'T => [Unit](xref:microsoft.quantum.qsharp.valueliterals#unit-literal)  is Adj + Ctl

A new operation that performs each given operation in sequenceon its input.

## Type Parameters

### 'T

The target on which each of the operations in the array act.

## Example

The following are equivalent:```qsharplet bound = BoundCA([U, V]);bound(x);```and```qsharpU(x); V(x);```

## See Also

- [Microsoft.Quantum.Canon.Bound](xref:Microsoft.Quantum.Canon.Bound)