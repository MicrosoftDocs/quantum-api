---
uid: Microsoft.Quantum.Samples.H2Simulation.H2TrotterUnitaries
title: H2TrotterUnitaries function
ms.date: 3/24/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: function
qsharp.namespace: Microsoft.Quantum.Samples.H2Simulation
qsharp.name: H2TrotterUnitaries
qsharp.summary: >-
  Given the index of a bond length, returns an operation that
  represents the decomposition of the corresponding Hamiltonian
  into unitary gates.
---

# H2TrotterUnitaries function

Namespace: [Microsoft.Quantum.Samples.H2Simulation](xref:Microsoft.Quantum.Samples.H2Simulation)

Package: [H2SimulationSampleCmdLine](https://nuget.org/packages/H2SimulationSampleCmdLine)


Given the index of a bond length, returns an operation thatrepresents the decomposition of the corresponding Hamiltonianinto unitary gates.

```qsharp
function H2TrotterUnitaries (idxBondLength : Int) : (Int, ((Int, Double, Qubit[]) => Unit is Adj + Ctl))
```


## Input

### idxBondLength : [Int](xref:microsoft.quantum.lang-ref.int)





## Output : ([Int](xref:microsoft.quantum.lang-ref.int),([Int](xref:microsoft.quantum.lang-ref.int),[Double](xref:microsoft.quantum.lang-ref.double),[Qubit](xref:microsoft.quantum.lang-ref.qubit)[]) => [Unit](xref:microsoft.quantum.lang-ref.unit)  is Adj + Ctl)

