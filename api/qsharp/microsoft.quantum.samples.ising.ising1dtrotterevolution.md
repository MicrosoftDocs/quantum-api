---
uid: Microsoft.Quantum.Samples.Ising.Ising1DTrotterEvolution
title: Ising1DTrotterEvolution function
ms.date: 3/24/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: function
qsharp.namespace: Microsoft.Quantum.Samples.Ising
qsharp.name: Ising1DTrotterEvolution
qsharp.summary: >-
  Returns a unitary operation that simulates time evolution by the
  Hamiltonian for a single Trotter step.
---

# Ising1DTrotterEvolution function

Namespace: [Microsoft.Quantum.Samples.Ising](xref:Microsoft.Quantum.Samples.Ising)

Package: [IsingTrotterSample](https://nuget.org/packages/IsingTrotterSample)


Returns a unitary operation that simulates time evolution by theHamiltonian for a single Trotter step.

```qsharp
function Ising1DTrotterEvolution (nSites : Int, hXCoupling : Double, hZCoupling : Double, jCoupling : Double, trotterOrder : Int, trotterStepSize : Double) : (Qubit[] => Unit is Adj + Ctl)
```


## Input

### nSites : [Int](xref:microsoft.quantum.lang-ref.int)

Number of qubits that the represented system will act upon.


### hXCoupling : [Double](xref:microsoft.quantum.lang-ref.double)

Value of hX.


### hZCoupling : [Double](xref:microsoft.quantum.lang-ref.double)

Value of hZ.


### jCoupling : [Double](xref:microsoft.quantum.lang-ref.double)

Value of J.


### trotterOrder : [Int](xref:microsoft.quantum.lang-ref.int)

Order of Trotter integrator.


### trotterStepSize : [Double](xref:microsoft.quantum.lang-ref.double)

Duration of simulated time-evolution in single Trotter step.



## Output : [Qubit](xref:microsoft.quantum.lang-ref.qubit)[] => [Unit](xref:microsoft.quantum.lang-ref.unit)  is Adj + Ctl

A unitary operation.