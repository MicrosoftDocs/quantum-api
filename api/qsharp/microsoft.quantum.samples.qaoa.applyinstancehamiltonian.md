---
uid: Microsoft.Quantum.Samples.QAOA.ApplyInstanceHamiltonian
title: ApplyInstanceHamiltonian operation
ms.date: 3/24/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Samples.QAOA
qsharp.name: ApplyInstanceHamiltonian
qsharp.summary: >-
  This applies the Z-rotation according to the instance Hamiltonian.
  We can think of it as Hamiltonian time evolution for time t induced
  by an Ising Hamiltonian. The Ising Hamiltonian sums over all connected
  pairs of Pauli-Z operations Z_i and Z_j scaled by a factor J_ij, plus
  the sum over all Z_i scaled by a factor h_i.
---

# ApplyInstanceHamiltonian operation

Namespace: [Microsoft.Quantum.Samples.QAOA](xref:Microsoft.Quantum.Samples.QAOA)

Package: [QAOA](https://nuget.org/packages/QAOA)


This applies the Z-rotation according to the instance Hamiltonian.We can think of it as Hamiltonian time evolution for time t inducedby an Ising Hamiltonian. The Ising Hamiltonian sums over all connectedpairs of Pauli-Z operations Z_i and Z_j scaled by a factor J_ij, plusthe sum over all Z_i scaled by a factor h_i.

```qsharp
operation ApplyInstanceHamiltonian (numSegments : Int, time : Double, weights : Double[], coupling : Double[], target : Qubit[]) : Unit
```


## Description

The Ising Hamiltonian is defined as:$\sum_ij J_ij Z_i Z_j + \sum_i h_i Z_i$.

## Input

### numSegments : [Int](xref:microsoft.quantum.lang-ref.int)




### time : [Double](xref:microsoft.quantum.lang-ref.double)

Time point in evolution.


### weights : [Double](xref:microsoft.quantum.lang-ref.double)[]

Ising magnetic field or "weights" encoding the constraints of ourtraveling Santa problem.


### coupling : [Double](xref:microsoft.quantum.lang-ref.double)[]

Ising coupling term or "penalty" encoding the constraints of ourtraveling Santa problem.


### target : [Qubit](xref:microsoft.quantum.lang-ref.qubit)[]

Qubit register that encodes the Spin values in the Ising Hamiltonian.



## Output : [Unit](xref:microsoft.quantum.lang-ref.unit)

