---
uid: Microsoft.Quantum.Intrinsic.AsRCczTClifford.Y
title: Y operation
ms.date: 3/24/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Intrinsic.AsRCczTClifford
qsharp.name: Y
qsharp.summary: >-
  Applies the Pauli $Y$ gate.

  \begin{align}
  \sigma_y \mathrel{:=}
  \begin{bmatrix}
  0 & -i \\\\
  i & 0
  \end{bmatrix}.
  \end{align}
---

# Y operation

Namespace: [Microsoft.Quantum.Intrinsic.AsRCczTClifford](xref:Microsoft.Quantum.Intrinsic.AsRCczTClifford)

Package: [FaultTolerantDecompositionsTests](https://nuget.org/packages/FaultTolerantDecompositionsTests)


Applies the Pauli $Y$ gate.\begin{align}\sigma_y \mathrel{:=}\begin{bmatrix}0 & -i \\\\i & 0\end{bmatrix}.\end{align}

```qsharp
operation Y (qubit : Qubit) : Unit is Adj + Ctl
```


## Input

### qubit : [Qubit](xref:microsoft.quantum.lang-ref.qubit)

Qubit to which the gate should be applied.



## Output : [Unit](xref:microsoft.quantum.lang-ref.unit)

