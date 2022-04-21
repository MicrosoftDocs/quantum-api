---
uid: Microsoft.Quantum.Intrinsic.Z
title: Z operation
ms.date: 4/21/2022 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Intrinsic
qsharp.name: Z
qsharp.summary: Applies the Pauli $Z$ gate.
---

# Z operation

Namespace: [Microsoft.Quantum.Intrinsic](xref:Microsoft.Quantum.Intrinsic)

Package: [Microsoft.Quantum.Type2.Core](https://nuget.org/packages/Microsoft.Quantum.Type2.Core)


Applies the Pauli $Z$ gate.

```qsharp
operation Z (qubit : Qubit) : Unit is Adj + Ctl
```


## Description

\begin{align}\sigma_z \mathrel{:=}\begin{bmatrix}1 & 0 \\\\0 & -1\end{bmatrix}.\end{align}

## Input

### qubit : [Qubit](xref:microsoft.quantum.qsharp.valueliterals#qubit-literals)

Qubit to which the gate should be applied.



## Output : [Unit](xref:microsoft.quantum.qsharp.valueliterals#unit-literal)

