---
uid: Microsoft.Quantum.Samples.Ising.IsingAdiabaticEvolutionManual
title: IsingAdiabaticEvolutionManual function
ms.date: 3/24/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: function
qsharp.namespace: Microsoft.Quantum.Samples.Ising
qsharp.name: IsingAdiabaticEvolutionManual
qsharp.summary: >-
  We make a choice of the Trotter–Suzuki decomposition as our
  `TimeDependentSimulationAlgorithm` for implementing time-dependent
  evolution. We also use partial application over the qubit register
  to return a unitary operation.
---

# IsingAdiabaticEvolutionManual function

Namespace: [Microsoft.Quantum.Samples.Ising](xref:Microsoft.Quantum.Samples.Ising)

Package: [AdiabaticIsingSample](https://nuget.org/packages/AdiabaticIsingSample)


We make a choice of the Trotter–Suzuki decomposition as our`TimeDependentSimulationAlgorithm` for implementing time-dependentevolution. We also use partial application over the qubit registerto return a unitary operation.

```qsharp
function IsingAdiabaticEvolutionManual (nSites : Int, hXInitial : Double, hXFinal : Double, jFinal : Double, adiabaticTime : Double, trotterStepSize : Double, trotterOrder : Int) : (Qubit[] => Unit is Adj + Ctl)
```


## Input

### nSites : [Int](xref:microsoft.quantum.lang-ref.int)

Number of qubits that the represented system will act upon.


### hXInitial : [Double](xref:microsoft.quantum.lang-ref.double)

Value of the coefficient `h` at s=0.


### hXFinal : [Double](xref:microsoft.quantum.lang-ref.double)

Value of the coefficient `h` at s=1.


### jFinal : [Double](xref:microsoft.quantum.lang-ref.double)

Value of the coefficient `j` at s=1.


### adiabaticTime : [Double](xref:microsoft.quantum.lang-ref.double)

Time over which the schedule parameter is varied from 0 to 1.


### trotterStepSize : [Double](xref:microsoft.quantum.lang-ref.double)

Time simulated by each step of simulation algorithm.


### trotterOrder : [Int](xref:microsoft.quantum.lang-ref.int)

Order of Trotter–Suzuki integrator.



## Output : [Qubit](xref:microsoft.quantum.lang-ref.qubit)[] => [Unit](xref:microsoft.quantum.lang-ref.unit)  is Adj + Ctl

A unitary operator implementing time-dependent evolution by theHamiltonian H(s) when s is varied uniformly between 0 and 1 over time`adiabaticTime`.