---
uid: Microsoft.Quantum.Samples.H2Simulation.H2GeneratorSystem
title: H2GeneratorSystem function
ms.date: 3/24/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: function
qsharp.namespace: Microsoft.Quantum.Samples.H2Simulation
qsharp.name: H2GeneratorSystem
qsharp.summary: >-
  Represents the sum of all Hamiltonian terms for a given
  bond length using the GeneratorSystem type from Canon.
---

# H2GeneratorSystem function

Namespace: [Microsoft.Quantum.Samples.H2Simulation](xref:Microsoft.Quantum.Samples.H2Simulation)

Package: [H2SimulationSampleCmdLine](https://nuget.org/packages/H2SimulationSampleCmdLine)


Represents the sum of all Hamiltonian terms for a givenbond length using the GeneratorSystem type from Canon.

```qsharp
function H2GeneratorSystem (idxBondLength : Int) : Microsoft.Quantum.Simulation.GeneratorSystem
```


## Input

### idxBondLength : [Int](xref:microsoft.quantum.lang-ref.int)





## Output : [GeneratorSystem](xref:Microsoft.Quantum.Simulation.GeneratorSystem)



## Remarks

The GeneratorSystem type takes a function and not anarray, enabling us to calculate terms on the fly ifappropriate.