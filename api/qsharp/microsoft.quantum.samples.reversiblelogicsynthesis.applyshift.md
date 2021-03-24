---
uid: Microsoft.Quantum.Samples.ReversibleLogicSynthesis.ApplyShift
title: ApplyShift operation
ms.date: 3/24/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Samples.ReversibleLogicSynthesis
qsharp.name: ApplyShift
qsharp.summary: >-
  Applies shift (+s) to array of qubits using Pauli X gates.

  A Pauli X gate is applied to each qubit from an array if the
  corresponding bit position of a given value is 1.
---

# ApplyShift operation

Namespace: [Microsoft.Quantum.Samples.ReversibleLogicSynthesis](xref:Microsoft.Quantum.Samples.ReversibleLogicSynthesis)

Package: [ReversibleLogicSynthesis](https://nuget.org/packages/ReversibleLogicSynthesis)


Applies shift (+s) to array of qubits using Pauli X gates.A Pauli X gate is applied to each qubit from an array if thecorresponding bit position of a given value is 1.

```qsharp
operation ApplyShift (shift : Int, qubits : Qubit[]) : Unit is Adj
```


## Input

### shift : [Int](xref:microsoft.quantum.lang-ref.int)

A nonnegative number.


### qubits : [Qubit](xref:microsoft.quantum.lang-ref.qubit)[]

An array of qubits.



## Output : [Unit](xref:microsoft.quantum.lang-ref.unit)

