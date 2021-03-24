---
uid: Microsoft.Quantum.Samples.Ising.OneSiteGeneratorIndex
title: OneSiteGeneratorIndex function
ms.date: 3/24/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: function
qsharp.namespace: Microsoft.Quantum.Samples.Ising
qsharp.name: OneSiteGeneratorIndex
qsharp.summary: Returns a generator index that is supported on a single site.
---

# OneSiteGeneratorIndex function

Namespace: [Microsoft.Quantum.Samples.Ising](xref:Microsoft.Quantum.Samples.Ising)

Package: [IsingGeneratorsSample](https://nuget.org/packages/IsingGeneratorsSample)


Returns a generator index that is supported on a single site.

```qsharp
function OneSiteGeneratorIndex (idxPauli : Int, idxQubit : Int, hCoupling : (Int -> Double)) : Microsoft.Quantum.Simulation.GeneratorIndex
```


## Input

### idxPauli : [Int](xref:microsoft.quantum.lang-ref.int)

Index of the Pauli operator to be represented, where `1` denotes`PauliY` and `3` denotes `PauliZ`.


### idxQubit : [Int](xref:microsoft.quantum.lang-ref.int)

Index `k` of the qubit that the represented term will act upon.


### hCoupling : [Int](xref:microsoft.quantum.lang-ref.int) -> [Double](xref:microsoft.quantum.lang-ref.double)

Function returning coefficients `hₖ` for each site. E.g.:should return the coefficient for the index at `idxQubit = 3`.



## Output : [GeneratorIndex](xref:Microsoft.Quantum.Simulation.GeneratorIndex)

A `GeneratorIndex` representing the term - hₖ {Xₖ, Yₖ, Zₖ}, where hₖ is thefunction `hCoupling` evaluated at the site index `k`, and where{Xₖ, Yₖ, Zₖ}, selected by idxPauli, is the Pauli operator acting at thesite index `k`.