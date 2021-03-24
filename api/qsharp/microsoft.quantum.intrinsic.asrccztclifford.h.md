---
uid: Microsoft.Quantum.Intrinsic.AsRCczTClifford.H
title: H operation
ms.date: 3/24/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Intrinsic.AsRCczTClifford
qsharp.name: H
qsharp.summary: >-
  Applies the Hadamard transformation to a single qubit.

  \begin{align}
  H \mathrel{:=}
  \frac{1}{\sqrt{2}}
  \begin{bmatrix}
  1 & 1 \\\\
  1 & -1
  \end{bmatrix}.
  \end{align}
---

# H operation

Namespace: [Microsoft.Quantum.Intrinsic.AsRCczTClifford](xref:Microsoft.Quantum.Intrinsic.AsRCczTClifford)

Package: [FaultTolerantDecompositionsTests](https://nuget.org/packages/FaultTolerantDecompositionsTests)


Applies the Hadamard transformation to a single qubit.\begin{align}H \mathrel{:=}\frac{1}{\sqrt{2}}\begin{bmatrix}1 & 1 \\\\1 & -1\end{bmatrix}.\end{align}

```qsharp
operation H (qubit : Qubit) : Unit is Adj + Ctl
```


## Input

### qubit : [Qubit](xref:microsoft.quantum.lang-ref.qubit)

Qubit to which the gate should be applied.



## Output : [Unit](xref:microsoft.quantum.lang-ref.unit)

