---
uid: Microsoft.Quantum.Samples.Ising.TwoSiteGeneratorSystem
title: TwoSiteGeneratorSystem function
ms.date: 3/24/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: function
qsharp.namespace: Microsoft.Quantum.Samples.Ising
qsharp.name: TwoSiteGeneratorSystem
qsharp.summary: >-
  Returns a generator system for a sum of generator indices each
  supported on two neighboring sites.
---

# TwoSiteGeneratorSystem function

Namespace: [Microsoft.Quantum.Samples.Ising](xref:Microsoft.Quantum.Samples.Ising)

Package: [IsingGeneratorsSample](https://nuget.org/packages/IsingGeneratorsSample)


Returns a generator system for a sum of generator indices eachsupported on two neighboring sites.

```qsharp
function TwoSiteGeneratorSystem (idxPauli : Int, nSites : Int, jCoupling : (Int -> Double)) : Microsoft.Quantum.Simulation.GeneratorSystem
```


## Input

### idxPauli : [Int](xref:microsoft.quantum.lang-ref.int)

Index of the Pauli operator to be represented.


### nSites : [Int](xref:microsoft.quantum.lang-ref.int)

Number of qubits that the represented system will act upon.


### jCoupling : [Int](xref:microsoft.quantum.lang-ref.int) -> [Double](xref:microsoft.quantum.lang-ref.double)

Function returning coefficients `Jₖ` for each two-site interaction.



## Output : [GeneratorSystem](xref:Microsoft.Quantum.Simulation.GeneratorSystem)

A `GeneratorSystem` representing the sum - Σₖ Jₖ{XₖXₖ₊₁, YₖYₖ₊₁, ZₖZₖ₊₁}.