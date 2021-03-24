---
uid: Microsoft.Quantum.Samples.Ising._Ising1DTrotterUnitaries
title: _Ising1DTrotterUnitaries operation
ms.date: 3/24/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Samples.Ising
qsharp.name: _Ising1DTrotterUnitaries
qsharp.summary: Implements time-evolution by a single term in the Ising Hamiltonian.
---

# _Ising1DTrotterUnitaries operation

Namespace: [Microsoft.Quantum.Samples.Ising](xref:Microsoft.Quantum.Samples.Ising)

Package: [IsingTrotterSample](https://nuget.org/packages/IsingTrotterSample)


Implements time-evolution by a single term in the Ising Hamiltonian.

```qsharp
operation _Ising1DTrotterUnitaries (nSites : Int, hXCoupling : Double, hZCoupling : Double, jCoupling : Double, idxHamiltonian : Int, stepSize : Double, qubits : Qubit[]) : Unit is Adj + Ctl
```


## Input

### nSites : [Int](xref:microsoft.quantum.lang-ref.int)

Number of qubits that the represented system will act upon.


### hXCoupling : [Double](xref:microsoft.quantum.lang-ref.double)

Value of hX.


### hZCoupling : [Double](xref:microsoft.quantum.lang-ref.double)

Value of hZ.


### jCoupling : [Double](xref:microsoft.quantum.lang-ref.double)

Value of J.


### idxHamiltonian : [Int](xref:microsoft.quantum.lang-ref.int)

An integer in [0, 3 * nSites - 2] that indexes one of the3 * nSites - 1 terms in the Hamiltonian.


### stepSize : [Double](xref:microsoft.quantum.lang-ref.double)

Duration of time-evolution by term in Hamiltonian.


### qubits : [Qubit](xref:microsoft.quantum.lang-ref.qubit)[]

Qubit register Hamiltonian acts on.



## Output : [Unit](xref:microsoft.quantum.lang-ref.unit)

