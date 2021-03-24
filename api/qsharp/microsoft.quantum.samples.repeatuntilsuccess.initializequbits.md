---
uid: Microsoft.Quantum.Samples.RepeatUntilSuccess.InitializeQubits
title: InitializeQubits operation
ms.date: 3/24/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Samples.RepeatUntilSuccess
qsharp.name: InitializeQubits
qsharp.summary: Initialize axiliary and resource qubits in |+⟩, target in |0⟩ or |1⟩.
---

# InitializeQubits operation

Namespace: [Microsoft.Quantum.Samples.RepeatUntilSuccess](xref:Microsoft.Quantum.Samples.RepeatUntilSuccess)

Package: [RepeatUntilSuccess](https://nuget.org/packages/RepeatUntilSuccess)


Initialize axiliary and resource qubits in |+⟩, target in |0⟩ or |1⟩.

```qsharp
operation InitializeQubits (inputBasis : Pauli, inputValue : Bool, auxiliary : Qubit, resource : Qubit, target : Qubit) : Unit
```


## Input

### inputBasis : [Pauli](xref:microsoft.quantum.lang-ref.pauli)

Pauli basis in which to prepare input qubit


### inputValue : [Bool](xref:microsoft.quantum.lang-ref.bool)

Boolean value for input qubit (true maps to One, false maps to Zero)


### auxiliary : [Qubit](xref:microsoft.quantum.lang-ref.qubit)

Auxiliary qubit


### resource : [Qubit](xref:microsoft.quantum.lang-ref.qubit)

Resource qubit


### target : [Qubit](xref:microsoft.quantum.lang-ref.qubit)

Target qubit



## Output : [Unit](xref:microsoft.quantum.lang-ref.unit)

