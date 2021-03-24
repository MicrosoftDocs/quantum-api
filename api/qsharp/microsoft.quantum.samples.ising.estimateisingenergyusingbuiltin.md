---
uid: Microsoft.Quantum.Samples.Ising.EstimateIsingEnergyUsingBuiltin
title: EstimateIsingEnergyUsingBuiltin operation
ms.date: 3/24/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Samples.Ising
qsharp.name: EstimateIsingEnergyUsingBuiltin
qsharp.summary: >-
  We perform adiabatic state preparation, and then phase estimation on
  the resulting state. We use built-in function
  `AdiabaticStateEnergyEstimate` which automatically allocates qubits,
  performs state preparation, and then phase estimation.
---

# EstimateIsingEnergyUsingBuiltin operation

Namespace: [Microsoft.Quantum.Samples.Ising](xref:Microsoft.Quantum.Samples.Ising)

Package: [IsingPhaseEstimationSample](https://nuget.org/packages/IsingPhaseEstimationSample)


We perform adiabatic state preparation, and then phase estimation onthe resulting state. We use built-in function`AdiabaticStateEnergyEstimate` which automatically allocates qubits,performs state preparation, and then phase estimation.

```qsharp
operation EstimateIsingEnergyUsingBuiltin (nSites : Int, hXInitial : Double, hXFinal : Double, jFinal : Double, adiabaticTime : Double, trotterStepSize : Double, trotterOrder : Int, qpeStepSize : Double, nBitsPrecision : Int) : Double
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


### qpeStepSize : [Double](xref:microsoft.quantum.lang-ref.double)

Size of Trotter step in simulation algorithm.


### nBitsPrecision : [Int](xref:microsoft.quantum.lang-ref.int)

Bits of precision in phase estimation algorithm



## Output : [Double](xref:microsoft.quantum.lang-ref.double)

An `Double` for the estimate of the Ising ground state energy.