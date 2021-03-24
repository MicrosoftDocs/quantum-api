---
uid: Microsoft.Quantum.Samples.H2Simulation.H2EvolutionGenerator
title: H2EvolutionGenerator function
ms.date: 3/24/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: function
qsharp.namespace: Microsoft.Quantum.Samples.H2Simulation
qsharp.name: H2EvolutionGenerator
qsharp.summary: >-
  We finish our description of the H₂ Hamiltonian for a
  given bond length by specifying that we wish to use
  the above description with the PauliEvolutionSet.

  We could choose other evolution sets as well, allowing the
  canon to be very general with respect to how Hamiltonians
  are represented.
---

# H2EvolutionGenerator function

Namespace: [Microsoft.Quantum.Samples.H2Simulation](xref:Microsoft.Quantum.Samples.H2Simulation)

Package: [H2SimulationSampleCmdLine](https://nuget.org/packages/H2SimulationSampleCmdLine)


We finish our description of the H₂ Hamiltonian for agiven bond length by specifying that we wish to usethe above description with the PauliEvolutionSet.We could choose other evolution sets as well, allowing thecanon to be very general with respect to how Hamiltoniansare represented.

```qsharp
function H2EvolutionGenerator (idxBondLength : Int) : Microsoft.Quantum.Simulation.EvolutionGenerator
```


## Input

### idxBondLength : [Int](xref:microsoft.quantum.lang-ref.int)





## Output : [EvolutionGenerator](xref:Microsoft.Quantum.Simulation.EvolutionGenerator)

