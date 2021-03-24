---
uid: Microsoft.Quantum.Samples.ApplyZZ
title: ApplyZZ operation
ms.date: 3/24/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Samples
qsharp.name: ApplyZZ
qsharp.summary: >-
  Given two qubits and a rotation angle, rotates the given
  qubits about ZZ.
---

# ApplyZZ operation

Namespace: [Microsoft.Quantum.Samples](xref:Microsoft.Quantum.Samples)

Package: [IsingModel](https://nuget.org/packages/IsingModel)


Given two qubits and a rotation angle, rotates the givenqubits about ZZ.

```qsharp
operation ApplyZZ (phi : Double, q1 : Qubit, q2 : Qubit) : Unit is Adj + Ctl
```


## Input

### phi : [Double](xref:microsoft.quantum.lang-ref.double)

Angle by which to rotate the given qubits.


### q1 : [Qubit](xref:microsoft.quantum.lang-ref.qubit)

The first qubit to be rotated.


### q2 : [Qubit](xref:microsoft.quantum.lang-ref.qubit)

The second qubit to be rotated.



## Output : [Unit](xref:microsoft.quantum.lang-ref.unit)

