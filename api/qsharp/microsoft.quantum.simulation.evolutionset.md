---
uid: Microsoft.Quantum.Simulation.EvolutionSet
title: EvolutionSet user defined type
ms.date: 3/27/2022 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: udt
qsharp.namespace: Microsoft.Quantum.Simulation
qsharp.name: EvolutionSet
qsharp.summary: >-
  Represents a set of gates that can be readily implemented and used
  to implement simulation algorithms.

  Elements in the set are indexed
  by a <xref:Microsoft.Quantum.Simulation.GeneratorIndex>,
  and each set is described by a function
  from `GeneratorIndex` to <xref:Microsoft.Quantum.Simulation.EvolutionUnitary>,
  which are operations
  parameterized by a real number representing time
---

# EvolutionSet user defined type

Namespace: [Microsoft.Quantum.Simulation](xref:Microsoft.Quantum.Simulation)

Package: [Microsoft.Quantum.Standard](https://nuget.org/packages/Microsoft.Quantum.Standard)


Represents a set of gates that can be readily implemented and usedto implement simulation algorithms.Elements in the set are indexedby a <xref:Microsoft.Quantum.Simulation.GeneratorIndex>,and each set is described by a functionfrom `GeneratorIndex` to <xref:Microsoft.Quantum.Simulation.EvolutionUnitary>,which are operationsparameterized by a real number representing time

```qsharp

newtype EvolutionSet = ((Microsoft.Quantum.Simulation.GeneratorIndex -> Microsoft.Quantum.Simulation.EvolutionUnitary));
```

