---
uid: Microsoft.Quantum.Research.Samples.ApplyBlockEncodedHamiltonian
title: ApplyBlockEncodedHamiltonian operation
ms.date: 4/23/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Research.Samples
qsharp.name: ApplyBlockEncodedHamiltonian
qsharp.summary: Unitary that contains all information of a two-qubit Hamiltonian through ``qubitization.''
---

# ApplyBlockEncodedHamiltonian operation

Namespace: [Microsoft.Quantum.Research.Samples](xref:Microsoft.Quantum.Research.Samples)

Package: [qsp](https://nuget.org/packages/qsp)


Unitary that contains all information of a two-qubit Hamiltonian through ``qubitization.''

```qsharp
operation ApplyBlockEncodedHamiltonian (qubits : Qubit[]) : Unit is Adj + Ctl
```


## Description

The unitary is $U = -i G S$ that encodes a Hamiltonian $H$ where $G = 2\ket{G}\bra{G} -1$ and $H = \bra{G} S \ket{G}$.

## Input

### qubits : [Qubit](xref:microsoft.quantum.qsharp.valueliterals#qubit-literals)[]





## Output : [Unit](xref:microsoft.quantum.qsharp.valueliterals#unit-literal)

