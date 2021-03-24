---
uid: Microsoft.Quantum.Samples.Ising.Ising1DTrotterUnitaries
title: Ising1DTrotterUnitaries function
ms.date: 3/24/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: function
qsharp.namespace: Microsoft.Quantum.Samples.Ising
qsharp.name: Ising1DTrotterUnitaries
qsharp.summary: >-
  Returns a description of the Ising Hamiltonian that is compatible with
  the Trotterization control structure.
---

# Ising1DTrotterUnitaries function

Namespace: [Microsoft.Quantum.Samples.Ising](xref:Microsoft.Quantum.Samples.Ising)

Package: [IsingTrotterSample](https://nuget.org/packages/IsingTrotterSample)


Returns a description of the Ising Hamiltonian that is compatible withthe Trotterization control structure.

```qsharp
function Ising1DTrotterUnitaries (nSites : Int, hXCoupling : Double, hZCoupling : Double, jCoupling : Double) : (Int, ((Int, Double, Qubit[]) => Unit is Adj + Ctl))
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



## Output : ([Int](xref:microsoft.quantum.lang-ref.int),([Int](xref:microsoft.quantum.lang-ref.int),[Double](xref:microsoft.quantum.lang-ref.double),[Qubit](xref:microsoft.quantum.lang-ref.qubit)[]) => [Unit](xref:microsoft.quantum.lang-ref.unit)  is Adj + Ctl)

A tuple containing the number of terms in the Hamiltonian and aunitary operation classically controlled by the term index andstep size.