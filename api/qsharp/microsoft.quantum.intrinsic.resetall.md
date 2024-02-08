---
uid: Microsoft.Quantum.Intrinsic.ResetAll
title: ResetAll operation
ms.date: 7/28/2023 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Intrinsic
qsharp.name: ResetAll
qsharp.summary: >-
  Given an array of qubits, measure them and ensure they are in the |0⟩ state
  such that they can be safely released.
---

# ResetAll operation

> [!WARNING]
> This documentation refers to the Classic QDK, which has been replaced by the Modern QDK.
>
> Please see <https://aka.ms/qdk.api> for the API documentation for the Modern QDK.

Namespace: [Microsoft.Quantum.Intrinsic](xref:Microsoft.Quantum.Intrinsic)

Package: [Microsoft.Quantum.Type2.Core](https://nuget.org/packages/Microsoft.Quantum.Type2.Core)


Given an array of qubits, measure them and ensure they are in the |0⟩ statesuch that they can be safely released.

```qsharp
operation ResetAll (qubits : Qubit[]) : Unit
```


## Input

### qubits : [Qubit](xref:microsoft.quantum.qsharp.valueliterals#qubit-literals)[]

An array of qubits whose states are to be reset to $\ket{0}$.



## Output : [Unit](xref:microsoft.quantum.qsharp.valueliterals#unit-literal)

