---
uid: Microsoft.Quantum.Samples.Ising.OneSiteGeneratorSystem
title: OneSiteGeneratorSystem function
ms.date: 3/24/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: function
qsharp.namespace: Microsoft.Quantum.Samples.Ising
qsharp.name: OneSiteGeneratorSystem
qsharp.summary: >-
  Returns a generator system for a sum of generator indices each
  supported on a single site.
---

# OneSiteGeneratorSystem function

Namespace: [Microsoft.Quantum.Samples.Ising](xref:Microsoft.Quantum.Samples.Ising)

Package: [IsingGeneratorsSample](https://nuget.org/packages/IsingGeneratorsSample)


Returns a generator system for a sum of generator indices eachsupported on a single site.

```qsharp
function OneSiteGeneratorSystem (idxPauli : Int, nSites : Int, hCoupling : (Int -> Double)) : Microsoft.Quantum.Simulation.GeneratorSystem
```


## Input

### idxPauli : [Int](xref:microsoft.quantum.lang-ref.int)

Index of the Pauli operator to be represented.


### nSites : [Int](xref:microsoft.quantum.lang-ref.int)

Number of qubits that the represented system will act upon.


### hCoupling : [Int](xref:microsoft.quantum.lang-ref.int) -> [Double](xref:microsoft.quantum.lang-ref.double)

Function returning coefficients `hₖ` for each site.



## Output : [GeneratorSystem](xref:Microsoft.Quantum.Simulation.GeneratorSystem)

A `GeneratorSystem` representing the sum - Σₖ hₖ {Xₖ, Yₖ, Zₖ}.