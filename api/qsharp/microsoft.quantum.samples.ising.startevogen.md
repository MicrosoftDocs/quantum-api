---
uid: Microsoft.Quantum.Samples.Ising.StartEvoGen
title: StartEvoGen function
ms.date: 3/24/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: function
qsharp.namespace: Microsoft.Quantum.Samples.Ising
qsharp.name: StartEvoGen
qsharp.summary: >-
  This specifies the initial and target Hamiltonians as separate
  `EvolutionGenerator` types.
---

# StartEvoGen function

Namespace: [Microsoft.Quantum.Samples.Ising](xref:Microsoft.Quantum.Samples.Ising)

Package: [AdiabaticIsingSample](https://nuget.org/packages/AdiabaticIsingSample)


This specifies the initial and target Hamiltonians as separate`EvolutionGenerator` types.

```qsharp
function StartEvoGen (nSites : Int, hXCoupling : (Int -> Double)) : Microsoft.Quantum.Simulation.EvolutionGenerator
```


## Input

### nSites : [Int](xref:microsoft.quantum.lang-ref.int)

Number of qubits that the represented system will act upon.


### hXCoupling : [Int](xref:microsoft.quantum.lang-ref.int) -> [Double](xref:microsoft.quantum.lang-ref.double)

Function returning coefficients `hₖ` for each site.



## Output : [EvolutionGenerator](xref:Microsoft.Quantum.Simulation.EvolutionGenerator)

A `EvolutionGenerator` representing time evolution by each term of theinitial and target Hamiltonians respectively.