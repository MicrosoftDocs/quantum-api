---
uid: Microsoft.Quantum.Canon.NoOp
title: NoOp operation
ms.date: 7/23/2022 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Canon
qsharp.name: NoOp
qsharp.summary: Performs the identity operation (no-op) on an argument.
---

# NoOp operation

Namespace: [Microsoft.Quantum.Canon](xref:Microsoft.Quantum.Canon)

Package: [Microsoft.Quantum.QSharp.Foundation](https://nuget.org/packages/Microsoft.Quantum.QSharp.Foundation)


Performs the identity operation (no-op) on an argument.

```qsharp
operation NoOp<'T> (input : 'T) : Unit is Adj + Ctl
```


## Description

This operation takes a value of any type and does nothing to it.This can be useful whenever an input of an operation type is expected,but no action should be taken.For instance, if a particular error correction syndrome indicates thatno error has occurred, `NoOp<Qubit[]>` may be the correct recoveryprocedure.Similarly, if an operation expects a state preparation procedure asinput, `NoOp<Qubit[]>` can be used to prepare the state$\ket{0 \cdots 0}$.

## Input

### input : 'T

A value to be ignored.



## Output : [Unit](xref:microsoft.quantum.qsharp.valueliterals#unit-literal)



## Type Parameters

### 'T



## See Also

- [Microsoft.Quantum.Intrinsic.I](xref:Microsoft.Quantum.Intrinsic.I)