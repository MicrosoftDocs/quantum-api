---
uid: Microsoft.Quantum.Samples.QAOA.ApplyDriverHamiltonian
title: ApplyDriverHamiltonian operation
ms.date: 3/24/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Samples.QAOA
qsharp.name: ApplyDriverHamiltonian
qsharp.summary: >-
  This operation applies the X-rotation to each qubit. We can think of it as time
  evolution induced by applying a Hamiltonian that sums over all X rotations.
---

# ApplyDriverHamiltonian operation

Namespace: [Microsoft.Quantum.Samples.QAOA](xref:Microsoft.Quantum.Samples.QAOA)

Package: [QAOA](https://nuget.org/packages/QAOA)


This operation applies the X-rotation to each qubit. We can think of it as timeevolution induced by applying a Hamiltonian that sums over all X rotations.

```qsharp
operation ApplyDriverHamiltonian (time : Double, target : Qubit[]) : Unit is Adj + Ctl
```


## Description

The driver Hamiltonian is defined as:H = - \sum_i X_i for time t.

## Input

### time : [Double](xref:microsoft.quantum.lang-ref.double)

Time passed in evolution of X rotation


### target : [Qubit](xref:microsoft.quantum.lang-ref.qubit)[]

Target qubit register



## Output : [Unit](xref:microsoft.quantum.lang-ref.unit)

