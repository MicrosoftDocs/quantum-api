---
uid: Microsoft.Quantum.Samples.Hubbard.EstimateHubbardAntiFerromagneticEnergy
title: EstimateHubbardAntiFerromagneticEnergy operation
ms.date: 3/24/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Samples.Hubbard
qsharp.name: EstimateHubbardAntiFerromagneticEnergy
qsharp.summary: >-
  Implements time-evolution by the Hubbard Hamiltonian on a line of qubits
  initialized in an antiferromagnetic state, then performs phase estimation
  to estimate the energy of the antiferromagnetic configuration at half
  filling.
---

# EstimateHubbardAntiFerromagneticEnergy operation

Namespace: [Microsoft.Quantum.Samples.Hubbard](xref:Microsoft.Quantum.Samples.Hubbard)

Package: [HubbardSimulationSample](https://nuget.org/packages/HubbardSimulationSample)


Implements time-evolution by the Hubbard Hamiltonian on a line of qubitsinitialized in an antiferromagnetic state, then performs phase estimationto estimate the energy of the antiferromagnetic configuration at halffilling.

```qsharp
operation EstimateHubbardAntiFerromagneticEnergy (nSites : Int, tCoefficient : Double, uCoefficient : Double, nBitsPrecision : Int, trotterStepSize : Double) : Double
```


## Input

### nSites : [Int](xref:microsoft.quantum.lang-ref.int)

Number of qubits that the represented system will act upon.


### tCoefficient : [Double](xref:microsoft.quantum.lang-ref.double)

Coefficient of hopping term.


### uCoefficient : [Double](xref:microsoft.quantum.lang-ref.double)

Coefficient of repulsion term.


### nBitsPrecision : [Int](xref:microsoft.quantum.lang-ref.int)

The number of bits of precision to use in phase estimation.


### trotterStepSize : [Double](xref:microsoft.quantum.lang-ref.double)

Duration of simulated time-evolution in single Trotter step.



## Output : [Double](xref:microsoft.quantum.lang-ref.double)

An estimate of the energy of the antiferromagnetic state at half filling.