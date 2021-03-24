---
uid: Microsoft.Quantum.Samples.Ising.IsingGeneratorSystem
title: IsingGeneratorSystem function
ms.date: 3/24/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: function
qsharp.namespace: Microsoft.Quantum.Samples.Ising
qsharp.name: IsingGeneratorSystem
qsharp.summary: Returns a generator system for the Ising model.
---

# IsingGeneratorSystem function

Namespace: [Microsoft.Quantum.Samples.Ising](xref:Microsoft.Quantum.Samples.Ising)

Package: [IsingGeneratorsSample](https://nuget.org/packages/IsingGeneratorsSample)


Returns a generator system for the Ising model.

```qsharp
function IsingGeneratorSystem (nSites : Int, hXCoupling : (Int -> Double), jCoupling : (Int -> Double)) : Microsoft.Quantum.Simulation.GeneratorSystem
```


## Input

### nSites : [Int](xref:microsoft.quantum.lang-ref.int)

Number of qubits that the represented system will act upon.


### hXCoupling : [Int](xref:microsoft.quantum.lang-ref.int) -> [Double](xref:microsoft.quantum.lang-ref.double)

Function returning coefficients `hₖ` for each site.


### jCoupling : [Int](xref:microsoft.quantum.lang-ref.int) -> [Double](xref:microsoft.quantum.lang-ref.double)

Function returning coefficients `Jₖ` for each two-site interaction.



## Output : [GeneratorSystem](xref:Microsoft.Quantum.Simulation.GeneratorSystem)

A `GeneratorSystem` representing the sum - Σₖ Jₖ ZₖZₖ₊₁ - Σₖ hₖ Xₖ