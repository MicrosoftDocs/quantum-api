---
uid: Microsoft.Quantum.Samples.H2Simulation.H2Terms
title: H2Terms function
ms.date: 3/24/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: function
qsharp.namespace: Microsoft.Quantum.Samples.H2Simulation
qsharp.name: H2Terms
qsharp.summary: >-
  Given an index, returns a description of the corresponding
  term in the Hamiltonian for H₂. Each term is described by
  a pair of integer arrays representing a sparse Pauli operator.
---

# H2Terms function

Namespace: [Microsoft.Quantum.Samples.H2Simulation](xref:Microsoft.Quantum.Samples.H2Simulation)

Package: [H2SimulationSampleCmdLine](https://nuget.org/packages/H2SimulationSampleCmdLine)


Given an index, returns a description of the correspondingterm in the Hamiltonian for H₂. Each term is described bya pair of integer arrays representing a sparse Pauli operator.

```qsharp
function H2Terms (idxHamiltonian : Int) : (Int[], Int[])
```


## Input

### idxHamiltonian : [Int](xref:microsoft.quantum.lang-ref.int)





## Output : ([Int](xref:microsoft.quantum.lang-ref.int)[],[Int](xref:microsoft.quantum.lang-ref.int)[])



## Example

    ```     // Returns ([3], [0]), to represent H₀ ≔ Z₀.     let (idxsPaulis, idxsQubits) = H2Terms(0)``````