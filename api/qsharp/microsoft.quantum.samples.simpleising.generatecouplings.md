---
uid: Microsoft.Quantum.Samples.SimpleIsing.GenerateCouplings
title: GenerateCouplings function
ms.date: 3/24/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: function
qsharp.namespace: Microsoft.Quantum.Samples.SimpleIsing
qsharp.name: GenerateCouplings
qsharp.summary: >-
  Create an array of site-to-site couplings.
  This supports either a chain, cycle or all-to-all coupled Ising lattice.
  Here we use a constant Ising coupling J. Optionally the value can be
  set to -J, depending on the parity of the lattice index.
---

# GenerateCouplings function

Namespace: [Microsoft.Quantum.Samples.SimpleIsing](xref:Microsoft.Quantum.Samples.SimpleIsing)

Package: [SimpleIsingSample](https://nuget.org/packages/SimpleIsingSample)


Create an array of site-to-site couplings.This supports either a chain, cycle or all-to-all coupled Ising lattice.Here we use a constant Ising coupling J. Optionally the value can beset to -J, depending on the parity of the lattice index.

```qsharp
function GenerateCouplings (nSites : Int, J : Double, signByParity : Bool, cycle : Bool, allToAll : Bool) : (Int, Double)[][]
```


## Input

### nSites : [Int](xref:microsoft.quantum.lang-ref.int)

Number of sites in Ising lattice


### J : [Double](xref:microsoft.quantum.lang-ref.double)

Site-to-site coupling parameter


### signByParity : [Bool](xref:microsoft.quantum.lang-ref.bool)

Set sign of coupling parameter by the index parity


### cycle : [Bool](xref:microsoft.quantum.lang-ref.bool)

Couple the last lattice site in the chain to the first


### allToAll : [Bool](xref:microsoft.quantum.lang-ref.bool)

Couple all lattice sites to each other



## Output : ([Int](xref:microsoft.quantum.lang-ref.int),[Double](xref:microsoft.quantum.lang-ref.double))[][]

