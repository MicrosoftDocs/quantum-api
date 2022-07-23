---
uid: Microsoft.Quantum.Synthesis.PauliAsSingleQubitClifford
title: PauliAsSingleQubitClifford function
ms.date: 7/23/2022 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: function
qsharp.namespace: Microsoft.Quantum.Synthesis
qsharp.name: PauliAsSingleQubitClifford
qsharp.summary: >-
  Returns a representation of a single-qubit Pauli operator as
  a single-qubit Clifford operator that acts by conjugation.
---

# PauliAsSingleQubitClifford function

Namespace: [Microsoft.Quantum.Synthesis](xref:Microsoft.Quantum.Synthesis)

Package: [Microsoft.Quantum.Standard](https://nuget.org/packages/Microsoft.Quantum.Standard)


Returns a representation of a single-qubit Pauli operator asa single-qubit Clifford operator that acts by conjugation.

```qsharp
function PauliAsSingleQubitClifford (pauli : Pauli) : Microsoft.Quantum.Synthesis.SingleQubitClifford
```


## Description

Given a Pauli operator $P$, this function returns a Clifford operatorthat represents the function $Q \mapsto PQP^{\dagger}$.

## Input

### pauli : [Pauli](xref:microsoft.quantum.qsharp.valueliterals#pauli-literals)

The Pauli operator to be represented as a Clifford operator.



## Output : [SingleQubitClifford](xref:Microsoft.Quantum.Synthesis.SingleQubitClifford)

A single-qubit Clifford operator representing the action of `pauli` byconjugation.

## Remarks

For a value `pauli` of type `Pauli`, `ApplyP(pauli, _)` and`Apply1C(PauliAsSingleQubitClifford(pauli), _)` are the same operation.