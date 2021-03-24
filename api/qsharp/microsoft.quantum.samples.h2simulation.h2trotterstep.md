---
uid: Microsoft.Quantum.Samples.H2Simulation.H2TrotterStep
title: H2TrotterStep operation
ms.date: 3/24/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Samples.H2Simulation
qsharp.name: H2TrotterStep
qsharp.summary: >-
  We now provide Canon's Hamiltonian simulation
  functions with the above representation to automatically
  decompose the H₂ Hamiltonian into an appropriate operation
  that we can apply to qubits as we please.
---

# H2TrotterStep operation

Namespace: [Microsoft.Quantum.Samples.H2Simulation](xref:Microsoft.Quantum.Samples.H2Simulation)

Package: [H2SimulationSampleCmdLine](https://nuget.org/packages/H2SimulationSampleCmdLine)


We now provide Canon's Hamiltonian simulationfunctions with the above representation to automaticallydecompose the H₂ Hamiltonian into an appropriate operationthat we can apply to qubits as we please.

```qsharp
operation H2TrotterStep (idxBondLength : Int, trotterOrder : Int, trotterStepSize : Double, qubits : Qubit[]) : Unit is Adj + Ctl
```


## Input

### idxBondLength : [Int](xref:microsoft.quantum.lang-ref.int)




### trotterOrder : [Int](xref:microsoft.quantum.lang-ref.int)




### trotterStepSize : [Double](xref:microsoft.quantum.lang-ref.double)




### qubits : [Qubit](xref:microsoft.quantum.lang-ref.qubit)[]





## Output : [Unit](xref:microsoft.quantum.lang-ref.unit)

