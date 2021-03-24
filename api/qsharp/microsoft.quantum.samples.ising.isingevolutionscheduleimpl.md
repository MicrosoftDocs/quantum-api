---
uid: Microsoft.Quantum.Samples.Ising.IsingEvolutionScheduleImpl
title: IsingEvolutionScheduleImpl function
ms.date: 3/24/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: function
qsharp.namespace: Microsoft.Quantum.Samples.Ising
qsharp.name: IsingEvolutionScheduleImpl
qsharp.summary: >-
  This uses the Ising model `GeneratorSystem` constructed previously to
  represent the desired interpolated Hamiltonian H(s). This is
  accomplished by choosing an appropriate function for its coefficients.
---

# IsingEvolutionScheduleImpl function

Namespace: [Microsoft.Quantum.Samples.Ising](xref:Microsoft.Quantum.Samples.Ising)

Package: [AdiabaticIsingSample](https://nuget.org/packages/AdiabaticIsingSample)


This uses the Ising model `GeneratorSystem` constructed previously torepresent the desired interpolated Hamiltonian H(s). This isaccomplished by choosing an appropriate function for its coefficients.

```qsharp
function IsingEvolutionScheduleImpl (nSites : Int, hXInitial : Double, hXFinal : Double, jFinal : Double, schedule : Double) : Microsoft.Quantum.Simulation.GeneratorSystem
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


### schedule : [Double](xref:microsoft.quantum.lang-ref.double)

Schedule parameter of interpolated Hamiltonian.



## Output : [GeneratorSystem](xref:Microsoft.Quantum.Simulation.GeneratorSystem)

A `GeneratorSystem` representing the interpolated Hamiltonian H(s) ofthe Ising model.