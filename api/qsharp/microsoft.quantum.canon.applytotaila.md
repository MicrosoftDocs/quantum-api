---
uid: Microsoft.Quantum.Canon.ApplyToTailA
title: ApplyToTailA operation
ms.date: 7/28/2023 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Canon
qsharp.name: ApplyToTailA
qsharp.summary: Applies an operation to the last element of an array.
---

# ApplyToTailA operation

> [!WARNING]
> This documentation refers to the Classic QDK, which has been replaced by the Modern QDK.
>
> Please see <https://aka.ms/qdk.api> for the API documentation for the Modern QDK.

Namespace: [Microsoft.Quantum.Canon](xref:Microsoft.Quantum.Canon)

Package: [Microsoft.Quantum.Standard](https://nuget.org/packages/Microsoft.Quantum.Standard)


Applies an operation to the last element of an array.

```qsharp
operation ApplyToTailA<'T> (op : ('T => Unit is Adj), targets : 'T[]) : Unit is Adj
```


## Description

Given an operation `op` and an array of targets `targets`,applies `op(Tail(targets))`.

## Input

### op : 'T => [Unit](xref:microsoft.quantum.qsharp.valueliterals#unit-literal)  is Adj

An operation to be applied.


### targets : 'T[]

An array of targets, of which the last will be applied to `op`.



## Output : [Unit](xref:microsoft.quantum.qsharp.valueliterals#unit-literal)



## Type Parameters

### 'T

The input type of the operation to be applied.

## See Also

- [Microsoft.Quantum.Canon.ApplyToTail](xref:Microsoft.Quantum.Canon.ApplyToTail)
- [Microsoft.Quantum.Canon.ApplyToTailC](xref:Microsoft.Quantum.Canon.ApplyToTailC)
- [Microsoft.Quantum.Canon.ApplyToTailCA](xref:Microsoft.Quantum.Canon.ApplyToTailCA)