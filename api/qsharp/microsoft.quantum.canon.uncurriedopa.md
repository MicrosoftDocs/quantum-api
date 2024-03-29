---
uid: Microsoft.Quantum.Canon.UncurriedOpA
title: UncurriedOpA function
ms.date: 7/28/2023 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: function
qsharp.namespace: Microsoft.Quantum.Canon
qsharp.name: UncurriedOpA
qsharp.summary: >-
  Given a function which returns operations,
  returns a new operation which takes both inputs
  as a tuple.
  The modifier `A` indicates that the operations are adjointable.
---

# UncurriedOpA function

> [!WARNING]
> This documentation refers to the Classic QDK, which has been replaced by the Modern QDK.
>
> Please see <https://aka.ms/qdk.api> for the API documentation for the Modern QDK.

Namespace: [Microsoft.Quantum.Canon](xref:Microsoft.Quantum.Canon)

Package: [Microsoft.Quantum.Standard](https://nuget.org/packages/Microsoft.Quantum.Standard)


Given a function which returns operations,returns a new operation which takes both inputsas a tuple.The modifier `A` indicates that the operations are adjointable.

```qsharp
function UncurriedOpA<'T, 'U> (curriedOp : ('T -> ('U => Unit is Adj))) : (('T, 'U) => Unit is Adj)
```


## Input

### curriedOp : 'T -> 'U => [Unit](xref:microsoft.quantum.qsharp.valueliterals#unit-literal)  is Adj

A function which returns operations.



## Output : ('T,'U) => [Unit](xref:microsoft.quantum.qsharp.valueliterals#unit-literal)  is Adj

A new operation `op` such that `op(t, u)` is equivalentto `(curriedOp(t))(u)`.

## Type Parameters

### 'T

The type of the first argument of a curried function.
### 'U

The type of the second argument of a curried function.

## See Also

- [Microsoft.Quantum.Canon.UncurriedOp](xref:Microsoft.Quantum.Canon.UncurriedOp)