---
uid: Microsoft.Quantum.Samples.Ising.Uniform1DJCoupling
title: Uniform1DJCoupling function
ms.date: 3/24/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: function
qsharp.namespace: Microsoft.Quantum.Samples.Ising
qsharp.name: Uniform1DJCoupling
qsharp.summary: >-
  A function that outputs uniform two-site coupling coefficients
  `Jₖ` with open boundary conditions.
---

# Uniform1DJCoupling function

Namespace: [Microsoft.Quantum.Samples.Ising](xref:Microsoft.Quantum.Samples.Ising)

Package: [IsingGeneratorsSample](https://nuget.org/packages/IsingGeneratorsSample)


A function that outputs uniform two-site coupling coefficients`Jₖ` with open boundary conditions.

```qsharp
function Uniform1DJCoupling (nSites : Int, amplitude : Double, idxQubit : Int) : Double
```


## Input

### nSites : [Int](xref:microsoft.quantum.lang-ref.int)

Number of qubits that the represented system will act upon.


### amplitude : [Double](xref:microsoft.quantum.lang-ref.double)

Value of coefficient


### idxQubit : [Int](xref:microsoft.quantum.lang-ref.int)

Index `k` of the qubit that the represented term will act upon.



## Output : [Double](xref:microsoft.quantum.lang-ref.double)

A function returning coefficients `Jₖ` for each site.