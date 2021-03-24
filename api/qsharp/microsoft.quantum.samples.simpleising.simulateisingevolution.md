---
uid: Microsoft.Quantum.Samples.SimpleIsing.SimulateIsingEvolution
title: SimulateIsingEvolution operation
ms.date: 3/24/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Samples.SimpleIsing
qsharp.name: SimulateIsingEvolution
qsharp.summary: >-
  Sweeps from an transverse field to an Ising model using a linear
  schedule.
---

# SimulateIsingEvolution operation

Namespace: [Microsoft.Quantum.Samples.SimpleIsing](xref:Microsoft.Quantum.Samples.SimpleIsing)

Package: [SimpleIsingSample](https://nuget.org/packages/SimpleIsingSample)


Sweeps from an transverse field to an Ising model using a linearschedule.

```qsharp
operation SimulateIsingEvolution (nSites : Int, time : Double, dt : Double, coupling : (Int, Double)[][]) : Result[]
```


## Input

### nSites : [Int](xref:microsoft.quantum.lang-ref.int)

Number of spins in the Ising model under consideration.


### time : [Double](xref:microsoft.quantum.lang-ref.double)

Overall evolution time to simulate.


### dt : [Double](xref:microsoft.quantum.lang-ref.double)

The length of time for each timestep in the simulation.


### coupling : ([Int](xref:microsoft.quantum.lang-ref.int),[Double](xref:microsoft.quantum.lang-ref.double))[][]

Ising coupling parameters in the form of an array of arrays of length2, where the outer array index is the index of a site, and the innerarray is the index of the coupling site and the coupling parameter value.



## Output : __invalid<Result>__[]

The results of Z measurements on each qubit.

## Remarks

This operation allocates qubits internally to use in simulation,such that it is straightforward to call this operation fromconventional .NET code.