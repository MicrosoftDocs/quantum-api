---
uid: Microsoft.Quantum.Intrinsic.AsRCczTClifford.Z
title: Z operation
ms.date: 3/24/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Intrinsic.AsRCczTClifford
qsharp.name: Z
qsharp.summary: >-
  Applies the Pauli $Z$ gate.

  \begin{align}
  \sigma_z \mathrel{:=}
  \begin{bmatrix}
  1 & 0 \\\\
  0 & -1
  \end{bmatrix}.
  \end{align}
---

# Z operation

Namespace: [Microsoft.Quantum.Intrinsic.AsRCczTClifford](xref:Microsoft.Quantum.Intrinsic.AsRCczTClifford)

Package: [FaultTolerantDecompositionsTests](https://nuget.org/packages/FaultTolerantDecompositionsTests)


Applies the Pauli $Z$ gate.\begin{align}\sigma_z \mathrel{:=}\begin{bmatrix}1 & 0 \\\\0 & -1\end{bmatrix}.\end{align}

```qsharp
operation Z (qubit : Qubit) : Unit is Adj + Ctl
```


## Input

### qubit : [Qubit](xref:microsoft.quantum.lang-ref.qubit)

Qubit to which the gate should be applied.



## Output : [Unit](xref:microsoft.quantum.lang-ref.unit)

