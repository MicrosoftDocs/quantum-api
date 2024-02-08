---
uid: Microsoft.Quantum.Simulation.IntToPauli
title: IntToPauli function
ms.date: 7/28/2023 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: function
qsharp.namespace: Microsoft.Quantum.Simulation
qsharp.name: IntToPauli
qsharp.summary: Converts a integer to a single-qubit Pauli operator.
---

# IntToPauli function

> [!WARNING]
> This documentation refers to the Classic QDK, which has been replaced by the Modern QDK.
>
> Please see <https://aka.ms/qdk.api> for the API documentation for the Modern QDK.

Namespace: [Microsoft.Quantum.Simulation](xref:Microsoft.Quantum.Simulation)

Package: [Microsoft.Quantum.Standard](https://nuget.org/packages/Microsoft.Quantum.Standard)


Converts a integer to a single-qubit Pauli operator.

```qsharp
function IntToPauli (idx : Int) : Pauli
```


## Input

### idx : [Int](xref:microsoft.quantum.qsharp.valueliterals#int-literals)

Integer in the range `0..3` to be converted to Pauli operators.



## Output : [Pauli](xref:microsoft.quantum.qsharp.valueliterals#pauli-literals)

A `Pauli` operator given by `[PauliI, PauliX, PauliY, PauliZ][idx]`.