---
uid: Microsoft.Quantum.Samples.Ising.HeisenbergXXZGeneratorIndex
title: HeisenbergXXZGeneratorIndex function
ms.date: 3/24/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: function
qsharp.namespace: Microsoft.Quantum.Samples.Ising
qsharp.name: HeisenbergXXZGeneratorIndex
qsharp.summary: >-
  Returns a generator index for a term in the Heisenberg model with uniform
  couplings.
---

# HeisenbergXXZGeneratorIndex function

Namespace: [Microsoft.Quantum.Samples.Ising](xref:Microsoft.Quantum.Samples.Ising)

Package: [IsingGeneratorsSample](https://nuget.org/packages/IsingGeneratorsSample)


Returns a generator index for a term in the Heisenberg model with uniformcouplings.

```qsharp
function HeisenbergXXZGeneratorIndex (nSites : Int, hZAmplitude : Double, jAmplitude : Double, idxHamiltonian : Int) : Microsoft.Quantum.Simulation.GeneratorIndex
```


## Input

### nSites : [Int](xref:microsoft.quantum.lang-ref.int)

Number of qubits that the represented system will act upon.


### hZAmplitude : [Double](xref:microsoft.quantum.lang-ref.double)

Value of all `hₖ` coefficients.


### jAmplitude : [Double](xref:microsoft.quantum.lang-ref.double)

Value of all `jₖ` coefficients.


### idxHamiltonian : [Int](xref:microsoft.quantum.lang-ref.int)

Index to term in the Hamiltonian.



## Output : [GeneratorIndex](xref:Microsoft.Quantum.Simulation.GeneratorIndex)

A `GeneratorIndex` representing a term in the Heisenberg Model.