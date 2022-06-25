---
uid: Microsoft.Quantum.Simulation.TimeDependentSimulationAlgorithm
title: TimeDependentSimulationAlgorithm user defined type
ms.date: 6/25/2022 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: udt
qsharp.namespace: Microsoft.Quantum.Simulation
qsharp.name: TimeDependentSimulationAlgorithm
qsharp.summary: >-
  Represents a time-dependent simulation algorithm.

  A time-dependent simulation technique converts an
  <xref:Microsoft.Quantum.Simulation.EvolutionSchedule>
  to unitary time-evolution for some time-interval.
---

# TimeDependentSimulationAlgorithm user defined type

Namespace: [Microsoft.Quantum.Simulation](xref:Microsoft.Quantum.Simulation)

Package: [Microsoft.Quantum.Standard](https://nuget.org/packages/Microsoft.Quantum.Standard)


Represents a time-dependent simulation algorithm.A time-dependent simulation technique converts an<xref:Microsoft.Quantum.Simulation.EvolutionSchedule>to unitary time-evolution for some time-interval.

```qsharp

newtype TimeDependentSimulationAlgorithm = (((Double, Microsoft.Quantum.Simulation.EvolutionSchedule, Qubit[]) => Unit is Adj + Ctl));
```



## Description

The inputs into the callable are:- The time interval of simulation.- A schedule mapping evolution time to the generator at that time.- A register encoding the state of the system.

## Example

To apply the Trotter–Suzuki simulation algorithm to a register ofqubits:```qsharpoperation EvolveUnderTimeDependentGenerator(schedule : EvolutionSchedule, time : Double, register : Qubit[]): Unit is Adj + Ctl {    let trotterStepSize = 0.1;    let trotterOrder = 1;    let evolveFor = (TimeDependentTrotterSimulationAlgorithm(trotterStepSize, trotterOrder))!;    evolveFor(time, schedule, register);}```

## See Also

- [Microsoft.Quantum.Simulation.TimeDependentSimulationAlgorithm](xref:Microsoft.Quantum.Simulation.TimeDependentSimulationAlgorithm)
- [Microsoft.Quantum.Simulation.SimulationAlgorithm](xref:Microsoft.Quantum.Simulation.SimulationAlgorithm)