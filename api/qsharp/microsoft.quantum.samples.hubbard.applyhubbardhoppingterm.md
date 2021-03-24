---
uid: Microsoft.Quantum.Samples.Hubbard.ApplyHubbardHoppingTerm
title: ApplyHubbardHoppingTerm operation
ms.date: 3/24/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Samples.Hubbard
qsharp.name: ApplyHubbardHoppingTerm
qsharp.summary: Implements time-evolution by a single hopping term.
---

# ApplyHubbardHoppingTerm operation

Namespace: [Microsoft.Quantum.Samples.Hubbard](xref:Microsoft.Quantum.Samples.Hubbard)

Package: [HubbardSimulationSample](https://nuget.org/packages/HubbardSimulationSample)


Implements time-evolution by a single hopping term.

```qsharp
operation ApplyHubbardHoppingTerm (nSites : Int, idxSite : Int, idxSpin : Int, coefficient : Double, qubits : Qubit[]) : Unit is Adj + Ctl
```


## Input

### nSites : [Int](xref:microsoft.quantum.lang-ref.int)

Number of sites in the Hubbard Hamiltonian.


### idxSite : [Int](xref:microsoft.quantum.lang-ref.int)

Index to a site in the Hubbard Hamiltonian.


### idxSpin : [Int](xref:microsoft.quantum.lang-ref.int)

Index to the spin of a site in the Hubbard Hamiltonian.


### coefficient : [Double](xref:microsoft.quantum.lang-ref.double)

Coefficient of the hopping term in the Hubbard Hamiltonian.


### qubits : [Qubit](xref:microsoft.quantum.lang-ref.qubit)[]

Qubits that the encoded Hubbard Hamiltonian acts on.



## Output : [Unit](xref:microsoft.quantum.lang-ref.unit)

