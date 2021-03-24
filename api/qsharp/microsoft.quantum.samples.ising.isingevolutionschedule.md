---
uid: Microsoft.Quantum.Samples.Ising.IsingEvolutionSchedule
title: IsingEvolutionSchedule function
ms.date: 3/24/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: function
qsharp.namespace: Microsoft.Quantum.Samples.Ising
qsharp.name: IsingEvolutionSchedule
qsharp.summary: >-
  We package the `GeneratorSystem` of the interpolated Hamiltonian H(s)
  as an `EvolutionSchedule` type by partial application of the schedule
  parameter.
---

# IsingEvolutionSchedule function

Namespace: [Microsoft.Quantum.Samples.Ising](xref:Microsoft.Quantum.Samples.Ising)

Package: [AdiabaticIsingSample](https://nuget.org/packages/AdiabaticIsingSample)


We package the `GeneratorSystem` of the interpolated Hamiltonian H(s)as an `EvolutionSchedule` type by partial application of the scheduleparameter.

```qsharp
function IsingEvolutionSchedule (nSites : Int, hXInitial : Double, hXFinal : Double, jZFinal : Double) : Microsoft.Quantum.Simulation.EvolutionSchedule
```


## Input

### nSites : [Int](xref:microsoft.quantum.lang-ref.int)




### hXInitial : [Double](xref:microsoft.quantum.lang-ref.double)




### hXFinal : [Double](xref:microsoft.quantum.lang-ref.double)




### jZFinal : [Double](xref:microsoft.quantum.lang-ref.double)





## Output : [EvolutionSchedule](xref:Microsoft.Quantum.Simulation.EvolutionSchedule)

An `EvolutionSchedule` type representing the interpolated HamiltonianH(s).