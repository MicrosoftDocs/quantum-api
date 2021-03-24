---
uid: Microsoft.Quantum.Samples.Ising.Ising1DAdiabaticAndMeasureManual
title: Ising1DAdiabaticAndMeasureManual operation
ms.date: 3/24/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Samples.Ising
qsharp.name: Ising1DAdiabaticAndMeasureManual
qsharp.summary: >-
  We now allocate qubits to the simulation, implement adiabatic state
  preparation, and then return the results of spin measurement on each
  site.
---

# Ising1DAdiabaticAndMeasureManual operation

Namespace: [Microsoft.Quantum.Samples.Ising](xref:Microsoft.Quantum.Samples.Ising)

Package: [AdiabaticIsingSample](https://nuget.org/packages/AdiabaticIsingSample)


We now allocate qubits to the simulation, implement adiabatic statepreparation, and then return the results of spin measurement on eachsite.

```qsharp
operation Ising1DAdiabaticAndMeasureManual (nSites : Int, hXInitial : Double, jFinal : Double, adiabaticTime : Double, trotterStepSize : Double, trotterOrder : Int) : Result[]
```


## Input

### nSites : [Int](xref:microsoft.quantum.lang-ref.int)

Number of qubits that the represented system will act upon.


### hXInitial : [Double](xref:microsoft.quantum.lang-ref.double)

Value of the coefficient `h` at s=0.


### jFinal : [Double](xref:microsoft.quantum.lang-ref.double)

Value of the coefficient `j` at s=1.


### adiabaticTime : [Double](xref:microsoft.quantum.lang-ref.double)

Time over which the schedule parameter is varied from 0 to 1.


### trotterStepSize : [Double](xref:microsoft.quantum.lang-ref.double)

Time simulated by each step of simulation algorithm.


### trotterOrder : [Int](xref:microsoft.quantum.lang-ref.int)

Order of Trotter–Suzuki integrator.



## Output : __invalid<Result>__[]

A `Result[]` storing the outcome of Z basis measurements on each siteof the Ising model.