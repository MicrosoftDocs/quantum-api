---
uid: Microsoft.Quantum.Samples.Ising.Ising1DEvolutionGenerator
title: Ising1DEvolutionGenerator function
ms.date: 3/24/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: function
qsharp.namespace: Microsoft.Quantum.Samples.Ising
qsharp.name: Ising1DEvolutionGenerator
qsharp.summary: Returns an EvolutionGenerator for the Ising model.
---

# Ising1DEvolutionGenerator function

Namespace: [Microsoft.Quantum.Samples.Ising](xref:Microsoft.Quantum.Samples.Ising)

Package: [IsingGeneratorsSample](https://nuget.org/packages/IsingGeneratorsSample)


Returns an EvolutionGenerator for the Ising model.

```qsharp
function Ising1DEvolutionGenerator (nSites : Int, hXCoupling : (Int -> Double), jCoupling : (Int -> Double)) : Microsoft.Quantum.Simulation.EvolutionGenerator
```


## Input

### nSites : [Int](xref:microsoft.quantum.lang-ref.int)

Number of qubits that the represented system will act upon.


### hXCoupling : [Int](xref:microsoft.quantum.lang-ref.int) -> [Double](xref:microsoft.quantum.lang-ref.double)

Function returning coefficients `hₖ` for each site.


### jCoupling : [Int](xref:microsoft.quantum.lang-ref.int) -> [Double](xref:microsoft.quantum.lang-ref.double)

Function returning coefficients `Jₖ` for each two-site interaction.



## Output : [EvolutionGenerator](xref:Microsoft.Quantum.Simulation.EvolutionGenerator)

A `EvolutionGenerator` representing the sum - Σₖ Jₖ ZₖZₖ₊₁ - Σₖ hₖ Xₖand a PauliEvolutionSet() that describes how unitary time-evolution byeach term may be implemented.