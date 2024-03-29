---
uid: Microsoft.Quantum.Canon.SinglyControlled
title: SinglyControlled function
ms.date: 7/28/2023 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: function
qsharp.namespace: Microsoft.Quantum.Canon
qsharp.name: SinglyControlled
qsharp.summary: >-
  Given a controllable operation, returns a controlled version of that operation
  accepting exactly one control qubit.
---

# SinglyControlled function

> [!WARNING]
> This documentation refers to the Classic QDK, which has been replaced by the Modern QDK.
>
> Please see <https://aka.ms/qdk.api> for the API documentation for the Modern QDK.

Namespace: [Microsoft.Quantum.Canon](xref:Microsoft.Quantum.Canon)

Package: [Microsoft.Quantum.Standard](https://nuget.org/packages/Microsoft.Quantum.Standard)


Given a controllable operation, returns a controlled version of that operationaccepting exactly one control qubit.

```qsharp
function SinglyControlled<'T> (op : ('T => Unit is Ctl)) : ((Qubit, 'T) => Unit is Ctl)
```


## Input

### op : 'T => [Unit](xref:microsoft.quantum.qsharp.valueliterals#unit-literal)  is Ctl

The operation to be controlled.



## Output : ([Qubit](xref:microsoft.quantum.qsharp.valueliterals#qubit-literals),'T) => [Unit](xref:microsoft.quantum.qsharp.valueliterals#unit-literal)  is Ctl

A controlled variant of `op` accepting exactly one control qubit.

## Type Parameters

### 'T



## Example

To add the weight (number of "1" bits) of a control register toa target register:```qsharpApplyToEachCA(    SinglyControlled(IncrementByInteger)(_, (1, target)),    controls));```

## See Also

- [Microsoft.Quantum.Canon.SinglyControlledA](xref:Microsoft.Quantum.Canon.SinglyControlledA)