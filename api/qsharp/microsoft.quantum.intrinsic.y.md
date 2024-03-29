---
uid: Microsoft.Quantum.Intrinsic.Y
title: Y operation
ms.date: 7/28/2023 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Intrinsic
qsharp.name: Y
qsharp.summary: Applies the Pauli $Y$ gate.
---

# Y operation

> [!WARNING]
> This documentation refers to the Classic QDK, which has been replaced by the Modern QDK.
>
> Please see <https://aka.ms/qdk.api> for the API documentation for the Modern QDK.

Namespace: [Microsoft.Quantum.Intrinsic](xref:Microsoft.Quantum.Intrinsic)

Package: [Microsoft.Quantum.Type2.Core](https://nuget.org/packages/Microsoft.Quantum.Type2.Core)


Applies the Pauli $Y$ gate.

```qsharp
operation Y (qubit : Qubit) : Unit is Adj + Ctl
```


## Description

\begin{align}\sigma_y \mathrel{:=}\begin{bmatrix}0 & -i \\\\i & 0\end{bmatrix}.\end{align}

## Input

### qubit : [Qubit](xref:microsoft.quantum.qsharp.valueliterals#qubit-literals)

Qubit to which the gate should be applied.



## Output : [Unit](xref:microsoft.quantum.qsharp.valueliterals#unit-literal)

