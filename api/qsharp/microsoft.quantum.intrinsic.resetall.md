---
uid: Microsoft.Quantum.Intrinsic.ResetAll
title: ResetAll operation
ms.date: 09/14/2023
ms.topic: managed-reference
ms.author: quantumdocwriters
description: >-
  Given an array of qubits, measure them and ensure they are in the |0⟩ state
  such that they can be safely released.
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Intrinsic
qsharp.name: ResetAll
qsharp.summary: >-
  Given an array of qubits, measure them and ensure they are in the |0⟩ state
  such that they can be safely released.
---

# ResetAll operation

Namespace: [Microsoft.Quantum.Intrinsic](xref:Microsoft.Quantum.Intrinsic)

Package: [Microsoft.Quantum.Type3.Core](https://nuget.org/packages/Microsoft.Quantum.Type3.Core)


Given an array of qubits, measure them and ensure they are in the |0⟩ statesuch that they can be safely released.

```qsharp
operation ResetAll (qubits : Qubit[]) : Unit
```


## Input

### qubits : [Qubit](xref:microsoft.quantum.qsharp.valueliterals#qubit-literals)[]

An array of qubits whose states are to be reset to $\ket{0}$.



## Output : [Unit](xref:microsoft.quantum.qsharp.valueliterals#unit-literal)

