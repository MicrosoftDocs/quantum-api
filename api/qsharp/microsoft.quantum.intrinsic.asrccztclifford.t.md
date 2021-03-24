---
uid: Microsoft.Quantum.Intrinsic.AsRCczTClifford.T
title: T operation
ms.date: 3/24/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Intrinsic.AsRCczTClifford
qsharp.name: T
qsharp.summary: >-
  Applies the π/8 gate to a single qubit.

  \begin{align}
  T \mathrel{:=}
  \begin{bmatrix}
  1 & 0 \\\\
  0 & e^{i \pi / 4}
  \end{bmatrix}.
  \end{align}
---

# T operation

Namespace: [Microsoft.Quantum.Intrinsic.AsRCczTClifford](xref:Microsoft.Quantum.Intrinsic.AsRCczTClifford)

Package: [FaultTolerantDecompositionsTests](https://nuget.org/packages/FaultTolerantDecompositionsTests)


Applies the π/8 gate to a single qubit.\begin{align}T \mathrel{:=}\begin{bmatrix}1 & 0 \\\\0 & e^{i \pi / 4}\end{bmatrix}.\end{align}

```qsharp
operation T (qubit : Qubit) : Unit is Adj + Ctl
```


## Input

### qubit : [Qubit](xref:microsoft.quantum.lang-ref.qubit)

Qubit to which the gate should be applied.



## Output : [Unit](xref:microsoft.quantum.lang-ref.unit)

