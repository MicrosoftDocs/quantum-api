---
uid: Microsoft.Quantum.Samples.SimulateIsingEvolution
title: SimulateIsingEvolution operation
ms.date: 3/24/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Samples
qsharp.name: SimulateIsingEvolution
qsharp.summary: >-
  Sweeps from an transverse field to an Ising model using a linear
  schedule.
---

# SimulateIsingEvolution operation

Namespace: [Microsoft.Quantum.Samples](xref:Microsoft.Quantum.Samples)

Package: [IsingModel](https://nuget.org/packages/IsingModel)


Sweeps from an transverse field to an Ising model using a linearschedule.

```qsharp
operation SimulateIsingEvolution (nSites : Int, time : Double, dt : Double) : Result[]
```


## Input

### nSites : [Int](xref:microsoft.quantum.lang-ref.int)

Number of spins in the Ising model under consideration.


### time : [Double](xref:microsoft.quantum.lang-ref.double)

Overall evolution time to simulate.


### dt : [Double](xref:microsoft.quantum.lang-ref.double)

The length of time for each timestep in the simulation.



## Output : __invalid<Result>__[]

The results of Z measurements on each qubit.

## Remarks

This operation allocates qubits internally to use in simulation,such that it is straightforward to call this operation fromconventional .NET code.