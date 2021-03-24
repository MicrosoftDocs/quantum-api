---
uid: Microsoft.Quantum.Intrinsic.AsRCczTClifford.S
title: S operation
ms.date: 3/24/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Intrinsic.AsRCczTClifford
qsharp.name: S
qsharp.summary: >-
  Applies the π/4 phase gate to a single qubit.

  \begin{align}
  S \mathrel{:=}
  \begin{bmatrix}
  1 & 0 \\\\
  0 & i
  \end{bmatrix}.
  \end{align}
---

# S operation

Namespace: [Microsoft.Quantum.Intrinsic.AsRCczTClifford](xref:Microsoft.Quantum.Intrinsic.AsRCczTClifford)

Package: [FaultTolerantDecompositionsTests](https://nuget.org/packages/FaultTolerantDecompositionsTests)


Applies the π/4 phase gate to a single qubit.\begin{align}S \mathrel{:=}\begin{bmatrix}1 & 0 \\\\0 & i\end{bmatrix}.\end{align}

```qsharp
operation S (qubit : Qubit) : Unit is Adj + Ctl
```


## Input

### qubit : [Qubit](xref:microsoft.quantum.lang-ref.qubit)

Qubit to which the gate should be applied.



## Output : [Unit](xref:microsoft.quantum.lang-ref.unit)

