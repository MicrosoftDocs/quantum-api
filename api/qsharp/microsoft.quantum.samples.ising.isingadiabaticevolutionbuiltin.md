---
uid: Microsoft.Quantum.Samples.Ising.IsingAdiabaticEvolutionBuiltIn
title: IsingAdiabaticEvolutionBuiltIn function
ms.date: 3/24/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: function
qsharp.namespace: Microsoft.Quantum.Samples.Ising
qsharp.name: IsingAdiabaticEvolutionBuiltIn
qsharp.summary: ''
---

# IsingAdiabaticEvolutionBuiltIn function

Namespace: [Microsoft.Quantum.Samples.Ising](xref:Microsoft.Quantum.Samples.Ising)

Package: [AdiabaticIsingSample](https://nuget.org/packages/AdiabaticIsingSample)




```qsharp
function IsingAdiabaticEvolutionBuiltIn (nSites : Int, adiabaticTime : Double, trotterStepSize : Double, trotterOrder : Int, hXCoupling : (Int -> Double), jCoupling : (Int -> Double)) : (Qubit[] => Unit is Adj + Ctl)
```


## Input

### nSites : [Int](xref:microsoft.quantum.lang-ref.int)

Number of qubits that the represented system will act upon.


### adiabaticTime : [Double](xref:microsoft.quantum.lang-ref.double)

Time over which the schedule parameter is varied.from 0 to 1.


### trotterStepSize : [Double](xref:microsoft.quantum.lang-ref.double)

Time simulated by each step of simulation algorithm.


### trotterOrder : [Int](xref:microsoft.quantum.lang-ref.int)

Order of Trotter–Suzuki integrator.


### hXCoupling : [Int](xref:microsoft.quantum.lang-ref.int) -> [Double](xref:microsoft.quantum.lang-ref.double)

Function returning coefficients `hₖ` for each site.


### jCoupling : [Int](xref:microsoft.quantum.lang-ref.int) -> [Double](xref:microsoft.quantum.lang-ref.double)

Function returning coefficients `jₖ` for each two-site interaction.



## Output : [Qubit](xref:microsoft.quantum.lang-ref.qubit)[] => [Unit](xref:microsoft.quantum.lang-ref.unit)  is Adj + Ctl

a Unitary operator implementing time-dependent evolution by theHamiltonian H(s) when s is varied uniformly between 0 and 1 over Time`adiabaticTime`.