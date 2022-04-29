---
uid: Microsoft.Quantum.Simulation.SimulationAlgorithm
title: SimulationAlgorithm user defined type
ms.date: 4/28/2022 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: udt
qsharp.namespace: Microsoft.Quantum.Simulation
qsharp.name: SimulationAlgorithm
qsharp.summary: >-
  Represents a time-independent simulation algorithm.

  A time-independent simulation technique converts an
  <xref:Microsoft.Quantum.Simulation.EvolutionGenerator>
  to unitary time evolution for some time-interval.
---

# SimulationAlgorithm user defined type

Namespace: [Microsoft.Quantum.Simulation](xref:Microsoft.Quantum.Simulation)

Package: [Microsoft.Quantum.Standard](https://nuget.org/packages/Microsoft.Quantum.Standard)


Represents a time-independent simulation algorithm.A time-independent simulation technique converts an<xref:Microsoft.Quantum.Simulation.EvolutionGenerator>to unitary time evolution for some time-interval.

```qsharp

newtype SimulationAlgorithm = (((Double, Microsoft.Quantum.Simulation.EvolutionGenerator, Qubit[]) => Unit is Adj + Ctl));
```



## Description

The inputs into the callable are:- The time interval of simulation.- A representation of the generator of dynamic evolution.- A register encoding the state of the system.

## Example

To apply the Trotter–Suzuki simulation algorithm to a register ofqubits:```qsharpoperation EvolveUnderGenerator(generator : EvolutionGenerator, time : Double, register : Qubit[]): Unit is Adj + Ctl {    let trotterStepSize = 0.1;    let trotterOrder = 1;    let evolveFor = (TrotterSimulationAlgorithm(trotterStepSize, trotterOrder))!;    evolveFor(time, generator, register);}```

## See Also

- [Microsoft.Quantum.Simulation.TimeDependentSimulationAlgorithm](xref:Microsoft.Quantum.Simulation.TimeDependentSimulationAlgorithm)