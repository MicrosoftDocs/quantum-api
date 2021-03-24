---
uid: Microsoft.Quantum.Samples.Hubbard.JordanWignerPZPString
title: JordanWignerPZPString function
ms.date: 3/24/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: function
qsharp.namespace: Microsoft.Quantum.Samples.Hubbard
qsharp.name: JordanWignerPZPString
qsharp.summary: >-
  Returns an array of Pauli operators corresponding to a Jordan–Wigner
  string PZ...ZP
---

# JordanWignerPZPString function

Namespace: [Microsoft.Quantum.Samples.Hubbard](xref:Microsoft.Quantum.Samples.Hubbard)

Package: [HubbardSimulationSample](https://nuget.org/packages/HubbardSimulationSample)


Returns an array of Pauli operators corresponding to a Jordan–Wignerstring PZ...ZP

```qsharp
function JordanWignerPZPString (nQubits : Int, idxPauli : Pauli, idxQubitA : Int, idxQubitB : Int) : Pauli[]
```


## Input

### nQubits : [Int](xref:microsoft.quantum.lang-ref.int)

Number of qubits that the represented system will act upon.


### idxPauli : [Pauli](xref:microsoft.quantum.lang-ref.pauli)

Pauli operator P to be inserted at the ends of the Jordan–Wignerstring


### idxQubitA : [Int](xref:microsoft.quantum.lang-ref.int)




### idxQubitB : [Int](xref:microsoft.quantum.lang-ref.int)





## Output : [Pauli](xref:microsoft.quantum.lang-ref.pauli)[]

An array of Pauli operators PZ...ZP of length nQubits padded byidentity terms.

## Example

The following are equivalent:```Q#let paulis = JordanWignerPZPString(5, PauliX, 3, 1);let paulis = [PauliI, PauliX, PauliZ, PauliX, PauliI];```