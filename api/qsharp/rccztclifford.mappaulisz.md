---
uid: RCczTClifford.MapPaulisZ
title: MapPaulisZ operation
ms.date: 3/24/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: RCczTClifford
qsharp.name: MapPaulisZ
qsharp.summary: >-
  MapPauli applies a Qubit Cliffords to qubits such that the following two pieces of code are equivalent
  `MapPaulisZ(paulis, qubits); ApplyToEach(Z, qubits); Adjoint MapPaulisZ(paulis, qubits);` and `ApplyPaulis(paulis, qubits);`.
---

# MapPaulisZ operation

Namespace: [RCczTClifford](xref:RCczTClifford)

Package: [FaultTolerantDecompositionsTests](https://nuget.org/packages/FaultTolerantDecompositionsTests)


MapPauli applies a Qubit Cliffords to qubits such that the following two pieces of code are equivalent`MapPaulisZ(paulis, qubits); ApplyToEach(Z, qubits); Adjoint MapPaulisZ(paulis, qubits);` and `ApplyPaulis(paulis, qubits);`.

```qsharp
operation MapPaulisZ (paulis : Pauli[], qubits : Qubit[]) : Unit is Adj
```


## Input

### paulis : [Pauli](xref:microsoft.quantum.lang-ref.pauli)[]




### qubits : [Qubit](xref:microsoft.quantum.lang-ref.qubit)[]





## Output : [Unit](xref:microsoft.quantum.lang-ref.unit)

