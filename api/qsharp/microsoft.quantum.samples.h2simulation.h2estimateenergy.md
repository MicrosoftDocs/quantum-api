---
uid: Microsoft.Quantum.Samples.H2Simulation.H2EstimateEnergy
title: H2EstimateEnergy operation
ms.date: 3/24/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Samples.H2Simulation
qsharp.name: H2EstimateEnergy
qsharp.summary: >-
  We can now use Canon's phase estimation algorithms to
  learn the ground state energy using the above simulation.
---

# H2EstimateEnergy operation

Namespace: [Microsoft.Quantum.Samples.H2Simulation](xref:Microsoft.Quantum.Samples.H2Simulation)

Package: [H2SimulationSampleCmdLine](https://nuget.org/packages/H2SimulationSampleCmdLine)


We can now use Canon's phase estimation algorithms tolearn the ground state energy using the above simulation.

```qsharp
operation H2EstimateEnergy (idxBondLength : Int, trotterStepSize : Double, phaseEstAlgorithm : ((Microsoft.Quantum.Oracles.DiscreteOracle, Qubit[]) => Double)) : Double
```


## Input

### idxBondLength : [Int](xref:microsoft.quantum.lang-ref.int)




### trotterStepSize : [Double](xref:microsoft.quantum.lang-ref.double)




### phaseEstAlgorithm : ([DiscreteOracle](xref:Microsoft.Quantum.Oracles.DiscreteOracle),[Qubit](xref:microsoft.quantum.lang-ref.qubit)[]) => [Double](xref:microsoft.quantum.lang-ref.double) 





## Output : [Double](xref:microsoft.quantum.lang-ref.double)

