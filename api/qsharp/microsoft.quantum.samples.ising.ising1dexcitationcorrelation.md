---
uid: Microsoft.Quantum.Samples.Ising.Ising1DExcitationCorrelation
title: Ising1DExcitationCorrelation operation
ms.date: 3/24/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Samples.Ising
qsharp.name: Ising1DExcitationCorrelation
qsharp.summary: >-
  Implements time-evolution by the Ising Hamiltonian on a line of qubits
  initialized in |100...0⟩ state, then measures each site.
---

# Ising1DExcitationCorrelation operation

Namespace: [Microsoft.Quantum.Samples.Ising](xref:Microsoft.Quantum.Samples.Ising)

Package: [IsingTrotterSample](https://nuget.org/packages/IsingTrotterSample)


Implements time-evolution by the Ising Hamiltonian on a line of qubitsinitialized in |100...0⟩ state, then measures each site.

```qsharp
operation Ising1DExcitationCorrelation (nSites : Int, simulationTime : Double, trotterOrder : Int, trotterStepSize : Double) : Result[]
```


## Input

### nSites : [Int](xref:microsoft.quantum.lang-ref.int)

Number of qubits that the represented system will act upon.


### simulationTime : [Double](xref:microsoft.quantum.lang-ref.double)

Time interval of simulation


### trotterOrder : [Int](xref:microsoft.quantum.lang-ref.int)

Order of Trotter integrator.


### trotterStepSize : [Double](xref:microsoft.quantum.lang-ref.double)

Duration of simulated time-evolution in single Trotter step.



## Output : __invalid<Result>__[]

Array of single-site measurement results.