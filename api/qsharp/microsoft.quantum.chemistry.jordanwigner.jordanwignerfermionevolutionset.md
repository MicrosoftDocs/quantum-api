---
uid: Microsoft.Quantum.Chemistry.JordanWigner.JordanWignerFermionEvolutionSet
title: JordanWignerFermionEvolutionSet function
ms.date: 7/28/2023 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: function
qsharp.namespace: Microsoft.Quantum.Chemistry.JordanWigner
qsharp.name: JordanWignerFermionEvolutionSet
qsharp.summary: >-
  Represents a dynamical generator as a set of simulatable gates and an
  expansion in the JordanWigner basis.
---

# JordanWignerFermionEvolutionSet function

> [!WARNING]
> This documentation refers to the Classic QDK, which has been replaced by the Modern QDK.
>
> Please see <https://aka.ms/qdk.api> for the API documentation for the Modern QDK.

Namespace: [Microsoft.Quantum.Chemistry.JordanWigner](xref:Microsoft.Quantum.Chemistry.JordanWigner)

Package: [Microsoft.Quantum.Chemistry](https://nuget.org/packages/Microsoft.Quantum.Chemistry)


Represents a dynamical generator as a set of simulatable gates and anexpansion in the JordanWigner basis.

```qsharp
function JordanWignerFermionEvolutionSet () : Microsoft.Quantum.Simulation.EvolutionSet
```


## Output : [EvolutionSet](xref:Microsoft.Quantum.Simulation.EvolutionSet)

An `EvolutionSet` that maps a `GeneratorIndex` for the JordanWigner basis toan `EvolutionUnitary.