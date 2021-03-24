---
uid: RCczTClifford.MapPauliZ
title: MapPauliZ operation
ms.date: 3/24/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: RCczTClifford
qsharp.name: MapPauliZ
qsharp.summary: >-
  MapPauli applies a Qubit Clifford to qubit such that the following two pieces of code are equivalent
  `MapPauliZ(pauli, qubit); Z(qubit); Adjoint MapPauliZ(pauli, qubit);` and `ApplyPauli(pauli, qubit);`.
---

# MapPauliZ operation

Namespace: [RCczTClifford](xref:RCczTClifford)

Package: [FaultTolerantDecompositionsTests](https://nuget.org/packages/FaultTolerantDecompositionsTests)


MapPauli applies a Qubit Clifford to qubit such that the following two pieces of code are equivalent`MapPauliZ(pauli, qubit); Z(qubit); Adjoint MapPauliZ(pauli, qubit);` and `ApplyPauli(pauli, qubit);`.

```qsharp
operation MapPauliZ (pauli : Pauli, qubit : Qubit) : Unit is Adj
```


## Input

### pauli : [Pauli](xref:microsoft.quantum.lang-ref.pauli)




### qubit : [Qubit](xref:microsoft.quantum.lang-ref.qubit)





## Output : [Unit](xref:microsoft.quantum.lang-ref.unit)

