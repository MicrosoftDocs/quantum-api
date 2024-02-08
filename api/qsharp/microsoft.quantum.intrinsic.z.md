---
uid: Microsoft.Quantum.Intrinsic.Z
title: Z operation
ms.date: 7/28/2023 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Intrinsic
qsharp.name: Z
qsharp.summary: Applies the Pauli $Z$ gate.
---

# Z operation

> [!WARNING]
> This documentation refers to the Classic QDK, which has been replaced by the Modern QDK.
>
> Please see <https://aka.ms/qdk.api> for the API documentation for the Modern QDK.

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

