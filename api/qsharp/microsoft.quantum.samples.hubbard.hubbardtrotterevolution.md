---
uid: Microsoft.Quantum.Samples.Hubbard.HubbardTrotterEvolution
title: HubbardTrotterEvolution function
ms.date: 3/24/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: function
qsharp.namespace: Microsoft.Quantum.Samples.Hubbard
qsharp.name: HubbardTrotterEvolution
qsharp.summary: >-
  Returns a unitary operation that simulates time evolution by the
  Hamiltonian for a single Trotter step.
---

# HubbardTrotterEvolution function

Namespace: [Microsoft.Quantum.Samples.Hubbard](xref:Microsoft.Quantum.Samples.Hubbard)

Package: [HubbardSimulationSample](https://nuget.org/packages/HubbardSimulationSample)


Returns a unitary operation that simulates time evolution by theHamiltonian for a single Trotter step.

```qsharp
function HubbardTrotterEvolution (nSites : Int, tCoefficient : Double, uCoefficient : Double, trotterOrder : Int, trotterStepSize : Double) : (Qubit[] => Unit is Adj + Ctl)
```


## Input

### nSites : [Int](xref:microsoft.quantum.lang-ref.int)

Number of qubits that the represented system will act upon.


### tCoefficient : [Double](xref:microsoft.quantum.lang-ref.double)

Coefficient of hopping term.


### uCoefficient : [Double](xref:microsoft.quantum.lang-ref.double)

Coefficient of repulsion term.


### trotterOrder : [Int](xref:microsoft.quantum.lang-ref.int)

Order of Trotter integrator.


### trotterStepSize : [Double](xref:microsoft.quantum.lang-ref.double)

Duration of simulated time-evolution in single Trotter step.



## Output : [Qubit](xref:microsoft.quantum.lang-ref.qubit)[] => [Unit](xref:microsoft.quantum.lang-ref.unit)  is Adj + Ctl

A unitary operation.