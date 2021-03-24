---
uid: Microsoft.Quantum.Samples.Hubbard._ApplyHubbardTerm
title: _ApplyHubbardTerm operation
ms.date: 3/24/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Samples.Hubbard
qsharp.name: _ApplyHubbardTerm
qsharp.summary: Implements time-evolution by a single term in the Hubbard Hamiltonian.
---

# _ApplyHubbardTerm operation

Namespace: [Microsoft.Quantum.Samples.Hubbard](xref:Microsoft.Quantum.Samples.Hubbard)

Package: [HubbardSimulationSample](https://nuget.org/packages/HubbardSimulationSample)


Implements time-evolution by a single term in the Hubbard Hamiltonian.

```qsharp
operation _ApplyHubbardTerm (nSites : Int, tCoefficient : Double, uCoefficient : Double, idxHamiltonian : Int, stepSize : Double, qubits : Qubit[]) : Unit is Adj + Ctl
```


## Input

### nSites : [Int](xref:microsoft.quantum.lang-ref.int)

Number of sites in the Hubbard Hamiltonian.


### tCoefficient : [Double](xref:microsoft.quantum.lang-ref.double)

Coefficient of hopping term.


### uCoefficient : [Double](xref:microsoft.quantum.lang-ref.double)

Coefficient of repulsion term.


### idxHamiltonian : [Int](xref:microsoft.quantum.lang-ref.int)

Index to a term in the Hubbard Hamiltonian.


### stepSize : [Double](xref:microsoft.quantum.lang-ref.double)

Duration of single step of time-evolution


### qubits : [Qubit](xref:microsoft.quantum.lang-ref.qubit)[]

Qubits that the encoded Hubbard Hamiltonian acts on.



## Output : [Unit](xref:microsoft.quantum.lang-ref.unit)

