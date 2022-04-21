---
uid: Microsoft.Quantum.Arithmetic.AssertAllZeroFxP
title: AssertAllZeroFxP operation
ms.date: 4/21/2022 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Arithmetic
qsharp.name: AssertAllZeroFxP
qsharp.summary: >-
  Asserts that a quantum fixed-point number is
  initialized to zero.
---

# AssertAllZeroFxP operation

Namespace: [Microsoft.Quantum.Arithmetic](xref:Microsoft.Quantum.Arithmetic)

Package: [Microsoft.Quantum.Numerics](https://nuget.org/packages/Microsoft.Quantum.Numerics)


Asserts that a quantum fixed-point number isinitialized to zero.

```qsharp
operation AssertAllZeroFxP (fp : Microsoft.Quantum.Arithmetic.FixedPoint) : Unit is Adj + Ctl
```


## Description

This assertion succeeds when all qubits are in state $\ket{0}$,representing that the register encodes the fixed-point number $0.0$.

## Input

### fp : [FixedPoint](xref:Microsoft.Quantum.Arithmetic.FixedPoint)





## Output : [Unit](xref:microsoft.quantum.qsharp.valueliterals#unit-literal)

