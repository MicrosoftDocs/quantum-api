---
uid: Microsoft.Quantum.Arithmetic.ComputeReciprocalFxP
title: ComputeReciprocalFxP operation
ms.date: 7/21/2022 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Arithmetic
qsharp.name: ComputeReciprocalFxP
qsharp.summary: >-
  Computes the reciprocal of a number stored in a quantum register with
  the fixed-point representation.
---

# ComputeReciprocalFxP operation

Namespace: [Microsoft.Quantum.Arithmetic](xref:Microsoft.Quantum.Arithmetic)

Package: [Microsoft.Quantum.Numerics](https://nuget.org/packages/Microsoft.Quantum.Numerics)


Computes the reciprocal of a number stored in a quantum register withthe fixed-point representation.

```qsharp
operation ComputeReciprocalFxP (x : Microsoft.Quantum.Arithmetic.FixedPoint, result : Microsoft.Quantum.Arithmetic.FixedPoint) : Unit is Adj + Ctl
```


## Description

Given a register in the state $\ket{x}$ for a fixed-point number $x$,computes the reciprocal $1 / x$ into the state of the `result`register.

## Input

### x : [FixedPoint](xref:Microsoft.Quantum.Arithmetic.FixedPoint)

Fixed-point number to be inverted.


### result : [FixedPoint](xref:Microsoft.Quantum.Arithmetic.FixedPoint)

Fixed-point number that will hold the result. Must be initialized to $\ket{0.0}$.



## Output : [Unit](xref:microsoft.quantum.qsharp.valueliterals#unit-literal)

