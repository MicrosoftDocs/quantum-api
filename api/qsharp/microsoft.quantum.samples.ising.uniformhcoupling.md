---
uid: Microsoft.Quantum.Samples.Ising.UniformHCoupling
title: UniformHCoupling function
ms.date: 3/24/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: function
qsharp.namespace: Microsoft.Quantum.Samples.Ising
qsharp.name: UniformHCoupling
qsharp.summary: >-
  A function that outputs uniform single-site coupling coefficients
  `hₖ`.
---

# UniformHCoupling function

Namespace: [Microsoft.Quantum.Samples.Ising](xref:Microsoft.Quantum.Samples.Ising)

Package: [IsingGeneratorsSample](https://nuget.org/packages/IsingGeneratorsSample)


A function that outputs uniform single-site coupling coefficients`hₖ`.

```qsharp
function UniformHCoupling (amplitude : Double, idxQubit : Int) : Double
```


## Input

### amplitude : [Double](xref:microsoft.quantum.lang-ref.double)

Value of coefficient.


### idxQubit : [Int](xref:microsoft.quantum.lang-ref.int)

Index `k` of the qubit that the represented term will act upon.



## Output : [Double](xref:microsoft.quantum.lang-ref.double)

A function returning coefficients `hₖ` for each site.